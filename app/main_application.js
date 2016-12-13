import React from 'react';
import ContentWrapper from './components/content_wrapper.js';
import Navbar from './components/navbar.js';

const MainApplication = (props) => {
  return(
      <div className="container-fluid">
        <Navbar />
        <ContentWrapper states={props}/>
      </div>
  );
}

export default MainApplication;
