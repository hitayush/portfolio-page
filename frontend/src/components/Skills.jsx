import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["Python", "C++", "JavaScript"]
        },
        {
            title: "Web",
            skills: ["HTML", "CSS", "React (Learning)", "Node.js (Learning)"]
        },
        {
            title: "Data",
            skills: ["Pandas", "NumPy", "Basic Machine Learning"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-12 after:h-1 after:bg-primary after:rounded">
                        My Skills
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-card dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group"
                            >
                                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors">{category.title}</h3>
                                <ul className="space-y-3">
                                    {category.skills.map((skill, skillIdx) => (
                                        <li key={skillIdx} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
