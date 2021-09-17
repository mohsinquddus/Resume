import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ParticlesEffect from "./components/Particles";
import "./App.css";

function App() {
  return (
    <Fragment>
      <ParticlesEffect />
      <NavBar />
      <Main />
      <Projects />
      <Skills />
      <Courses />
      <Footer />
    </Fragment>
  );
}

export default App;
