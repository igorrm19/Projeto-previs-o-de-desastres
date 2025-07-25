import dotenv from 'dotenv';
dotenv.config();

export const Services = {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',  //servidor de autenticação
    user: process.env.USER_SERVICE_URL || 'http://localhost:3002',  //servidor de usuário
}



