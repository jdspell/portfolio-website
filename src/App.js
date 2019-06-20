import React from 'react';

import Header from './frontEndComponents/header';
import About from './frontEndComponents/about';
import Projects from './frontEndComponents/projects';
import Contact from './frontEndComponents/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
