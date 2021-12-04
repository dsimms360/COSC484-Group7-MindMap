import React from 'react';
import "./loginPage.css";
import {Link} from "react-router-dom";

import GoogleLogin from './GoogleLogin/googleLogin';

// import UserBlock from './UserBlock/userBlock';



function Login () {

  document.getElementById("title").innerHTML = "Login | MindMap";

  return (
      <div>
        <h1>WELCOME TO YOUR VIRTUAL MIND MAP</h1>
        <h2 style={{fontSize: '35px'}}>Login: </h2>
        <div id="loginContainer">
        <GoogleLogin />

          {/*added get method and action to take to welcome Page, 
          change to POST method when someone knows how to use that*/} 
          {/* <form>
            <label>Username/Email Address: </label>
            <input className="inputBox" id="userID" type="text" name="user" placeholder="Username/Email Address" required="required" autoComplete="off" /><br /><br />
            <label>Password: </label>
            <input className="inputBox" id="pswd" type="password" name="pass" placeholder="Password" required="required" /><br /><br />
            

            <button className="btn" ><Link to="/home" >Log In</Link></button>
          </form> */}
        </div>

        {/* <UserBlock/> */}

        {/* <div id="newUserContainer">
          <h2>Don't have an account? <Link to="/signUp">Sign up here</Link></h2>
        </div> */}
      </div>
  );

}

export default Login;