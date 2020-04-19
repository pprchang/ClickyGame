import React from 'react';

function BodyTitle(props) {
  return (
    <div>
      <div className='jumbotron jumbotron-fluid bg-dark'>
        <div className='container'>
          <h1 className='display-1 font-weight-bold text-center text-white'>
            {props.title}
          </h1>
          <p className='lead text-center'>
            <h5 className='text-white'>
              Click on an image to earn points, but don't click on any more than
              once!
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyTitle;
