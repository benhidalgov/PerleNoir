import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Entrance.css';

const SpiderWeb = () => {
    const spokes = 12;
    // Rings from center outwards, expanding to cover the screen
    const rings = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150];

    return (
        <svg className="entrance__web" viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid slice">
            {/* Spokes */}
            {[...Array(spokes)].map((_, i) => {
                const angle = (i * 360 / spokes * Math.PI) / 180;
                const x2 = 160 * Math.cos(angle);
                const y2 = 160 * Math.sin(angle);
                return (
                    <motion.line
                        key={`spoke-${i}`}
                        x1="0" y1="0" x2={x2} y2={y2}
                        className="spider-spoke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                );
            })}
            
            {/* Connecting Threads with a subtle sag for realism */}
            {rings.map((r, ringIndex) => {
                let d = "";
                for(let i=0; i < spokes; i++) {
                    const a1 = (i * 360 / spokes * Math.PI) / 180;
                    const a2 = ((i + 1) * 360 / spokes * Math.PI) / 180;
                    const x1 = r * Math.cos(a1);
                    const y1 = r * Math.sin(a1);
                    const x2 = r * Math.cos(a2);
                    const y2 = r * Math.sin(a2);
                    
                    const midA = ((i + 0.5) * 360 / spokes * Math.PI) / 180;
                    const ctrlR = r * 0.85; // Sag towards center
                    const cx = ctrlR * Math.cos(midA);
                    const cy = ctrlR * Math.sin(midA);
                    
                    if (i === 0) {
                        d += `M ${x1},${y1} `;
                    }
                    d += `Q ${cx},${cy} ${x2},${y2} `;
                }
                
                return (
                    <motion.path
                        key={`ring-${ringIndex}`}
                        d={d}
                        className="spider-thread"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 + ringIndex * 0.15, ease: "easeInOut" }}
                    />
                )
            })}
        </svg>
    );
};

export default function Entrance() {
    return (
        <motion.div
            className="entrance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <SpiderWeb />
            <div className="entrance__content">
                <motion.div
                    className="entrance__logo-container"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                >
                    <img src="/logo.png" alt="Perle Noire Logo" className="entrance__logo" />
                </motion.div>

                <motion.div
                    className="entrance__divider"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
                />

                <motion.div
                    className="entrance__text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    PERLE NOIRE
                </motion.div>
            </div>
        </motion.div>
    );
}
