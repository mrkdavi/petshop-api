import 'reflect-metadata';
import 'dotenv/config'
import express from "express";
import { createConnection } from 'typeorm';

(async (): Promise<void> => {
  try {
    const app = express();
    app.use(express.json());

    await createConnection();
    console.log('Connected at database...');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}...`);
    });
  } catch (e) {
    console.error(e.message);
  }
})();