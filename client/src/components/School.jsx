import React from "react";
import "./School.css";
import {Link} from "react-router-dom";


function School() {

    
    document.getElementById("title").innerHTML = "School";

    return (
        <div>
            <div id="topBar">
                <div id="username">User One</div>
                <div id="accType">Student Account</div> <br />
                <div id="signOut"><Link to="/">Sign Out</Link></div>
                <button id="pg1Button"><Link to= "/Home">Home</Link></button>
                <button id="pg2Button"><Link to= "/Work">Work</Link></button>
                <button id="pg3Button"><Link to= "/Extra">Extra</Link></button>
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
            <div id="block2">Tracker
            <table border="1">
                <tr>
                    <th>Habits</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                    <td><input type="checkbox" name="name1" />&nbsp;</td>
                </tr>
    </table></div>
            <div  id="calendar">Calendar stuff goes here</div>
        </div>
        </div>
    )

}

export default School;