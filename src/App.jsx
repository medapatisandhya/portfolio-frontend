import React from "react";
import Header from "./frontend/header";
import About from "./frontend/about";
import Skills from "./frontend/skills";
import Projects from "./frontend/project";
import Certificate from "./frontend/certificate";
import Experience from "./frontend/experience";
import Contact from "./frontend/contact";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificate/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default App;
