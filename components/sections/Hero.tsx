"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-16 md:grid-cols-[1fr_0.72fr] md:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            <span className="h-px w-8 bg-accent-500" />
            Olá, eu sou
          </p>
          <h1 className="font-heading text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent-400 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-balance text-base leading-7 text-zinc-500 dark:text-zinc-400 sm:text-lg">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#trabalhos"
              className="rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Ver Trabalhos
            </a>
            <a
              href="#contato"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent-500/50 hover:bg-accent-500/10"
            >
              Entrar em Contato
            </a>
          </div>
          <div className="mt-7 flex gap-3">
            {profile.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-zinc-500 transition hover:-translate-y-1 hover:border-accent-500/50 hover:text-accent-400"
              >
                {social.label === "GitHub" ? <Github size={19} /> : <Linkedin size={19} />}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-500/30 to-cyan-400/20 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/10 bg-zinc-900 p-2 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/profile.svg"
                alt="Foto de perfil de Seu Nome"
                fill
                priority
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#trabalhos"
        aria-label="Rolar para trabalhos"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 sm:flex"
      >
        Scroll down
        <span className="flex h-8 w-5 justify-center rounded-full border border-zinc-500/50 p-1">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-accent-400" />
        </span>
      </a>
    </section>
  );
}
