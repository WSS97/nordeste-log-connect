import { ClipboardList, PackageCheck, Warehouse, Forklift, Boxes, ListChecks, Send, Repeat, Truck } from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Planejamento logístico", desc: "Estratégia operacional sob medida." },
  { icon: PackageCheck, title: "Recebimento", desc: "Conferência rigorosa de cargas." },
  { icon: Warehouse, title: "Armazenagem", desc: "Estrutura segura e otimizada." },
  { icon: Forklift, title: "Movimentação", desc: "Equipamentos modernos e ágeis." },
  { icon: Boxes, title: "Controle de estoques", desc: "Inventário em tempo real." },
  { icon: ListChecks, title: "Separação", desc: "Picking preciso e rastreável." },
  { icon: Send, title: "Distribuição", desc: "Entregas pontuais no Nordeste." },
  { icon: Repeat, title: "Crossdocking", desc: "Redistribuição sem estoque." },
  { icon: Truck, title: "Transportes", desc: "Frota própria e terceirizada." },
];

export function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Serviços</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Soluções completas de ponta a ponta
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cobrimos toda a cadeia logística para que seu produto chegue com qualidade, agilidade e segurança.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-smooth group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
