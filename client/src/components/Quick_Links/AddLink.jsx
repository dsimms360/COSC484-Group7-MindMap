import { useState } from 'react'
import "./Links.css";

const AddLink = ({onAdd}) => {
    const[title, setTitle] = useState('')
    const[link, setLink] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title){
            alert('Please add a Link Title')
            return
        }
        console.log(link);
        if(!link.includes("https://")){
            let temp = link;
            setLink("https://" + temp);
            console.log(link);
        }
        onAdd({title, link})

        setTitle('')
        setLink('')
    }


    

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Title</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Link Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className = 'form-control'>
                <label>Link</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add URL Link' 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                />
            </div>

            <input 
                type='submit' 
                value='Save Link' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddLink
