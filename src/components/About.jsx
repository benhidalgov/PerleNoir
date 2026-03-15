import { motion } from 'framer-motion';
import './About.css';

const sections = [
    {
        id: 'mision',
        title: 'Misión',
        text: 'Perle Noire busca crear moda auténtica que desafíe lo convencional y abrace la dualidad entre oscuridad y dulzura. A través de prendas que fusionan lo delicado con lo caótico, la marca invita a reflexionar sobre la identidad, la libertad de expresar ideales sin silencios. Cada diseño es un reflejo donde se celebra la diferencia, la sensibilidad y el pensamiento crítico.',
    },
    {
        id: 'vision',
        title: 'Visión',
        text: 'Convertirse en una marca referente en moda alternativa y expresiva, reconocida por transformar la oscuridad en belleza y ofrecer un espacio de autenticidad para quienes buscan vestirse de acuerdo con sus emociones e ideales. Perle Noire inspira nuevas formas de mirar la moda como un lenguaje poético y rebelde, donde cada detalle sea un manifiesto de lo profundamente personal.',
    },
    {
        id: 'propuesta',
        title: 'Propuesta de Valor',
        text: 'Perle Noire ofrece una moda que transforma la oscuridad en belleza y la autenticidad en fuerza. Cada prenda es una extensión emocional, diseñada para quienes se atreven a mostrarse tal como son, sin ocultar sus contrastes. La marca combina estética alternativa con sensibilidad artesanal, integrando detalles simbólicos, texturas envolventes y una narrativa visual que celebra la dulzura dentro de la penumbra.',
    },
];

const blockVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function About() {
    return (
        <section id="sobre-mi" className="about section">
            <div className="section__container">
                <div className="about__content">
                    <motion.div
                        className="about__image-wrapper"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="about__image-placeholder">
                            <svg
                                className="about__image-placeholder-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                style={{ color: 'rgba(247,245,246,0.4)' }}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__text"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="about__heading">Nuestra Esencia</h2>
                        <div className="about__gold-line" />

                        <div className="about__blocks">
                            {sections.map((section, i) => (
                                <motion.div
                                    key={section.id}
                                    className="about__block"
                                    custom={i}
                                    variants={blockVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-30px' }}
                                >
                                    <h3 className="about__block-title">{section.title}</h3>
                                    <p className="about__paragraph">{section.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="about__closing"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Más que vestir, Perle Noire invita a habitar la propia identidad,
                            a convertir lo oculto en arte y la vulnerabilidad en poder.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
