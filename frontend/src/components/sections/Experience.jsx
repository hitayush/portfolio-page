import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experienceData } from '../../data/content';

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                        Experience
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                        Work
                        <br />
                        <span className="font-serif italic font-normal text-ink-muted">experience.</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="flex flex-col gap-8">
                    {experienceData.map((exp, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-canvas-alt rounded-3xl border border-ink-faint/20 overflow-hidden hover:border-accent/30 transition-all duration-500"
                        >
                            <div className="p-8 sm:p-10 lg:p-12">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-baseline gap-4">
                                        <span className="editorial-number text-4xl sm:text-5xl">
                                            {exp.num}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-subtle border border-accent/20 rounded-full text-xs font-semibold text-accent tracking-wide">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-2 leading-tight">
                                    {exp.role}
                                </h3>

                                <div className="flex items-center gap-3 mb-8">
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg sm:text-xl font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-2"
                                    >
                                        {exp.company}
                                        <ExternalLink size={16} className="opacity-60" />
                                    </a>
                                    <span className="text-ink-faint">·</span>
                                    <span className="text-ink-muted font-serif text-base italic">
                                        {exp.type}
                                    </span>
                                </div>

                                <ul className="space-y-3">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-ink-muted font-serif text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 bg-accent/60 rounded-full mt-2.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

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
