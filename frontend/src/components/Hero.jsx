import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
    const { scrollY } = useScroll();
    const imageOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const imageY = useTransform(scrollY, [0, 500], [0, 150]);
    const imageScale = useTransform(scrollY, [0, 500], [1, 0.85]);

    // Staggered text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-transparent">
            {/* Background glowing shapes */}
            <div className="bg-glow shape-1 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="mb-2">
                        <span className="uppercase tracking-[0.2em] text-zinc-400 text-sm md:text-base font-semibold">
                            Welcome
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-6 text-white"
                    >
                        <span className="block opacity-90">Hi, I'm</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-zinc-500">
                            Hitayush.
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="text-2xl md:text-4xl text-zinc-300 font-light mb-8 h-12"
                    >
                        <Typewriter
                            options={{
                                strings: ['CSE Student.', 'Python Developer.', 'Aspiring Full-Stack.'],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 30,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed font-light"
                    >
                        We are decoding meanings. I am passionate about building real-world applications and exploring AI, data
                        science, and modern web technologies. Bridging the gap between consultancy and execution.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-6 items-center"
                    >
                        <a href="#projects" className="relative hidden md:inline-flex group">
                            <span className="absolute inset-0 bg-white blur-md opacity-30 group-hover:opacity-50 transition-opacity rounded-full"></span>
                            <span className="relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm text-center w-full md:w-auto">
                                View Projects
                            </span>
                        </a>
                        <a href="#projects" className="md:hidden w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm text-center">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-zinc-700 hover:border-white font-semibold rounded-full transition-all uppercase tracking-widest text-sm text-zinc-300 hover:text-white w-full md:w-auto text-center hover:bg-white/5">
                            Let's Talk
                        </a>
                    </motion.div>
                </motion.div>

                {/* Dynamic Floating Profile Image */}
                <motion.div 
                    style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
                    className="hidden lg:block relative shrink-0"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            filter: 'blur(0px)',
                            y: [0, -15, 0]
                        }}
                        transition={{ 
                            opacity: { duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] },
                            scale: { duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] },
                            filter: { duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="relative w-[380px] h-[480px] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl group"
                    >
                        {/* Glow and Fade Effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#030303_110%)] z-20 pointer-events-none group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030303] to-transparent z-20 pointer-events-none opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>

                        <img 
                            src="/profile.jpg" 
                            alt="Hitayush" 
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-[1.03] group-hover:scale-100"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <motion.div 
                        animate={{ y: [0, 50] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
