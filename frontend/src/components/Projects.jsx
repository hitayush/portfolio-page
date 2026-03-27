import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Career Guidance AI Chatbot",
            desc: "A beginner-friendly, vibe-coded career guidance AI chatbot built using React and the Hugging Face API to help students choose paths based on their interests.",
            tags: ["React", "Hugging Face API", "AI"],
            github: "https://github.com/hitayush/minorproject1.git",
            live: "/deploy-status.html"
        },
        {
            title: "Data Analysis Dashboard",
            desc: "A professional dashboard for data visualization and generating actionable insights from complex datasets.",
            tags: ["Python", "Pandas", "Matplotlib"],
            github: "#",
            live: "/deploy-status.html"
        },
        {
            title: "Tic Tac Toe",
            desc: "A classic, fully playable browser-based Tic Tac Toe game featuring interactive logic, grid design, and win-state detection.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/hitayush/TICTACTOE",
            live: "https://tictactoee28.netlify.app/"
        }
    ];

    const defaultTiltOptions = {
        reverse: false,
        max: 5,
        perspective: 1000,
        scale: 1.01,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
        <section id="projects" className="py-32 bg-transparent relative">
            <div className="bg-glow shape-3 absolute"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Featured Works.
                    </h2>
                    <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm font-semibold">
                        Projects to scale
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                            className="h-full"
                        >
                            <Tilt options={defaultTiltOptions} className="h-full">
                                <div className="bg-[#0a0a0a] p-8 rounded-[2rem] h-full flex flex-col border border-white/5 hover:border-white/20 transition-all duration-500 group">
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-zinc-200 transition-colors">{project.title}</h3>
                                    <p className="text-zinc-400 mb-8 flex-grow font-light leading-relaxed">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="px-4 py-1.5 bg-white/5 text-zinc-300 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
                                            <Github size={18} />
                                            Code
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
                                            <ExternalLink size={18} />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
