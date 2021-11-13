import React, {useState} from 'react';
import "./signUp.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

function SignUp() {

  document.getElementById("title").innerHTML = "";

  const [input, setInput] = useState({
    Email: '',
    Phone: '',
    Fname: '',
    Lname: '',
    Username: '',
    Pswd: ''
  })

  function handleChange(event) {
    const {name, value} = event.target;
    console.log(name, value);
    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input["Pswd"])
    console.log(input["vPswd"])

    if (typeof input["Pswd"] !== "undefined" && typeof input["vPswd"] !== "undefined") {

      if (input["Pswd"] !== input["vPswd"]) {
  
        alert("Passwords do not match!");
  
      }
  
    }
    else{
      const newUser = {
        Email: input.Email,
        Phone: input.Phone,
        Fname: input.Fname,
        Lname: input.Lname,
        Username: input.Username,
        Pswd: input.Pswd
      }
      axios.post("http://localhost:3001/signUp", newUser);
      <Link to="/" />
      alert("User account has been successfully created!");
      
    }
    
}

  return(
      <div>
      <h2 style={{fontSize: '35px'}}>Sign up: </h2>
      <div className="userInput">
        <form id="signUpForm">
          <label>Email Address: </label>
          <input onChange={handleChange} id="Email" className="inputBox" type="text" placeholder="Email Address" required="required" autoComplete="off"/><br /><br /><br />
          <label>Phone Number: </label>
          <input onChange={handleChange} id="Phone" className="inputBox" type="tel" placeholder="Phone Number" required="required" autoComplete="off"/><br /><br /><br />
          <label>First Name: </label>
          <input onChange={handleChange} id="Fname" className="inputBox" type="text" placeholder="First Name" required="required" autoComplete="off"/><br /><br /><br />
          <label>Last Name: </label>
          <input onChange={handleChange} id="Lname" className="inputBox" type="text" placeholder="Last Name" required="required" autoComplete="off"/><br /><br /><br />
          <label>Username: </label>
          <input onChange={handleChange} id="Username" className="inputBox" type="text" placeholder="Username" required="required" autoComplete="off"/><br /><br /><br />
          <label>Password: </label>
          <input onChange={handleChange} id="Pswd" className="inputBox" type="password" placeholder="Password" required="required" autoComplete="off"/><br /><br /><br />
          <label>Verify Password: </label>
          <input onChange={handleChange} id="vPswd" className="inputBox" type="password" placeholder="Verify Password" required="required" autoComplete="off"/><br /><br /><br />
          
          <button onClick={handleClick} className="btn btn-lg btn-info"><Link to="/">Sign Up</Link></button>

        </form>
      </div>
      <div>
        <h2>Already have an account? <Link to="/">Log in here</Link></h2>
      </div>
    </div>
  )
}

export default SignUp;