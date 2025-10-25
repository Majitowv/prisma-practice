import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllData = async (req: Request, res: Response) =>{
    try {
        const data = await prisma.user.findMany({
          orderBy: {
            creadeAt: 'asc'
          }
        })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
           error: `Error in getAllData: ${error}`
        })
    }
}
const AddData = async (req: Request, res: Response) => { 
  try {
   const {name,age} = req.body
   const newItem = {
    name,
    age
   }
   const data = await prisma.user.create({
    data: newItem
   })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addData: ${error}`,
    });
  }
};
const deleteData = async (req: Request, res: Response) => {
  try {
   const id = Number(req.params.id)
   await prisma.user.delete({
    where: {id}
   })
    res.status(200).json({
      success: true,
      message: `Succesfuly delete`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};
const getOneData = async (req: Request, res: Response) => {
  try {
   const id = Number(req.params.id)
   const data = await prisma.user.findUnique({
    where: {id}
   })
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {}
};
const patchData = async (req: Request, res: Response) => {
  try {
   const  id = Number(req.params.id)
   const {name,age} = req.body
   const user = await prisma.user.update({
    where: {id},
    data: {name,age}
   })
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in patchData: ${error}`,
    });
  }
};

export default {
  getAllData,
  AddData,
  deleteData,
  getOneData,
  patchData,
};
