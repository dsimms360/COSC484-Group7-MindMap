import Note from './Note'

const Links = ({links, onDelete}) => {
    return(
        <>
            {links.map((link) => (
                <Note 
                    key ={link.id} link={link} 
                    onDelete = {onDelete} 
                />
            ))}  
        </>
    )
}

export default Links