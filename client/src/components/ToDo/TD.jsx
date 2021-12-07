import {FaTimes} from 'react-icons/fa';

const Link = ({link, onDelete}) => {
    return(
        <div>
            <FaTimes 
                    style ={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(link.id)}
                />
            <input type="checkbox"></input>
            <label>{link.task}</label>
            </div>
    )
}

export default Link;