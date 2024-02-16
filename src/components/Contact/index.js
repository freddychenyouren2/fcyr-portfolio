import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()
    const contactMe = "Contact Me"
    const contactMeArray = Array.from({length: contactMe.length}, (_, i) => contactMe[i])

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_7cgajxr', 'template_9t4asg8', form.current, '1btdnGY74EBlWp01d')
          .then(
            () => {
              alert('Message successfully sent! Thank you very much for writing to me! :D')
              window.location.reload(false)
            },
            (error) => {
              alert('OOPS! Failed to send the message, please try again :/', error)
              console.log("Error sending message: ", error)
            }
          )
      }
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            stringArray={contactMeArray}
                            index={15}/>
                    </h1>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                        </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact