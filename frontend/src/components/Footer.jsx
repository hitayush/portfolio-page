export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-ink-faint/30 py-10">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-ink-muted text-sm">
                    &copy; {new Date().getFullYear()} Hitayush Dange
                </p>
                <button
                    onClick={scrollToTop}
                    className="text-sm font-medium text-ink-muted hover:text-accent transition-colors flex items-center gap-1.5"
                    aria-label="Back to top"
                >
                    &uarr; Back to top
                </button>
            </div>
        </footer>
    );
}
