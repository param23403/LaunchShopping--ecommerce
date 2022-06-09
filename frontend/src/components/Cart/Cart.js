import Navbar from '../Navbar/Navbar'
import React, {useEffect, useContext} from "react";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";

const Cart = () => {
    let navigate = useNavigate()

    const user = useContext(UserContext);
    
    useEffect(() => {
        if (user.user === '') {
            navigate('/login');
        }
        //if (localStorage.getItem('priceIDs')) {
        //    localStorage.removeItem('priceIDs');
        //}
        // To test, predetermined priceIDs but eventually get from Shopping.js.
        localStorage.setItem('priceIDs', ['price_1L8rpiGUl5wOGSTub6C3LN1c', 'price_1L8rroGUl5wOGSTuITnJPakB'])
    }, []);

    const CreateCheckout = () => {
        fetch("http://localhost:4242/create-checkout-session",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              priceIDs: localStorage.getItem('priceIDs'),
            }),
          }
        ).then((res) => console.log(res.json()));
    };
    //<Button variant="contained" style={{ backgroundColor: "#5BAFFF" }} onClick={CreateCheckout}>Checkout</Button>
    setTimeout(function() {
        let token = localStorage.getItem('priceIDs');
        console.log(token);
    }, 50);
    return (
        <>
        <Navbar ispage={[false, true, false]}/>
        <h1>This is the Cart Page</h1>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
        <input type="hidden" id="PriceIDs" name="PriceIDs" value={localStorage.getItem('priceIDs')}>
        </input>
            <button type="submit">
                Checkout
            </button>
        </form>
        </>
   )
}

export default Cart;