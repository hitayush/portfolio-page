import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
            let current = 'home';

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 200) {
                    current = id;
                }
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="min-h-screen bg-canvas">
            <Navbar activeSection={activeSection} />

            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
