import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-neutral-400 leading-relaxed">
                            <p>
                                I am a passionate web developer with experience in creating responsive websites.
                                I love turning ideas into reality using code. My journey in web development began
                                with a simple HTML page, and since then, I have learned many skills in various technologies.
                            </p>
                            <p>
                                When I'm not coding, I enjoy hiking, photography, and exploring new technologies.
                                I believe in continuous learning and staying updated with the latest trends in web development.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-neutral-900 border border-neutral-800 p-8 flex items-center justify-center">
                                {/* Placeholder for an image or a creative graphic */}
                                <div className="text-center">
                                    <span className="text-6xl mb-4 block">👨‍💻</span>
                                    <p className="text-neutral-500">Developer & Designer</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
