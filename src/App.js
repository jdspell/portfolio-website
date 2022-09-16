import React from "react";

import Home from "./frontend/home";
import About from "./frontend/about";
import Projects from "./frontend/projects";
import Contact from "./frontend/contact";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
