import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage' ;
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' exact Component={<HomePage/>}></Route>
        <Route path='/login' Component={<LoginPage/>}></Route>
        {/* <Route path='/register' Component={<RegisterPage/>}></Route> */}
        <Route path='/dashboard' Component={<DashBoard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
