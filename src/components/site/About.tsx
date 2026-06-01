import { useState } from "react";
import { Target, Eye, Heart } from "lucide-react";

const tabs = [
  {
    id: "missao", label: "Missão", icon: Target,
    text: "Oferecer soluções logísticas conectadas às estratégias dos nossos clientes, com foco em eficiência operacional, margens competitivas, encurtar distâncias e proteger as marcas de nossos clientes.",
  },
  {
    id: "visao", label: "Visão", icon: Eye,
    text: "Ser reconhecido como o melhor operador logístico do Nordeste no segmento de alimentos e higiene em geral.",
  },
  {
    id: "valores", label: "Valores", icon: Heart,
    text: "Integridade, Respeito, Trabalho em equipe e Foco total no cliente.",
  },
];

export function About() {
  const [active, setActive] = useState("missao");
  const current = tabs.find((t) => t.id === active)!;
  return (
    <section id="quem-somos" className="bg-secondary/40 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Quem Somos</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Encurtando distâncias, protegendo marcas.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Somos uma empresa especializada em soluções logísticas para nossos clientes, com foco na região Nordeste do Brasil. Nosso objetivo é encurtar distâncias e proteger as marcas de nossos parceiros.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-2 shadow-card">
            <div className="flex gap-1 rounded-xl bg-secondary p-1">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => setActive(t.id)} className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-smooth ${active === t.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                <current.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{current.label}</h3>
              <p className="leading-relaxed text-muted-foreground">{current.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
