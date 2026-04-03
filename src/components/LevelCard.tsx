import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TrailLevel } from "@/data/trailsData";

const colorMap = {
  blue: {
    badge: "text-team-blue border-2 border-team-blue bg-white font-bold",
    badgeAdvanced: "bg-team-blue text-white font-bold",
    glow: "hover:border-team-blue hover:shadow-[0_0_20px_hsl(215_100%_40%/0.2)]",
    cert: "border-2 border-team-blue text-team-blue bg-white font-bold",
    resource: "text-team-blue font-bold",
  },
  red: {
    badge: "text-team-red border-2 border-team-red bg-white font-bold",
    badgeAdvanced: "bg-team-red text-white font-bold tracking-wide",
    glow: "hover:border-team-red hover:shadow-[0_0_20px_hsl(0_100%_40%/0.2)]",
    cert: "border-2 border-team-red text-team-red bg-white font-bold",
    resource: "text-team-red font-bold",
  },
  purple: {
    badge: "text-team-purple border-2 border-team-purple bg-white font-bold",
    badgeAdvanced: "bg-team-purple text-white font-bold",
    glow: "hover:border-team-purple hover:shadow-[0_0_20px_hsl(275_100%_40%/0.2)]",
    cert: "border-2 border-team-purple text-team-purple bg-white font-bold",
    resource: "text-team-purple font-bold",
  },
  teal: {
    badge: "text-team-teal border-2 border-team-teal bg-white font-bold",
    badgeAdvanced: "bg-team-teal text-white font-bold",
    glow: "hover:border-team-teal hover:shadow-[0_0_20px_hsl(175_100%_30%/0.2)]",
    cert: "border-2 border-team-teal text-team-teal bg-white font-bold",
    resource: "text-team-teal font-bold",
  },
  amber: {
    badge: "text-team-amber border-2 border-team-amber bg-white font-bold",
    badgeAdvanced: "bg-team-amber text-white font-bold",
    glow: "hover:border-team-amber hover:shadow-[0_0_20px_hsl(30_100%_40%/0.2)]",
    cert: "border-2 border-team-amber text-team-amber bg-white font-bold",
    resource: "text-team-amber font-bold",
  },
};

interface LevelCardProps {
  level: TrailLevel;
  colorKey: "blue" | "red" | "purple" | "teal" | "amber";
  index: number;
  isAdvanced: boolean;
}

export default function LevelCard({ level, colorKey, index, isAdvanced }: LevelCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const colors = colorMap[colorKey];

  const badgeClass = isAdvanced ? colors.badgeAdvanced : level.isLayer0
    ? "bg-primary/15 text-primary border border-primary/30"
    : colors.badge;

  return (
    <div
      className={`animate-slide-up ${level.isLayer0 ? "glass-card-layer0" : "glass-card"} rounded-xl overflow-hidden transition-all duration-300 ${!level.isLayer0 ? colors.glow : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 text-left group"
      >
        <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${badgeClass}`}>
          {level.badge}
        </span>
        <span className="text-sm font-medium text-card-foreground flex-1 truncate">
          {level.title}
        </span>
        <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">
          {level.duration}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Duration on mobile */}
      {isOpen && (
        <div className="px-4 sm:hidden">
          <span className="text-xs text-muted-foreground">⏱ {level.duration}</span>
        </div>
      )}

      {/* Body */}
      {isOpen && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-4">
          {level.sections.map((section, si) => (
            <div key={si}>
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                {section.label}
              </div>
              <div className="space-y-1.5">
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="text-sm text-foreground/90 px-4 py-3 rounded-xl bg-white border border-border shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] leading-relaxed"
                  >
                    <span className="font-bold text-foreground">{item.title}</span>
                    {item.description && (
                      <span className="text-foreground/80"> — {item.description}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Certs */}
          {level.certs && level.certs.length > 0 && (
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Certificações
              </div>
              <div className="flex flex-wrap gap-2">
                {level.certs.map((cert, ci) => (
                  <span
                    key={ci}
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${colors.cert}`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Layer0 Note */}
          {level.layer0Note && (
            <div className="text-xs text-muted-foreground mt-3 p-3 rounded-lg border border-dashed border-primary/20 bg-primary/5">
              ⚡ {level.layer0Note}
            </div>
          )}

        </div>
      )}
    </div>
  );
}
