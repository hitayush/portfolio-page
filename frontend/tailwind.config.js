/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                canvas: 'var(--canvas)',
                'canvas-alt': 'var(--canvas-alt)',
                ink: 'var(--ink)',
                'ink-muted': 'var(--ink-muted)',
                'ink-faint': 'var(--ink-faint)',
                accent: 'var(--accent)',
                'accent-hover': 'var(--accent-hover)',
                'accent-subtle': 'var(--accent-subtle)',
            },
            fontFamily: {
                sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
                serif: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
            },
        },
    },
    plugins: [],
}
