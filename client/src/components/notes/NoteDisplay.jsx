import React from "react";
import NoteButton from "./NoteButton"

const NoteDisplay = ({onAdd, showAdd}) => {
    return(
        <h3 className = 'Notes'>
            <h1>Notes:</h1>
            <NoteButton 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />
        </h3>
    )
}

export default NoteDisplay;