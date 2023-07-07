import React from "react";
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../Components/CSS/Lgin.css"

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Log In</h1>
      <div className="login">
        <input type="text" className="Uname" id="Uname" placeholder="Username"/>
        <br/><br/>
        <input type="Password" className="Uname" id="Pass" placeholder="Password"/>
        <br/><br/>
        <button onClick={()=>navigate("/freeExam")}>Login</button><br></br>
        
        <p>
          <strong>New User?</strong>  <Link to ="/registration">Register Now!!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
