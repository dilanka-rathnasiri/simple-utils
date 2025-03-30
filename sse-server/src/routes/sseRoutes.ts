import express, { Router, Request, Response } from "express";
import { sseController } from "../controllers/sseController";

export const sseRouter: Router = express.Router();

sseRouter.get("/sse", async (_: Request, res: Response) => sseController(res));
