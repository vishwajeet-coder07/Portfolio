import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="top" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-medium mb-6">
                        Available for freelance work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
                        Vishwajeet Singh
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 mb-8 leading-relaxed">
                        I build modern, responsive websites and delightful user experiences that make a difference.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-100 font-medium hover:bg-neutral-800 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};
