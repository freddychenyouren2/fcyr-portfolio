// Portfolio index.js
import './index.scss'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'react-loaders';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';

import { portfolioItems } from './PortfolioItem/PortfolioItem';
import { workExperienceItems } from './WorkExperienceItem/WorkExperienceItem';


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const { portfolioType } = useParams(); // Get portfolioType from URL
  // const [portfolioType, setPortfolioType] = useState('Computing Projects') // Toggle with 'work'
  const navigate = useNavigate();

  // Mapping of portfolio types to their data and component
  const portfolioData = {
    'Computing Projects': {
        items: portfolioItems,
        component: PortfolioItem,
    },
    'Work Experience': {
        items: workExperienceItems,
        component: WorkExperienceItem,
    },
    // Add more portfolio types here (Extra-curricular, Interests, etc.)
  };

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2500)
  }, [])

  // URL Default to 'Computing Projects' if the portfolioType doesn't exist
  const currentPortfolioType = (portfolioType || 'Computing+Projects').replace('+', ' ');
  const { items, component: Component } = portfolioData[currentPortfolioType] || {};

  // Function to render items based on selected portfolio type
  const renderPortfolioItems = () => {
    return items?.map((item, index) => (
      <Component key={index} {...item} />
    ));
  };

  // Handle portfolio type switching and updating the URL
  const togglePortfolioType = (newPortfolioType) => {
    let content = document.getElementsByClassName('content')
    content[0].style.animation = "fadeOut 1s ease-in-out backwards"
    setTimeout(() => {
      navigate(`/fcyr-portfolio/portfolio/${newPortfolioType}`); // Update the URL
      content[0].style.animation = "fadeIn 1s ease-in-out backwards";
    }, 900);
  } 

  return (
    <>
      <div className="container portfolio-page">
          <div className='portfolio-zone'>
              <div className='subtitle'>
                {/* Display Readable Title without + signs */}
                  <h1>{currentPortfolioType.replace('+',' ')}</h1> 
              </div>

              <div className='toggle-portfolio-button-container'>
                See also:
                {Object.keys(portfolioData).map((type) => (
                  type !== currentPortfolioType && (
                    <button key={type} onClick={() => togglePortfolioType(type.replace(' ', '+'))}>
                      {type.replace('+',' ')}
                    </button>
                  )
                ))}
              </div>

              <div className='content'>
                {/* {portfolioType === 'Computing Projects' && portfolioItems.map((item, index) => (
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
                ))} */}
                {renderPortfolioItems()}
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



