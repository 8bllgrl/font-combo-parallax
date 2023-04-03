import React from 'react';
import './fonts.css';

function ParallaxPage({ imageUrl, color, textColor, title, paragraph, fontOne, fontTwo }) {
  const boxStyle = {
    backgroundColor: color,
    color: textColor,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle = {
    fontSize: '4rem',
    textAlign: 'center',
    margin: '4vh',
    fontFamily: fontOne,
  };

  const paragraphStyle = {
    fontSize: '3rem',
    textAlign: 'center',
    margin: '0',
    fontFamily: fontTwo,
  };

  return (
    <div style={boxStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={paragraphStyle}>{paragraph}</p>
    </div>
  );
}

export default ParallaxPage;
