import { motion } from 'framer-motion';
import './About.css';

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
                        <h2 className="about__heading">Sobre Mí</h2>
                        <div className="about__gold-line" />
                        <p className="about__paragraph">
                            Estudiante de Diseño de Vestuario apasionada por la moda, la textura
                            y la narrativa detrás de cada prenda. Mi trabajo explora la intersección
                            entre lo clásico y lo contemporáneo, buscando siempre crear piezas que
                            cuenten una historia.
                        </p>
                        <p className="about__paragraph">
                            Cada colección nace de una investigación profunda de materiales,
                            técnicas artesanales y tendencias globales, fusionadas con una visión
                            personal que celebra la elegancia atemporal.
                        </p>

                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-number">6+</span>
                                <span className="about__stat-label">Colecciones</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">30+</span>
                                <span className="about__stat-label">Diseños</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">2+</span>
                                <span className="about__stat-label">Años</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
