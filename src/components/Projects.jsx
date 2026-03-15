import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Colección Primavera',
        description: 'Diseños inspirados en la floración y los colores pasteles.',
        tag: 'Primavera 2026',
        image: null,
    },
    {
        id: 2,
        title: 'Nuit Étoilée',
        description: 'Una exploración de texturas y tonos oscuros bajo la noche estrellada.',
        tag: 'Otoño 2025',
        image: null,
    },
    {
        id: 3,
        title: 'Seda & Encaje',
        description: 'Prendas de alta costura con materiales nobles y bordados artesanales.',
        tag: 'Alta Costura',
        image: null,
    },
    {
        id: 4,
        title: 'Urban Chic',
        description: 'Moda urbana con un toque de elegancia parisina.',
        tag: 'Streetwear',
        image: null,
    },
    {
        id: 5,
        title: 'Jardín Secreto',
        description: 'Estampados botánicos y siluetas románticas.',
        tag: 'Verano 2025',
        image: null,
    },
    {
        id: 6,
        title: 'Minimalismo Noir',
        description: 'La belleza en la simplicidad, líneas puras y tonos monocromáticos.',
        tag: 'Cápsula',
        image: null,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function Projects() {
    return (
        <section id="colecciones" className="projects section">
            <div className="section__container">
                <motion.h2
                    className="section__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    Colecciones
                </motion.h2>
                <div className="divider" />
                <motion.p
                    className="section__subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Donde lo oculto se viste de belleza y la moda se convierte en libertad
                </motion.p>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            whileHover={{ y: -8 }}
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card__image"
                                />
                            ) : (
                                <div
                                    className="project-card__image"
                                    style={{
                                        background: `linear-gradient(${135 + i * 20}deg, #2A0D10 0%, #3d1a1e ${40 + i * 10}%, #c9a96e 100%)`,
                                    }}
                                />
                            )}
                            <div className="project-card__overlay">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">{project.description}</p>
                                <span className="project-card__tag">{project.tag}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
