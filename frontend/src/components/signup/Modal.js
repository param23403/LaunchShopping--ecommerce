import { useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./Backdrop.css";

function Modal(props) {



  return (
    <div className="modal">
      <Typography variant='h5'>Username already exists</Typography>
      <Typography variant='p'>Please choose another username</Typography>
        <Button sx={{margin:'10px'}} variant='contained' color='success' onClick={props.onClick}>
          Okay
        </Button>
    </div>
  );
}

export default Modal;