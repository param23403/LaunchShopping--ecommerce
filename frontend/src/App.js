import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Error from './components/Error';
import React from 'react';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
