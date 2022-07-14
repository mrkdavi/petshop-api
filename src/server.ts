import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import { Address } from './models/address';

(async (): Promise<void> => {
  try {
    await createConnection();
    console.log('Connected at database...');

    // const addressRepository = getRepository(Address);
    // const address = await addressRepository.find();
    // console.log(address);
  } catch (e) {
    console.error(e.message);
  }
})();