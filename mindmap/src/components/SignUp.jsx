import React, {useState} from 'react';
import "./signUp.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

function SignUp() {

  document.getElementById("title").innerHTML = "";

  //const [user, setUser] = useState();
  const [input, setInput] = useState({
    Email: '',
    Phone: '',
    Fname: '',
    Lname: '',
    Username: '',
    Pswd: ''
  });

  function handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
}

  function handleClick(event) {
    event.preventDefault();
      const newUser = {
        Email: input.Email,
        Phone: input.Phone,
        Fname: input.Fname,
        Lname: input.Lname,
        Username: input.Username,
        Pswd: input.Pswd
      }
      console.log(newUser);
      axios.post("http://localhost:3001/signUp", newUser);
      alert("User account has been successfully created!");
    }
    

  return(
      <div>
      <h2 style={{fontSize: '35px'}}>Sign up: </h2>
      <div className="userInput">
        <form id="signUpForm">
          <label>Email Address: </label>
          <input onChange={handleChange} id="Email" className="inputBox" type="text" placeholder="Email Address" value={input.Email} required="required" autoComplete="off"/><br /><br /><br />
          <label>Phone Number: </label>
          <input onChange={handleChange} id="Phone" className="inputBox" type="tel" placeholder="Phone Number" value={input.Phone} required="required" autoComplete="off"/><br /><br /><br />
          <label>First Name: </label>
          <input onChange={handleChange} id="Fname" className="inputBox" type="text" placeholder="First Name" value={input.Fname} required="required" autoComplete="off"/><br /><br /><br />
          <label>Last Name: </label>
          <input onChange={handleChange} id="Lname" className="inputBox" type="text" placeholder="Last Name" value={input.Lname} required="required" autoComplete="off"/><br /><br /><br />
          <label>Username: </label>
          <input onChange={handleChange} id="Username" className="inputBox" type="text" placeholder="Username" value={input.Username} required="required" autoComplete="off"/><br /><br /><br />
          <label>Password: </label>
          <input onChange={handleChange} id="Pswd" className="inputBox" type="password" placeholder="Password" value={input.Pswd} required="required" autoComplete="off"/><br /><br /><br />
          <label>Verify Password: </label>
          <input onChange={handleChange} id="vPswd" className="inputBox" type="password" placeholder="Verify Password" required="required" autoComplete="off"/><br /><br /><br />
          
          <button onClick={handleClick} className="btn">Sign Up</button>

        </form>
      </div>
      <div>
        <h2>Already have an account? <Link to="/">Log in here</Link></h2>
      </div>
    </div>
  )
}

export default SignUp;