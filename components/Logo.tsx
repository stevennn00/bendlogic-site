export default function Logo({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-orange)] shadow-[var(--shadow-glow)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 18 L10 18 L10 8 L20 8"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`text-lg font-extrabold tracking-tight ${
          tone === "light" ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        Bend<span className="text-[var(--color-orange)]">Logic</span>
      </span>
    </span>
  );
}
