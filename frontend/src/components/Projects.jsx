import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'Career Guidance AI Chatbot',
            desc: 'A career guidance AI chatbot built using React and the Hugging Face API. It helps students explore career paths through conversational AI — my first real dive into integrating machine learning APIs with a modern frontend.',
            tags: ['React', 'Hugging Face API', 'AI'],
            github: 'https://github.com/hitayush/minorproject1.git',
            live: '/deploy-status.html',
            num: '01',
            year: '2025',
        },
        {
            title: 'Data Analysis Dashboard',
            desc: `A professional dashboard for visualizing complex datasets and generating actionable insights. Built with Python's data science stack to explore patterns and tell stories hidden in numbers.`,
            tags: ['Python', 'Pandas', 'Matplotlib'],
            github: 'https://github.com/hitayush/Data.Dash',
            live: 'https://data-analysis-dashboard-six.vercel.app/',
            num: '02',
            year: '2026',
        },
        {
            title: 'Tic Tac Toe',
            desc: 'A classic, fully playable browser-based game with interactive logic and clean grid design. A foundational project that sharpened my understanding of DOM manipulation and game state management.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/hitayush/TICTACTOE',
            live: 'https://tictactoee28.netlify.app/',
            num: '03',
            year: '2024',
        },
    ];

    return (
        <section id="projects" className="py-32 relative bg-canvas-alt">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                        Selected Projects
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                        Featured
                        <br />
                        <span className="font-serif italic font-normal text-ink-muted">works.</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="flex flex-col gap-8">
                    {projects.map((project, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                            className="group relative bg-canvas rounded-3xl border border-ink-faint/20 overflow-hidden hover:border-accent/30 hover:shadow-[0_16px_64px_-16px_rgba(196,93,62,0.1)] transition-all duration-500"
                        >
                            <div className="p-8 sm:p-10 lg:p-12">
                                {/* Top row: number + year + links */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-baseline gap-4">
                                        <span className="editorial-number text-4xl sm:text-5xl">
                                            {project.num}
                                        </span>
                                        <span className="text-xs text-ink-muted tracking-widest uppercase font-medium">
                                            {project.year}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-ink-faint/30 flex items-center justify-center text-ink-muted hover:border-ink hover:text-ink hover:bg-ink hover:text-canvas transition-all"
                                            aria-label={`${project.title} GitHub`}
                                        >
                                            <Github size={16} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-ink-faint/30 flex items-center justify-center text-ink-muted hover:border-accent hover:text-canvas hover:bg-accent transition-all"
                                            aria-label={`${project.title} Live Demo`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* Title — editorial style with hover arrow */}
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-5 leading-tight group-hover:text-accent transition-colors duration-300 flex items-start gap-3">
                                    <span>{project.title}</span>
                                    <ArrowUpRight
                                        size={24}
                                        className="shrink-0 mt-1.5 text-ink-faint group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden sm:block"
                                    />
                                </h3>

                                {/* Description — always visible */}
                                <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-serif max-w-2xl mb-8">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3.5 py-1.5 bg-canvas-alt border border-ink-faint/20 text-ink-muted rounded-lg text-xs font-medium tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom accent line that fills on hover */}
                            <div className="h-[3px] bg-ink-faint/10">
                                <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
