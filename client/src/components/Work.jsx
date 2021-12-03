import React from "react";
import "./Work.css";
import {Link} from "react-router-dom";


function Home() {

    
    document.getElementById("title").innerHTML = "Home";

    return (
        <div>
            <div id="topBar">
                <div id="username">User One</div>
                <div id="accType">Student Account</div> <br />
                <div id="signOut"><Link to="/">Sign Out</Link></div>
                <button id="pg1Button">Page 1</button>
                <button id="pg2Button">Page 2 </button>
                <button id="pg3Button">Page 3 </button>
            </div>
            <div id="progress">
                <label for= "progressBar">Weekly Progress<br/></label>    
                <progress id="progressBar" value = "40" max="100"></progress>
            </div>
            <br/>
            <div id="events">
                <label for="events" id="eventsLabel">Upcoming Events</label>
                <div>Events Go here</div>
            </div>
            <div id="toDoList">To Do List goes here</div>
            <div id="quickLinks"><h4>Quick Links go here</h4>
                <a href="https://www.towson.edu/">towson.edu</a><br/>
                <a href="https://www.google.com/">google.com</a>        
            </div>
        <div>
            <div id="block1">Something goes here</div>
            <br/>
            <div id="block2">And here as well</div>
            <div  id="calendar">Calendar stuff goes here</div>
        </div>
        </div>
    )

}

export default Home;