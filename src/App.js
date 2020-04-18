import React from 'react';
import FixHeader from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <FixHeader
        title='Clicky Game'
        direction='Click an image to begin!'
        score='0'
        topScore='0'
      />
      <Body />
    </div>
  );
}

export default App;
