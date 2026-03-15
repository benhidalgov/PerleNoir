import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero__content">
                <motion.div
                    className="hero__logo-container"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img src="/logo.png" alt="Perle Noire Logo" className="hero__logo" />
                </motion.div>

                <motion.div
                    className="hero__divider"
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                />

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Perle Noire
                </motion.h1>

                <motion.p
                    className="hero__tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Diseño de Vestuario
                </motion.p>
            </div>

            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="hero__scroll-line" />
            </motion.div>
        </section>
    );
}
