import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Error from './components/Error/Error';
import Login from './components/Login/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/home" element={<Homepage />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
