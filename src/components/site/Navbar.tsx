import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#clientes", label: "Clientes" },
  { href: "#rastreamento", label: "Rastreamento" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-3 font-bold text-primary" aria-label="Santa Cruz Logística">
          {/* LOGO PLACEHOLDER — substitua src/assets/logo.png pelo logo oficial */}
          <img src={logo} alt="Santa Cruz Logística" className="h-10 w-auto" />
          <span className="sr-only">Santa Cruz Logística</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="hidden rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card transition-smooth hover:opacity-90 md:inline-flex">
          Fale Conosco
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-gradient-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
              Fale Conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
