import React from 'react';
import ContentWrapper from './components/content_wrapper.js';
import Navbar from './components/navbar.js';
import ItemFloat from './components/item_float';

const MainApplication = (props) => {
  return(
      <div className="container-fluid">
        <ItemFloat currentSelectedItem={props.itemMoveStates.currentSelectedItem}/>
        <Navbar />
        <ContentWrapper states={props}/>
      </div>
  );
}

export default MainApplication;
