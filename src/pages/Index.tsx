import { useState } from "react";
import { teams } from "@/data/trailsData";
import LevelCard from "@/components/LevelCard";
import { Terminal, ExternalLink } from "lucide-react";
import hackersCover from "@/assets/hackers-do-bem-cover.jpg";
import googleCover from "@/assets/google-cyber-cover.jpg";
import roadmapCover from "@/assets/roadmap-cover.png";
import htbCover from "@/assets/hackthebox-cover.png";
import thmCover from "@/assets/tryhackme-cover.png";

const tabColorClasses = {
  blue: "text-team-blue border-team-blue data-[active=true]:bg-team-blue data-[active=true]:text-white",
  red: "text-team-red border-team-red data-[active=true]:bg-team-red data-[active=true]:text-white",
  purple: "text-team-purple border-team-purple data-[active=true]:bg-team-purple data-[active=true]:text-white",
  teal: "text-team-teal border-team-teal data-[active=true]:bg-team-teal data-[active=true]:text-white",
  amber: "text-team-amber border-team-amber data-[active=true]:bg-team-amber data-[active=true]:text-white",
};

const descBorderColor = {
  blue: "border-l-team-blue",
  red: "border-l-team-red",
  purple: "border-l-team-purple",
  teal: "border-l-team-teal",
  amber: "border-l-team-amber",
};

const platforms = [
  {
    name: "Hackers do Bem",
    description: "Capacitação gratuita em cibersegurança pelo SENAI e RNP — do zero ao avançado.",
    url: "https://hackersdobem.org.br/",
    image: hackersCover,
  },
  {
    name: "Google Cybersecurity Certificate",
    description: "Certificado profissional do Google via Coursera — aprenda no seu ritmo, sem pré-requisitos.",
    url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    image: googleCover,
  },
  {
    name: "Roadmap.sh - Cyber Security",
    description: "Guia completo, interativo e visual do que estudar para se tornar um profissional de cibersegurança.",
    url: "https://roadmap.sh/cyber-security",
    image: roadmapCover,
  },
  {
    name: "Hack The Box",
    description: "Plataforma gamificada massiva de treinamento em cibersegurança e testes de invasão.",
    url: "https://www.hackthebox.com/",
    image: htbCover,
  },
  {
    name: "TryHackMe",
    description: "Aprenda cibersegurança através de laboratórios práticos com caminhos estruturados para iniciantes a profissionais.",
    url: "https://tryhackme.com/",
    image: thmCover,
  },
];

export default function Index() {
  const [activeTeam, setActiveTeam] = useState("blue");

  const team = teams.find((t) => t.id === activeTeam)!;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-team-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-primary animate-glow-pulse" />
            <span className="text-xs font-mono text-primary/100 tracking-wider uppercase">
              Security Roadmap
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Trilhas de Cibersegurança
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Do iniciante ao avançado — escolha sua área e siga a trilha.{" "}
            <span className="text-primary font-medium">Comece sempre pela Camada 0.</span>
          </p>
        </header>

        {/* Tabs */}
        <nav className="flex gap-2 flex-wrap mb-6">
          {teams.map((t) => (
            <button
              key={t.id}
              data-active={activeTeam === t.id}
              onClick={() => setActiveTeam(t.id)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 bg-white text-xs sm:text-sm font-bold transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${tabColorClasses[t.colorKey]}`}
            >
              {t.emoji} {t.name}
            </button>
          ))}
        </nav>

        {/* Team Description */}
        <div
          className={`text-sm text-foreground/90 leading-relaxed mb-6 p-4 rounded-lg bg-white border border-border shadow-sm border-l-[4px] ${descBorderColor[team.colorKey]}`}
        >
          {team.description}
        </div>

        {/* Level Cards */}
        <div className="space-y-4">
          {team.levels.map((level, i) => (
            <LevelCard
              key={`${team.id}-${i}`}
              level={level}
              colorKey={team.colorKey}
              index={i}
              isAdvanced={i === team.levels.length - 1 && !level.isLayer0}
            />
          ))}
        </div>

        {/* Plataformas */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <ExternalLink className="w-4 h-4 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Plataformas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 hover:shadow-[0_0_25px_hsl(120_100%_50%/0.08)] transition-all duration-300"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Trilha de estudos em Cibersegurança — feito com{" "}
            <span className="text-primary">♥</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
