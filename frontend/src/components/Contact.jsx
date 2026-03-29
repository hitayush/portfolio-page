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
            // Using EmailJS to send the form data
            // Log env variables to check if Vite loaded them (Warning: don't leave this in production)
            if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
                console.error("EmailJS environment variables are missing! Did you restart the Vite dev server after creating the .env file?");
                throw new Error("Missing EmailJS environment variables.");
            }

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
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

    return (
        <section id="contact" className="py-32 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Let's Talk.
                    </h2>
                    <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm font-semibold">
                        Get in touch
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/5 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/5 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/5 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 resize-none"
                                ></textarea>
                            </div>

                            {status.success && (
                                <div className="p-4 bg-emerald-900/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-medium">
                                    Message sent successfully!
                                </div>
                            )}
                            {status.error && (
                                <div className="p-4 bg-red-900/20 text-red-400 border border-red-500/20 rounded-xl text-sm font-medium">
                                    Failed to send message. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="w-full py-4 px-6 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status.submitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-gradient-to-br from-zinc-900/50 to-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] text-white">
                            <h3 className="text-3xl font-bold mb-6 tracking-tight">Connect directly</h3>
                            <p className="text-zinc-400 font-light leading-relaxed mb-10 text-lg">
                                Feel free to reach out for collaborations, opportunities, or just to say hi! I'm always open to discussing new projects and creative ideas.
                            </p>

                            <div className="space-y-6">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hitayushdange@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:bg-white/5 hover:border-white/10 transition-all group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                                        <p className="font-medium text-lg">hitayushdange@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/hitayush-dange-65831a38b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:bg-white/5 hover:border-white/10 transition-all group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#0077b5] group-hover:border-[#0077b5] group-hover:text-white transition-colors duration-300">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">LinkedIn</p>
                                        <p className="font-medium text-lg">Hitayush Dange</p>
                                    </div>
                                </a>

                                <a href="https://github.com/hitayush" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:bg-white/5 hover:border-white/10 transition-all group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <GithubIcon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">GitHub</p>
                                        <p className="font-medium text-lg">hitayush</p>
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
