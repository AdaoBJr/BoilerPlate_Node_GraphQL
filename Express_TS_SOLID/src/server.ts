import express from "express";
import "dotenv/config";
import { router } from "./routers";

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🔥 Server Running on http://localhost:${PORT}`);
});
