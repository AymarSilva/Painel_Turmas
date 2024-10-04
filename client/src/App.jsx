import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import GestaoUser from './components/pages/GestaoUser'
import AdicaoCSV from './components/pages/AdicaoCSV';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CadastroAulas from './components/pages/CadastroAulas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/usuarios' element={ <GestaoUser /> }></Route>
        <Route path='/csv' element={ <AdicaoCSV /> }></Route>
        <Route path='/cadastrarAula' element={ <CadastroAulas /> }></Route>
      </Routes>
    </Router>
  );
};

export default App;