import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background glowing shapes */}
            <div className="bg-glow shape-1 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
                    >
                        Hitayush Dange
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl md:text-2xl text-primary font-medium mb-6 h-8"
                    >
                        <Typewriter
                            options={{
                                strings: ['CSE Student', 'Python Developer', 'Aspiring Full-Stack Engineer'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed"
                    >
                        I am a Computer Science student passionate about building real-world applications and exploring AI, data
                        science, and modern web technologies. I focus on writing clean, efficient, and scalable code.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/30">
                            View Projects
                        </a>
                        <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg transition-colors">
                            Download Resume
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary font-medium rounded-lg transition-colors">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
