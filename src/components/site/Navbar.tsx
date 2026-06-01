import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

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
        <a href="#inicio" className="flex items-center gap-2 font-bold text-primary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground">
            <Truck className="h-5 w-5" />
          </div>
          <span className="text-lg tracking-tight">LogisNordeste</span>
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
