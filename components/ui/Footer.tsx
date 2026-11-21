import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-500">
      <p>
        © {new Date().getFullYear()} {profile.name}. Desenvolvido com Next.js e React.
      </p>
    </footer>
  );
}
