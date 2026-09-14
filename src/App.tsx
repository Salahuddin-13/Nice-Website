import { useReveal } from "./hooks/useScroll";
import Nav from "./components/Nav";
import Hero, { Ticker } from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  useReveal();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
