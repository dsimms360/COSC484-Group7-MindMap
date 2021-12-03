import Link from './Link'

const Links = ({links, onDelete}) => {
    return(
        <>
            {links.map((link) => (
                <Link 
                    key ={link.id} link={link} 
                    onDelete = {onDelete} 
                />
            ))}  
        </>
    )
}

export default Links