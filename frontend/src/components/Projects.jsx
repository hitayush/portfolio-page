import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Career Guidance AI Chatbot",
            desc: "AI-based chatbot helping students choose appropriate career paths based on their interests and skills.",
            tags: ["Python", "NLP", "Web Integration"],
            github: "#",
            live: "#"
        },
        {
            title: "Python Data Analysis Dashboard",
            desc: "A professional dashboard for data visualization and generating actionable insights from complex datasets.",
            tags: ["Python", "Pandas", "Matplotlib"],
            github: "#",
            live: "#"
        },
        {
            title: "Personal Finance Tracker",
            desc: "A web application tool for daily expense tracking, categorizing spending, and basic budgeting.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "#",
            live: "#"
        }
    ];

    const defaultTiltOptions = {
        reverse: false,
        max: 15,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative">
            <div className="bg-glow shape-3 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="h-full"
                            >
                                <Tilt options={defaultTiltOptions} className="h-full">
                                    <div className="bg-card dark:bg-slate-800 p-6 rounded-2xl h-full flex flex-col shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                        <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.desc}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIdx) => (
                                                <span key={tagIdx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                                            <a href={project.github} className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                                                <Github size={18} />
                                                Code
                                            </a>
                                            <a href={project.live} className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
