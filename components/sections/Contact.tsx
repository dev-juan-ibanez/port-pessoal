"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const text = String(formData.get("message") ?? "").trim();

    if (!name || !email || !text) {
      setStatus("error");
      setMessage("Preencha todos os campos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Informe um email válido.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Não foi possível enviar sua mensagem.");
      }

      setStatus("success");
      setMessage("Mensagem enviada com sucesso! Responderei em breve.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.");
    }
  }

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos trabalhar juntos?"
          description="Tem um projeto em mente ou apenas quer conversar? Envie uma mensagem."
        />
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold">Informações</h3>
            <div className="mt-6 space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-zinc-500 transition hover:text-accent-400">
                <Mail size={18} className="shrink-0" /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 text-sm text-zinc-500 transition hover:text-accent-400">
                <Phone size={18} className="shrink-0" /> {profile.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={18} className="shrink-0" /> Brasil · Remoto
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-zinc-500 transition hover:border-accent-500/50 hover:text-accent-400"
                  aria-label={social.label}
                >
                  {social.label === "GitHub" ? <Github size={18} /> : <Linkedin size={18} />}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Nome
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-zinc-600 focus:border-accent-500"
                  placeholder="Seu nome"
                />
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-zinc-600 focus:border-accent-500"
                  placeholder="voce@email.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">
              Mensagem
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-zinc-600 focus:border-accent-500"
                placeholder="Conte-me sobre seu projeto..."
              />
            </label>
            <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex min-w-40 items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" /> Enviando...
                  </>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
              {message ? (
                <p
                  role="status"
                  className={`text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"}`}
                >
                  {message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
