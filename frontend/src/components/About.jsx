import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                                Decoding Context.
                            </h2>
                            <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm font-semibold">
                                About Me
                            </p>
                        </div>

                        <div className="md:w-2/3 bg-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-500">
                            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-10 font-light">
                                Hello! I am a dedicated Computer Science student with a strong drive for learning and building
                                impactful software. My journey involves breaking down complex real-world problems into logical
                                solutions, merging creativity with engineering.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Strong foundation in Python",
                                    "Exploring Data Science & AI",
                                    "Learning Full-Stack Development",
                                    "Focused on DSA & Problem Solving"
                                ].map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="flex items-center space-x-4 text-zinc-400 font-light"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
