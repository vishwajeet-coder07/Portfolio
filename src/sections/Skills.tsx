import { motion } from 'framer-motion';

export const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🌊' },
        { name: 'Git & GitHub', icon: '🔗' },
        { name: 'C Language', icon: '💻' }
    ];

    return (
        <section id="skills" className="py-24 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
                        <p className="text-neutral-400">Technologies I work with to create amazing digital experiences</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                            >
                                <div className="text-4xl mb-4">{skill.icon}</div>
                                <h3 className="font-medium text-neutral-200">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
