import TD from './TD'

const Links = ({links, onDelete}) => {
    return(
        <>
            {links.map((link) => (
                <TD 
                    key ={link.id} link={link} 
                    onDelete = {onDelete} 
                />
            ))}  
        </>
    )
}

export default Links