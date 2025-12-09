import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        {
            title: 'SpaceHub',
            description: 'A collaborative platform uniting teams through chat rooms, voice rooms, and secure file sharing across multiple workspaces.',
            features: [
                'Engineered a collaborative platform uniting teams through chat rooms, voice rooms, and secure file sharing.',
                'Implemented role-based access control for Admin, Workspace Owner, and Members.',
                'Integrated authentication system with verified email/phone login.',
                'Crafted real-time communication tools: direct messaging, voice rooms, and automated chat-bot.',
                'Designed centralized file storage and workspace-level document management.',
                'Developed productivity tools like polling/voting and storage vault.'
            ],
            tech: ['React', 'TailwindCSS', 'WebSockets'],
            link: 'https://www.spacehubx.me/',
            icon: '🚀'
        },
        {
            title: 'VOW - Virtual Office Workspace',
            description: 'Virtual collaboration platform enabling distributed teams to communicate through interactive virtual offices with real-time video/audio.',
            features: [
                'Engineered a virtual collaboration platform with interactive virtual offices.',
                'Implemented role-based access control for Managers, Supervisors, and Team Members.',
                'Integrated authentication system with secure login and session management.',
                'Crafted virtual office features: presence indicators, room navigation, and WebRTC video/audio.',
                'Integrated screen sharing and document collaboration.',
                'Designed messaging system for individuals, teams, and groups.'
            ],
            tech: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
            link: 'https://vow-live.me/',
            icon: '🏢'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-neutral-400">A showcase of my recent work and creative solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layoutId={`card-${index}`}
                                onClick={() => setSelectedProject(index)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="p-8 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-2xl">
                                            {project.icon}
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-neutral-800 text-xs text-neutral-400">
                                            Click for details
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedProject}`}
                            className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center text-4xl">
                                        {projects[selectedProject].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-neutral-100">
                                            {projects[selectedProject].title}
                                        </h3>
                                        <a
                                            href={projects[selectedProject].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Visit Live Site <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                                    {projects[selectedProject].description}
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-neutral-950/50 rounded-xl p-6 border border-neutral-800">
                                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Key Features</h4>
                                        <ul className="space-y-3">
                                            {projects[selectedProject].features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-neutral-300">
                                                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {projects[selectedProject].tech.map(t => (
                                                <span key={t} className="text-sm font-medium px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-200 border border-neutral-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
