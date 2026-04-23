import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github as GithubIcon, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: false, error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: false });

        try {
            if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
                console.error("EmailJS environment variables are missing!");
                throw new Error("Missing EmailJS environment variables.");
            }

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );

            if (result.text === 'OK') {
                setStatus({ submitting: false, success: true, error: false });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ submitting: false, success: false, error: true });
        }
    };

    const inputClasses =
        'w-full px-5 py-4 rounded-xl bg-canvas border border-ink-faint/30 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-ink-faint font-serif text-base';

    return (
        <section id="contact" className="py-32 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-16 text-center"
                >
                    <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                        Let's <span className="font-serif italic font-normal text-ink-muted">talk.</span>
                    </h2>
                    <div className="section-divider mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-canvas-alt p-8 sm:p-10 rounded-3xl border border-ink-faint/20"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-xs font-semibold text-ink-muted mb-2 uppercase tracking-widest">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-xs font-semibold text-ink-muted mb-2 uppercase tracking-widest">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-xs font-semibold text-ink-muted mb-2 uppercase tracking-widest">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            {status.success && (
                                <div className="p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-sm font-medium">
                                    Message sent successfully!
                                </div>
                            )}
                            {status.error && (
                                <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium">
                                    Failed to send message. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="w-full py-4 px-6 bg-ink text-canvas font-semibold rounded-xl hover:bg-accent transition-colors flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
                            >
                                {status.submitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-canvas-alt border border-ink-faint/20 p-8 sm:p-10 rounded-3xl">
                            <h3 className="text-2xl font-bold text-ink mb-3 tracking-tight">
                                Connect directly
                            </h3>
                            <p className="text-ink-muted font-serif leading-relaxed mb-8">
                                Feel free to reach out for collaborations, opportunities,
                                or just to say hi. I'm always open to discussing new
                                projects and ideas.
                            </p>

                            <div className="space-y-3">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hitayushdange@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-canvas transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-canvas border border-ink-faint/20 rounded-full flex items-center justify-center text-ink-muted group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-0.5">Email</p>
                                        <p className="font-medium text-ink text-sm">hitayushdange@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/hitayush-dange-65831a38b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-canvas transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-canvas border border-ink-faint/20 rounded-full flex items-center justify-center text-ink-muted group-hover:bg-[#0077b5] group-hover:text-white group-hover:border-[#0077b5] transition-all">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-0.5">LinkedIn</p>
                                        <p className="font-medium text-ink text-sm">Hitayush Dange</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/hitayush"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-canvas transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-canvas border border-ink-faint/20 rounded-full flex items-center justify-center text-ink-muted group-hover:bg-ink group-hover:text-canvas group-hover:border-ink transition-all">
                                        <GithubIcon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-0.5">GitHub</p>
                                        <p className="font-medium text-ink text-sm">hitayush</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
