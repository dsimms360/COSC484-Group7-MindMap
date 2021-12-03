
const Link = ({link, onDelete}) => {
    return(
        <div>
            <a href={link.link}>{link.title}</a>
        </div>
    )
}

export default Link;