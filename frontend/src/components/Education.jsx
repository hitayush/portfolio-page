import { motion } from 'framer-motion';

export default function Education() {
    const educationData = [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'GH Raisoni College of Engineering & Management, Nagpur',
            duration: '2024 – 2028',
            score: 'CGPA: 7.5',
            num: '01',
        },
        {
            degree: 'Higher Secondary (12th)',
            institution: 'General Sciences',
            duration: '',
            score: '74%',
            num: '02',
        },
    ];

    return (
        <section id="education" className="py-32 relative bg-canvas-alt">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                        Education
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                        Academic
                        <br />
                        <span className="font-serif italic font-normal text-ink-muted">journey.</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="flex flex-col">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-10 border-b border-ink-faint/30 group"
                        >
                            {/* Number */}
                            <span className="editorial-number text-3xl sm:text-4xl shrink-0 w-12">
                                {item.num}
                            </span>

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-1 group-hover:text-accent transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-ink-muted font-serif text-base sm:text-lg mb-2">
                                    {item.institution}
                                </p>
                            </div>

                            {/* Meta */}
                            <div className="sm:text-right shrink-0 flex sm:flex-col gap-4 sm:gap-1">
                                {item.duration && (
                                    <span className="text-sm text-ink-muted tracking-wide">
                                        {item.duration}
                                    </span>
                                )}
                                <span className="text-sm font-semibold text-accent tracking-wide">
                                    {item.score}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
