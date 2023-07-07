import React from 'react'
// import { useNavigate } from 'react-router-dom'
import "../Components/CSS/Registration.css"

const Registration = () => {
    //const navigate = useNavigate();
  return (
    <div>
        <h1>Sign Up</h1>
      <div className="SignUp">
        <input type="text" className="Uname"  placeholder="Name" required/>
        <br/><br/>
        <input type="email" className="Uname"  placeholder="E-mail" required/>
        <br/><br/>
        <input type="password" className="Uname"  placeholder="Password" required/>
        <br/><br/>
        <input type="password" className="Uname" placeholder="Confirm Password" required/>
        <br/><br/>
        <input type="phone" className="Uname" placeholder="Phone" required/>
        <br/><br/>
        <button onClick="validateUser()">Register</button>
      </div> 
      </div>     
  );
}

export default Registration

// function validateUser() {
//   //{()=>navigate("/email")}
//   if(validateInputs()){
//     //api
//     console.log("api");
//   }else{

//   }
// }

// function validateInputs(){
//   let inputs = document.querySelectorAll('inputs');
//   console.log(inputs);
// }
// validateUser();