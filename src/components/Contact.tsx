import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-slate-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
                        Get In <span className="text-sky-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        You can reach me directly through the following channels.
                    </p>
                    <div className="w-20 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Email Card */}
                    <motion.a
                        href="mailto:dmahammadbasha2004@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/20">
                            <FaEnvelope size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                        <p className="text-slate-400 text-sm group-hover:text-sky-300 transition-colors break-all">
                            dmahammadbasha2004@gmail.com
                        </p>
                    </motion.a>

                    {/* Phone Card */}
                    <motion.a
                        href="tel:+918328615153"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/20">
                            <FaPhone size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                        <p className="text-slate-400 text-sm group-hover:text-sky-300 transition-colors">
                            +91 8328615153
                        </p>
                    </motion.a>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 group flex flex-col items-center text-center"
                    >
                        <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/20">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                        <p className="text-slate-400 text-sm group-hover:text-sky-300 transition-colors">
                            Nandyal, Andhra Pradesh, India
                        </p>
                    </motion.div>
                </div>

                {/* Social Connect Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-8 w-full max-w-xs">
                        <div className="h-px bg-slate-700 flex-1"></div>
                        <span className="text-slate-400 text-sm font-medium uppercase tracking-widest whitespace-nowrap">Connect with me</span>
                        <div className="h-px bg-slate-700 flex-1"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
                        <a
                            href="https://github.com/Mahammad2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-slate-800/80 hover:bg-slate-700 px-8 py-4 rounded-xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 group flex-1"
                        >
                            <FaGithub size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-slate-300 font-medium group-hover:text-white">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dudekula-mahammad-basha-6b6022253/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-slate-800/80 hover:bg-slate-700 px-8 py-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group flex-1"
                        >
                            <FaLinkedin size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-slate-300 font-medium group-hover:text-white">LinkedIn</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
