import { Response, Request, Router } from 'express';
import { curriculumRouter } from './curriculumRouter';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Server OK!',
  });
});

routes.use('/curriculum', curriculumRouter);

export default routes;
