import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Miperfil from './pages/miperfil';
import 'bulma/css/bulma.min.css';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/game' element={<Game/>}/>
     <Route path='/miperfil' element={<Miperfil/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
