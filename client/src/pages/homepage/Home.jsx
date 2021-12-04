import React from 'react';
import "./welcomePage.css";
import {Link} from "react-router-dom";
import QuickLink from "../../components/Quick_Links/QuickLink";
import {useState} from 'react';
import AddLink from "../../components/Quick_Links/AddLink";
import Links from "../../components/Quick_Links/Links";

import styles from './styles';


// import Logout from '../../components/GoogleLogs/googleLogout';

import UserBlock from '../../components/UserBlock/userBlock';
import Calender from '../../components/calender/calender';



function Home() {
    let { compon } = styles;

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
            <UserBlock style={compon.block} className="userBlock" />
            {/* <div id="topBar">
                <img src={authData.imageUrl || 'null'} alt="" />
                <div id="username">{authData.name || 'null'}</div>
                <div id="accType">Student Account</div> <br />
                <div id="signOut"><Link to="/"><Logout /> </Link></div>
                <button id="pg1Button">Page 1</button>
                <button id="pg2Button">Page 2 </button>
                <button id="pg3Button">Page 3 </button>
            </div> */}
            {/* <div id="progress">
                <label id= "progressBarLabel">Weekly Progress<br/></label>    
                <progress id="progressBar" value = "40" max="100"></progress>
            </div>
            <br/> */}
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