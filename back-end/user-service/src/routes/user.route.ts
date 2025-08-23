import express from 'express';
import criarUsuario from '../controllers/criarUsuario.controllers';
import validarLogin from '../controllers/validarLogin.controllers';

const Router = express.Router();

Router.post('/', criarUsuario);
Router.post('/validation', validarLogin)

export default Router;


// {
// 	"email": "igorrodriguesmachado23@gmail.com",
// 	"senha": "chunda123123123"
// }