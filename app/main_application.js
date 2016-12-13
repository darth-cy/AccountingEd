import React from 'react';
import FirstComponent from './components/first_component.js';

const MainApplication = (props) => {
  return(
      <div className="container">
        <FirstComponent outputContent={props.outputContent} />
      </div>
  );
}

export default MainApplication;
