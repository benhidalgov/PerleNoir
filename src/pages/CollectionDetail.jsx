import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCollectionBySlug } from '../data/collections';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RedStripe } from '../components/LaceDivider';
import ProgressiveImage from '../components/ProgressiveImage';
import './CollectionDetail.css';

export default function CollectionDetail() {
  const { slug } = useParams();
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return (
      <>
        <Navbar />
        <div className="collection-detail" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'var(--color-offwhite)', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
              Colección no encontrada
            </h1>
            <Link to="/" style={{ color: 'var(--color-red)', marginTop: '1rem', display: 'block' }}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="collection-detail">
        {/* Hero Banner */}
        <section className="collection-hero">
          <motion.div
            className="collection-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/#colecciones" className="collection-hero__back">
              ← Volver a Colecciones
            </Link>

            <motion.span
              className="collection-hero__tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {collection.tag}
            </motion.span>

            <motion.h1
              className="collection-hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {collection.title}
            </motion.h1>

            <motion.p
              className="collection-hero__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {collection.subtitle}
            </motion.p>

            <motion.div
              className="collection-hero__divider"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </motion.div>
        </section>

        {/* Description */}
        <motion.section
          className="collection-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="collection-description__text">
            {collection.description}
          </p>
          <div className="collection-description__ornament">
            <div className="collection-description__ornament-line" />
            <div className="collection-description__ornament-diamond" />
            <div className="collection-description__ornament-line" />
          </div>
        </motion.section>

        {/* Details / Metadata */}
        {collection.details && collection.details.length > 0 && (
          <motion.div
            className="collection-details"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {collection.details.map((detail, i) => (
              <motion.div
                key={detail.label}
                className="collection-detail-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="collection-detail-item__label">{detail.label}</span>
                <span className="collection-detail-item__value">{detail.value}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Gallery */}
        <section className="collection-gallery">
          <motion.h2
            className="collection-gallery__title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Galería
          </motion.h2>

          <div className="collection-gallery__grid">
            {collection.images && collection.images.length > 0 ? (
              collection.images.map((image, i) => (
                <motion.div
                  key={i}
                  className="collection-gallery__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <ProgressiveImage
                    src={image.src}
                    tinySrc={image.tiny}
                    alt={image.alt}
                  />
                  {image.caption && (
                    <div className="collection-gallery__caption">
                      {image.caption}
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="collection-gallery__empty">
                <p>Próximamente — imágenes de la colección</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <RedStripe />
      <Footer />
    </>
  );
}
