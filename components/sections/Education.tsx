"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, CalendarDays, X } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import { certificates, education, type Certificate } from "@/lib/data";

export default function Education() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section id="formacao" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Trajetória"
          title="Formação e certificados"
          description="Estudo contínuo, bases acadêmicas sólidas e aprendizado prático ao longo da carreira."
        />
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">Formação acadêmica</h3>
            <div className="relative ml-3 border-l border-accent-500/30 pl-8">
              {education.map((item, index) => (
                <FadeIn key={item.course} delay={index * 0.08} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-4 border-zinc-950 bg-accent-500" />
                  <p className="mb-1 flex items-center gap-2 text-xs font-semibold text-accent-400">
                    <CalendarDays size={14} /> {item.period}
                  </p>
                  <h4 className="font-heading text-lg font-semibold">{item.course}</h4>
                  <p className="mt-1 text-sm font-medium text-zinc-500">{item.institution}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">Certificados</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((certificate, index) => (
                <FadeIn key={certificate.name} delay={index * 0.08}>
                  <article className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                    <Award className="mb-4 text-accent-400" size={28} />
                    <h4 className="font-heading font-semibold">{certificate.name}</h4>
                    <p className="mt-2 text-sm text-zinc-500">{certificate.institution}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-xs text-zinc-500">{certificate.date}</span>
                      <button
                        type="button"
                        onClick={() => setSelected(certificate)}
                        className="rounded-lg border border-accent-500/30 px-3 py-2 text-xs font-semibold text-accent-400 transition hover:bg-accent-500 hover:text-white"
                      >
                        Ver Certificado
                      </button>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificado ${selected.name}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-900 p-3">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white"
              aria-label="Fechar certificado"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={selected.image} alt={`Certificado ${selected.name}`} fill className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
