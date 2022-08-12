import * as express from 'express'
import createPetRouter from './petRouter';

const createRouters = (app: express.Express) => {
  app.use('/pets', createPetRouter());
}

export default createRouters;