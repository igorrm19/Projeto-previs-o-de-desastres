import  users  from "../models/user.models";

const user = users.data;


function validarLogin(email: string, senha: string): boolean {
  return user.some(user => user.email === email && user.senha === senha);

}

export default validarLogin;