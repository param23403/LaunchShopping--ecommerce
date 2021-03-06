import { Button, Grid, TextField, Card, Toolbar, AppBar, Box } from "@mui/material";
import { useRef, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import logo from '../logow.png'
import "./SignUp.css"

function Signup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const textFieldRefUsername = useRef("");
  const textFieldRefPassword = useRef(null);
  const textFieldRefAddress = useRef(null);
  const textFieldRefPhoneNumber = useRef(null);
  const textFieldRefCreditCard = useRef(null);
  let navigate = useNavigate();

  const createAccount = () => {
    fetch("/shopping/usernames")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i].username === textFieldRefUsername.current.value) {
            setModalIsOpen(true);
            return;
          }
        }
        fetch(
          "/shopping/userCreation?id=" +
            textFieldRefUsername.current.value,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: textFieldRefUsername.current.value,
              password: textFieldRefPassword.current.value,
              birthday: startDate,
              defaultAddress: textFieldRefAddress.current.value,
              defaultCreditCard: textFieldRefCreditCard.current.value,
              phoneNumber: textFieldRefPhoneNumber.current.value,
            }),
          }
        ).then((res) => console.log(res.json())).then(navigate('/login'));
      });
  };

  const closeHandler = () => {
    setModalIsOpen(false);
  };

  const landonclick=()=>{
    navigate('/')
  }

  return (
    <>
          <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#5BAFFF" }}>
            <Button onClick={landonclick}>
              <img src={logo} style={{ maxWidth: 175, maxHeight: 50, padding: 15}} alt="logo"></img>
            </Button>          
          </Toolbar>
        </AppBar>
      </Box>
    <div className="container" >
      <h1>Sign Up</h1>
      <Grid container justifyContent='center' autoComplete="off" component="form">
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Username"
            inputRef={textFieldRefUsername}
            sx={{ m: 1, width: "25ch", marginLeft: "0%" }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-password-input-required"
            label="Password"
            type="password"
            inputRef={textFieldRefPassword}
            sx={{ m: 1, width: "25ch", marginLeft: "40%" }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2000-01-01"
            sx={{ m: 1, width: "25ch", marginLeft: "0%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-address-input"
            label="Address"
            inputRef={textFieldRefAddress}
            sx={{ m: 1, width: "25ch", marginLeft: "40%" }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-creditcard-input"
            label="Credit Card Number"
            inputRef={textFieldRefCreditCard}
            sx={{ m: 1, width: "25ch", marginLeft: "0%" }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-phonenumber-input"
            label="Phone Number"
            inputRef={textFieldRefPhoneNumber}
            sx={{ m: 1, width: "25ch", marginLeft: "40%" }}
          ></TextField>
        </Grid>
        <Button className='login-btn' onClick={createAccount} variant="contained" >
          Create Account
        </Button>
        {modalIsOpen && <Modal onClick={closeHandler} />}
        {modalIsOpen && <Backdrop onClick={closeHandler} />}
      </Grid>
    </div>
    </>
  );
}

export default Signup;
