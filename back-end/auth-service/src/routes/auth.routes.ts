import { Router } from "express";
import login from "../controllers/auth.controllrs.js";
import { z } from 'zod';
import { Request, Response } from 'express';


const router = Router();


const userSchelma = z.object({
  nome: z.string(),
  email: z.string(),
  senha: z.string()
});

const userSchelmaArray = z.array(userSchelma);

export const validarUser: z.infer<typeof userSchelma>[] = [];



router.post('/login', login);

router.post('/login/auth', (req: Request, res: Response) => {
  let dados = req.body;

  if (!Array.isArray(dados)) {
    dados = [dados]
    console.log("Dados veio em formato de obejetos", dados)
  }

  let users = userSchelmaArray.safeParse(dados);


  if (users.success) {
       console.log("Usuario validado com sucesso", users);
       validarUser.length = 0;
       validarUser.push(...users.data);

       res.json({
        mensagem: "Usuario validado com sucesso",
        user: users.data,
        body: req.body
       }).status(200);

  } else {
    console.error("Erro ao validar usuario", users.error);

    res.json({
     mensagem: "Erro ao validar usuario",
     user: users.error
    }).status(404);

  }

});




export default router;
