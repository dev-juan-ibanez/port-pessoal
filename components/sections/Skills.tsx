"use client";

import { useInView, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import { skillCategories, type Skill } from "@/lib/data";

const icons: Record<Skill["icon"], IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
  linux: SiLinux,
  github: SiGithub,
};

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const Icon = icons[skill.icon];

  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className="text-lg text-accent-400" aria-hidden="true" />
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-zinc-500">{skill.level}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
        role="progressbar"
        aria-label={skill.name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={inView ? { width: reduceMotion ? `${skill.level}%` : `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-zinc-100/60 px-4 py-20 dark:bg-zinc-950/40 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Expertise"
          title="Minhas skills"
          description="Tecnologias e práticas que utilizo para criar produtos confiáveis, escaláveis e agradáveis."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.title} delay={categoryIndex * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/80 p-6 shadow-sm dark:bg-zinc-900/60">
                <h3 className="mb-6 font-heading text-xl font-semibold text-accent-400">
                  {category.title}
                </h3>
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
