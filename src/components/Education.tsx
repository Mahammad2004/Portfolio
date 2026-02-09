import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaTelegramPlane } from 'react-icons/fa';

const Education = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Interpolate Rocket Movement along Wide Zig-Zag path (Center -> Right -> Left -> Right -> Center)
    // Path: M 50 0 C 50 0 95 10 95 19 C 95 40 5 40 5 50 C 5 60 95 60 95 81 C 95 90 50 100 50 100
    // Adjusted for 3 cards stack tightly (0-38%, 38-62%, 62-100% approximate)
    const rocketX = useTransform(
        scrollYProgress,
        [0, 0.166, 0.5, 0.833, 1],
        ["50%", "95%", "5%", "95%", "50%"]
    );

    // Smooth Y progress
    const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Calculate Rotation aligned with wide zig-zag tangent
    const rocketRotate = useTransform(
        scrollYProgress,
        [0, 0.166, 0.5, 0.833, 1],
        [0, 45, -45, 45, 0]
    );

    return (
        <section id="education" ref={containerRef} className="py-16 relative bg-slate-900/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white font-heading mb-2"
                    >
                        Education
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-xl mx-auto"
                    >
                        My academic journey from present to past
                    </motion.p>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-4 items-center">

                    {/* Central Timeline Column - Desktop Only  */}
                    {/* Note: In this layout, the SVG spans the entire height of the grid content */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[120px] -translate-x-1/2 pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Zig-Zag Curve hitting exact edges (5, 95) at centers of 3 rows (approx 16.6%, 50%, 83.3%) */}
                            <path
                                d="M 50 0 C 50 0 95 8.3 95 16.6 C 95 33.3 5 33.3 5 50 C 5 66.6 95 66.6 95 83.3 C 95 91.6 50 100 50 100"
                                vectorEffect="non-scaling-stroke"
                                fill="none"
                                stroke="rgba(56, 189, 248, 0.3)"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                            />
                        </svg>

                        {/* Paper Rocket Animation */}
                        <motion.div
                            style={{
                                left: rocketX,
                                top: rocketY,
                                rotate: rocketRotate,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                            className="absolute z-10 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                        >
                            <FaTelegramPlane size={24} />
                        </motion.div>
                    </div>

                    {/* Row 1: M.Tech (Right) */}
                    <div className="hidden md:block"></div> {/* Spacer Left */}
                    <div className="hidden md:flex flex-col items-center justify-center relative w-[120px]">
                        {/* Dot - At Right Edge (95%) touching Card 1 */}
                        <div className="absolute left-[95%] -translate-x-[50%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-500 box-content border-4 border-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.8)] z-10"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="relative p-4 flex justify-start"
                    >
                        <div className="w-full bg-slate-800/60 backdrop-blur-md border border-white/10 hover:border-sky-500/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10 group-hover:bg-sky-500/20 transition-all duration-500"></div>
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="p-4 bg-sky-500/20 rounded-xl text-sky-400 shrink-0">
                                    <FaGraduationCap size={40} />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Integrated M.Tech in Software Engineering</h3>
                                    <p className="text-lg text-slate-300 font-medium">VIT-AP University, Amaravati</p>
                                    <div className="flex flex-wrap gap-3 text-sm mt-3">
                                        <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600/50">2022 – 2027</span>
                                        <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 font-medium">CGPA: 9.2</span>
                                    </div>
                                    <p className="text-slate-400 text-base leading-relaxed border-t border-slate-700/50 pt-4 mt-4">
                                        Focused on software engineering fundamentals, full-stack web development, and problem-solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Row 2: Intermediate (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative p-4 flex justify-end"
                    >
                        <div className="w-full bg-slate-800/60 backdrop-blur-md border border-white/10 hover:border-sky-500/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10 group-hover:bg-sky-500/20 transition-all duration-500"></div>
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="p-4 bg-sky-500/20 rounded-xl text-sky-400 shrink-0">
                                    <FaGraduationCap size={40} />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Intermediate (MPC)</h3>
                                    <p className="text-lg text-slate-300 font-medium">Narayana Junior College, Nandyal</p>
                                    <div className="flex flex-wrap gap-3 text-sm mt-3">
                                        <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600/50">2020 – 2022</span>
                                        <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 font-medium">Percentage: 98.1%</span>
                                    </div>
                                    <p className="text-slate-400 text-base leading-relaxed border-t border-slate-700/50 pt-4 mt-4">
                                        Focused on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="hidden md:flex flex-col items-center justify-center relative w-[120px]">
                        {/* Dot - At Left Edge (5%) touching Card 2 */}
                        <div className="absolute left-[5%] -translate-x-[50%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-500 box-content border-4 border-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.8)] z-10"></div>
                    </div>
                    <div className="hidden md:block"></div> {/* Spacer Right */}


                    {/* Row 3: SSC (Right) */}
                    <div className="hidden md:block"></div> {/* Spacer Left */}
                    <div className="hidden md:flex flex-col items-center justify-center relative w-[120px]">
                        {/* Dot - At Right Edge (95%) touching Card 3 */}
                        <div className="absolute left-[95%] -translate-x-[50%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-500 box-content border-4 border-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.8)] z-10"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative p-4 flex justify-start"
                    >
                        <div className="w-full bg-slate-800/60 backdrop-blur-md border border-white/10 hover:border-sky-500/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10 group-hover:bg-sky-500/20 transition-all duration-500"></div>
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="p-4 bg-sky-500/20 rounded-xl text-sky-400 shrink-0">
                                    <FaGraduationCap size={40} />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">SSC</h3>
                                    <p className="text-lg text-slate-300 font-medium">Sri Santhinikethan High School, Nandyal</p>
                                    <div className="flex flex-wrap gap-3 text-sm mt-3">
                                        <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600/50">2019 – 2020</span>
                                        <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 font-medium">Percentage: 100%</span>
                                    </div>
                                    <p className="text-slate-400 text-base leading-relaxed border-t border-slate-700/50 pt-4 mt-4">
                                        Achieved academic excellence with strong foundational knowledge across core subjects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
