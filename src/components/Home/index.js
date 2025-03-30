import { Link } from 'react-router-dom'
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import Freddy_Chen_You_Ren_Resume from '../../assets/documents/Freddy_Chen_You_Ren_Resume_Mar_2025.pdf';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
  
    const name = "Freddy Chen You Ren"
    const nameArray = Array.from({length: name.length}, (_, i) => name[i])
    // const nameArray2 = ['F', 'r', 'e', 'd', 'd', 'y', ' ', 'C', 'h', 'e', 'n', ' ', 'Y', 'o', 'u', ' ', 'R', 'e', 'n']

    // const description = "Year 2 Computer Science undergraduate at National University of Singapore."
    // const descriptionArray = Array.from({length: description.length}, (_, i) => description[i])
    // const highlight = "Actively seeking for Summer Internship!"
    // const highlightArray = Array.from({length: highlight.length}, (_, i) => highlight[i])
    // const highlight2 = "(May to Aug 2024)"
    // const highlight2Array = Array.from({length: highlight2.length}, (_, i) => highlight2[i])
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
                        
    return (
        <>
        <div className="container home-page">
            <Logo />
            <div className="text-zone">
                <h1>
                <span className={letterClass}>Hello! </span>
                <span className={`${letterClass} _11`}> </span>
                <span className={`${letterClass} _12`}>This </span>
                <span className={`${letterClass} _13`}> </span>
                <span className={`${letterClass} _14`}>is</span>

                <div className='cursive-text'>
                <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={nameArray}
                        index={15}
                />
                </div>
                <br />
                
                </h1>

                <h2>
                Year 3 Computer Science undergraduate at National University of Singapore (NUS).
                <br />
                Pursuing 2nd Major in Management at NUS Business School.
                <br />
                <br />
                Actively Seeking for a rewarding 2025 Summer Internship! (May to Aug 2025).
                <br />
                <br />
                </h2>
                <h3 className='post-script'>(PS: Flexible timing off-cycle internships may work too.) </h3>
                
                <Link to="/fcyr-portfolio/contact" className='flat-button'>
                    CONTACT ME!
                </Link>
                <t />
                <a href={Freddy_Chen_You_Ren_Resume} 
                    className='resume-button' 
                    download='Freddy Chen You Ren Resume'
                >
                    DOWNLOAD LATEST RESUME (MAR 2025)
                </a>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home