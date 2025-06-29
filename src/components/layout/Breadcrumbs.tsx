import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '../ui/Icon';

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = [
    { href: '/', label: 'Home' },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const label = seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
      return { href, label };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {idx > 0 && (
              <Icon name="chevronRight" size="sm" aria-hidden="true" />
            )}
            {idx < crumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-primary underline">
                {crumb.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="font-semibold text-foreground"
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
