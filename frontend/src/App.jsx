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
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme based on system preference or saved preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

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
            <Navbar activeSection={activeSection} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

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
