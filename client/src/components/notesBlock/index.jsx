import { 
    Card,
    HeadingBlock,
    ButtonBlock,
    FormBlock,
    BodyBlock,
} from "./notesBlocks";

import React, {useState} from 'react';
import Note from '../notes/Note';
import AddNote from '../notes/AddNote';
import Notess from '../notes/Notes';

function NoteBlock (){
    const[showAddNote, setShowAddNote] = useState(false);
    const[NotesArray, setNotesArray] = useState([]);

    const addNote = (td) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newNote = {id, ...td }
        setNotesArray([...NotesArray, newNote])
    }
    const deleteNote = (id) => {
        setNotesArray(NotesArray.filter((td) => td.id !== id))
    }

    return (  
        <>
        <Card>
            <HeadingBlock>Notes</HeadingBlock>
            <BodyBlock>

            </BodyBlock>
            <ButtonBlock><Note  onAdd={() => setShowAddNote(!showAddNote)} showAdd={showAddNote} />
                {showAddNote && <AddNote onAdd={addNote} />}</ButtonBlock>
            
            }
            
         
            
        </Card>
        </>
    );
}

export default NoteBlock;