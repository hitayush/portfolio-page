import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/content';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Text content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="font-serif text-ink-muted text-lg mb-4 italic"
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4 text-ink"
                        >
                            {personalInfo.firstName}
                            <br />
                            {personalInfo.lastName}
                            <span className="text-ink-faint">.</span>
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-ink-muted font-light tracking-tight mb-8 min-h-[36px] font-serif"
                        >
                            <Typewriter
                                options={{
                                    strings: personalInfo.roles,
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 25,
                                }}
                            />
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-ink-muted mb-10 max-w-lg leading-relaxed font-serif"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 items-center"
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-canvas font-medium rounded-full hover:bg-accent transition-colors text-sm tracking-wide"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink-faint text-ink font-medium rounded-full hover:border-accent hover:text-accent transition-colors text-sm tracking-wide"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="hidden lg:block shrink-0"
                    >
                        <div className="relative w-[340px] h-[420px] rounded-3xl overflow-hidden shadow-[0_24px_80px_-12px_rgba(43,41,38,0.15)] border border-ink-faint/20">
                            <img
                                src="/profile.jpg"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                                }}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas/60 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-ink-faint text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} className="text-ink-faint" />
                </motion.div>
            </motion.div>
        </section>
    );
}
