import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import PortfolioItem from './PortfolioItem/PortfolioItem';

import VolunteerHubImg from '../../assets/images/portfolio/VolunteerHub.png'
import NushoplahImg from '../../assets/images/portfolio/NUShopLah-logo-crop.png'
import NushoplahPoster from '../../assets/images/portfolio/NUShopLah-milestone-3-poster.png'

const portfolioItems = [
    {
      title: 'Project VolunteerHub Hack4Good',
      description: 
        `Developed a mobile application to address volunteer management systems for non-profit organization 
        Big At Heart as part of Google Developer Student Club (DSC) Hack4Good Hackathon.
      
        View the GitHub repository by clicking on the image!`,
      imageUrl: VolunteerHubImg,
      largerImageUrl: 'https://github.com/cedricyeeky/dsc-app',
      urls: [
        { label: 'GitHub Repository', url: 'https://github.com/cedricyeeky/dsc-app' },
        { label: 'Prototype Youtube Video Demo', url: 'https://www.youtube.com/watch?v=wcilvO6fVeM' },
      ],
    },
    {
      title: 'Project NUShopLah! NUS Orbital',
      description: 
        `Developed a mobile application with an intuitive and simple to use user interface for a loyalty program within 
        NUS premises to benefit NUS students, staff and retail shops/dining outlets on campus.`,
      imageUrl: NushoplahImg,
      largerImageUrl: NushoplahPoster,
      urls: [
        { label: 'GitHub Repository', url: 'https://github.com/cedricyeeky/orbital_NUShopLah-' },
        { label: 'Submission Video Demonstration', url: 'https://youtu.be/aHcJwOJfc_k' },
        { label: 'Project Documentation', url: 'https://docs.google.com/document/d/1Ul5OGAREQfsVf_9thCyU-GkKqIIYQ2y1SyxIq_hZAFo/edit'}
      ],
    },
    // Add more portfolio items as needed
  ];

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

      

      return (
        <div className="container portfolio-page">
            <div className='portfolio-zone'>
                {portfolioItems.map((item, index) => (
                <PortfolioItem
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                largerImageUrl={item.largerImageUrl}
                urls={item.urls}
                />
                ))}
            </div>
          
        </div>
      );
}

export default Portfolio



