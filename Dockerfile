FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY server ./server
RUN mkdir -p /app/data
VOLUME ["/app/data"]
ENV PORT=3000
ENV DB_PATH=/app/data/visitors.db
EXPOSE 3000
CMD ["node", "--import", "tsx", "server/index.ts"]
