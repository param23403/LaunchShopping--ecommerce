import React, {useEffect, useContext, useState} from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {Button, Typography,Container,Grid} from '@mui/material'
function Account(){
    const user = useContext(UserContext);
    const [birthday,setBirthday] = useState()
    const [address,setAddress] = useState()
    const[number,setNumber] = useState()
    const[cc,setCC] = useState()

    let navigate = useNavigate();
    
    useEffect(() => {
          if (user.user === '') {
              navigate('/login');
          }
    },[]);
   
    useEffect(() => {
      fetch("http://localhost:9000/shopping/usernames")
      .then((res) => res.json())
      .then((data)=>{
        for(let i =0;i<data.result.length;i++) {
          if(user.user==data.result[i].id){
            setBirthday(data.result[i].birthday)
            setAddress(data.result[i].defaultAddress)
            setNumber(data.result[i].phoneNumber)
            setCC(data.result[i].defaultCreditCard)

          }
        }
        
      })},[])
    
    const editonClick=()=>{
      console.log("edit clicked")
    }
    return(
      <>
      
      <Navbar ispage={[false, false, true]}/>
        <Grid container alignItems="center" justifyContent="center">
       <Grid item marginLeft='20%'> <Grid item id="profileImage"></Grid></Grid>
          <Grid marginTop='2vh' marginLeft="35%"><Typography style={{fontFamily: "open sans"}}variant='h3'><b>Welcome {user.user}</b></Typography></Grid></Grid> 
          <Grid container alignItems="center" justifyContent="center" marginTop='10vh' marginLeft='60%'> <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}><b>Birthday:</b> {birthday}</Typography></Grid>
          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}><b> Address:</b> {address}</Typography></Grid>
          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Phone Number:</b> {number}</Typography></Grid>
          <Grid item xs={12}marginTop='2vh'> <Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Credit Card:</b> {cc}</Typography></Grid>
       
          <Grid item xs={12}marginTop='2vh'><Button style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} variant="contained" size='small'>Change Payment Method</Button></Grid>
          <br></br>
          <br></br>
          <Grid item xs={12}marginTop='2vh'> <Button  style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }}variant="contained" size='small'onClick='editonClick'>Edit profile</Button></Grid>
          </Grid> 
      </>
)};



export default Account;