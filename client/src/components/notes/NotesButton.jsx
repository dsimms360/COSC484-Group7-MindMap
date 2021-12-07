import PropTypes from 'prop-types'

const NotesButton = ({color, text, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            style={{backgroundColor: color}}
            className='btn'
        > 
            {text}
        </button>
    )
}

NotesButton.defaultProps = {
    color: 'steelblue'
}

NotesButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default NotesButton