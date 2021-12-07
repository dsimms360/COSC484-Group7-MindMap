import { useState } from 'react'
import "./TDs.css";

const AddLink = ({onAdd}) => {
    const[task, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!task){
            alert('Please add a task')
            return
        }
        //console.log(link);

        onAdd({task})

        setTitle('')
    }


    

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Task' 
                    value={task} 
                    onChange={(e) => setTitle(e.target.value)} 
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

export default AddLink
