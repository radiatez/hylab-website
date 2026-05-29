/*
  # Create visitor counter table

  1. New Tables
    - `visitor_counter`
      - `id` (integer, primary key, single row)
      - `count` (bigint, total visitor count)
      - `updated_at` (timestamptz, last update time)

  2. Security
    - Enable RLS on `visitor_counter` table
    - Add policy for anonymous users to read the counter
    - Add policy for anonymous users to update the counter (increment)

  3. Notes
    - Uses a single-row pattern with id=1
    - Seeded with initial count of 0
    - Includes an increment function for atomic updates
*/

CREATE TABLE IF NOT EXISTS visitor_counter (
  id integer PRIMARY KEY DEFAULT 1,
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE visitor_counter ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the counter
CREATE POLICY "Anyone can read visitor count"
  ON visitor_counter
  FOR SELECT
  TO anon
  USING (id = 1);

-- Allow anon to update the counter
CREATE POLICY "Anon can increment visitor count"
  ON visitor_counter
  FOR UPDATE
  TO anon
  USING (id = 1)
  WITH CHECK (id = 1);

-- Seed with initial row
INSERT INTO visitor_counter (id, count) VALUES (1, 0)
  ON CONFLICT (id) DO NOTHING;

-- Atomic increment function
CREATE OR REPLACE FUNCTION increment_visitor_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count bigint;
BEGIN
  UPDATE visitor_counter
  SET count = count + 1, updated_at = now()
  WHERE id = 1
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;
