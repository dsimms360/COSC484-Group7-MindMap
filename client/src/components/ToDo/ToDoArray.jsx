import ToDoItem from './ToDoItem'

const ToDoArray = ({TDItem, onDelete}) => {
    return(
        <>
            {TDItem.map((item) => (
                <ToDoItem 
                    key ={item.id} item={item} 
                    onDelete = {onDelete} 
                />
            ))}  
        </>
    )
}

export default ToDoArray