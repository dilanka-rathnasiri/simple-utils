import { Response } from "express";

export const sendEvent = async (res: Response, eventName: string, eventData: object): Promise<void> => {
    res.write(`event: ${eventName}\n`);
    res.write(`data: ${JSON.stringify(eventData)}\n\n`);
}
