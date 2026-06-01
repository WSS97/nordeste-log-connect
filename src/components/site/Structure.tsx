import { useEffect, useRef, useState } from "react";
import { Warehouse, Building2, Users, Truck, TruckIcon, Wrench, MapPin, HardHat, CalendarClock } from "lucide-react";

const stats = [
  { icon: Warehouse, value: "6.000", suffix: "m²", label: "de armazéns com 10.000 posições pallets" },
  { icon: Building2, value: "4.800", suffix: "m²", label: "em construção — ampliação prevista para o 1º sem. de 2026" },
  { icon: Users, value: "150", suffix: "+", label: "colaboradores diretos e indiretos" },
  { icon: Truck, value: "23", suffix: "", label: "veículos próprios — 430 ton/dia" },
  { icon: TruckIcon, value: "50", suffix: "+", label: "veículos terceirizados — 800 ton/dia" },
  { icon: Wrench, value: "30", suffix: "+", label: "equipamentos de movimentação de carga" },
];

const units = [
  { city: "Simões Filho", state: "BA", note: "Entrada de Salvador", pallets: "10.000 posições pallets", main: true },
  { city: "Jaboatão dos Guararapes", state: "PE", note: "Região Metropolitana do Recife", pallets: "600 posições pallets" },
  { city: "Vitória da Conquista", state: "BA", note: "Sudoeste da Bahia", pallets: "400 posições pallets" },
  { city: "Nossa Senhora do Socorro", state: "SE", note: "Grande Aracaju", pallets: "Unidade operacional" },
];

function Counter({ to }: { to: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseInt(to.replace(/\D/g, ""), 10) || 0;
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1500, 1);
          setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{n.toLocaleString("pt-BR")}</span>;
}

export function Structure() {
  return (
    <section id="estrutura" className="bg-gradient-hero py-20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Estrutura Operacional</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Números que comprovam nossa capacidade</h2>
          <p className="mt-4 text-white/75">Infraestrutura robusta para suportar grandes volumes com agilidade.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 to-white/5 p-6 backdrop-blur-md md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[auto,1fr,auto]">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-elegant">
              <HardHat className="h-7 w-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                <CalendarClock className="h-3.5 w-3.5" /> Obra em andamento
              </div>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Ampliação de <span className="text-accent">4.800m²</span> em construção
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Nova área operacional com entrega prevista para o <strong>1º semestre de 2026</strong>, dobrando nossa capacidade de armazenagem.
              </p>
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-white/70">
                  <span>Progresso da obra</span><span className="font-semibold text-accent">65%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-accent" style={{ width: "65%" }} />
                </div>
              </div>
            </div>
            <div className="hidden text-right md:block">
              <div className="text-5xl font-bold text-accent">2026</div>
              <div className="text-xs uppercase tracking-wider text-white/70">1º semestre</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-smooth hover:bg-white/10">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-4xl font-bold tracking-tight">
                <Counter to={s.value} />
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Nossas Unidades</h3>
            <p className="mt-2 text-white/70">Presença estratégica para atender o Nordeste com eficiência.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {units.map((u) => (
              <div key={u.city} className={`rounded-2xl border p-6 backdrop-blur-md transition-smooth ${u.main ? "border-accent/50 bg-accent/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <MapPin className={`h-6 w-6 ${u.main ? "text-accent" : "text-white/70"}`} />
                <div className="mt-3 text-lg font-bold">{u.city}<span className="ml-1 text-sm font-normal text-white/60">/{u.state}</span></div>
                <div className="mt-1 text-xs text-white/60">{u.note}</div>
                <div className="mt-4 border-t border-white/10 pt-3 text-sm font-semibold text-accent">{u.pallets}</div>
                {u.main && <div className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">Matriz</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
