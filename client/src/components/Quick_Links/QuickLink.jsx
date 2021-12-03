import React from "react";
import Button from "./Button"

const QuickLink = ({onAdd, showAdd}) => {
    return(
        <h3 className = 'Quick Links'>
            <h1>Quick Links:</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />
        </h3>
    )
}

export default QuickLink;