import './App.scss';

import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Register from './pages/Register'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/:id' element={<SingleProduct/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes> 
    </>
  );
}

export default App;
