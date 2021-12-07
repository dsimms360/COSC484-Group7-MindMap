import { useState } from 'react'
import "./NewNote.css";

const AddNote = ({onAdd}) => {
    const[note, setNote] = useState('')
    //const[link, setLink] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!note){
            alert('Please add a new note')
            return
        }
        /*console.log(link);
        if(!link.includes("https://")){
            let temp = link;
            setLink("https://" + temp);
            console.log(link);
        }*/
        onAdd({note})

        setNote('')
        //setLink('')
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
                value='Save Note' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddNewNote 