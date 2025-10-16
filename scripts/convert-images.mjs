import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const roots = [
  path.resolve('public', 'images'),
  path.resolve('images'),
];

const exts = new Set(['.png', '.jpg', '.jpeg']);

const shouldSkip = (p) => {
  const base = path.basename(p).toLowerCase();
  // Skip tiny icons or already optimized variants if needed
  return base.endsWith('.webp') || base.endsWith('.avif');
};

async function convertFile(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const webpOut = path.join(dir, `${base}.webp`);
  const avifOut = path.join(dir, `${base}.avif`);

  try {
    const input = sharp(filePath, { failOn: 'none' });
    // WebP
    await input.clone().webp({ quality: 75 }).toFile(webpOut);
    // AVIF
    await input.clone().avif({ quality: 55 }).toFile(avifOut);
    console.log(`✔ Converted: ${path.relative(process.cwd(), filePath)} -> .webp/.avif`);
  } catch (err) {
    console.warn(`⚠ Failed: ${filePath} -> ${err.message}`);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile()) {
      const ext = path.extname(full).toLowerCase();
      if (exts.has(ext) && !shouldSkip(full)) {
        await convertFile(full);
      }
    }
  }
}

async function main() {
  for (const root of roots) {
    if (fs.existsSync(root)) {
      console.log(`Scanning: ${root}`);
      await walk(root);
    }
  }
  console.log('Done.');
}

main();