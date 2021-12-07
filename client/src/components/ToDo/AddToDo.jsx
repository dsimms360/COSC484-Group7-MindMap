import { useState } from 'react'
import "./ToDo.css";

const AddToDo = ({onAdd}) => {
    const[task, setTask] = useState('')
    //const[link, setLink] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!task){
            alert('Please add a new task')
            return
        }
        /*console.log(link);
        if(!link.includes("https://")){
            let temp = link;
            setLink("https://" + temp);
            console.log(link);
        }*/
        onAdd({task})

        setTask('')
        //setLink('')
    }


    

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add New Task' 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                />
            </div>
            {/*<div className = 'form-control'>
                <label>Link</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add URL Link' 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                />
            </div>*/}

            <input 
                type='submit' 
                value='Save Task' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddToDo