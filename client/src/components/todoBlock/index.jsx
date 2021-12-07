import { 
    Card,
    HeadingBlock,
    ButtonBlock,
    FormBlock,
    DisplayBlock 
} from "./todoBlocks";

import React, {useState} from 'react';
import ToDo from '../ToDo/ToDo';
import AddTD from '../ToDo/AddTD';
import TDs from '../ToDo/TDs';


function TodoBlock (){

    const[showAddToDo, setShowAddToDo] = useState(false);
    const[todoarray, setToDoArray] = useState([]);

    const addToDo = (td) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newToDo = {id, ...td }
        setToDoArray([...todoarray, newToDo])
    }
    const deleteToDo = (id) => {
        setToDoArray(todoarray.filter((td) => td.id !== id))
    }

    return(
        <>
        <Card>
            <HeadingBlock>To Do List</HeadingBlock>
            {//<DisplayBlock>Displaying all the tasks to do</DisplayBlock>
}
            <ButtonBlock><ToDo  onAdd={() => setShowAddToDo(!showAddToDo)} showAdd={showAddToDo} />
                {showAddToDo && <AddTD onAdd={addToDo} />}</ButtonBlock>
            
            <DisplayBlock>
                {todoarray.length > 0 ? (
                <TDs links={todoarray} onDelete={deleteToDo}/>
                ) : (
                "You don't have any tasks."
                )}
            </DisplayBlock>
            {//<FormBlock>Respective forms will be here. Note: the purple background will be removed</FormBlock>
}
        </Card>
        </>
    );

}

export default TodoBlock;