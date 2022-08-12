import * as express from 'express'
import createPetRouter from './petRouter';
import createAddressRouter from './addressRouter';
import createUserRouter from './userRouter';

const createRouters = (app: express.Express) => {
  app.use('/pets', createPetRouter());
  app.use('/users', createUserRouter());
  app.use('/addresses', createAddressRouter());
}

export default createRouters;