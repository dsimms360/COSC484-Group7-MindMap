import { useState } from 'react'
import "./Notes.css";

const AddNote = ({onAdd}) => {
    const[note, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!note){
            alert('No note was entered.')
            return
        }
        //console.log(link);

        onAdd({note})

        setTitle('')
    }


    

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Note</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Note' 
                    value={note} 
                    onChange={(e) => setTitle(e.target.value)} 
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

export default AddNote 
