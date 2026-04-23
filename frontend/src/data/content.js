// ─── Portfolio Content Data ───
// Single source of truth for all portfolio content.
// Edit this file to update text across the site.

export const personalInfo = {
    name: 'Hitayush Dange',
    firstName: 'Hitayush',
    lastName: 'Dange',
    email: 'hitayushdange@gmail.com',
    github: 'https://github.com/hitayush',
    linkedin: 'https://www.linkedin.com/in/hitayush-dange-65831a38b/',
    roles: ['CSE Student', 'Python Developer', 'Full-Stack Developer'],
    tagline: `I'm a computer science student passionate about turning ideas into real-world applications — exploring AI, data science, and the craft of modern web development.`,
};

export const aboutData = {
    intro: `I'm a <strong>Computer Science student</strong> with a drive for building impactful software. I break down complex problems into elegant, <strong>logical solutions</strong> — merging creativity with precise engineering.`,
    capabilities: [
        {
            title: 'Python',
            desc: 'Strong foundational logic and problem-solving through clean, readable code.',
        },
        {
            title: 'Data & AI',
            desc: 'Exploring predictive models, data pipelines, and machine learning fundamentals.',
        },
        {
            title: 'Full-Stack',
            desc: 'Building seamless interfaces that connect frontend experiences to backend logic.',
        },
        {
            title: 'Algorithms',
            desc: 'Focused on structured thinking and efficient problem-solving approaches.',
        },
    ],
};

export const educationData = [
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

export const experienceData = [
    {
        role: 'Full-Stack Web Developer',
        company: 'DialDoctor',
        companyUrl: 'https://dialdoctor.in',
        type: 'HealthTech Startup',
        duration: 'Present',
        num: '01',
        responsibilities: [
            'Building and maintaining full-stack web applications for a healthtech platform',
            'Developing responsive, user-facing features with modern frontend frameworks',
            'Collaborating with the team to ship features that connect patients with healthcare providers',
        ],
    },
];

export const skillCategories = [
    {
        title: 'Programming',
        skills: ['Python', 'C++', 'JavaScript'],
    },
    {
        title: 'Web & Frameworks',
        skills: ['HTML', 'CSS', 'React', 'Node.js', 'FastAPI'],
    },
    {
        title: 'Data & Visualization',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
        title: 'AI & ML',
        skills: ['Scikit-learn', 'LLMs', 'Ollama', 'LM Studio', 'Gemma', 'AI Integration'],
    },
    {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'Anaconda', 'Jupyter Lab'],
    },
];

export const projectsData = [
    {
        title: 'Career Guidance AI Chatbot',
        desc: 'A career guidance AI chatbot built using React and the Hugging Face API. It helps students explore career paths through conversational AI — my first real dive into integrating machine learning APIs with a modern frontend.',
        tags: ['React', 'Hugging Face API', 'AI'],
        github: 'https://github.com/hitayush/minorproject1.git',
        live: null,
        num: '01',
        year: '2025',
    },
    {
        title: 'Data Analysis Dashboard',
        desc: `A professional dashboard for visualizing complex datasets and generating actionable insights. Built with Python's data science stack to explore patterns and tell stories hidden in numbers.`,
        tags: ['Python', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/hitayush/Data.Dash',
        live: 'https://data-analysis-dashboard-six.vercel.app/',
        num: '02',
        year: '2026',
    },
    {
        title: 'Tic Tac Toe',
        desc: 'A classic, fully playable browser-based game with interactive logic and clean grid design. A foundational project that sharpened my understanding of DOM manipulation and game state management.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/hitayush/TICTACTOE',
        live: 'https://tictactoee28.netlify.app/',
        num: '03',
        year: '2024',
    },
];

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];
