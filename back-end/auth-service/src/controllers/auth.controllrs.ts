import { Request, Response } from "express";
import { userSchelmaArray, validarUser } from "../models/schelmaZod.js";


function authCadrasto(req: Request, res: Response){
  let ConsoleTextDados = 'dados feio em formato de objetos';
  let dados = req.body; 
  
  if(!Array.isArray(dados)){
    console.log(ConsoleTextDados, dados);
    dados = [dados];
  }

  const user = userSchelmaArray.safeParse(dados)

  if(user.success){
    console.log("Usuario validado com sucesso", user);
       validarUser.length = 0;
       validarUser.push(...user.data);

       res.json({
        mensagem: "Usuario validado com sucesso",
        user: user.data,
        body: req.body
       }).status(200);

  } else {
    console.error("Erro ao validar usuario", user.error);

    res.json({
     mensagem: "Erro ao validar usuario",
     user: user.error
    }).status(404);

  }

}


export default authCadrasto;