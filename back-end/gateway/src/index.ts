import express from 'express';
import proxyRoutes from './routes/proxy.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', proxyRoutes);

app.listen(PORT, () => {
  console.log(`Gateway rodando na porta ${PORT}`);
});
