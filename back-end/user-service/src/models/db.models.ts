import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'igorrm22',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'banco',
    password: process.env.DB_PASSWORD || '22092002',
    port: Number(process.env.DB_PORT) || 5432,

});

pool.connect().then(() => {
    console.log('Conectado ao banco de dados');
}).catch((err) => {
    console.error('Erro ao conectar ao banco de dados', err);
});


export default pool;
