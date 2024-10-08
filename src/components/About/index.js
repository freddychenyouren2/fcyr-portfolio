import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faDocker, faGitAlt, faGithub, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutMe = "About "
    const aboutMeArray = Array.from({length: aboutMe.length}, (_, i) => aboutMe[i])

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

    return (
        <>
        
        <div className='container about-page'>
            <div className='stage-cube-cont'>
                <div className='cubeSpinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faDocker} color='#1D63ED'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color='#4584b6'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color='#f89820'/>
                    </div>
                    <div className='face7'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ffffff'/>
                    </div>
                    <div className='face8'>
                        <FontAwesomeIcon icon={faGithub} color='#000000'/>
                    </div>

                </div>

            </div>

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        stringArray={aboutMeArray}
                        index={15}
                    />
                    <span className={letterClass}>FCYR </span>
                </h1>

                <p>
                    I am a goal-oriented team player who strives for excellence
                    in creating solutions for society. I embrace opportunities that 
                    offer professional challenges utilizing interpersonal skills,
                    excellent time management, and problem-solving skills.
                    I wish to enjoy contributing meaningfully in a conducive and supportive environment with great sense of accomplishment.
                    I am looking for a rewarding Summer Internship in 2025 (May to August) or part-time flexible timing internships. 
                </p>
                <p>
                    In striving towards my ambitions, I place high importance on cultivating 
                    meaningful relationships rooted strongly in ethical principles to guide 
                    my thoughts and actions in working with or leading others.
                    I am eager to bring my passion for technology, entrepreneurial spirit, 
                    and commitment to excellence to a dynamic team. I appreciate environments 
                    that value innovation, collaboration, and the pursuit of meaningful solutions.
                </p>
                <p>
                    Let's connect and explore how my skill set and dedication can bring more success! 
                    I am ready to turn challenges into opportunities and make a lasting impact.
                </p>
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

export default About