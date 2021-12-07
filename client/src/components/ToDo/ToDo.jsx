import React from "react";
import Button from "./Button"

const QuickLink = ({onAdd, showAdd}) => {
    return(
        <div className = 'Quick Links'>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />
        </div>
    )
}

export default QuickLink;