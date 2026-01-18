import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return Math.min(prev + Math.random() * 10, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    const ingredients = [
        { color: "#FBBF24", width: "w-24", height: "h-8", radius: "rounded-t-full", delay: 0.1 },
        { color: "#EF4444", width: "w-28", height: "h-3", radius: "rounded-full", delay: 0.2 },
        { color: "#84CC16", width: "w-32", height: "h-2", radius: "rounded-md", delay: 0.3 },
        { color: "#FCD34D", width: "w-28", height: "h-2", radius: "rounded-sm", delay: 0.4 },
        { color: "#78350F", width: "w-28", height: "h-6", radius: "rounded-lg", delay: 0.5 },
        { color: "#F59E0B", width: "w-24", height: "h-6", radius: "rounded-b-full", delay: 0.6 },
    ];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Burger Animation Stack */}
            <div className="relative mb-12 flex flex-col items-center justify-end h-40">
                <AnimatePresence>
                    {ingredients.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: -100, opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{
                                delay: item.delay,
                                type: "spring",
                                stiffness: 120,
                                damping: 12
                            }}
                            className={`${item.width} ${item.height} ${item.radius} mb-1 shadow-lg`}
                            style={{ backgroundColor: item.color }}
                        />
                    ))}
                </AnimatePresence>

                {/* Shadow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="w-24 h-4 bg-black/50 blur-md rounded-full mt-4"
                />
            </div>

            {/* Text and Progress */}
            <div className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl font-black text-white mb-2 tracking-tight"
                >
                    BURGER<span className="text-red-600">HUB</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-gray-500 text-sm mb-6 font-medium uppercase tracking-widest"
                >
                    Firing up the grill...
                </motion.p>

                {/* Progress Bar */}
                <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "tween", ease: "linear" }}
                    />
                </div>

                {/* Animated Loading Dots */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 bg-red-600 rounded-full"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;