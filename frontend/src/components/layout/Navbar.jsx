import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/content';

export default function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-canvas/90 backdrop-blur-md shadow-[0_1px_0_0_var(--ink-faint)] py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-12">
                    <button
                        onClick={() => scrollTo('home')}
                        className="text-lg font-semibold text-ink tracking-tight cursor-pointer hover:text-accent transition-colors"
                    >
                        Hitayush<span className="text-accent">.</span>
                    </button>

                    {/* Desktop Nav — tightened gaps for 7 links */}
                    <div className="hidden md:flex items-center">
                        <ul className="flex gap-5 lg:gap-7">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className={`relative text-[13px] tracking-wide font-medium transition-colors pb-1 ${
                                            activeSection === link.id
                                                ? 'text-ink'
                                                : 'text-ink-muted hover:text-ink'
                                        }`}
                                    >
                                        {link.label}
                                        {activeSection === link.id && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full"
                                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                            />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-ink-muted hover:text-ink focus:outline-none p-1"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-canvas border-t border-ink-faint/30"
                    >
                        <div className="px-5 pt-3 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollTo(link.id)}
                                    className={`block w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                                        activeSection === link.id
                                            ? 'text-accent bg-accent-subtle'
                                            : 'text-ink-muted hover:text-ink hover:bg-canvas-alt'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
