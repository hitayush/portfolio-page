import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.offsetTop - 80;
            window.scrollTo({ top, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#030303]/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <button
                        onClick={() => scrollTo('home')}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer"
                    >
                        Hitayush Dange
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className={`nav-link text-sm uppercase tracking-widest font-semibold transition-all hover:text-white ${activeSection === link.id ? 'text-white' : 'text-zinc-500'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://docs.google.com/document/d/1bPsQV1vOeQ2iPvF31bdzyCiPK-QghiN2BIj3wsUWwIA/edit?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest font-bold transition-all text-black hover:bg-zinc-200 bg-white px-5 py-2.5 rounded-full"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a] shadow-2xl border-t border-zinc-800"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollTo(link.id)}
                                    className={`block w-full text-left px-3 py-3 rounded-md text-sm uppercase tracking-widest font-semibold ${activeSection === link.id
                                            ? 'text-white bg-white/5'
                                            : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href="https://docs.google.com/document/d/1bPsQV1vOeQ2iPvF31bdzyCiPK-QghiN2BIj3wsUWwIA/edit?usp=drive_link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full text-center px-3 py-3 rounded-md text-sm uppercase tracking-widest font-bold text-black bg-white hover:bg-zinc-200 mt-4"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
