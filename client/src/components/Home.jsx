import React from 'react';
import "./welcomePage.css";
import {Link} from "react-router-dom";
import QuickLink from "./Quick_Links/QuickLink";
import {useState} from 'react';
import AddLink from "./Quick_Links/AddLink";
import Links from "./Quick_Links/Links";

function Home() {

    const[showAddLink, setShowAddLink] = useState(false);
    const[links, setLinks] = useState([]);

    const addLink = (link) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newLink = {id, ...link }
        setLinks([...links, newLink])
      }
      const deleteLink = (id) => {
        setLinks(links.filter((link) => link.id !== id))
      }


    document.getElementById("title").innerHTML = "Home";

    return (
        <div>
            <div id="topBar">
                <div id="username">User One</div>
                <div id="accType">Student Account</div> <br />
                <div id="signOut"><Link to="/">Sign Out</Link></div>
                <button id="pg1Button"><Link to= "/School">School</Link></button>
                <button id="pg2Button"><Link to= "/Work">Work</Link></button>
                <button id="pg3Button"><Link to= "/Extra">Extra</Link></button>
            </div>
            <div id="progress">
                <label id= "progressBarLabel">Weekly Progress<br/></label>    
                <progress id="progressBar" value = "40" max="100"></progress>
            </div>
            <br/>
            <div id="events">
                <label id="eventsLabel">Upcoming Events</label>
                <div>Events Go here</div>
            </div>
            <div id="toDoList">To Do List goes here</div>
            <div id="quickLinks">
                <div className="container">
                    <QuickLink  onAdd={() => setShowAddLink(!showAddLink)} showAdd={showAddLink} />
                    {showAddLink && <AddLink onAdd={addLink} />}
                    {links.length > 0 ? (
                    <Links links={links} onDelete={deleteLink}/>
                    ) : (
                    "You don't have any quick links."
                    )}
                </div>
                   
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