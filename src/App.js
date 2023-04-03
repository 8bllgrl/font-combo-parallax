import React from 'react';
import Expage from './components/expage';
import ParallaxPage from './components/parallaxpage';
import FontPage from './components/fontPage';


function MyComponent() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is a paragraph of text.</p>
      {/* 'Oswald, sans-serif' */}
      <Expage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        color="beige"
        title="Title"
        paragraph="This is the paragraph text."
      />

      <Expage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        color="black"
        textColor="white"
        title="Black Expage"
        paragraph="This is the black Expage."
      />

      <Expage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        color="darkgray"
        title="Dark Gray Expage"
        paragraph="This is the dark gray Expage."
      />

      <Expage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        color="darkblue"
        title="Dark Blue Expage"
        paragraph="This is the dark blue Expage."
      />

      <ParallaxPage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        imageUrl="
        https://images.unsplash.com/photo-1526818655834-d62a36fda59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
        "
        title="Parallax Page"
        paragraph="This is the parallax page with a background image."
      />

      <Expage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        color="black"
        textColor="white"
        title="Black Expage"
        paragraph="This is the black Expage."
      />

      <ParallaxPage
        fontOne="Oswald, sans-serif"
        fontTwo="Oswald, sans-serif"
        imageUrl="
        https://images.unsplash.com/photo-1680241526823-470f2b661240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80        "
        title="Parallax Page"
        paragraph="This is the parallax page with a background image."
      />

      <FontPage
      title="Title Of Page"
      paragraph="This is the  page ."
      ></FontPage>
    </div>


    // </div>
  );
}

export default MyComponent;
