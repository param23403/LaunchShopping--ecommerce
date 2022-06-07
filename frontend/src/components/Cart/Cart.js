import Navbar from '../Navbar/Navbar'
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart=()=>{
    let navigate = useNavigate()
    const movetocheckout=()=>{
        navigate('./checkout')
    }
    return(
        <>
    <Navbar ispage={[false, true, false]}/>
    <h1>This is the Cart Page</h1>
    <Button onClick={movetocheckout}
          variant="contained"
          style={{ backgroundColor: "#5BAFFF" }}>Checkout</Button>
    </>
   ) }
    
    export default Cart