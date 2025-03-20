import { Request, Response } from 'express';
import { ProjcetService } from './projcet.server';

const createProjcet = async (req: Request, res: Response) => {
  try {
     console.log(req.body);
    const rsult = await ProjcetService.createProjcetIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'Projcet crated succesfully',
      data: rsult,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};


const allprojcet = async (req: Request, res: Response) => {
  try {
    const result = await ProjcetService.getProjcetIntoDB();
    res.status(200).json({
      success: true,
      message: 'Projcet succesfully deleted',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

const deletprojcet = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProjcetService.deleteProjcetDB(productId);
    res.status(200).json({
      success: true,
      message: 'Projcet succesfully deleted',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

//Projcet update by id
const updateProjcet = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await ProjcetService.updateProjcetBD(productId, data);
    res.status(200).json({
      status: true,
      message: 'Projcet updated successfully ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

export const ProjcetController = {
  createProjcet,
  allprojcet,
  deletprojcet,
  updateProjcet,
};
