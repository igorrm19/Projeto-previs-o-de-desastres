import { error } from "console";
import {Request, Response} from "express";
import pool from "../models/db.models"

async function validarLogin(req: Request, res: Response){
    const {email, senha} = req.body;

    
       try{
         if(!email || !senha){
            res.status(400).json({
                mensagem: "Email e senha obrigatorio"
            });
         }

         const result = await pool.query('select * from users WHERE email = $1 AND senha = $2', [email, senha]);
         const usuarios = result.rows[0];

         if(!usuarios){
            return res.status(401).json({
                mensagem: "email ou senha incorretos",
            });
         }

         res.status(200).json({
            mensagem: "Usuario encontrado",
            user: {id: usuarios.id, email: usuarios.email}
         })
       

       }catch(error){
        console.error("Erro ao validar usuario", error)
        res.status(500).json({
            mensagem: "Erro interno do servidor"
        })
       }
    
}

export default validarLogin;