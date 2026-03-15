import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contacto" className="contact section">
            <div className="section__container">
                <motion.h2
                    className="section__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    Contacto
                </motion.h2>
                <div className="divider" />
                <motion.p
                    className="section__subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    ¿Te gustaría colaborar o saber más sobre mi trabajo?
                </motion.p>

                <motion.div
                    className="contact__content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="contact__info">
                        <div className="contact__item">
                            <div className="contact__icon">✉</div>
                            <span className="contact__label">Email</span>
                            <span className="contact__value">hola@perlenoire.com</span>
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon">📍</div>
                            <span className="contact__label">Ubicación</span>
                            <span className="contact__value">Santiago, Chile</span>
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon">📱</div>
                            <span className="contact__label">Teléfono</span>
                            <span className="contact__value">+56 9 1234 5678</span>
                        </div>
                    </div>

                    <div className="contact__cta">
                        <p className="contact__cta-text">
                            Estoy abierta a proyectos de colaboración, encargos personalizados
                            y oportunidades en el mundo de la moda.
                        </p>
                        <motion.a
                            href="mailto:hola@perlenoire.com"
                            className="contact__button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Escríbeme →
                        </motion.a>
                    </div>

                    <div className="contact__socials">
                        <a href="#" className="contact__social-link" aria-label="Instagram">
                            IG
                        </a>
                        <a href="#" className="contact__social-link" aria-label="Pinterest">
                            PI
                        </a>
                        <a href="#" className="contact__social-link" aria-label="Behance">
                            BE
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
