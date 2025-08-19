import { Request, Response } from "express";
import pool from "../models/db.models";


const criarUsuario = async(req: Request, res: Response) => {
    const user = req.body;

    try{
        await pool.query('insert into users (nome, email, senha) values ($1, $2, $3)', [user.nome, user.email, user.senha]);

        res.status(201).json({
        mensagem: 'Usuário criado com sucesso',
        user: req.body,
        tempo: new Date()
    });
    } catch (error) {
        console.error('Erro ao criar usuário', error);
        res.status(500).json({
            mensagem: 'Erro ao criar usuário'
        });
    }
}

export default criarUsuario;
