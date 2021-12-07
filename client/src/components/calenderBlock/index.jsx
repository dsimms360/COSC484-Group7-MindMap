import { Card } from "./calenderBlocks";
import Calendar from 'react-calendar';
import React, { useState } from 'react';

function CalenderBlock (){

    // just to see the object (not really needed)
    // const print = () => {
    // const authData = JSON.parse(localStorage.getItem("userToken"));
    // console.log({authData})
    // }
    const [value, onChange] = useState(new Date());
    return(
        <>
        <div className="Sample">
        <Card>
        <Calendar
        onChange={onChange}
        
        value={value}
          />
        </Card>
        </div>
        </>
    );

}

export default CalenderBlock;