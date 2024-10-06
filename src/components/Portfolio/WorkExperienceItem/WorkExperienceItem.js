// WorkExperienceItem.js
import React, { useState, useEffect, useRef } from 'react';
import './WorkExperienceItem.scss'; // Import SCSS file for styling

import SparkyAnimationImg from '../../../assets/images/portfolio/SparkyAnimation.jpg'
import AsindoKaryaImg from '../../../assets/images/portfolio/AsindoKarya.jpg'

export const workExperienceItems = [
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

const WorkExperienceItem = ({ company, jobTitle, jobLevel, period, descriptions, imageUrl, largerImageUrl , urls }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleImageClick = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the document
    toggleOverlay();
  };

  return (
    <div className="portfolio-item">
      <div className="description">
        <h2>{company}</h2>
        <h3>{jobLevel}: {jobTitle}</h3>
        <h3>Period: {period}</h3>
        <div className="descriptions">
            {descriptions.map((sentence, index) => (
                <p key={index}>{sentence}</p>
            ))}
        </div>
        {urls && 
            <div className="urls">
            {urls.map((url, index) => (
              <a key={index} href={url.url} target="_blank" rel="noopener noreferrer">{url.label}</a>
            ))}
          </div>
        }
      </div>
      
      <div className="image">
        {/* <div 
            className={`overlay ${showOverlay ? 'show' : ''}`}
            style={{ display: showOverlay ? 'block' : 'none' }}
            ref={overlayRef}
        >
          <img src={largerImageUrl} alt={title} />
        </div> */}
        <img
          src={imageUrl}
          alt={company}
          onClick={handleImageClick}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default WorkExperienceItem;