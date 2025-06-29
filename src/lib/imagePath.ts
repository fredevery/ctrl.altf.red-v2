// src/lib/imagePath.ts

/**
 * Returns the public path for an image, ensuring a leading slash.
 * @param filename - The image filename or relative path.
 * @param baseDir - Optional base directory (default: '/images').
 * @returns The normalized public path (e.g., '/images/photo.jpg').
 *
 * Example usage:
 *   imagePath('avatar.png') // '/images/avatar.png'
 *   imagePath('blog/cover.jpg', '/blog-images') // '/blog-images/cover.jpg'
 */
export function imagePath(
  filename: string,
  baseDir: string = '/images',
): string {
  const cleanBase = baseDir.endsWith('/') ? baseDir.slice(0, -1) : baseDir;
  const cleanFile = filename.startsWith('/') ? filename.slice(1) : filename;
  return `${cleanBase}/${cleanFile}`;
}

/**
 * Returns the full URL for an image, given a site origin.
 * @param filename - The image filename or relative path.
 * @param origin - The site origin (e.g., 'https://ctrl.altf.red').
 * @param baseDir - Optional base directory (default: '/images').
 * @returns The absolute URL to the image.
 *
 * Example usage:
 *   imageUrl('logo.svg', 'https://ctrl.altf.red') // 'https://ctrl.altf.red/images/logo.svg'
 */
export function imageUrl(
  filename: string,
  origin: string,
  baseDir: string = '/images',
): string {
  return `${origin.replace(/\/$/, '')}${imagePath(filename, baseDir)}`;
}
