import NoteItem from './NoteItem'

const NotesArray = ({NoteItem, onDelete}) => {
    return(
        <>
            {TDItem.map((item) => (
                <NoteItem 
                    key ={item.id} item={item} 
                    onDelete = {onDelete} 
                />
            ))}  
        </>
    )
}

export default NotesArray