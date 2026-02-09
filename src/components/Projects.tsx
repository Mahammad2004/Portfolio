import { motion } from 'framer-motion';
import { FaGithub, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "QuizAI",
            role: "Full Stack Developer & Integration Lead",
            problem: "Manual quiz creation from course material is time-consuming and inefficient for faculty.",
            solution: [
                "Developed a MERN-based frontend interface for interactive quiz generation.",
                "Integrated AI models and backend APIs to generate quizzes from faculty speech input and course material.",
                "Coordinated frontend–backend communication and database workflows."
            ],
            tech: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
            impact: [
                "Enabled automated quiz creation across multiple subjects.",
                "Improved scalability and usability for academic evaluation workflows."
            ],
            links: { github: "#", demo: "#" }
        },
        {
            title: "PenTrace",
            role: "Frontend Dev, Model & Backend Integration",
            problem: "Manual plagiarism and AI-generated content detection is slow and error-prone.",
            solution: [
                "Built the end-to-end frontend for a content detection platform.",
                "Integrated OCR-based deep learning models with backend services.",
                "Connected UI with MongoDB-backed document processing pipelines."
            ],
            tech: ["React", "MongoDB", "OCR", "Deep Learning", "REST APIs"],
            impact: [
                "Achieved 70%+ reduction in manual evaluation time.",
                "Enabled seamless UI-to-backend communication for document analysis."
            ],
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="py-16 bg-slate-900 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
                        Academic <span className="text-sky-400">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Developed using MERN stack
                    </p>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
                        >
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Header */}
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-3">
                                            <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                                            {/* <a href={project.links.demo} className="text-slate-400 hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a> */}
                                        </div>
                                    </div>
                                    <p className="text-sky-300 font-medium text-sm">{project.role}</p>
                                </div>

                                {/* Problem & Solution */}
                                <div className="space-y-4">
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                        <h4 className="text-red-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                                            <FaLightbulb /> Problem
                                        </h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                                    </div>

                                    <div className="bg-sky-500/10 border border-sky-500/20 p-4 rounded-lg">
                                        <h4 className="text-sky-300 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <FaTools /> Solution
                                        </h4>
                                        <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                            {project.solution.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-700/50 text-xs text-sky-200 rounded-full border border-slate-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Impact */}
                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <FaChartLine /> Impact
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.impact.map((item, i) => (
                                            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
