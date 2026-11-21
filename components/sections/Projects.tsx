"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const technologies = ["Todos", ...Array.from(new Set(projects.flatMap((project) => project.technologies)))];
  const visibleProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section id="trabalhos" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Portfólio"
          title="Trabalhos feitos"
          description="Uma seleção de projetos que mostram minhas principais habilidades em produto e desenvolvimento."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filtrar projetos">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              onClick={() => setFilter(technology)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === technology
                  ? "border-accent-500 bg-accent-500 text-white"
                  : "border-white/10 text-zinc-500 hover:border-accent-500/50 hover:text-accent-400"
              }`}
              aria-pressed={filter === technology}
            >
              {technology}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition duration-300 hover:-translate-y-2 hover:border-accent-500/40 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Prévia do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4">
                    <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-semibold transition hover:text-accent-400">
                      <ExternalLink size={16} /> Ver Demo
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold transition hover:text-accent-400">
                      <Github size={16} /> Ver Código
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
