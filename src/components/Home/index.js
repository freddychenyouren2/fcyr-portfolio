import { Link } from 'react-router-dom'
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import Resume from '../../assets/documents/Freddy_Chen_You_Ren_Resume_Feb_2024_v2.pdf';

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
                Year 2 Computer Science undergraduate at National University of Singapore.
                <br />
                <br />
                Actively seeking for Summer Internship! (May to Aug 2024)
                <br />
                </h2>
                
                <Link to="/contact" className='flat-button'>
                    CONTACT ME!
                </Link>
                <t />
                <a href={Resume} className='resume-button' download>DOWNLOAD LATEST RESUME (MID-FEB 2024)</a>
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