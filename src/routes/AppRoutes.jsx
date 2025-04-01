import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RotaAutentic from '../features/login/routes/roteAutentic';
import ErrorPage from '../features/error/pages/ErrorPage';

const AppRoutes = () => {
    return (
        <Router>
          <Routes>
              {RotaAutentic}
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
    );
}



export default AppRoutes;