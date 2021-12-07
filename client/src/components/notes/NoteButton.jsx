import PropTypes from 'prop-types'

const NoteButton = ({color, text, onClick}) => {
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

NoteButton.defaultProps = {
    color: 'steelblue'
}

NoteButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default NoteButton 