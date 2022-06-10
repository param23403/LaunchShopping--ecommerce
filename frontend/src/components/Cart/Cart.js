import Navbar from '../Navbar/Navbar'
import React, {useEffect, useContext, useState} from "react";
import { Button, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";

const Cart = () => {
    let navigate = useNavigate()

    const user = useContext(UserContext);
    const [priceId, setPriceId] = useState();
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    
    useEffect(() => {
        if (user.user === '') {
            navigate('/login');
        }
        setPriceId(localStorage.getItem('priceIDs'));
        setPrice(String(localStorage.getItem('price')).split(','));
        setName(String(localStorage.getItem('name')).split(','));
    }, []);

    console.log(price);
    console.log(name);

    return (
        <>
        <Navbar ispage={[false, true, false]}/>
        <div style={{textAlign: 'center'}}>
        <br></br>
        <Typography style={{fontFamily: "open sans"}}variant='h3'>Your Shopping Cart</Typography>
        <Grid alignItems="center" m={2} ml={60}>
        <List sx={{ width: '50%', bgcolor: 'background.paper'}}>
            {name.map((itemName, index) => {
                return (
                    <>
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={price[index]} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={price[index]} secondary={ 
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Price - ${itemName}
                        </Typography> }/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    </>
                );
            })}
        </List>
        </Grid>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
        <input type="hidden" id="PriceIDs" name="PriceIDs" value={priceId}>
        </input>
            <Button variant="contained" style={{ backgroundColor: "#5BAFFF" }} type="submit">
                Checkout
            </Button>
        </form>
        </div>
        </>
   )
}

export default Cart;