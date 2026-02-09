import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 font-sans selection:bg-sky-500/30 selection:text-white overflow-hidden relative">
      <div className="bg-noise"></div>
      <div className="cursor-glow"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 -z-10"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] animate-blob"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="fixed top-[40%] left-[40%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
