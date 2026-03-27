export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-transparent border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-zinc-500 font-medium text-sm mb-4 md:mb-0 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Hitayush. All rights reserved.
                </p>
                <div className="flex items-center gap-8">
                    <button
                        onClick={scrollToTop}
                        className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                        aria-label="Back to top"
                    >
                        &uarr; Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
