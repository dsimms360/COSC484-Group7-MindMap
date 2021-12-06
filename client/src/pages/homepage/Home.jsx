import React from 'react';
import QuickLink from "../../components/Quick_Links/QuickLink";
import {useState} from 'react';
import AddLink from "../../components/Quick_Links/AddLink";
import Links from "../../components/Quick_Links/Links";

import { FullBackground } from './background';

import Calender from '../../components/calender/calender';
import Navbar from '../../components/navbar/index';

import CalenderBlock from '../../components/calenderBlock/index';
import NotesBlocks from '../../components/notesBlock/index';
import TodoBlock from '../../components/todoBlock';
import QuicklinkBlock from '../../components/quicklinkBlock/index';
import EventsBlock from '../../components/eventsBlock/index';
import ProgressBlock from '../../components/progressBlock/index';

function Home() {
    document.getElementById("title").innerHTML = "Mind Map";
    
    return (
        <>
            <FullBackground>
            <Navbar/>
            <CalenderBlock/>
            <NotesBlocks/>
            <TodoBlock/>
            <QuicklinkBlock/>
            <EventsBlock/>
            <ProgressBlock/>
            </FullBackground>
    
            {/* <div id="progress">
                <label id= "progressBarLabel">Weekly Progress<br/></label>    
                <progress id="progressBar" value = "40" max="100"></progress>
            </div> */}

            {/* <br/>
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
            </div> */}



            {/* <div id="quickLinks">
                <div className="container">
                    <QuickLink  onAdd={() => setShowAddLink(!showAddLink)} showAdd={showAddLink} />
                    {showAddLink && <AddLink onAdd={addLink} />}
                    {links.length > 0 ? (
                    <Links links={links} onDelete={deleteLink}/>
                    ) : (
                    "You don't have any quick links."
                    )}
                </div>
            </div> */}


        </>
    )

}

export default Home;