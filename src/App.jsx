import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LaceDivider, LacePattern, RedStripe } from './components/LaceDivider';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <RedStripe />
        <Projects />
        <LacePattern variant="light" />
        <About />
        <LaceDivider variant="light" />
        <Contact />
      </main>
      <RedStripe />
      <Footer />
    </>
  );
}

export default App;
