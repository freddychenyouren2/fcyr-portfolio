import LogoFSub from '../../assets/images/F-logo-white-sub-transparent.png'
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello! This is

                <div className='cursive-text'>Freddy Chen You Ren</div>
                <br />
                
                </h1>
                <h2>Year 2 Computer Science undergraduate at National University of Singapore.</h2>
                <h2>Actively seeking for Summer Internship!</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME!
                </Link>
            </div>

        </div>
    )
}
export default Home