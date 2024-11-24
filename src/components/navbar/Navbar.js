import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'  // Renamed to ScrollLink

const Navbar = () => {

  return (
    <nav className='container dark-nav'>
      <ScrollLink to='homePage' smooth={true} duration={500}><img src={logo} className='logo' alt='' /></ScrollLink>
      <ul>
        <li><RouterLink to='/' smooth={true} offset={0} duration={500}>Home</RouterLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-200} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-150} duration={500}>Contacts</ScrollLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
