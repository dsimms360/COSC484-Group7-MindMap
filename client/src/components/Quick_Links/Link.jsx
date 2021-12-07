import {FaTimes} from 'react-icons/fa';

const Link = ({link, onDelete}) => {
    return(
        <div>
            <FaTimes 
                    style ={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(link.id)}
                />
            <a href={link.link}>{link.title}</a>
        </div>
    )
}

export default Link;