import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Force dark mode
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);


    // Scroll Spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
            let current = '';

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    // Subtracted extra offset to account for sticky navbar and trigger earlier
                    if (window.scrollY >= sectionTop - 150) {
                        current = sections[i];
                    }
                }
            }

            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="min-h-screen bg-transparent transition-colors duration-300">
            <CustomCursor />
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
