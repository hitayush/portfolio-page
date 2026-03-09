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
        <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative">
            <div className="bg-glow shape-2 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded">
                        Education
                    </h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                        {educationData.map((item, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h3>
                                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                                    {item.duration && <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.duration}</p>}
                                    <p className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">{item.score}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
