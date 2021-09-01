import express, { Request, Response } from 'express';
import * as curriculumModel from '../models/curriculum';
import { BasicCurriculum } from '../types/curriculum';

const curriculumRouter = express.Router();

curriculumRouter.post('/create', async (req: Request, res: Response) => {
  const newCurriculum: BasicCurriculum = req.body;
  curriculumModel.create(newCurriculum, (err: Error, curriculumId: number) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    return res.status(200).json({ message: 'Curriculo criado com sucesso!' });
  });
});

export { curriculumRouter };
