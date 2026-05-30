import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const dbPath = process.env.DB_PATH || path.join(__dirname, '../data/visitors.db');
const dbDir = path.dirname(dbPath);

import { mkdirSync } from 'fs';
mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS visitor_counter (
    id INTEGER PRIMARY KEY DEFAULT 1,
    count INTEGER NOT NULL DEFAULT 0
  );
  INSERT OR IGNORE INTO visitor_counter (id, count) VALUES (1, 0);
`);

const increment = db.prepare('UPDATE visitor_counter SET count = count + 1 WHERE id = 1 RETURNING count');
const getCount = db.prepare('SELECT count FROM visitor_counter WHERE id = 1');

app.use(express.json());

app.get('/api/visitors', (_req, res) => {
  const row = getCount.get() as { count: number } | undefined;
  res.json({ count: row?.count ?? 0 });
});

app.post('/api/visitors/increment', (_req, res) => {
  const row = increment.get() as { count: number } | undefined;
  res.json({ count: row?.count ?? 0 });
});

const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
