import { Card } from "./calenderBlocks";
import Calendar from 'react-calendar'
function CalenderBlock (){

    // just to see the object (not really needed)
    // const print = () => {
    // const authData = JSON.parse(localStorage.getItem("userToken"));
    // console.log({authData})
    // }

    return(
        <>
        <Card>
        <Calendar
          />
        </Card>
        </>
    );

}

export default CalenderBlock;