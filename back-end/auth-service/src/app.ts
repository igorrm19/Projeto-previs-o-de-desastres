//node --loader ts-node/esm src/app.ts

import express from 'express';
import router from './routes/auth.routes.js';


const app = express();
const PORT: number = 3001;


app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`server rodando na port ${PORT}`);
});