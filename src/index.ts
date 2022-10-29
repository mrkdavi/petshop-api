import 'reflect-metadata';
import 'dotenv/config'
import { createDatabase } from './configs/database/createDatabase';
import createApp from './configs/app';
import createDependencyInjector from './configs/dependencies/createInjector';
import createServer from './infra/server/server';
import { errorHandler } from './middleware/errorHandler';

(async (): Promise<void> => {
  try {
    await createDatabase();
    createDependencyInjector();
    const app = createApp();
    
    createServer(app);
    errorHandler(app);
  } catch (e) {
    console.error(e.message);
  }
})();