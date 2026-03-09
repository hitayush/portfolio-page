export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Hitayush Dange. All rights reserved.
                </p>
                <button
                    onClick={scrollToTop}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                    aria-label="Back to top"
                >
                    ↑ Top
                </button>
            </div>
        </footer>
    );
}
