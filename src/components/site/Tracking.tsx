import { useState } from "react";
import { Search, Package, CheckCircle2, Truck, Warehouse, Loader2 } from "lucide-react";

const steps = [
  { icon: Package, label: "Recebido", desc: "Mercadoria recebida no centro de distribuição" },
  { icon: Warehouse, label: "Em processamento", desc: "Conferência e separação concluídas" },
  { icon: Truck, label: "Em transporte", desc: "Saiu para entrega — Simões Filho/BA" },
  { icon: CheckCircle2, label: "Entregue", desc: "Aguardando confirmação do destinatário" },
];

export function Tracking() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    setShowResult(false);
    setActiveStep(-1);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      steps.forEach((_, i) => setTimeout(() => setActiveStep(i), 300 + i * 400));
    }, 1200);
  };

  return (
    <section id="rastreamento" className="relative -mt-12 px-4 pb-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-10">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
              <Search className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Rastreie sua Carga</h2>
              <p className="text-sm text-muted-foreground">Acompanhe em tempo real o status da sua mercadoria.</p>
            </div>
          </div>
          <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Digite o número da Nota Fiscal ou CPF/CNPJ"
              className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-glow disabled:opacity-60">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Buscando...</> : <><Search className="h-4 w-4" /> Buscar</>}
            </button>
          </form>

          {showResult && (
            <div className="mt-8 border-t border-border pt-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Pedido</div>
                  <div className="font-mono text-sm font-semibold">{value}</div>
                </div>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Em rota de entrega</span>
              </div>
              <ol className="relative space-y-6 border-l-2 border-border pl-8">
                {steps.map((s, i) => {
                  const reached = i <= activeStep;
                  const Icon = s.icon;
                  return (
                    <li key={s.label} className="relative">
                      <span className={`absolute -left-[42px] flex h-9 w-9 items-center justify-center rounded-full transition-smooth ${reached ? "bg-gradient-accent text-accent-foreground shadow-card" : "bg-secondary text-muted-foreground"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className={`transition-smooth ${reached ? "opacity-100" : "opacity-40"}`}>
                        <div className="font-semibold text-foreground">{s.label}</div>
                        <div className="text-sm text-muted-foreground">{s.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
