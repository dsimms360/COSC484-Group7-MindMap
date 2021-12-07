
const Link = ({link, onDelete}) => {
    return(
        <div>
            <input type="checkbox"></input>
            <label>{link.task}</label>
            </div>
    )
}

export default Link;