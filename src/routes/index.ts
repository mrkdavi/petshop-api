import * as express from 'express'
import createPetRouter from './petRouter';
import createAddressRouter from './addressRouter';
import createUserRouter from './userRouter';
import createAuthRouter from './authRouter';

const createRouters = (app: express.Express) => {
  app.use('/auth', createAuthRouter());
  app.use('/pets', createPetRouter());
  app.use('/users', createUserRouter());
  app.use('/addresses', createAddressRouter());
}

export default createRouters;