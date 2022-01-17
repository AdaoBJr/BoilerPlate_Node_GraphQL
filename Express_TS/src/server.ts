import express from "express";
import UserController from "@controllers/userController";
import "dotenv/config";

console.log("@Rotes_Working", UserController);

const { SERVER_PORT } = process.env;

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello Word" });
});

app.listen(SERVER_PORT, () => {
  console.log(`🔥 Server Running on http://localhost:${SERVER_PORT}`);
});
