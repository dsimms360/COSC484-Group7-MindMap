import { useState } from 'react'
import "./NewNote.css";

const AddNote = ({onAdd}) => {
    const[note, setNote] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!note){
            alert('Please add a new note')
            return
        }
        onAdd({note})

        setNote('')
    }


    

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Note</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add New Note' 
                    value={task} 
                    onChange={(e) => setNote(e.target.value)} 
                />
            </div>

            <input 
                type='submit' 
                value='Save Note' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddNewNote 