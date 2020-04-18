import React from 'react';
import CarCard from './CarCard';

function changeBackground(e) {
  e.target.style.boxShadow = '10px 10px 5px green';
}
function changeBack(e) {
  e.target.style.boxShadow = '';
}

function BodySection() {
  return (
    <div className='container'>
      <div className='row'>
        <div
          className='col-sm text-center p-0 mr-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='86' image={require('./images/86new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/240new.jpg')} />
        </div>
        <div
          className='col-sm text-center  p-0 ml-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/r34new.jpg')} />
        </div>
      </div>
      <br></br>
      <div className='row'>
        <div
          className='col-sm text-center p-0 mr-4 '
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/r35new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/r342new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0 ml-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/r343new.jpg')} />
        </div>
      </div>
      <br></br>
      <div className='row'>
        <div
          className='col-sm text-center p-0  mr-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/r352new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/rx7new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0 ml-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/slivanew.jpg')} />
        </div>
      </div>
      <br></br>
      <div className='row'>
        <div
          className='col-sm text-center p-0 mr-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/supranew.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/supra2new.jpg')} />
        </div>
        <div
          className='col-sm text-center p-0 ml-4'
          onMouseEnter={changeBackground}
          onMouseLeave={changeBack}
        >
          <CarCard name='r35' image={require('./images/supra3new.jpg')} />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default BodySection;
