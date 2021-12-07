import { useState } from 'react'
import "./ToDo.css";

const AddToDo = ({onAdd}) => {
    const[task, setTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!task){
            alert('Please add a new task')
            return
        }
        onAdd({task})

        setTask('')
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

            <input 
                type='submit' 
                value='Save Task' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddToDo