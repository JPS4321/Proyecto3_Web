import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import youtube from '../../assets/icons/youtube.png';
import github from '../../assets/icons/github.png';

function Sidebar() {
  const [shouldFixPosition, setShouldFixPosition] = useState(false);
  const maxScroll = 80; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > maxScroll && !shouldFixPosition) {
        setShouldFixPosition(true);
      } else if (window.scrollY <= maxScroll && shouldFixPosition) {
        setShouldFixPosition(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldFixPosition]);

  return (
    <div className={`sidebar ${shouldFixPosition ? 'fixed-sidebar' : ''}`}>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
      <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
      <a href="https://github.com/JPS4321" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
    </div>
  );
}

export default Sidebar;
