import express from 'express';
import criarUsuario from '../controllers/criarUsuario.controllers';

const Router = express.Router();

Router.post('/', criarUsuario);

export default Router;