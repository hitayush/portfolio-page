import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming',
            skills: ['Python', 'C++', 'JavaScript'],
        },
        {
            title: 'Web',
            skills: ['HTML', 'CSS', 'React (Learning)', 'Node.js (Learning)'],
        },
        {
            title: 'Data',
            skills: ['Pandas', 'NumPy', 'Basic ML'],
        },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code'],
        },
    ];

    return (
        <section id="skills" className="py-32 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                        Skills & Tools
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                        Technical
                        <br />
                        <span className="font-serif italic font-normal text-ink-muted">toolkit.</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="group"
                        >
                            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-5 flex items-center gap-3">
                                <span className="w-5 h-[1px] bg-accent" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                                        className="px-4 py-2.5 bg-canvas-alt border border-ink-faint/20 rounded-xl text-sm font-medium text-ink hover:border-accent hover:text-accent hover:bg-accent-subtle transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
