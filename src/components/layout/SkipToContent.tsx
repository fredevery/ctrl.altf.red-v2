export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 rounded bg-primary px-4 py-2 text-white shadow transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      tabIndex={0}
    >
      Skip to main content
    </a>
  );
}
