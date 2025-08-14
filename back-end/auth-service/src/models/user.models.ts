
import { z } from 'zod';
import { Request, Response } from 'express';
import router from '../routes/auth.routes';

router.get('/login/auth', (req: Request, res: Response) => {

  const { nome, email, senha } = req.body;
  let dados = req.body
  
  const userSchelma = z.object({
    
 });

 const userSchelmaArray = z.array(userSchelma);


  const users = userSchelmaArray.safeParse(dados);


  if (users.success) {
    console.log("Usuario validado com sucesso", users);
  } else {
    console.error("Erro ao validar usuario", users.error);
  }

  

  res.json({
    mensagem: "Requisição recebida",
    body: req.body,
    data: new Date().getDate()
  }).status(200);
});




