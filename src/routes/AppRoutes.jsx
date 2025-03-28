import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RotaAutentic from '../features/login/routes/roteAutentic';

const AppRoutes = () => {
    return (
        <Router>
          <Routes>
              {RotaAutentic}
              <Route path="*" element={<h1>Pagina não encontrada</h1>}/>
          </Routes>
        </Router>
    );
}



export default AppRoutes;