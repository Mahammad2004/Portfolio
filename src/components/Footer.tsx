const Footer = () => {
    return (
        <footer className="bg-slate-950 py-6 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2">

                {/* Copyright (Left) */}
                <p className="text-slate-400 text-sm font-medium text-center md:text-left">
                    &copy; {new Date().getFullYear()} Mahammad Basha Dudekula
                </p>

                {/* Role (Right) */}
                <p className="text-slate-600 text-sm text-center md:text-right">
                    Software Engineering Student | Full Stack Developer
                </p>
            </div>
        </footer>
    );
};

export default Footer;
