import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Success = () => {

    return (
        <>
            <h3>Order placed! You will receive an email confirmation. Thank you for shopping at shopCrunch!</h3>
            <h4>Please log in again once you return to shopping page.</h4>
            <Link to='/shopping' style={{textDecoration: 'none'}}>
                <Button variant="contained">Return to shopping page</Button>
            </Link>
        </>
    );

};

export default Success;