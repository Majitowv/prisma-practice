"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getAllData = async (req, res) => {
    try {
        const data = await prisma_1.default.user.findMany({
            orderBy: {
                creadeAt: 'asc'
            }
        });
        res.status(200).json({
            success: true,
            data
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllData: ${error}`
        });
    }
};
const AddData = async (req, res) => {
    try {
        const { name, age } = req.body;
        const newItem = {
            name,
            age
        };
        const data = await prisma_1.default.user.create({
            data: newItem
        });
        res.status(200).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in addData: ${error}`,
        });
    }
};
const deleteData = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma_1.default.user.delete({
            where: { id }
        });
        res.status(200).json({
            success: true,
            message: `Succesfuly delete`,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
        });
    }
};
const getOneData = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await prisma_1.default.user.findUnique({
            where: { id }
        });
        if (!data) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
    }
    catch (error) { }
};
const patchData = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, age } = req.body;
        const user = await prisma_1.default.user.update({
            where: { id },
            data: { name, age }
        });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User data succesfully updated",
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in patchData: ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    AddData,
    deleteData,
    getOneData,
    patchData,
};
//# sourceMappingURL=todo.controlers.js.map