import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes";
import cors from "cors";
const globalRouter = Router();

const corsConfig = {
  origin: ["http://localhost:3000"],
};

globalRouter.use("/todo", cors(corsConfig), todoRoutes);

export default globalRouter;
