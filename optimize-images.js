import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

// Use an array of patterns for better compatibility
const imagePaths = glob.sync(['src/assets/**/*.{png,jpg,jpeg}', 'public/**/*.{png,jpg,jpeg}']);
const webpQuality = 80; // Quality setting for WebP

console.log(`Found ${imagePaths.length} images to optimize.`);

imagePaths.forEach(imgPath => {
  const ext = path.extname(imgPath);
  const newPath = imgPath.replace(ext, '.webp');

  // Skip if the .webp image already exists and is newer
  if (fs.existsSync(newPath)) {
    const originalStats = fs.statSync(imgPath);
    const webpStats = fs.statSync(newPath);
    if (webpStats.mtime > originalStats.mtime) {
      console.log(`Skipping ${imgPath}, .webp version is already up-to-date.`);
      return;
    }
  }

  sharp(imgPath)
    .webp({ quality: webpQuality })
    .toFile(newPath)
    .then(info => {
      console.log(`Successfully converted ${imgPath} to ${newPath}`);
      console.log('Size before:', (fs.statSync(imgPath).size / 1024).toFixed(2), 'KB');
      console.log('Size after:', (info.size / 1024).toFixed(2), 'KB');
    })
    .catch(err => {
      console.error(`Error converting ${imgPath}:`, err);
    });
});
