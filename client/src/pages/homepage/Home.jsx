import React from 'react';
import "./welcomePage.css";
import QuickLink from "../../components/Quick_Links/QuickLink";
import {useState} from 'react';
import AddLink from "../../components/Quick_Links/AddLink";
import Links from "../../components/Quick_Links/Links";


import Calender from '../../components/calender/calender';
import Navbar from '../../components/Navbar/index';


function Home() {

    const[showAddLink, setShowAddLink] = useState(false);
    const[links, setLinks] = useState([]);

    const authData = JSON.parse(localStorage.getItem("userToken"));


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
            <Navbar/>
    
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
            <Calender className="calender" />
        </div>
        </div>
    )

}

export default Home;