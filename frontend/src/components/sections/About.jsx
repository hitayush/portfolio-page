import { motion } from 'framer-motion';
import { aboutData } from '../../data/content';

export default function About() {
    return (
        <section id="about" className="py-32 sm:py-40 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left — heading */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                                About Me
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                                Building with
                                <br />
                                <span className="font-serif italic font-normal text-ink-muted">purpose.</span>
                            </h2>
                            <div className="section-divider" />
                        </motion.div>
                    </div>

                    {/* Right — content */}
                    <div className="lg:w-2/3">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-xl sm:text-2xl text-ink-muted leading-relaxed mb-16 font-serif"
                        >
                            I'm a <span className="text-ink font-medium">Computer Science student</span> with
                            a drive for building impactful software. I break down complex problems
                            into elegant, <span className="text-accent">logical solutions</span> — merging
                            creativity with precise engineering.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {aboutData.capabilities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.5, delay: 0.08 * index }}
                                    className="p-6 rounded-2xl bg-canvas-alt border border-ink-faint/20 hover:border-accent/30 transition-colors group"
                                >
                                    <h4 className="text-ink text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-ink-muted text-sm leading-relaxed font-serif">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
