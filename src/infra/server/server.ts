import * as express from 'express';

const createServer = (app: express.Express) => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}...`);
  });
}

export default createServer;