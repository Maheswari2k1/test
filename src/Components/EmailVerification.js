import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/CSS/email.css"

const EmailVerification = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Verify Your E-mail</h1>
      <div className="e-mail">
        <input type="text" className="Uname" placeholder="Enter Your Code"/>
        <br/><br/>
        <button onClick={() => navigate("/")}>Submit</button>
        </div>
    </div>
  );
};

export default EmailVerification;
