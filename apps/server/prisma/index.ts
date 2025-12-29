import { PrismaClient } from "./generated";
import path from "path";

const url = process.env.DATABASE_URL;

// Fix for SQLite path mismatch between CLI (relative to schema) and Runtime (relative to CWD)
let connectionUrl = url;

if (url?.startsWith("file:") && !url.includes("prisma/schema")) {
  const dbPath = path.resolve(process.cwd(), "prisma/schema/dev.db");
  connectionUrl = `file:${dbPath}`;
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionUrl,
    },
  },
});

export default prisma;
