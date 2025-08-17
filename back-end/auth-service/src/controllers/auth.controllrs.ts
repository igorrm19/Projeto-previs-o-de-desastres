import { Request, Response } from "express";
import validarLogin from "../services/auth.services.js";

function login(req: Request, res: Response): void {
  const { email, senha } = req.body;

  const userFound: boolean = validarLogin(email, senha);

  if (userFound) {
    res.status(200).json({ message: "Login bem-sucedido" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
}

export default login;