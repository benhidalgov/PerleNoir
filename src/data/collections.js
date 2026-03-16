/**
 * Collections Data — Perle Noire
 *
 * To add a new collection:
 * 1. Add an entry to the `collections` array below
 * 2. Place images in public/collections/<slug>/
 * 3. Run: node scripts/optimize-images.mjs
 * 4. Reference the optimized paths in the `images` array
 */

const OPT = '/collections/umbral-de-lucidez/optimized';
const RAW = '/collections/umbral-de-lucidez';

const collections = [
  {
    id: 1,
    slug: 'umbral-de-lucidez',
    title: 'Umbral de Lucidez',
    subtitle: 'Donde la claridad nace de la oscuridad',
    description:
      'Una colección que explora el momento exacto entre el sueño y la vigilia, ' +
      'donde la consciencia emerge de las sombras. Cada prenda captura esa dualidad — ' +
      'lo delicado del despertar y la fuerza de quien se atreve a ver con claridad. ' +
      'Texturas envolventes, siluetas que abrazan y detalles que susurran historias ' +
      'de transformación personal.',
    tag: 'Colección 2025',
    coverImage: `${OPT}/SESION-02-21-thumb.webp`,
    coverImageTiny: `${OPT}/SESION-02-21-tiny.webp`,
    year: '2025',
    images: [
      {
        src: `${OPT}/SESION-02-21.webp`,
        tiny: `${OPT}/SESION-02-21-tiny.webp`,
        alt: 'Corsé burgundy con mangas de encaje negro y lazo',
        caption: 'Corsé estructurado con encaje negro',
      },
      {
        src: `${OPT}/SESION-02-22 (1).webp`,
        tiny: `${OPT}/SESION-02-22 (1)-tiny.webp`,
        alt: 'Vestido burgundy con encaje, sentada en contemplación',
        caption: 'Silueta envolvente con capas de tul',
      },
      {
        src: `${OPT}/SESION-02-26.webp`,
        tiny: `${OPT}/SESION-02-26-tiny.webp`,
        alt: 'Dos modelos sentadas bajo jacarandá en flor',
        caption: 'Dualidad — lo oscuro y lo luminoso',
      },
      {
        src: `${OPT}/SESION-02-14.webp`,
        tiny: `${OPT}/SESION-02-14-tiny.webp`,
        alt: 'Modelo con cabello rosa, tocado de encaje negro y collar de perlas',
        caption: 'Tocado de encaje con perlas artesanales',
      },
      {
        src: `${OPT}/SESION-02-19.webp`,
        tiny: `${OPT}/SESION-02-19-tiny.webp`,
        alt: 'Modelo con cabello rosa mirando a cámara, collar de perlas',
        caption: 'La dulzura dentro de la penumbra',
      },
      {
        src: `${OPT}/SESION-02-24.webp`,
        tiny: `${OPT}/SESION-02-24-tiny.webp`,
        alt: 'Corsé burgundy con falda de capas y lazo en cabeza',
        caption: 'Construcción artesanal con detalle de lazo',
      },
      {
        src: `${OPT}/SESION-02-36.webp`,
        tiny: `${OPT}/SESION-02-36-tiny.webp`,
        alt: 'Dos modelos sentadas en el pasto, mirándose',
        caption: 'Complicidad entre sombras',
      },
      {
        src: `${OPT}/SESION-02-45.webp`,
        tiny: `${OPT}/SESION-02-45-tiny.webp`,
        alt: 'Dos modelos sentadas en banca bajo jacarandá',
        caption: 'De la sombra nace nuestro brillo',
      },
      {
        src: `${OPT}/SESION-02-7.webp`,
        tiny: `${OPT}/SESION-02-7-tiny.webp`,
        alt: 'Detalle de corsé burgundy con blusa de encaje',
        caption: 'Detalle de textura y estructura',
      },
    ],
    details: [
      { label: 'Temporada', value: '2025' },
      { label: 'Piezas', value: '5' },
      { label: 'Técnicas', value: 'Corsé, Encaje, Tul' },
      { label: 'Materiales', value: 'Encaje, Satén, Perlas' },
    ],
  },
];

export function getCollections() {
  return collections;
}

export function getCollectionBySlug(slug) {
  return collections.find((c) => c.slug === slug) || null;
}

export default collections;
