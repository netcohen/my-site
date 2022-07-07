import PropTypes from 'prop-types'

const onClick =() => {
    console.log("click")
}


const button = ({color,text}) => {
  return (
<button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}

button.defaultProps ={
    color: 'steelblue',
}

button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default button
