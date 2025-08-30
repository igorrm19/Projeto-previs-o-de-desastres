import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CadastroPage from "../pages/cadrasto";

const RotaAutentic = [
          <Route key="login" path="/" element={<LoginPage/>}/>,
          <Route key="cadastro" path="/cadastro" element={<CadastroPage/>}/>
];

export default RotaAutentic;