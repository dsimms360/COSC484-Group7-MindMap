import React, {useEffect, useState} from 'react';
import "./loginPage.css";
import {Link} from "react-router-dom";

function Login () {

    useEffect()
  
  document.getElementById("title").innerHTML = "Login | MindMap";

  return (
      <div>
        <h1>WELCOME TO YOUR VIRTUAL MIND MAP</h1>
        <h2 style={{fontSize: '35px'}}>Login: </h2>
        <div id="loginContainer">
          {/*added get method and action to take to welcome Page, 
          change to POST method when someone knows how to use that*/} 
          <form method="GET" action="welcomePage.html">
            <label>Username/Email Address: </label>
            <input className="inputBox" id="userID" type="text" name="user" placeholder="Username/Email Address" required="required" autoComplete="off" /><br /><br />
            <label>Password: </label>
            <input className="inputBox" id="pswd" type="password" name="pass" placeholder="Password" required="required" /><br /><br />
            <input className="btn" id="submitBtn" type="submit" defaultValue="Log In" />
          </form>
        </div>
        <div id="newUserContainer">
          <h2>Don't have an account? <Link to="/signUp">Sign up here</Link></h2>
        </div>
      </div>
  );

}

export default Login;