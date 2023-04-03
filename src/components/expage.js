import React from 'react';
import './fonts.css';


function Expage({ color, textColor, title, paragraph, fontOne, fontTwo }) {
  const boxStyle = {
    backgroundColor: color,
    color: textColor,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: '12%'
  };

  // Font style looks as follows:
  // fontFamily: 'Oswald, sans-serif',

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
      {/* <h1 style={font}>Welcome to my website!</h1> */}
      <h2 style={titleStyle}>{title}</h2>
      <p style={paragraphStyle}>{paragraph}</p>
    </div>
  );
}

export default Expage;
