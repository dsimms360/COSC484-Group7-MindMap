import React from 'react';
import "./welcomePage.css";
import {Link} from "react-router-dom";
import QuickLink from "./Quick_Links/QuickLink";
import {useState} from 'react';
import AddLink from "./Quick_Links/AddLink";
import Links from "./Quick_Links/Links";
import ToDoDisplay from "./ToDo/ToDoDisplay";
import AddToDo from "./ToDo/AddToDo";
import ToDoArray from "./ToDo/ToDoArray";
import AddNote from "./notes/AddNote";
import NoteDisplay from "/notes/NoteDisplay";
import NotesArray from "./notes/NotesArray";

function Home() {

    const[showAddLink, setShowAddLink] = useState(false);
    const[links, setLinks] = useState([]);

    const[showAddToDo, setShowAddToDo] = useState(false);
    const[tasks, setTasks] = useState([]);

    const addLink = (link) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newLink = {id, ...link }
        setLinks([...links, newLink])
      }
      const deleteLink = (id) => {
        setLinks(links.filter((link) => link.id !== id))
      }

    const addToDo = (task) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newTask = {id, ...task }
        setTasks([...tasks, newTask])
      }
      const deleteToDo = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }

      const AddNote = (note) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newNote = {id, ...note }
        setNotes([...notes, newNote])
      }
      const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
      }

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
                <label id= "progressBarLabel">Weekly Progress<br/></label>    
                <progress id="progressBar" value = "40" max="100"></progress>
            </div>
            <br/>
            <div id="events">
                <label id="eventsLabel">Upcoming Events</label>
                <div>Events Go here</div>
            </div>
            <div id="toDoList">
                <div className="container">
                    <ToDoDisplay  onAdd={() => setShowAddToDo(!showAddToDo)} showAdd={showAddToDo} />
                    {showAddToDo && <AddToDo onAdd={addToDo} />}
                    {tasks.length > 0 ? (
                    <ToDoArray links={tasks} onDelete={deleteToDo}/>
                    ) : (
                    "You don't have any tasks to do."
                    )}    
                </div>    
            </div>
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
            <div id="notes">
                <div className="container">
                    <NoteDisplay  onAdd={() => setShowAddNote(!showAddNote)} showAdd={showAddNote} />
                    {showAddNote && <AddNote onAdd={AddNote} />}
                    {NotesArray.length > 0 ? (
                    <NotesArray links={notes} onDelete={deleteNote}/>
                    ) : (
                    "There are no notes."
                    )}    
                </div>    
            </div>
        <div>
            {/*<div id="block1">Something goes here</div>
            <br/>
            <div id="block2">And here as well</div>
                    */}
            <div  id="calendar">Calendar stuff goes here</div>
        </div>
        </div>
    )

}

export default Home;