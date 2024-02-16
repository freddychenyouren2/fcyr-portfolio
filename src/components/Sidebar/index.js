import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoF from '../../assets/images/F-orange-fire-logo.jpg';
import LogoFSubtitle from '../../assets/images/F-logo-white-sub-red-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoF} alt="FCYR Logo" />
            <img className='sub-logo' src={LogoFSubtitle} alt="Freddy Chen You Ren" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target='_blank'
                    rel="noneferrer" 
                    // eslint-disable-next-line
                    href="https://www.linkedin.com/in/freddy-chen-you-ren-87b56b243/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel="noneferrer" 
                    // eslint-disable-next-line
                    href="https://github.com/freddychenyouren2/">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;