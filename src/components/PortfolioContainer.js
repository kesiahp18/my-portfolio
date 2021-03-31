import React, { useState } from 'react';
import Nav from './Nav';
import About from './Header';
import Contact from './Contact';
import Works from './Works';
import Footer from './Footer';

function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Works');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'WORKS':
        return <Works />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default Portfolio;