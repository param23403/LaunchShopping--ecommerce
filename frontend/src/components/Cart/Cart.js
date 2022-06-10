import Navbar from '../Navbar/Navbar'
import React, {useEffect, useContext, useState} from "react";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";

const Cart = () => {
    let navigate = useNavigate()

    const user = useContext(UserContext);
    const [priceId, setPriceId] = useState();
    
    useEffect(() => {
        if (user.user === '') {
            navigate('/login');
        }
        setPriceId(localStorage.getItem('priceIDs'));
    }, []);

    const CreateCheckout = () => {
        fetch("http://localhost:4242/create-checkout-session",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              priceIDs: priceId,
            }),
          }
        ).then((res) => console.log(res.json()));
    };
    //<Button variant="contained" style={{ backgroundColor: "#5BAFFF" }} onClick={CreateCheckout}>Checkout</Button>
    return (
        <>
        <Navbar ispage={[false, true, false]}/>
        <h1>This is the Cart Page</h1>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
        <input type="hidden" id="PriceIDs" name="PriceIDs" value={priceId}>
        </input>
            <button type="submit">
                Checkout
            </button>
        </form>
        </>
   )
}

export default Cart;