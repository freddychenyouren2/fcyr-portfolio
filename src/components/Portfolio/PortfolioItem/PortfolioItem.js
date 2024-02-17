// PortfolioItem.js
import React, { useState, useEffect, useRef } from 'react';
import './PortfolioItem.scss'; // Import SCSS file for styling

const PortfolioItem = ({ title, description, imageUrl, largerImageUrl , urls }) => {
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
        <h2>{title}</h2>
        <p>{description}</p>
        {urls && 
            <div className="urls">
            {urls.map((url, index) => (
              <a key={index} href={url.url} target="_blank" rel="noopener noreferrer">{url.label}</a>
            ))}
          </div>
        }
      </div>
      
      <div className="image">
        <div 
            className={`overlay ${showOverlay ? 'show' : ''}`}
            style={{ display: showOverlay ? 'block' : 'none' }}
            ref={overlayRef}
        >
          <img src={largerImageUrl} alt={title} />
        </div>
        <img
          src={imageUrl}
          alt={title}
          onClick={handleImageClick}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default PortfolioItem;