import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // start offscreen

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    // Create an array of dots for the wavy tail
    const numDots = 8;
    const dots = Array.from({ length: numDots });

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary z-[9999] pointer-events-none mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
            />

            {/* Wavy Trail */}
            {dots.map((_, index) => {
                // Decrease size as the trail gets longer
                const size = Math.max(4, 12 - index);
                const offset = size / 2;

                return (
                    <motion.div
                        key={index}
                        className="fixed top-0 left-0 rounded-full bg-primary/60 z-[9998] pointer-events-none mix-blend-difference hidden md:block"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                        animate={{
                            x: mousePosition.x - offset,
                            y: mousePosition.y - offset,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 400 - (index * 40),
                            damping: 20 + (index * 2),
                            mass: 0.1 + (index * 0.1),
                            // Optional: add slight delay to create a more separated "snake" effect
                            // delay: index * 0.015
                        }}
                    />
                );
            })}
        </>
    );
}
