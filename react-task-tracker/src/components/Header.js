import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1> {title}</h1>
        <Button color='green' text='Login' 
        onClick={onClick} />
        </header>
  )
}

Header.defaultProps = {
    title: 'Hello Nadhir',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
const headingStyle = {
    color: 'red', 
    backgroundColor:'black'
}
*/

export default Header