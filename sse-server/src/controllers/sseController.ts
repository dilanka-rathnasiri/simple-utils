import { Response } from "express";
import { sendEvent } from "../services/msgServices";

export const sseController = async (res: Response): Promise<void> => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  await sendEvent(res, "porsche", { message: "panamera" });
}
