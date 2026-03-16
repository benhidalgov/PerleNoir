import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCollections } from '../data/collections';
import ProgressiveImage from './ProgressiveImage';
import './Projects.css';

const collections = getCollections();
const isFeatured = collections.length <= 2;

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

        <div className={`projects__grid ${isFeatured ? 'projects__grid--featured' : ''}`}>
          {collections.map((collection, i) => (
            <motion.div
              key={collection.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              className={isFeatured ? 'projects__featured-wrapper' : ''}
            >
              <Link
                to={`/coleccion/${collection.slug}`}
                className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
              >
                {collection.coverImage ? (
                  <ProgressiveImage
                    src={collection.coverImage}
                    tinySrc={collection.coverImageTiny}
                    alt={collection.title}
                    className="project-card__image"
                  />
                ) : (
                  <div
                    className="project-card__image"
                    style={{
                      background: `linear-gradient(${135 + i * 20}deg, #1a0709 0%, #2A0D10 ${40 + i * 10}%, #3d1a1e 100%)`,
                    }}
                  />
                )}
                <div className={`project-card__overlay ${isFeatured ? 'project-card__overlay--visible' : ''}`}>
                  <span className="project-card__tag">{collection.tag}</span>
                  <h3 className="project-card__title">{collection.title}</h3>
                  <p className="project-card__description">{collection.subtitle}</p>
                  <span className="project-card__cta">Explorar colección →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
