import React from 'react';
import './App.css'

import MediaCard from './components/MediaCard'
import Gate from './components/Gate'

import grass from './assets/grass.JPG'

function App() {

  return (
    <div className='App'>
      <h1 className='heading'>React assignment Class 4 by - Ali Hassan Ansari</h1>
        <MediaCard name='Green Grass' title= 'The mount is covered with green grass'
          imgUrl={grass}
        />
        <Gate isOpen={false}/>
    </div>
  );
}

export default App;