import React from "react";

import Header from "./frontend/header";
import About from "./frontend/about";
import Projects from "./frontend/projects";
import Contact from "./frontend/contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
