"use client";

import { BookOpen, Camera, Gamepad2, Music2, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import { hobbies, type Hobby } from "@/lib/data";

const icons: Record<Hobby["icon"], LucideIcon> = {
  camera: Camera,
  game: Gamepad2,
  book: BookOpen,
  music: Music2,
  sport: Dumbbell,
};

export default function Hobbies() {
  return (
    <section id="hobbies" className="border-y border-white/5 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Além do código"
          title="Hobbies pessoais"
          description="Interesses que inspiram minha criatividade, curiosidade e equilíbrio."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => {
            const Icon = icons[hobby.icon];
            return (
              <FadeIn key={hobby.name} delay={index * 0.07}>
                <article
                  className={`group min-h-52 rounded-2xl border border-white/10 bg-gradient-to-br ${hobby.accent} p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20`}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={23} className="text-accent-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{hobby.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {hobby.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
