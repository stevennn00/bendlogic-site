import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
      <Image src="/logo.png" alt="" width={40} height={40} priority className="h-9 w-9 rounded-[5px]" />
      <span className={`text-[1.15rem] font-extrabold tracking-[-.04em] ${light ? "text-[var(--color-on-dark)]" : "text-[var(--color-ink)]"}`}>
        Bend<span className={light ? "text-[#ff965d]" : "text-[var(--color-accent)]"}>Logic</span>
      </span>
    </span>
  );
}
