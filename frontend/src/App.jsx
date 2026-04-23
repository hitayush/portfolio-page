import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
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
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
