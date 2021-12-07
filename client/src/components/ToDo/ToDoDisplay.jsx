import React from "react";
import TDButton from "./TDButton"

const ToDoDisplay = ({onAdd, showAdd}) => {
    return(
        <h3 className = 'To Do'>
            <h1>To Do List:</h1>
            <TDButton 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />
        </h3>
    )
}

export default ToDoDisplay;