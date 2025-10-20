import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleGenerateContent,
  handleBatchGenerate,
  handleSeasonalRefresh,
  handleHealthCheck,
} from "./routes/content-ai";
import luxuryInquiryRouter from "./routes/luxury-inquiry";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // AI Content Generation routes
  app.get("/api/content/health", handleHealthCheck);
  app.post("/api/content/generate", handleGenerateContent);
  app.post("/api/content/batch-generate", handleBatchGenerate);
  app.post("/api/content/refresh-seasonal", handleSeasonalRefresh);

  // Luxury Inquiry routes
  app.use(luxuryInquiryRouter);

  return app;
}
