import './index.scss'
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';

import VolunteerHubImg from '../../assets/images/portfolio/VolunteerHub.png'
import NushoplahImg from '../../assets/images/portfolio/NUShopLah-logo-crop.png'
import NushoplahPoster from '../../assets/images/portfolio/NUShopLah-milestone-3-poster.png'
import ToothTrackerImg from '../../assets/images/portfolio/ToothTracker.png'

import SparkyAnimationImg from '../../assets/images/portfolio/SparkyAnimation.jpg'
import AsindoKaryaImg from '../../assets/images/portfolio/AsindoKarya.jpg'

const portfolioItems = [
  {
    title: 'Project VolunteerHub Hack4Good',
    descriptions: [
      "Collaborated in a team of 4 to develop a mobile application to address volunteer management systems for non-profit organization Big At Heart as part of 2024 Google Developer Student Club (DSC) Hack4Good Hackathon.",
    ],
    imageUrl: VolunteerHubImg,
    largerImageUrl: 'https://github.com/cedricyeeky/dsc-app',
    urls: [
      { label: 'GitHub Repository', url: 'https://github.com/cedricyeeky/dsc-app' },
      { label: 'Prototype Youtube Video Demo', url: 'https://www.youtube.com/watch?v=wcilvO6fVeM' },
    ],
  },
  {
    title: 'Project NUShopLah! NUS Orbital',
    descriptions: [
      "Collaborated in a pair project and developed a mobile application over 2023 Summer.",
      "The app is created with an intuitive and simple to use user interface for a loyalty program within NUS premises to benefit NUS students, staff and retail shops/dining outlets on campus.",
    ],
    imageUrl: NushoplahImg,
    largerImageUrl: NushoplahPoster,
    urls: [
      { label: 'GitHub Repository', url: 'https://github.com/cedricyeeky/orbital_NUShopLah-' },
      { label: 'Submission Video Demonstration', url: 'https://youtu.be/aHcJwOJfc_k' },
      { label: 'Project Documentation', url: 'https://docs.google.com/document/d/1Ul5OGAREQfsVf_9thCyU-GkKqIIYQ2y1SyxIq_hZAFo/edit'}
    ],
  },
  {
    title: 'Project ToothTracker',
    descriptions: [
      "Collaborated in a team of 5 to develop a dental clinic management Java desktop application. This is part of CS2103T Software Eningeering Course in NUS.",
      "Software engineering practices like Developer Guide, User Guide, Testing and Bug triaging are emphasised.",
    ],
    imageUrl: ToothTrackerImg,
    largerImageUrl: NushoplahPoster,
    urls: [
      { label: 'GitHub Repository', url: 'https://github.com/AY2324S1-CS2103T-W10-3/tp'},
      { label: 'ToothTracker Website', url: 'https://ay2324s1-cs2103t-w10-3.github.io/tp/'}
    ],
  },
  // Add more portfolio items as needed
];


const workExperienceItems = [
  {
    company: 'Sparky Animation PTE LTD',
    jobTitle: 'Software Developer',
    jobLevel: 'Internship',
    period: 'May 2024 - August 2024',
    descriptions: [
      "Redesigned Internal Web Application Portal for animation production in HTML, CSS and JavaScript, enhancing User Interface (UI) and User Experience(UX).",
      "This is a highly independent solo web programming project and is made as a credit-bearing internship for University.",
      "Emphasis is on User-centered Design, visual hierarchy and intuitiveness, while adhering to proper software principles like Separation of Concerns, code readability and scalability.", 
    ],
    imageUrl: SparkyAnimationImg,
    largerImageUrl: '',
    urls: [
      { label: 'Sparky Animation Website', url: 'https://sparkyanim.com/'}
    ],
  },
  {
    company: 'Asindo Karya',
    jobTitle: 'Procurement Assitant',
    jobLevel: 'Freelance',
    period: 'Nov 2020 - Present',
    descriptions: [
      "Assist in the procurement of primarily marine supply and safety goods with regional suppliers like Singapore, Japan, and South Korea.",
    ],
    imageUrl: AsindoKaryaImg,
    largerImageUrl: 'https://www.facebook.com/ASINDOKARYA/',
    urls: [
      { label: 'Asindo Karya Website', url: 'https://asindokarya.com/' },
      { label: 'Shop Online at Tokopedia', url: 'https://www.tokopedia.com/asindokarya' },
      { label: 'Asindo Karya Facebook Page', url: 'https://www.facebook.com/ASINDOKARYA/' },

    ],
  },
];

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolioType, setPortfolioType] = useState('Computing Projects') // Toggle with 'work'

    const togglePortfolioType = (portfolioType) => {
      let content = document.getElementsByClassName('content')
      content[0].style.animation = "fadeOut 1s ease-in-out backwards"
      setTimeout(() => {
        if (portfolioType === "Computing Projects") {
          setPortfolioType("Work Experience")
        } else {
          setPortfolioType("Computing Projects")
        }
        content[0].style.animation = "fadeIn 1s ease-in-out backwards"
      }, 900)
    }

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 2500)
      }, [])
      

      return (
        <>
          <div className="container portfolio-page">
              
              <div className='portfolio-zone'>
                  <div className='subtitle'>
                      <h1>{portfolioType}</h1>
                  </div>

                  <div className='toggle-portfolio-button-container'>
                    See also:
                    {portfolioType === "Work Experience" ? (
                      <button onClick={() => togglePortfolioType(portfolioType)}>Computing Projects</button>
                    ) : (
                      <button onClick={() => togglePortfolioType(portfolioType)}>Work Experience</button>
                    )}
                  </div>

                  <div className='content'>
                    {portfolioType === 'Computing Projects' && portfolioItems.map((item, index) => (
                      <PortfolioItem
                      key={index}
                      title={item.title}
                      descriptions={item.descriptions}
                      imageUrl={item.imageUrl}
                      largerImageUrl={item.largerImageUrl}
                      urls={item.urls}
                      />
                    ))}

                    {portfolioType === 'Work Experience' && workExperienceItems.map((item, index) => (
                      <WorkExperienceItem
                      key={index}
                      company={item.company}
                      jobTitle={item.jobTitle}
                      jobLevel={item.jobLevel}
                      period={item.period}
                      descriptions={item.descriptions}
                      imageUrl={item.imageUrl}
                      largerImageUrl={item.largerImageUrl}
                      urls={item.urls}
                      />
                    ))}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
              </div>
              
          </div>
          <Loader type='pacman' />
        </>
      );
}

export default Portfolio



