import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const aboutMe = "About Me"
    const aboutMeArray = Array.from({length: aboutMe.length}, (_, i) => aboutMe[i])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        stringArray={aboutMeArray}
                        index={15}
                    />
                </h1>

                <p>
                    I am a goal-oriented team player who strives for excellence
                    in creating solutions for society. I embrace opportunities that 
                    offer professional challenges utilizing interpersonal skills,
                    excellent time management, and problem-solving skills.
                    I am actively looking for a Summer Internship in 2024 (May to August). 
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
                
            </div>
        </div>
    )
}

export default About