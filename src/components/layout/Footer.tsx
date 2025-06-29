import Link from 'next/link';

import { Icon } from '../ui/Icon';

const socialLinks = [
  {
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: 'github',
  },
  {
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
    icon: 'twitter',
  },
  {
    href: 'mailto:you@example.com',
    label: 'Email',
    icon: 'mail',
  },
  // Add more as needed
];

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Icon name="window" size="md" />
          ctrl.altf.red
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 items-center">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-primary transition-colors"
                >
                  <Icon
                    name={link.icon as keyof typeof Icon.nameMap}
                    size="md"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ctrl.altf.red. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
