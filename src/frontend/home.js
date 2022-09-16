import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import Header from "./header";

let particlesConfig = require("../particles.json");

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <header id="intro">
      <Header />
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        style={{ height: "100%" }}
      />
    </header>
  );
};

export default Home;
