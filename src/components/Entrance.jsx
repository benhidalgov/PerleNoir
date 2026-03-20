import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Entrance.css';

export default function Entrance({ onComplete }) {
    const [phase, setPhase] = useState('entering');

    useEffect(() => {
        // After 2 seconds, trigger the exit phase
        const timer1 = setTimeout(() => {
            setPhase('exiting');
        }, 2200);

        // After exit animation completes, call onComplete
        const timer2 = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase === 'entering' && (
                <motion.div
                    className="entrance"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="entrance__content">
                        <motion.div
                            className="entrance__logo-container"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <img src="/logo.png" alt="Perle Noire Logo" className="entrance__logo" />
                        </motion.div>

                        <motion.div
                            className="entrance__divider"
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
                        />

                        <motion.div
                            className="entrance__text"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            PERLE NOIRE
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
