import React, {useEffect, useContext} from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Account(){
    const user = useContext(UserContext);

    let navigate = useNavigate();
    
    useEffect(() => {
          if (user.user === '') {
              navigate('/login');
          }
    },[]);

    return(
      <>
      
      <Navbar ispage={[false, false, true]}/>
      <div className="container">
        <div className="cover-photo">
          <img src="profile.jpg" class="profile"></img>
        </div>
        <div className="profile-name">Firebase Username {user.username}
          <p className="info">Information:</p>
          <p className="about">Birthday:{user.birthday}</p>
          <p className="about">Address:{user.defaultAddress}</p>
          <p className="about">Phone Number:{user.phoneNumber}</p>
          <p className="about">Credit Card:{user.defaultCreditCard}</p>
        </div>
          <button className="payment-btn">Change Payment Method</button>
          <button className="edit-btn">Edit profile</button>
      </div>
      </>
)};



export default Account;