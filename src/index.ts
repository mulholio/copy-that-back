import createServer from './createServer';

require('dotenv').config({ path: '.env' });

const server = createServer();

const options = {
  port: process.env.PORT,
};

server.start(
  options,
  () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}`
    );
  }
);
