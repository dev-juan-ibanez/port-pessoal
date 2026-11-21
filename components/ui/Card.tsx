import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-glow dark:bg-zinc-900/60 ${className}`}
    >
      {children}
    </article>
  );
}
