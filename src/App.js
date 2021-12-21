import './App.scss';

import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/:id' element={<SingleProduct/>} />
          <Route element={<Error/>} />
      </Routes> 
    </>
  );
}

export default App;
