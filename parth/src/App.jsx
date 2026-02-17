import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sectionRefs = {
    home: useRef(null),
    projects: useRef(null),
    // add more if needed: services: useRef(null), about: useRef(null), etc.
  };

  const scrollToSection = (sectionName) => {
    const ref = sectionRefs[sectionName];
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={sectionRefs.home}>
        <Hero scrollToProjects={() => scrollToSection("projects")} />
      </div>
      <Services />
      <About />
      <Skills />
      <div ref={sectionRefs.projects}>
        <Projects />
      </div>
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;