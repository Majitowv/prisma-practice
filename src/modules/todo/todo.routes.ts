import { Router } from "express";
import todoControlers from "./todo.controlers";

const router = Router();

router.get("/get-all", todoControlers.getAllData)
router.post("/add", todoControlers.AddData)
router.delete("/delete/:id", todoControlers.deleteData)
router.get("/get-one/:id", todoControlers.getOneData)
router.patch("/patch/:id",todoControlers.patchData)
export default router;
