import 'reflect-metadata';
import { createConnection } from 'typeorm';

(async (): Promise<void> => {
  try {
    await createConnection();
    console.log('Connected at database...');
  } catch (e) {
    console.error(e.message);
  }
})();