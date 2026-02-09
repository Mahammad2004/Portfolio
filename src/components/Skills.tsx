import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiAngular, SiBootstrap, SiMongodb, SiMysql, SiVercel, SiRender, SiGooglecolab } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
    const skills = [
        {
            category: "Programming & Web Tech",
            items: [
                { name: "Java (DSA, OOP)", icon: <FaJava className="text-orange-500" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Angular", icon: <SiAngular className="text-red-600" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
            ]
        },
        {
            category: "Backend & Databases",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <span className="text-white font-bold text-xs border border-white/30 px-1 rounded">EX</span> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
                { name: "REST APIs", icon: <span className="text-sky-400 font-bold text-xs border border-sky-400/30 px-1 rounded">REST</span> },
                { name: "AI/ML Integration", icon: <span className="text-purple-400 font-bold text-xs border border-purple-400/30 px-1 rounded">AI/ML</span> },
            ]
        },
        {
            category: "Tools & DevOps",
            items: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
                { name: "Vercel", icon: <SiVercel className="text-white" /> },
                { name: "Render", icon: <SiRender className="text-white" /> },
                { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
                { name: "Google Colab", icon: <SiGooglecolab className="text-orange-400" /> },
                { name: "UML", icon: <span className="text-gray-400 font-bold text-xs border border-gray-400/30 px-1 rounded">UML</span> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 bg-slate-900/50 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900/50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                        Technical <span className="text-sky-400">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 md:p-6 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-sky-400 mb-6 border-b border-slate-700 pb-2 text-center">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 content-start flex-1">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center p-2 hover:bg-slate-700/50 rounded-lg transition-colors group text-center h-20 border border-white/5 bg-slate-700/20">
                                        <div className="text-2xl mb-2 transition-transform group-hover:scale-110 flex items-center justify-center h-8">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors leading-tight">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
