import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
    // Chronological Order: Past -> Future
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Inversion Consultancy LLP",
            duration: "May 2025 – July 2025",
            type: "APSCHE Collaboration · Remote",
            projects: [
                {
                    title: "Login / Authentication Application",
                    desc: "Designed and implemented a complete user authentication flow.",
                    details: [
                        "Built form validation and client-side logic using HTML, CSS, and JavaScript.",
                        "Ensured secure input handling and user feedback for login states."
                    ]
                },
                {
                    title: "Weather Application",
                    desc: "Developed a dynamic weather application consuming RESTful APIs.",
                    details: [
                        "Displayed real-time weather data with clean UI updates.",
                        "Implemented responsive design to support multiple screen sizes."
                    ]
                }
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Responsive Design"],
            impact: [
                "Delivered 2 functional web applications as internship deliverables.",
                "Strengthened fundamentals in frontend development and API consumption.",
                "Applied real-world web development practices in an industry setting."
            ]
        },
        {
            role: "Web Development Intern",
            company: "Infosys Springboard",
            duration: "September 2025 – November 2025",
            type: "Internship 6.0 – B2",
            projects: [
                {
                    title: "Tourism Information & Booking Web Portal",
                    desc: "Developed a structured web portal providing tourism information and booking flow.",
                    details: [
                        "Built modular UI components and implemented routing using Angular.",
                        "Designed user flows aligned with real-world business use cases.",
                        "Applied industry-oriented development practices taught in Infosys Internship 6.0."
                    ]
                }
            ],
            tech: ["Angular", "HTML5", "CSS3", "Responsive Design"],
            impact: [
                "Built a complete industry-aligned web portal.",
                "Gained experience in component-based frontend architecture.",
                "Improved understanding of enterprise-level development standards."
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 bg-slate-900/50 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                        Work <span className="text-sky-400">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 md:pl-0 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-6 md:pl-12"
                        >
                            {/* Timeline Dot - Vertically Centered to Card Top (approx) */}
                            <div className="absolute top-8 left-[-9px] w-5 h-5 bg-sky-500 rounded-full border-4 border-slate-900 shadow-[0_0_0_4px_rgba(14,165,233,0.2)] z-10"></div>

                            <div className="md:grid md:grid-cols-12 gap-8 bg-slate-800/50 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 shadow-lg">
                                {/* Header Info */}
                                <div className="md:col-span-4 space-y-3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <FaBriefcase className="text-sky-400 text-lg flex-shrink-0" />
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg text-sky-300 font-medium">{exp.company}</p>
                                    <div className="flex items-center text-slate-400 text-sm gap-2">
                                        <FaCalendarAlt />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{exp.type}</p>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-slate-700/50 text-xs text-sky-100 rounded border border-slate-600/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Internship Projects & Impact */}
                                <div className="md:col-span-8 space-y-8">
                                    {/* Projects Subsection */}
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-bold flex items-center gap-2">
                                            <FaLaptopCode className="text-sky-400" /> Internship Projects
                                        </h4>
                                        <div className="space-y-4">
                                            {exp.projects.map((proj, i) => (
                                                <div key={i} className="bg-slate-900/40 p-5 rounded-xl border border-white/5 hover:bg-slate-900/60 transition-colors">
                                                    <h5 className="text-white font-bold mb-2 text-base">{proj.title}</h5>
                                                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">{proj.desc}</p>
                                                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 ml-1 marker:text-sky-500">
                                                        {proj.details.map((detail, j) => (
                                                            <li key={j}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Impact Subsection */}
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-bold flex items-center gap-2">
                                            <FaCheckCircle className="text-green-400" /> Key Impact
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.impact.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(74,222,128,0.5)]"></span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
