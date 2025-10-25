"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controlers_1 = __importDefault(require("./todo.controlers"));
const router = (0, express_1.Router)();
router.get("/get-all", todo_controlers_1.default.getAllData);
router.post("/add", todo_controlers_1.default.AddData);
router.delete("/delete/:id", todo_controlers_1.default.deleteData);
router.get("/get-one/:id", todo_controlers_1.default.getOneData);
router.patch("/patch/:id", todo_controlers_1.default.patchData);
exports.default = router;
//# sourceMappingURL=todo.routes.js.map