import { motion } from 'framer-motion';
import './Manifesto.css';

const manifestoLines = [
    {
        text: (
            <>
                Celebramos la <em>dulzura en lo oscuro</em> y la <strong>fuerza en lo frágil</strong>.
            </>
        ),
    },
    {
        text: (
            <>
                Cada prenda es un acto de <em>autenticidad</em>, un juego entre lo tierno y lo rebelde.
            </>
        ),
    },
    {
        text: (
            <>
                Aquí, lo oculto se viste de <strong>belleza</strong> y la moda se convierte en <em>libertad</em>.
            </>
        ),
    },
];

const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function Manifesto() {
    return (
        <section className="manifesto">
            <div className="manifesto__container">
                <motion.div
                    className="manifesto__ornament"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="manifesto__ornament-line" />
                    <div className="manifesto__ornament-diamond" />
                    <div className="manifesto__ornament-line" />
                </motion.div>

                <motion.blockquote
                    className="manifesto__quote"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    De la sombra nace nuestro brillo.
                </motion.blockquote>

                <div className="manifesto__divider" />

                <div className="manifesto__lines">
                    {manifestoLines.map((line, i) => (
                        <motion.p
                            key={i}
                            className="manifesto__line"
                            custom={i}
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            {line.text}
                        </motion.p>
                    ))}
                </div>

                <motion.p
                    className="manifesto__label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    — Manifiesto de Marca —
                </motion.p>
            </div>
        </section>
    );
}
