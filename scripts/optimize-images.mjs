/**
 * Image Optimization Script — Perle Noire
 *
 * Resizes all collection images to web-friendly sizes:
 * - Full: max 1400px wide (gallery)
 * - Thumb: max 800px wide (cards/cover)
 * - Tiny: 20px wide (blur placeholder)
 *
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const COLLECTIONS_DIR = join(ROOT, 'public', 'collections');
const QUALITY = 80;

const SIZES = [
  { suffix: '', maxWidth: 1400 },     // full size for gallery
  { suffix: '-thumb', maxWidth: 800 }, // thumbnails for cards
  { suffix: '-tiny', maxWidth: 20 },   // blur placeholder
];

async function optimizeCollection(collectionDir) {
  const files = await readdir(collectionDir);
  const images = files.filter((f) => {
    const ext = extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext) &&
      !f.includes('-thumb') && !f.includes('-tiny') && !f.includes('-optimized');
  });

  const optimizedDir = join(collectionDir, 'optimized');
  await mkdir(optimizedDir, { recursive: true });

  for (const image of images) {
    const inputPath = join(collectionDir, image);
    const name = basename(image, extname(image));

    for (const size of SIZES) {
      const outputName = `${name}${size.suffix}.webp`;
      const outputPath = join(optimizedDir, outputName);

      try {
        await sharp(inputPath)
          .resize({ width: size.maxWidth, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(outputPath);

        const stats = await sharp(outputPath).metadata();
        console.log(
          `  ✓ ${outputName} (${stats.width}x${stats.height})`
        );
      } catch (err) {
        console.error(`  ✗ ${outputName}: ${err.message}`);
      }
    }
  }
}

async function main() {
  console.log('🖼  Optimizing collection images...\n');

  const collections = await readdir(COLLECTIONS_DIR);

  for (const collection of collections) {
    const collectionPath = join(COLLECTIONS_DIR, collection);
    console.log(`📁 ${collection}`);
    await optimizeCollection(collectionPath);
    console.log('');
  }

  console.log('✅ Done! Optimized images are in /optimized/ subdirectories.');
  console.log('   Update collections.js to use the new paths.');
}

main().catch(console.error);
