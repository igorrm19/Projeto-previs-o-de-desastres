import { Request,  response,  Response } from "express";
import { userSchelmaArray, validarUser } from "../models/schelmaZod.js";
import axios from 'axios'


async function authCadrasto(req: Request, res: Response){
  let ConsoleTextDados = 'dados feio em formato de objetos';
  let dados = req.body; 
  
  if(!Array.isArray(dados)){
    console.log(ConsoleTextDados, dados);
    dados = [dados];
  }

  const user = userSchelmaArray.safeParse(dados)

  if(user.success){

    try{

      await axios.post('http://localhost:3000/user/', user.data);
      console.log('Dados enviados com sucesso', response);

    }catch(err){

      console.log('Algo deu errado ao eviar os dados');

    }


    console.log("Usuario validado com sucesso", user);
       validarUser.length = 0;
       validarUser.push(...user.data);

       req.body.user = user.data

       res.status(200).json({
        mensagem: "Usuario validado com sucesso",
        user: user.data,
        body: req.body
       });

  } else {
    console.error("Erro ao validar usuario", user.error);

    res.status(404).json({
     mensagem: "Erro ao validar usuario",
     user: user.error
    })

  }

}



export default authCadrasto;