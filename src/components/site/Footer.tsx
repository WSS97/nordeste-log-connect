import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const units = [
  { city: "Simões Filho/BA", addr: "Polo Industrial — Entrada de Salvador" },
  { city: "Jaboatão dos Guararapes/PE", addr: "Região Metropolitana do Recife" },
  { city: "Vitória da Conquista/BA", addr: "Sudoeste da Bahia" },
  { city: "Nossa Senhora do Socorro/SE", addr: "Grande Aracaju" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-hero py-14 text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* LOGO PLACEHOLDER — substitua src/assets/logo.png pelo logo oficial */}
          <div className="inline-flex items-center justify-center rounded-xl bg-white p-3">
            <img src={logo} alt="Santa Cruz Logística" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Conectando o Brasil, entregando o futuro. Especialistas em soluções logísticas no Nordeste.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-smooth hover:bg-accent hover:border-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Unidades</h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {units.map((u) => (
              <div key={u.city} className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm font-semibold">{u.city}</div>
                <div className="text-xs text-white/60">{u.addr}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href="#quem-somos" className="hover:text-accent">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#estrutura" className="hover:text-accent">Estrutura</a></li>
            <li><a href="#rastreamento" className="hover:text-accent">Rastreamento</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} LogisNordeste. Todos os direitos reservados.
      </div>
    </footer>
  );
}
