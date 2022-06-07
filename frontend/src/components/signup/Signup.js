import { Button, Box, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Signup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const textFieldRefUsername = useRef(null);
  const textFieldRefPassword = useRef(null);

  const createAccount = () => {
    fetch("http://localhost:9000/shopping/usernames")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i].id === textFieldRefUsername.current.value) {
            setModalIsOpen(true);
            return;
          }
        }
        fetch(
          "http://localhost:9000/shopping/userCreation?id=" +
            textFieldRefUsername.current.value,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: textFieldRefUsername.current.value,
              password: textFieldRefPassword.current.value,
            }),
          }
        ).then((res) => console.log(res.json()));
      });
  };

  const closeHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <Box autoComplete="off" component="form">
      <TextField
        required
        id="outlined-required"
        label="username"
        defaultValue="Username"
        inputRef={textFieldRefUsername}
        sx={{ m: 1, width: "25ch" }}
      ></TextField>
      <TextField
        required
        id="outlined-password-input-required"
        label="password"
        defaultValue="Password"
        type="password"
        inputRef={textFieldRefPassword}
        sx={{ m: 1, width: "25ch" }}
      ></TextField>
      <Button onClick={createAccount}>Create Account</Button>
      {modalIsOpen && <Modal onClick={closeHandler} />}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </Box>
  );
}

export default Signup;
