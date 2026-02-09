import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/mypic.jpg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
                return;
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                return;
            }

            const delta = isDeleting ? 50 : 100;
            setTypingSpeed(delta);

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
            } else {
                setText(fullText.substring(0, text.length + 1));
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-sky-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-52">

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-auto md:max-w-3xl text-center md:text-left z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-3 py-1 mb-4 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-sm"
                    >
                        <span className="text-sky-400 font-medium text-xs md:text-sm">Welcome to my portfolio</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight whitespace-nowrap">
                        Hi, I'm <br />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 block mt-2"
                        >
                            Mahammad Basha
                        </motion.span>
                    </h1>

                    <div className="h-8 mb-6 md:mb-8">
                        <span className="text-xl md:text-2xl text-gray-300 font-light">
                            I am a <span className="font-semibold text-white border-r-2 border-sky-400 pr-1 animate-pulse">{text}</span>
                        </span>
                    </div>

                    <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Building <span className="text-sky-400 font-medium">scalable</span>, <span className="text-sky-400 font-medium">user-centric</span> web applications with modern technologies, AI-powered features, and clean engineering practices.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group relative px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] hover:shadow-sky-500/40"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View Projects <FaGithub />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="group px-6 py-3 border border-slate-600 hover:border-sky-400 text-gray-300 hover:text-sky-400 rounded-lg font-medium transition-all hover:bg-sky-500/5 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Contact Me <FaEnvelope />
                        </Link>
                    </div>
                </motion.div>

                {/* Profile Image - Rounded Rectangle (Squircle) */}
                <motion.div
                    className="w-full md:w-auto flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative group">
                        {/* Gradient Border Wrapper */}
                        <div className="absolute inset-[-2px] bg-gradient-to-br from-sky-500/30 to-purple-500/30 rounded-[2rem] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Main Image Container */}
                        <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-[1.8rem] overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/10 bg-slate-900/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                            <img
                                src={profilePic}
                                alt="Mahammad Basha"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Subtle Decorative Elements (No clutter) */}
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-sky-500/10 rounded-[2rem] blur-3xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
