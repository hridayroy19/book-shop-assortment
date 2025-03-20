import { TProjcet } from './projcet.interfac';
import { Projcet } from './projcet.model';

const createProjcetIntoDB = async (projcet: TProjcet) => {
  const result = await Projcet.create(projcet);
  // console.log(result,"service");
  return result;
};

const getProjcetIntoDB = async () => {
  const result = await Projcet.find();
  return result;
};

//deleted data in database
const deleteProjcetDB = async (id: string) => {
  const rsult = await Projcet.findByIdAndDelete(id);
  return rsult;
};

//update data in database
const updateProjcetBD = async (id: string, data: TProjcet) => {
  const result = await Projcet.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const ProjcetService = {
  createProjcetIntoDB,
  getProjcetIntoDB,
  deleteProjcetDB,
  updateProjcetBD
};
