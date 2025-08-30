import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RotaAutentic from '../features/login/routes/roteAutentic';
import ErrorPage from '../features/error/pages/ErrorPage';
import RouteSearech from '../features/serechPage/routes/routeSearech';

const AppRoutes = () => {
    return (
        <Router>
          <Routes>
              {RotaAutentic}      
              {RouteSearech}
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
    );
}


export default AppRoutes;