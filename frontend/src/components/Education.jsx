import { motion } from 'framer-motion';

export default function Education() {
    const educationData = [
        {
            degree: "B.Tech in Computer Science",
            institution: "GH Raisoni College of Engineering & Management, Nagpur",
            duration: "Year: 2024–2028",
            score: "Current CGPA: 7.5"
        },
        {
            degree: "Higher Secondary (12th Grade)",
            institution: "General Sciences",
            duration: "",
            score: "Percentage: 74%"
        }
    ];

    return (
        <section id="education" className="py-32 bg-transparent relative">
            <div className="bg-glow shape-2 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Academic Journey.
                    </h2>
                    <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm font-semibold">
                        Education
                    </p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10 before:to-transparent">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-[#0a0a0a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-500 group-hover:border-white/30"
                            >
                                <div className="w-3 h-3 bg-zinc-600 rounded-full group-hover:bg-white transition-colors duration-500"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10"
                            >
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{item.degree}</h3>
                                <p className="text-zinc-300 font-light mb-4">{item.institution}</p>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {item.duration && <span className="text-sm font-light text-zinc-500 uppercase tracking-wider">{item.duration}</span>}
                                    <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold tracking-wider uppercase border border-white/5">
                                        {item.score}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
