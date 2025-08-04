import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import Router from './routes/user.route'

const app = express();
app.use(express.json());
app.use('/', Router);


app.listen(process.env.PORT || 3002, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3002}`);
});
