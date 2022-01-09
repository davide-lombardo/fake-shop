import './App.scss';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Checkout from './pages/Checkout/Checkout'
import Register from './pages/Register/Register'
import SingleProduct from './pages/SingleProduct/SingleProduct'

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from "./firebaseConfig"
import { setUser } from './redux/actions/authActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])


  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/:id' element={<SingleProduct/>} />
    </Routes> 
  </>
  );
}

export default App;
