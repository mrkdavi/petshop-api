import { Connection, createConnection } from "typeorm";

export const createDatabase = async (): Promise<Connection> => {
  const connection = await createConnection();
  console.log('Connected at database...');
  return connection;
}