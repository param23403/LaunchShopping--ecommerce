import { Button, Box, TextField } from "@mui/material";

function Signup() {

    const createAccount = () => {
        
    };

  return (
    <Box autoComplete="off" component="form">
      <TextField
        required
        id="outlined-required"
        label="username"
        defaultValue="Username"
        sx={{ m: 1, width: "25ch" }}
      ></TextField>
      <TextField
        required
        id="outlined-password-input-required"
        label="password"
        defaultValue="Password"
        type="password"
        sx={{ m: 1, width: "25ch" }}
      ></TextField>
      <Button onClick={createAccount}>
          Create Account
      </Button>
    </Box>
  );
}

export default Signup;
