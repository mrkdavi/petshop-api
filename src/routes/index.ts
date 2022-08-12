import * as express from 'express'
import createPetRouter from './petRouter';
import createAddressRouter from './addressRouter';

const createRouters = (app: express.Express) => {
  app.use('/pets', createPetRouter());
  app.use('/addresses', createAddressRouter());
}

export default createRouters;