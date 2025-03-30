import { Request, Response } from "express";
import { sendEvent } from "../services/msgServices";

export const sseController = async (req: Request, res: Response): Promise<void> => {
    // set headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("cache-control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // set interval
    let count: number = 0;
    const intervalId = setInterval(async () => {
        await sendEvent(res, "porsche", { message: "panamera" });
        count++;

        // clear interval after 10s
        if (count >= 10) {
            clearInterval(intervalId);
            res.end();
        }
    }, 1000);

    req.on("close", () => {
        clearInterval(intervalId);
        console.log("client is disconnected");
    })

}
