import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Cancelled = () => {

    return (
        <>
            <h3>Order canceled -- continue to shop around and checkout when you're ready.</h3>
            <h4>Please log in again once you return to shopping page.</h4>
            <Link to='/shopping' style={{textDecoration: 'none'}}>
                <Button variant="contained">Return to shopping page</Button>
            </Link>
        </>
    );

};

export default Cancelled;