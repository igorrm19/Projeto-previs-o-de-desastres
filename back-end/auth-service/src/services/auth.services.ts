import { validarUser } from "../routes/auth.routes.js";


function validarLogin(email: string, senha: string): boolean {
  return validarUser.some(user => user.email === email && user.senha === senha);

}



export default validarLogin;