import Image from "next/image";

export default function Logo({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="BendLogic logo"
        width={72}
        height={72}
        priority
        className="h-9 w-9 rounded-[10px] ring-1 ring-black/10"
      />
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
