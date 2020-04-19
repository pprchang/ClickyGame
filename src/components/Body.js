import React from 'react';
import BodyTitle from './BodyTitle';
import BodySection from './BodySection';
import BodyFooter from './BodyFooter';

function Body() {
  return (
    <div>
      <BodyTitle title='Clicky Game' />
      <br></br>
      <BodySection />
      <br></br>
      <BodyFooter />
    </div>
  );
}

export default Body;
