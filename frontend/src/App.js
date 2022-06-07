import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Error from './components/Error';
import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import Shopping from './components/Shopping/Shopping.js';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/shopping" element={<Shopping />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart/checkout" element={<Checkout/>}/>

      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
