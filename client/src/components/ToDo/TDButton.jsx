import PropTypes from 'prop-types'

const TDButton = ({color, text, onClick}) => {
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

TDButton.defaultProps = {
    color: 'steelblue'
}

TDButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default TDButton