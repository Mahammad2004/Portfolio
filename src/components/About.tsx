import { motion } from 'framer-motion';
import { FaJava, FaServer, FaBriefcase, FaGraduationCap, FaStar, FaProjectDiagram } from 'react-icons/fa';
import { SiReact, SiAngular } from 'react-icons/si';

const About = () => {
    const highlights = [
        { icon: <div className="flex gap-1"><SiReact /><SiAngular /></div>, text: "Full Stack Developer (MERN & Angular)" },
        { icon: <FaJava />, text: "Strong foundation in Java + DSA" },
        { icon: <FaServer />, text: "Experience building REST API–driven applications" },
        { icon: <FaBriefcase />, text: "Exposure to real-world systems through internships" },
    ];

    const stats = [
        {
            icon: <FaGraduationCap className="text-sky-400" />,
            label: "Education",
            value: "Integrated M.Tech",
            sub: "(Software Engineering)"
        },
        {
            icon: <FaStar className="text-yellow-400" />,
            label: "Academic Performance",
            value: "CGPA: 9.2",
            sub: "Consistent Top Ranker"
        },
        {
            icon: <FaBriefcase className="text-green-400" />,
            label: "Experience",
            value: "Web Dev Internships",
            sub: "Inversion & Infosys"
        },
        {
            icon: <FaProjectDiagram className="text-purple-400" />,
            label: "Projects",
            value: "Full-Stack Apps",
            sub: "Multiple Deployed"
        },
    ];

    return (
        <section id="about" className="py-16 relative overflow-hidden bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white font-heading mb-2"
                    >
                        Profile <span className="text-sky-400">Snapshot</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-xl mx-auto"
                    >
                        A quick overview of my background and focus
                    </motion.p>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Structured Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed text-justify">
                            I am an Integrated M.Tech Software Engineering student with hands-on experience in{' '}
                            <span className="text-white font-medium">full-stack web development</span> and strong fundamentals in{' '}
                            <span className="text-white font-medium">Java and Data Structures</span>. I enjoy working on{' '}
                            <span className="text-white font-medium">real-world problems</span>, building reliable applications, and continuously improving my skills through projects and internships.
                        </p>

                        <ul className="space-y-4">
                            {highlights.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-3 text-slate-300"
                                >
                                    <span className="text-sky-400 text-lg">{item.icon}</span>
                                    <span className="h-4 w-0.5 bg-slate-700 rounded-full"></span>
                                    <span className="text-sm md:text-base font-medium">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Snapshot Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                                        {stat.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{stat.value}</h3>
                                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                                <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
