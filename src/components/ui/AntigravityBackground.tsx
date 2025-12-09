import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AntigravityBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
            {/* Gradient Orb following mouse (subtle) */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"
                animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 50,
                    mass: 0.5
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-neutral-700/30 rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.initialX}%`,
                        top: `${particle.initialY}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Background Grain/Noise Overlay (Optional for texture) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
