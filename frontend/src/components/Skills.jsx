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
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <section id="skills" className="py-32 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Technical Arsenal.
                    </h2>
                    <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm font-semibold">
                        Skills & Tools
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight relative z-10">
                                {category.title}
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {category.skills.map((skill, skillIdx) => (
                                    <li key={skillIdx} className="flex items-center space-x-3 text-zinc-400 font-light group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/item:bg-white transition-colors duration-300"></div>
                                        <span className="group-hover/item:text-zinc-200 transition-colors duration-300">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
