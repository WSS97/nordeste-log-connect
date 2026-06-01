import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="bg-secondary/40 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contato</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Vamos conversar sobre sua operação
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fale com um especialista e descubra como podemos otimizar sua logística no Nordeste.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, title: "Telefone", text: "(71) 3000-0000" },
                { icon: Mail, title: "E-mail", text: "contato@logisnordeste.com.br" },
                { icon: MapPin, title: "Matriz", text: "Simões Filho/BA — Entrada de Salvador" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-success" />
                <h3 className="mt-4 text-xl font-bold">Mensagem enviada!</h3>
                <p className="mt-2 text-muted-foreground">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { name: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                  { name: "email", label: "E-mail", type: "email", placeholder: "voce@empresa.com.br" },
                  { name: "telefone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</label>
                    <input required type={f.type} placeholder={f.placeholder} className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30" />
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Mensagem</label>
                  <textarea required rows={4} placeholder="Como podemos ajudar?" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-smooth hover:opacity-90">
                  Enviar mensagem <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
