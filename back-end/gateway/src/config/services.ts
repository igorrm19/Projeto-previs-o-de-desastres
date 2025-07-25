import dotenv from 'dotenv';
dotenv.config();

export const Services = {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',  //rota de autenticação
    user: process.env.USER_SERVICE_URL || 'http://localhost:3002',  //rota de usuário
}




