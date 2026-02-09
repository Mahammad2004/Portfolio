import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "Hackathon Winner",
            event: "HACKS 2K25",
            icon: <FaTrophy className="text-yellow-300 text-4xl mb-4" />,
            color: "from-yellow-500/20 to-orange-500/20"
        },
        {
            title: "10th Rank",
            event: "Software Engineering Dept (2024)",
            icon: <FaMedal className="text-slate-300 text-4xl mb-4" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "8th Rank",
            event: "Software Engineering Dept (2025)",
            icon: <FaAward className="text-sky-300 text-4xl mb-4" />,
            color: "from-sky-500/20 to-indigo-500/20"
        }
    ];

    return (
        <section id="achievements" className="py-16 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                        Key <span className="text-sky-400">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`bg-gradient-to-br ${item.color} p-6 md:p-8 rounded-xl border border-slate-700 backdrop-blur-sm text-center hover:border-sky-500/50 transition-all shadow-lg`}
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.event}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
