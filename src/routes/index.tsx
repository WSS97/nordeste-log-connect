import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Tracking } from "@/components/site/Tracking";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Structure } from "@/components/site/Structure";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santa Cruz Logística — Soluções Logísticas no Nordeste do Brasil" },
      { name: "description", content: "Operador logístico especializado no Nordeste: armazenagem, distribuição, transporte e rastreamento de cargas com eficiência." },
      { property: "og:title", content: "Santa Cruz Logística — Soluções Logísticas Conectadas ao Seu Negócio" },
      { property: "og:description", content: "Especialistas na região Nordeste do Brasil: eficiência operacional e proteção da sua marca." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Tracking />
        <About />
        <Services />
        <Structure />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
