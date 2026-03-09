import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded">
                        About Me
                    </h2>

                    <div className="bg-card dark:bg-slate-800 rounded-2xl p-8 backdrop-blur-sm shadow-sm border border-slate-200 dark:border-slate-700">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Hello! I am a dedicated Computer Science student with a strong drive for learning and building
                            impactful software. My journey involves breaking down complex real-world problems into logical
                            solutions.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Strong foundation in Python",
                                "Exploring Data Science & AI",
                                "Learning Full-Stack Development",
                                "Focused on DSA & Problem Solving"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                                    <span className="text-primary font-bold">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
