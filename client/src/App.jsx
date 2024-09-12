import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;