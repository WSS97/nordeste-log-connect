import { ArrowRight, ShieldCheck, Zap, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="container relative mx-auto grid gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Operação completa no Nordeste do Brasil
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Soluções Logísticas <span className="bg-gradient-accent bg-clip-text text-transparent">Conectadas</span> ao Seu Negócio
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Especialistas na região Nordeste do Brasil, garantindo eficiência operacional, margens competitivas e a proteção da sua marca.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-smooth hover:scale-[1.02]">
              Fale Conosco <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#rastreamento" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-smooth hover:bg-white/10">
              Rastrear Carga
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> Marca protegida</div>
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-accent" /> Operação eficiente</div>
            <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-accent" /> 4 unidades no NE</div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { v: "6.000m²", l: "de armazéns" },
                { v: "10.000", l: "posições pallets" },
                { v: "+150", l: "colaboradores" },
                { v: "+73", l: "veículos na frota" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                  <div className="text-3xl font-bold text-accent">{s.v}</div>
                  <div className="mt-1 text-sm text-white/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
