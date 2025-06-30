'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  slug: string;
  altBase: string;
}

export function ProjectGallery({ images, slug, altBase }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;

  return (
    <section aria-label="Project image gallery" className="mb-8">
      <div className="relative aspect-video rounded-lg overflow-hidden border">
        <Image
          src={`/images/projects/${slug}/${images[active]}`}
          alt={`${altBase} screenshot ${active + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <ul className="flex gap-2 mt-4" role="list">
          {images.map((img, idx) => (
            <li key={img}>
              <button
                type="button"
                aria-label={`Show image ${idx + 1}`}
                className={`rounded border-2 ${active === idx ? 'border-primary' : 'border-transparent'} focus:outline-none`}
                onClick={() => setActive(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight')
                    setActive((a) => (a + 1) % images.length);
                  if (e.key === 'ArrowLeft')
                    setActive((a) => (a - 1 + images.length) % images.length);
                }}
              >
                <Image
                  src={`/images/projects/${slug}/${img}`}
                  alt={`${altBase} thumbnail ${idx + 1}`}
                  width={80}
                  height={48}
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
