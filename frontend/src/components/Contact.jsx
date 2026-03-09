import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github as GithubIcon, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: false, error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: false });

        try {
            // Connect to the existing Express backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: false });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ submitting: false, success: false, error: true });
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-12 after:h-1 after:bg-primary after:rounded">
                        Contact Me
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-card dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="How can I help you?"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                                    ></textarea>
                                </div>

                                {status.success && (
                                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm">
                                        Message sent successfully!
                                    </div>
                                )}
                                {status.error && (
                                    <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
                                        Failed to send message. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full py-3 px-6 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
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
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-lg shadow-primary/20">
                                <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
                                <p className="opacity-90 leading-relaxed mb-8 text-lg">
                                    Feel free to reach out for collaborations, opportunities, or just to say hi! I'm always open to discussing new projects and creative ideas.
                                </p>

                                <div className="space-y-4">
                                    <a href="mailto:hitayushdange@gmail.com" className="flex items-center gap-4 hover:translate-x-2 transition-transform p-3 rounded-lg hover:bg-white/10">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium opacity-80">Email</p>
                                            <p className="font-semibold">hitayushdange@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="https://www.linkedin.com/in/hitayush-dange-65831a38b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:translate-x-2 transition-transform p-3 rounded-lg hover:bg-white/10">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium opacity-80">LinkedIn</p>
                                            <p className="font-semibold">Hitayush Dange</p>
                                        </div>
                                    </a>

                                    <a href="https://github.com/hitayush" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:translate-x-2 transition-transform p-3 rounded-lg hover:bg-white/10">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <GithubIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium opacity-80">GitHub</p>
                                            <p className="font-semibold">hitayush</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
