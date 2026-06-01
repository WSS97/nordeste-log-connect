const clients = [
  "Bunge Alimentos", "Italac", "Rancheiro", "Melitta", "Dosul", "Plastex",
  "Ypê", "Piracanjuba", "Caeté", "Capriche e Show", "Vitamassa",
];

export function Clients() {
  return (
    <section id="clientes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Principais Clientes</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Marcas que confiam em nossa operação
          </h2>
          <p className="mt-4 text-muted-foreground">
            Parcerias sólidas construídas com qualidade, transparência e resultados.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((c) => (
            <div key={c} className="group flex h-24 items-center justify-center rounded-xl border border-border bg-card p-4 text-center shadow-card transition-smooth hover:-translate-y-0.5 hover:border-accent/40">
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground transition-smooth group-hover:text-primary">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
