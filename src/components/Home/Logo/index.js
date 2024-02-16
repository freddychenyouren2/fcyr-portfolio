import './index.scss';
import LogoF from '../../../assets/images/F-orange-fire-logo-transparent.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='fire-logo' src={LogoF} alt='F Logo'/>

        </div>
    )
}

export default Logo