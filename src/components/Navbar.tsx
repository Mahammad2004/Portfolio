import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'} h-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-heading font-bold text-base md:text-lg lg:text-xl tracking-tight cursor-pointer group"
                    >
                        <Link to="home" smooth={true} duration={500} className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-slate-100 group-hover:text-white transition-colors uppercase">
                                MAHAMMAD BASHA DUDEKULA
                            </span>
                            {/*<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 group-hover:from-sky-300 group-hover:to-blue-500 transition-all duration-300 uppercase">
                                <span className="text-sky-400">MAHAMMAD BASHA DUDEKULA</span>
                            </span>*/}
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-90}
                                onSetActive={() => setActiveSection(item)}
                                className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors group"
                            >
                                {item}
                                {activeSection === item && (
                                    <motion.span
                                        className="absolute bottom-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
                                        style={{ left: '10%' }}
                                        initial={{ width: 0 }}
                                        animate={{ width: '80%' }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors"
                        >
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-80} // Offset for mobile menu height if sticky, or just standard
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${activeSection === item
                                        ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
