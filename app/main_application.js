import React from 'react';
import ContentWrapper from './components/content_wrapper.js';

const MainApplication = (props) => {
  return(
      <div className="container">
        <ContentWrapper states={props}/>
      </div>
  );
}

export default MainApplication;
