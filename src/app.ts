import express from "express";
import "dotenv/config";
import globalRouter from "./routes";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).json({
      message: "hello",
    });
  });
  
  server.use("/api/v1", globalRouter);

  return server;
};

export default buildServer;
