import users from "../models/user.models";

function validarLogin(email: string, senha: string): boolean {
  return users.some(user => user.email === email && user.senha === senha);
}

export default validarLogin;