function FontPage({ color, textColor, title, paragraph, fontOne, fontTwo }) {
  const boxStyle = {
    backgroundColor: color,
    color: textColor,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    fontSize: '4rem',
    textAlign: 'left',
    margin: '4vh',
    fontFamily: fontOne,
  };

  const paragraphStyle = {
    fontSize: '3rem',
    textAlign: 'left',
    margin: '4vh',
    marginLeft: '10vw', // Adjust the marginLeft to move the title further to the left
    fontFamily: fontTwo,
  };

  return (
    <div style={boxStyle}>
      <div>
        <h2 style={titleStyle}>{title}</h2>
        <p style={paragraphStyle}>{paragraph}</p>
      </div>
    </div>
  );
}

export default FontPage;
