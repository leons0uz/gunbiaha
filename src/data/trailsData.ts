export interface TrailItem {
  title: string;
  description?: string;
}

export interface TrailSection {
  label: string;
  items: TrailItem[];
}

export interface TrailLevel {
  badge: string;
  title: string;
  duration: string;
  isLayer0?: boolean;
  sections: TrailSection[];
  certs?: string[];
  layer0Note?: string;
}

export interface Team {
  id: string;
  name: string;
  emoji: string;
  colorKey: "blue" | "red" | "purple" | "teal" | "amber";
  description: string;
  levels: TrailLevel[];
}

const layer0Sections: TrailSection[] = [
  {
    label: "Redes",
    items: [
      { title: "Modelo OSI e TCP/IP", description: "camada por camada com exemplos reais" },
      { title: "IP, máscara, CIDR, gateway, DNS, DHCP, ARP" },
      { title: "TCP vs UDP", description: "handshake, flags, diferenças práticas" },
      { title: "HTTP/HTTPS, FTP, SMTP, SMB", description: "protocolos de aplicação" },
      { title: "Portas e serviços comuns", description: "22, 80, 443, 445, 3389..." },
      { title: "Firewall, NAT, VLANs", description: "conceitos e funcionamento" },
    ],
  },
  {
    label: "Sistemas Operacionais",
    items: [
      { title: "Linux essencial", description: "terminal, permissões, processos, logs, bash scripting básico" },
      { title: "Windows essencial", description: "Active Directory, registro, Event Viewer, PowerShell básico" },
    ],
  },
  {
    label: "Lógica e Programação",
    items: [
      { title: "Python básico", description: "scripts de automação, leitura de arquivos, requisições HTTP" },
      { title: "Lógica de programação", description: "condicionais, loops, funções" },
    ],
  },
  {
    label: "Conceitos de Segurança",
    items: [
      { title: "CIA Triad", description: "Confidencialidade, Integridade, Disponibilidade" },
      { title: "Tipos de ataque", description: "phishing, brute force, MITM, DoS/DDoS" },
      { title: "Criptografia básica", description: "simétrica, assimétrica, hashes (MD5, SHA)" },
      { title: "Tipos de malware", description: "vírus, ransomware, trojan, spyware, rootkit" },
    ],
  },
];

const layer0: TrailLevel = {
  badge: "Camada 0",
  title: "Base universal — obrigatória para todos",
  duration: "2–4 meses",
  isLayer0: true,
  sections: layer0Sections,
  layer0Note: "Esta camada é igual para todas as áreas. Estude isso antes de qualquer trilha específica.",
};

export const teams: Team[] = [
  {
    id: "blue",
    name: "Blue Team / SOC",
    emoji: "🛡️",
    colorKey: "blue",
    description: "Foco em defender, monitorar e responder a incidentes. Trabalha em SOC (Security Operations Center), analisa alertas, investiga ameaças e protege a infraestrutura.",
    levels: [
      layer0,
      {
        badge: "Iniciante",
        title: "Fundamentos",
        duration: "3–6 meses",
        sections: [
          {
            label: "Redes aplicadas à defesa",
            items: [
              { title: "Análise de pacotes com Wireshark", description: "filtros, identificar tráfego suspeito" },
              { title: "NetFlow e análise de tráfego", description: "detectar anomalias de volume e fluxo" },
              { title: "Switches e roteadores", description: "funcionamento, ARP poisoning, spanning tree" },
              { title: "VPNs", description: "tipos, protocolos (IPSec, OpenVPN, WireGuard)" },
            ],
          },
          {
            label: "Segurança Defensiva",
            items: [
              { title: "Hardening de sistemas", description: "reduzir superfície de ataque em Linux e Windows" },
              { title: "Gestão de vulnerabilidades", description: "Nessus, OpenVAS, CVE, CVSS" },
              { title: "Autenticação e controle de acesso", description: "MFA, IAM, princípio do mínimo privilégio" },
            ],
          },
        ],
        certs: ["CompTIA A+", "CompTIA Network+", "Google Cybersecurity (Coursera)"],
      },
      {
        badge: "Intermediário",
        title: "Analista SOC N1/N2",
        duration: "6–12 meses",
        sections: [
          {
            label: "Ferramentas essenciais",
            items: [
              { title: "Wireshark", description: "captura e análise de pacotes em profundidade" },
              { title: "SIEM", description: "Splunk ou Microsoft Sentinel (queries, dashboards, alertas)" },
              { title: "IDS/IPS", description: "Snort ou Suricata, criação de regras" },
              { title: "EDR/XDR", description: "CrowdStrike, SentinelOne ou Defender for Endpoint" },
            ],
          },
          {
            label: "Análise de Logs",
            items: [
              { title: "Windows Event Logs", description: "IDs críticos: 4624, 4625, 4688, 4698..." },
              { title: "Syslog, auth.log", description: "análise em Linux" },
              { title: "Correlação de eventos", description: "identificar padrões de ataque nos logs" },
            ],
          },
          {
            label: "Frameworks e Metodologias",
            items: [
              { title: "MITRE ATT&CK", description: "táticas e técnicas dos atacantes" },
              { title: "Cyber Kill Chain", description: "fases de um ataque" },
              { title: "Resposta a Incidentes", description: "detecção, contenção, erradicação, recuperação" },
            ],
          },
        ],
        certs: ["CompTIA Security+", "Splunk Core Certified", "BTL1 (Blue Team Labs)"],
      },
      {
        badge: "Avançado",
        title: "Threat Hunter / IR Lead",
        duration: "1–2 anos+",
        sections: [
          {
            label: "Threat Intelligence",
            items: [
              { title: "Threat hunting proativo", description: "buscar ameaças sem alertas prévios" },
              { title: "IOC e TTPs", description: "indicadores de comprometimento e análise" },
              { title: "OSINT aplicado à defesa", description: "rastrear grupos APT" },
            ],
          },
          {
            label: "Resposta Avançada",
            items: [
              { title: "Forense digital básica", description: "coleta de evidências, cadeia de custódia" },
              { title: "Análise de memória", description: "Volatility, dumps de RAM" },
              { title: "Automação com Python/SOAR", description: "playbooks de resposta automática" },
            ],
          },
        ],
        certs: ["CySA+ (CompTIA)", "GCIH (GIAC)", "BTL2", "SC-200 Microsoft"],
      },
    ],
  },
  {
    id: "red",
    name: "Red Team / Pentest",
    emoji: "⚔️",
    colorKey: "red",
    description: "Foco em simular ataques reais para encontrar vulnerabilidades antes dos criminosos. Trabalha como Pentester, Red Teamer ou Bug Hunter.",
    levels: [
      layer0,
      {
        badge: "Iniciante",
        title: "Fundamentos ofensivos",
        duration: "3–6 meses",
        sections: [
          {
            label: "Base técnica obrigatória",
            items: [
              { title: "Linux avançado", description: "bash scripting, permissões, SUID/SGID" },
              { title: "Redes em profundidade", description: "TCP/IP, protocolos, como o tráfego realmente funciona" },
              { title: "Python básico", description: "criar scripts simples de automação e exploração" },
              { title: "Como funciona a web", description: "HTTP, cookies, sessões, APIs REST" },
            ],
          },
          {
            label: "Primeiros passos práticos",
            items: [
              { title: "TryHackMe", description: 'trilhas "Pre-Security" e "Jr Penetration Tester"' },
              { title: "Hack The Box Starting Point", description: "máquinas guiadas" },
              { title: "Kali Linux", description: "se familiarizar com o ambiente" },
            ],
          },
        ],
        certs: ["CompTIA Security+", "eJPT (eLearnSecurity)"],
      },
      {
        badge: "Intermediário",
        title: "Pentester Junior",
        duration: "6–18 meses",
        sections: [
          {
            label: "Pentest Web",
            items: [
              { title: "OWASP Top 10", description: "SQLi, XSS, SSRF, IDOR, XXE na prática" },
              { title: "Burp Suite", description: "interceptação, scanner, intruder, repeater" },
              { title: "PortSwigger Web Academy", description: "labs gratuitos e excelentes" },
            ],
          },
          {
            label: "Pentest de Rede / Infra",
            items: [
              { title: "Nmap", description: "enumeração de portas, detecção de serviços e OS" },
              { title: "Metasploit Framework", description: "exploits, payloads, meterpreter" },
              { title: "Enum4linux, CrackMapExec", description: "enumeração SMB/AD" },
              { title: "Privilege escalation", description: "Linux e Windows (GTFOBins, WinPEAS)" },
            ],
          },
        ],
        certs: ["PTS / PTP (eLearnSecurity)", "CompTIA PenTest+"],
      },
      {
        badge: "Avançado",
        title: "Red Teamer / Exploit Dev",
        duration: "2–4 anos+",
        sections: [
          {
            label: "Red Team Ops",
            items: [
              { title: "Active Directory attacks", description: "Kerberoasting, Pass-the-Hash, DCSync, BloodHound" },
              { title: "C2 Frameworks", description: "Cobalt Strike, Sliver, Havoc" },
              { title: "Pivoting e tunneling", description: "Chisel, Ligolo, proxychains" },
              { title: "AV/EDR Evasion", description: "ofuscação de payload, bypass de defesas" },
            ],
          },
          {
            label: "Desenvolvimento de Exploits",
            items: [
              { title: "Assembly x86/x64", description: "básico para entender shellcodes" },
              { title: "Buffer overflow", description: "stack, heap, técnicas de exploração" },
              { title: "CVE research", description: "análise e reprodução de vulnerabilidades reais" },
            ],
          },
        ],
        certs: ["OSCP (OffSec)", "CRTO (Zero-Point Security)", "CRTE / CRTP (Altered Security)"],
      },
    ],
  },
  {
    id: "purple",
    name: "GRC / Compliance",
    emoji: "📋",
    colorKey: "purple",
    description: "Foco em riscos, conformidade e políticas de segurança. Trabalha com frameworks como ISO 27001, NIST, LGPD/GDPR. Área muito bem remunerada e com menos concorrência técnica.",
    levels: [
      layer0,
      {
        badge: "Iniciante",
        title: "Fundamentos de GRC",
        duration: "3–6 meses",
        sections: [
          {
            label: "Conceitos base",
            items: [
              { title: "CIA Triad, gestão de riscos", description: "conceitos fundamentais" },
              { title: "Tipos de controles", description: "preventivo, detectivo, corretivo" },
              { title: "Redes básicas", description: "apenas para entender arquitetura e riscos" },
              { title: "Legislação brasileira", description: "LGPD, Marco Civil da Internet" },
            ],
          },
          {
            label: "Frameworks introdutórios",
            items: [
              { title: "NIST CSF", description: "Identify, Protect, Detect, Respond, Recover" },
              { title: "ISO 27001", description: "estrutura e objetivos (não precisa ser especialista ainda)" },
            ],
          },
        ],
        certs: ["CompTIA Security+", "Google Cybersecurity (Coursera)"],
      },
      {
        badge: "Intermediário",
        title: "Analista GRC",
        duration: "6–12 meses",
        sections: [
          {
            label: "Frameworks em profundidade",
            items: [
              { title: "ISO 27001", description: "controles, implementação, auditorias internas" },
              { title: "NIST SP 800-53", description: "controles para sistemas federais (muito usado)" },
              { title: "PCI DSS", description: "se for trabalhar com dados de cartão de crédito" },
              { title: "SOC 2", description: "para empresas SaaS e tecnologia" },
            ],
          },
          {
            label: "Habilidades práticas",
            items: [
              { title: "Análise de risco", description: "DPIA, BIA, matriz de riscos" },
              { title: "Políticas de segurança", description: "criar e revisar PSI, BYOD, etc." },
              { title: "Auditoria", description: "conduzir e responder a auditorias" },
            ],
          },
        ],
        certs: ["CISM (ISACA)", "ISO 27001 Lead Implementer", "EXIN Privacy & Data Protection"],
      },
      {
        badge: "Avançado",
        title: "CISO / DPO / Consultor Sênior",
        duration: "3–5 anos+",
        sections: [
          {
            label: "Estratégia e liderança",
            items: [
              { title: "Gestão de programa de segurança", description: "roadmap, métricas, board reporting" },
              { title: "Comunicação executiva", description: "traduzir risco técnico em linguagem de negócio" },
              { title: "Gestão de fornecedores e terceiros", description: "TPRM (Third Party Risk)" },
              { title: "DPO", description: "encarregado de proteção de dados (LGPD)" },
            ],
          },
        ],
        certs: ["CISSP (ISC²)", "CRISC (ISACA)", "ISO 27001 Lead Auditor"],
      },
    ],
  },
  {
    id: "teal",
    name: "Cloud Security",
    emoji: "☁️",
    colorKey: "teal",
    description: "Foco em proteger ambientes de nuvem (AWS, Azure, GCP). Uma das áreas com maior crescimento e salários mais altos do mercado.",
    levels: [
      layer0,
      {
        badge: "Iniciante",
        title: "Cloud + Segurança básica",
        duration: "3–6 meses",
        sections: [
          {
            label: "Cloud Computing",
            items: [
              { title: "Modelos IaaS, PaaS, SaaS", description: "diferenças e responsabilidades" },
              { title: "Shared Responsibility Model", description: "o que é do cliente vs do provedor" },
              { title: "AWS ou Azure", description: "escolha um e aprenda o básico (EC2, S3, VPC, IAM)" },
            ],
          },
          {
            label: "Segurança básica",
            items: [
              { title: "IAM", description: "usuários, grupos, roles, políticas e princípio do mínimo privilégio" },
              { title: "Criptografia", description: "KMS, certificados TLS, criptografia em repouso" },
              { title: "Redes em nuvem", description: "VPC, subnets, security groups, NACLs" },
            ],
          },
        ],
        certs: ["AWS Cloud Practitioner", "AZ-900 Microsoft Azure"],
      },
      {
        badge: "Intermediário",
        title: "Cloud Security Engineer",
        duration: "6–18 meses",
        sections: [
          {
            label: "Segurança em nuvem",
            items: [
              { title: "CSPM", description: "Defender for Cloud, AWS Security Hub, Prisma Cloud" },
              { title: "Logging e monitoramento", description: "CloudTrail, CloudWatch, GuardDuty" },
              { title: "Containers", description: "Docker e Kubernetes security (RBAC, network policies)" },
              { title: "DevSecOps", description: "integrar segurança em pipelines CI/CD" },
            ],
          },
          {
            label: "Infraestrutura como código",
            items: [
              { title: "Terraform", description: "provisionar e analisar infra segura" },
              { title: "Checkov, tfsec", description: "análise estática de IaC" },
            ],
          },
        ],
        certs: ["AWS Security Specialty", "AZ-500 Microsoft", "CompTIA Cloud+"],
      },
      {
        badge: "Avançado",
        title: "Cloud Security Architect",
        duration: "2–4 anos+",
        sections: [
          {
            label: "Arquitetura e estratégia",
            items: [
              { title: "Zero Trust Architecture", description: "design e implementação" },
              { title: "Multi-cloud security", description: "governança em AWS + Azure + GCP" },
              { title: "CNAPP", description: "plataformas unificadas de segurança cloud-native" },
              { title: "Cloud forensics e IR", description: "resposta a incidentes em nuvem" },
            ],
          },
        ],
        certs: ["CCSP (ISC²)", "Google PCSE", "CCSK (CSA)"],
      },
    ],
  },
  {
    id: "amber",
    name: "Malware / Forense",
    emoji: "🔬",
    colorKey: "amber",
    description: "Foco em analisar código malicioso (malware) e investigar crimes digitais (forense). Área muito técnica, com alta demanda em resposta a incidentes e investigações corporativas.",
    levels: [
      layer0,
      {
        badge: "Iniciante",
        title: "Base técnica",
        duration: "4–8 meses",
        sections: [
          {
            label: "Fundamentos obrigatórios",
            items: [
              { title: "Assembly x86/x64", description: "leitura básica (não precisa escrever, precisa ler)" },
              { title: "Windows internals", description: "processos, memória, registro, DLLs, APIs" },
              { title: "Linux internals", description: "syscalls, /proc, ELF binaries" },
              { title: "Redes", description: "para entender C2 e exfiltração de dados" },
            ],
          },
          {
            label: "Primeiros passos",
            items: [
              { title: "ANY.RUN, VirusTotal", description: "sandboxes online para análise inicial" },
              { title: "PEStudio, DetectItEasy", description: "análise estática de arquivos PE" },
              { title: "Análise estática básica", description: "strings, imports, headers de PE" },
            ],
          },
        ],
        certs: ["CompTIA Security+", "TCM Security: Practical Malware Analysis"],
      },
      {
        badge: "Intermediário",
        title: "Analista de Malware / Forense",
        duration: "1–2 anos",
        sections: [
          {
            label: "Análise de Malware",
            items: [
              { title: "IDA Pro / Ghidra", description: "desmontagem e decompilação de binários" },
              { title: "x64dbg / OllyDbg", description: "debugging dinâmico de malware" },
              { title: "Análise de comportamento", description: "processos criados, arquivos modificados, rede" },
              { title: "Unpacking", description: "remover packers como UPX, proteções customizadas" },
            ],
          },
          {
            label: "Forense Digital",
            items: [
              { title: "Autopsy / FTK", description: "análise de imagens de disco" },
              { title: "Volatility", description: "análise de dumps de memória RAM" },
              { title: "Cadeia de custódia", description: "coleta e preservação de evidências" },
              { title: "Forense de Windows", description: "artefatos: Prefetch, LNK, shellbags, MFT" },
            ],
          },
        ],
        certs: ["GCFE (GIAC)", "GREM (GIAC)", "eCDFP (eLearnSecurity)"],
      },
      {
        badge: "Avançado",
        title: "Reverse Engineer / Threat Researcher",
        duration: "3–5 anos+",
        sections: [
          {
            label: "Engenharia reversa avançada",
            items: [
              { title: "Obfuscation avançada", description: "anti-debug, anti-VM, code flattening" },
              { title: "Rootkits e kernel-mode malware", description: "drivers maliciosos, bootkits" },
              { title: "Análise de ransomware", description: "criptografia, identificar fraquezas" },
              { title: "Threat research / publicações", description: "escrever relatórios técnicos de APT" },
            ],
          },
        ],
        certs: ["GREM (GIAC)", "GCFA (GIAC)", "GNFA (GIAC)"],
      },
    ],
  },
];
