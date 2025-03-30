import express, { Express } from 'express';
import { sseRouter } from "./routes/sseRoutes"

const port: number = 5000;
const app: Express = express();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.use("/sse", sseRouter);
