import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/game' element={<Game/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
