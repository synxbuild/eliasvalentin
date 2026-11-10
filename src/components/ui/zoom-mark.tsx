/** Zoom app mark (blue tile + camera), drawn inline to keep it crisp at icon size. */
export function ZoomMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="6.5" fill="#0B5CFF" />
      <rect x="4.6" y="8" width="10.2" height="8" rx="2" fill="#fff" />
      <path d="M15.6 11.1 19.2 8.8v6.4l-3.6-2.3z" fill="#fff" />
    </svg>
  );
}
