import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/content';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-ink-faint/30 py-12">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-ink-muted text-sm">
                        &copy; {new Date().getFullYear()} {personalInfo.name}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-ink-faint/30 flex items-center justify-center text-ink-muted hover:border-ink hover:text-ink hover:bg-ink hover:text-canvas transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={15} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-ink-faint/30 flex items-center justify-center text-ink-muted hover:border-[#0077b5] hover:text-canvas hover:bg-[#0077b5] transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={15} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="w-9 h-9 rounded-full border border-ink-faint/30 flex items-center justify-center text-ink-muted hover:border-accent hover:text-canvas hover:bg-accent transition-all"
                            aria-label="Email"
                        >
                            <Mail size={15} />
                        </a>
                    </div>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="text-sm font-medium text-ink-muted hover:text-accent transition-colors flex items-center gap-1.5 group"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        Back to top
                    </button>
                </div>
            </div>
        </footer>
    );
}
