const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, TabStopType, TabStopPosition,
  HeadingLevel, BorderStyle, WidthType, ShadingType, PageBreak, PageNumber,
  TableOfContents, PageOrientation
} = require('docx');

// === BRAND ===
const BLUE = "4C86FF";       // ND primary
const NAVY = "1B1464";       // ND dark
const LIGHT = "9FC2FF";      // ND light
const GREY = "6B7280";
const LIGHTGREY = "F3F4F6";
const ALMOSTBLACK = "111827";
const TBL_BORDER = "D1D5DB";

// === HELPERS ===
const border = { style: BorderStyle.SINGLE, size: 4, color: TBL_BORDER };
const borders = { top: border, bottom: border, left: border, right: border };

const P = (text, opts = {}) => new Paragraph({
  spacing: { after: 120, ...opts.spacing },
  alignment: opts.alignment,
  children: [new TextRun({ text, font: "Calibri", size: opts.size || 22, color: opts.color || ALMOSTBLACK, bold: opts.bold, italics: opts.italics })]
});

const Pmulti = (runs, opts = {}) => new Paragraph({
  spacing: { after: 120, ...opts.spacing },
  alignment: opts.alignment,
  children: runs
});

const R = (text, opts = {}) => new TextRun({ text, font: "Calibri", size: opts.size || 22, bold: opts.bold, italics: opts.italics, color: opts.color || ALMOSTBLACK });

const H1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  pageBreakBefore: true,
  spacing: { before: 240, after: 200 },
  children: [new TextRun({ text, font: "Calibri", size: 36, bold: true, color: NAVY })]
});

const H2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 240, after: 120 },
  children: [new TextRun({ text, font: "Calibri", size: 28, bold: true, color: BLUE })]
});

const H3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 180, after: 100 },
  children: [new TextRun({ text, font: "Calibri", size: 24, bold: true, color: NAVY })]
});

const bullet = (text, level = 0) => new Paragraph({
  numbering: { reference: "bullets", level },
  spacing: { after: 80 },
  children: [new TextRun({ text, font: "Calibri", size: 22 })]
});

const bulletRich = (runs, level = 0) => new Paragraph({
  numbering: { reference: "bullets", level },
  spacing: { after: 80 },
  children: runs
});

// Table helpers
const cell = (text, opts = {}) => new TableCell({
  borders,
  width: { size: opts.width, type: WidthType.DXA },
  shading: opts.shade ? { fill: opts.shade, type: ShadingType.CLEAR } : undefined,
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  children: [new Paragraph({
    alignment: opts.align,
    children: [new TextRun({ text: String(text), font: "Calibri", size: opts.size || 20, bold: opts.bold, color: opts.color || ALMOSTBLACK })]
  })]
});

const headerRow = (cells, widths) => new TableRow({
  tableHeader: true,
  children: cells.map((t, i) => cell(t, { width: widths[i], shade: NAVY, color: "FFFFFF", bold: true, align: AlignmentType.CENTER, size: 20 }))
});

const dataRow = (cells, widths, opts = {}) => new TableRow({
  children: cells.map((t, i) => cell(t, { width: widths[i], align: opts.align?.[i], bold: opts.bold?.[i], shade: opts.shade?.[i], size: 20 }))
});

const makeTable = (widths, headers, rows, rowOpts = []) => new Table({
  width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
  columnWidths: widths,
  rows: [
    headerRow(headers, widths),
    ...rows.map((r, i) => dataRow(r, widths, rowOpts[i] || {}))
  ]
});

const spacer = () => new Paragraph({ children: [new TextRun({ text: "" })], spacing: { after: 100 } });

const divider = () => new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE, space: 1 } },
  spacing: { before: 60, after: 200 },
  children: [new TextRun({ text: "" })]
});

// === COVER ===
const coverContent = [
  new Paragraph({ spacing: { before: 2400 }, children: [new TextRun({ text: "NEXT DIFFERENT", font: "Calibri", size: 24, color: BLUE, bold: true, characterSpacing: 200 })] }),
  new Paragraph({ spacing: { before: 80 }, children: [new TextRun({ text: "BU DATA & RETAIL", font: "Calibri", size: 18, color: GREY, characterSpacing: 100 })] }),
  new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: BLUE, space: 1 } },
    spacing: { before: 80, after: 600 },
    children: [new TextRun({ text: "" })]
  }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Project Charter", font: "Calibri", size: 36, color: GREY, italics: true })] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "AI Data Access Platform", font: "Calibri", size: 64, bold: true, color: NAVY })] }),
  new Paragraph({ spacing: { after: 600 }, children: [new TextRun({ text: "Data-as-an-Agent Service — DaaS-AI", font: "Calibri", size: 28, color: BLUE, italics: true })] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Linea di business 2026–2028", font: "Calibri", size: 26, color: ALMOSTBLACK })] }),
  new Paragraph({ spacing: { before: 1200 }, children: [new TextRun({ text: "Versione master  ·  Confidenziale", font: "Calibri", size: 20, color: GREY, italics: true })] }),
  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Audience: Board Next Different · Soci Uniting Group · Partner M&A", font: "Calibri", size: 20, color: GREY })] }),
  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Autore: Marco Brandstetter — MD Data & Retail", font: "Calibri", size: 20, color: GREY })] }),
  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Data emissione: 15 maggio 2026  ·  v1.0 draft", font: "Calibri", size: 20, color: GREY })] }),
  new Paragraph({ children: [new PageBreak()] }),
];

// === EXECUTIVE SUMMARY ===
const execSummary = [
  H1("1. Executive Summary"),
  P("Next Different propone al Board un pivot strategico della BU Data & Retail: da Data Monetization tradizionale a Data-as-an-Agent Service (DaaS-AI). La piattaforma rende interrogabili in linguaggio naturale, via agent AI (Claude, ChatGPT, Gemini, Copilot), tutti gli asset dati ND — mobility, retail media, audience comportamentale, sensoristica in-store — abbattendo la barriera tecnica e ampliando il TAM a segmenti finora esclusi (PMI, agenzie locali, trade)."),
  H3("Perché ora"),
  bullet("Mercato retail media Italia: €640M (2025) → ~€810M (2026E) → €1mld+ (2028E), CAGR ~27% (fonti: Osservatorio Polimi, IAB Europe, GroupM)."),
  bullet("L'in-store è il sleeping giant: ~5% del valore retail media ma 90%+ delle vendite avviene in negozio fisico. 2026 = anno di svolta."),
  bullet("Italia frammentata (top 5 = 57% vs Francia 84%): impossibile replicare il modello Unlimitail, ma chi aggrega in mercato frammentato cattura più valore."),
  bullet("Diffusione LLM enterprise (Claude, ChatGPT, Copilot, Gemini): qualsiasi manager interroga sistemi complessi senza data team."),
  H3("Asset abilitanti già esistenti"),
  bullet("One Data Platform — 15M MAID mobility + 40M cookie behavioral + motore semantico CNR + algoritmi Naive Bayes + profilo SUPER USER."),
  bullet("Data Hub Agent — orchestratore retail media multi-retailer già prototipato in 15 schermate HTML (connettori Carrefour API, Conad email, Coop SFTP, Brico io upload, Esselunga webhook, sensoristica ISEN)."),
  bullet("Case study sell-out: +183% Barilla Pinsa, +117% Gran Cereale, +22,33% Henkel Brico io — unico player italiano con KPI dimostrati."),
  bullet("Inventory mista (signage retail + audience digital) + capability media + capability AI nello stesso ecosistema."),
  H3("Investimento richiesto"),
  bullet("Scenario Base 2026–2028: €2,0M opex incrementale (team + tech) + €5–8M M&A opzionale (Livesignage CMS + Immedya network)."),
  bullet("Break-even atteso 2027 nello scenario Base; payback dell'investimento entro Q3 2028."),
  H3("North Star"),
  P("\"The AI Operating System for Retail & Mobility Data\" — la piattaforma unica che permette a qualsiasi azienda di interrogare il mondo fisico, comprendere comportamenti, generare audience, attivare campagne e misurare impatto tramite AI conversazionale.", { bold: true, color: NAVY }),
  H3("Decisione richiesta al Board"),
  bullet("Approvazione pivot strategico DaaS-AI come direzione 2026–2028 della BU Data & Retail."),
  bullet("Allocazione budget MVP 12–16 settimane (~€350K opex) per 3 design partner pilot."),
  bullet("Mandato esplorazione M&A Combo (Livesignage + Immedya + ARGO Vision) per chiusura Q4 2026 / Q1 2027."),
];

// === MARKET ===
const market = [
  H1("2. Scenario di Mercato"),
  H2("2.1 Dimensione del retail media"),
  makeTable([1800, 1100, 1100, 1300, 1300, 900], [
    "Perimetro", "2024", "2025", "2026E", "2028E", "CAGR"
  ], [
    ["Globale", "$140 mld", "$184 mld", "$200+ mld", "—", "~20%"],
    ["Europa", "€13,7 mld", "€16,9 mld", "€20,8–22,3 mld", "€28,8–31,3 mld", "~28%"],
    ["Italia", "€510M", "€640M", "~€810M", "~€1 mld+", "~27%"]
  ], [
    {},
    {},
    { bold: [true, true, true, true, true, true], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] }
  ]),
  spacer(),
  P("Fonti: Osservatorio Polimi, IAB Europe, eMarketer, GroupM, WARC."),
  P("In Italia l'80% del valore è in mano a piattaforme e-commerce (Amazon). Il 20% restante (~€130M) è l'arena competitiva per i retailer fisici e cresce molto più velocemente del totale."),
  H2("2.2 Le 3 componenti retail media"),
  makeTable([2400, 2400, 2400, 2160], [
    "Componente", "Cosa", "Maturità Italia", "Valore"
  ], [
    ["On-site", "Sito/app retailer", "Media", "~70%"],
    ["Off-site", "Canali terzi con first-party", "Bassa", "~25%"],
    ["In-store", "Signage, totem, IoT", "Molto bassa", "~5%"]
  ]),
  spacer(),
  P("L'in-store è il sleeping giant (Stratacache): quota minima ma 90%+ delle vendite avviene in negozio. Il 2026 è identificato come anno di svolta. Questo è esattamente il mercato dove ND ha asset, dati e case study.", { italics: true }),
  H2("2.3 Italia ≠ Francia — il vantaggio del frammentato"),
  makeTable([2400, 3000, 3960], [
    "Fattore", "Francia", "Italia"
  ], [
    ["Concentrazione top 5", "84% del mercato", "57% del mercato"],
    ["Governance", "Centralizzata per insegna", "Cooperative/consortili"],
    ["Maturità tech", "Carrefour Links + Criteo + LiveRamp", "Solo 8% retailer offre RM strutturato"],
    ["Standardizzazione", "IAB France", "53% inserzionisti lamenta mancanza standard"]
  ]),
  spacer(),
  P("Il modello francese (Unlimitail JV, In-Store Media concessionaria, Infinity Advertising alleanza dati) non si replica in Italia. Ma chi fa da aggregatore in mercato frammentato cattura più valore di chi lo fa in mercato consolidato. Il problema italiano è l'opportunità per ND."),
  H2("2.4 L'opportunità AI-agentica"),
  P("Il mercato della monetizzazione dati si è storicamente sviluppato su due modelli: (1) vendita di report e insight elaborati — alto margine, bassa scalabilità — e (2) vendita di dato raw a player con data team interno. La diffusione di LLM enterprise cambia il paradigma."),
  bullet("Claude / Claude Code (Anthropic)"),
  bullet("ChatGPT Enterprise / OpenAI Apps"),
  bullet("Gemini (Google Workspace)"),
  bullet("Microsoft Copilot (M365)"),
  bullet("Cursor, Windsurf (IDE agentici)"),
  bullet("Protocollo MCP — standard universale per agent tooling"),
  P("Il dato passa da asset tecnico a servizio conversazionale intelligente. Il passaggio strategico non è \"vendere dati\" ma rendere interrogabile il mondo reale tramite AI.", { bold: true, color: NAVY }),
];

// === VISION ===
const vision = [
  H1("3. Vision e North Star"),
  H2("3.1 Vision"),
  P("Trasformare la BU Data & Retail di Next Different in una AI-native Data Infrastructure capace di rendere interrogabili via AI tutti gli asset dati ND — mobility, location, retail media, audience comportamentale, sensoristica in-store — abbattendo la barriera tecnica di accesso.", { size: 24 }),
  H2("3.2 North Star"),
  Pmulti([
    new TextRun({ text: "\"The AI Operating System for Retail & Mobility Data\"", font: "Calibri", size: 32, bold: true, color: NAVY })
  ], { alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 } }),
  P("Piattaforma unica che permette a qualsiasi azienda di:"),
  bullet("Interrogare il mondo fisico — dove sono le persone, cosa fanno, dove vanno"),
  bullet("Comprendere comportamenti — correlazione online ↔ offline"),
  bullet("Generare audience attivabili"),
  bullet("Attivare campagne via DSP/DMP/CDP + signage"),
  bullet("Misurare impatto — uplift sell-out certificato"),
  P("Tutto tramite un'unica interfaccia conversazionale AI.", { bold: true }),
  H2("3.3 Da Data Monetization a Data-as-an-Agent Service"),
  makeTable([2400, 3360, 3600], [
    "Dimensione", "Modello attuale", "Modello DaaS-AI"
  ], [
    ["Output", "Feed dati / dashboard / report", "Risposta conversazionale + insight + export"],
    ["Skill cliente", "Data team, BI", "Nessuna — parla in italiano all'agent"],
    ["Time-to-insight", "Giorni/settimane", "Secondi"],
    ["Pricing", "Canone fisso (~€5K/mese)", "Subscription tier + consumption"],
    ["Target", "Enterprise con BI interna", "Enterprise + agenzie + PMI + trade"],
    ["Margine", "Lineare con il dato", "Esponenziale (layer software)"]
  ]),
];

// === PRODUCTS ===
const products = [
  H1("4. Prodotti — i 4 verticali DaaS-AI"),
  H2("4.1 A — AI Plugin Marketplace"),
  P("Plugin proprietari ND distribuiti sui marketplace dei principali LLM. Il cliente non lascia il tool che già usa."),
  makeTable([3000, 3200, 3160], [
    "Plugin", "Marketplace", "Use case primario"
  ], [
    ["Claude Skill", "Anthropic Marketplace", "Analisti, consulenti, knowledge worker"],
    ["Claude Code", "CLI / IDE", "Dev cliente, system integrator"],
    ["ChatGPT App / Custom GPT", "OpenAI GPT Store", "Marketing manager, agenzie"],
    ["Gemini Extension", "Google Workspace", "Aziende Google-first"],
    ["Copilot Plugin", "Microsoft 365", "Banking, insurance, PA"],
    ["Cursor / Windsurf", "Marketplace IDE", "Dev team, partner SI"]
  ]),
  spacer(),
  P("Tool curati esposti dai plugin:"),
  bullet("get_audience(query_nl) → segmento + size + attivabilità"),
  bullet("analyze_footfall(area, period) → flussi + cluster"),
  bullet("compare_areas(area_a, area_b, kpi) → benchmark"),
  bullet("forecast_traffic(area, horizon) → predizione + intervallo confidenza"),
  bullet("generate_report(brief) → PDF/PPTX brandato"),
  H2("4.2 B — Conversational Data API"),
  P("API HTTP standard, pensate per agent (input in linguaggio naturale, non solo strutturato)."),
  P("Esempio query: \"Mostrami i flussi di persone interessate al fitness che frequentano centri commerciali nel weekend a Milano.\"", { italics: true, color: GREY }),
  P("Output strutturato: audience profilata, heatmap geografica, insight testuali, trend storici, KPI quantitativi, export media-ready (DSP/DMP)."),
  H2("4.3 C — AI Mobility Intelligence"),
  P("Verticale per comuni, utility, mobility company, aeroporti, GDO, centri commerciali. Basato sui modelli già sviluppati per analisi mobilità (catchment area, drive-to-store, flussi origin-destination)."),
  H2("4.4 D — AI Retail Intelligence"),
  P("Interrogazione conversazionale di dati retail media (rete ND + partner), in-store behavior, OTS, engagement, conversion uplift, correlazione signage → sell-out."),
  P("Backend già esistente: si appoggia sul Data Hub Agent (vedi capitolo 5) — prototipato in 15 schermate HTML, connettori multi-retailer documentati. Aggiunto il layer LLM + MCP sopra lo schema unificato, AI Retail Intelligence è producibile in 12–16 settimane.", { bold: true, color: NAVY }),
];

// === ASSETS ===
const assets = [
  H1("5. Asset Esistenti — il vantaggio strutturale"),
  H2("5.1 One Data Platform"),
  P("Piattaforma proprietaria \"Next Different One\" — motore costruito con CNR (motore semantico, Naive Bayes, entity linking)."),
  makeTable([4680, 4680], [
    "Asset", "Volume / Stato"
  ], [
    ["MAID mobility tracciati", "15M utenti (rilevazioni: 30/giorno per utente)"],
    ["Cookie behavioral profilati", "40M utenti"],
    ["Profilo SUPER USER", "Where lives, age, income, retail habits, POI, ad interaction"],
    ["Arricchimenti", "ISTAT socio-demo, ATECO, Agenzia Entrate"],
    ["Canone attuale piattaforma", "€5.000/mese (contratto annuale)"]
  ]),
  H2("5.2 Data Hub Agent — orchestratore retail media"),
  P("Prototipo già funzionante (15 schermate HTML navigabili, Apr 2026). Cuore tecnico del prodotto AI Retail Intelligence."),
  H3("Pipeline a 4 step"),
  bullet("Ingestion — scaricamento da connettori eterogenei"),
  bullet("Normalizzazione — mapping colonne, conversione unità, dedup, data cleaning"),
  bullet("Quality Check — validazione range, outlier detection, confronto storico"),
  bullet("Distribution — aggiornamento viste, notifica stakeholder, snapshot backup"),
  H3("Connettori multi-retailer documentati"),
  makeTable([2400, 2800, 4160], [
    "Retailer", "Protocollo", "Stato / Note"
  ], [
    ["Carrefour", "API Retail Media diretta", "Attivo — sell-out, impressions, foot traffic"],
    ["Conad", "Email Parser (Excel/PDF)", "Attivo — agent monitora inbox, parsing automatico"],
    ["Coop", "SFTP CSV giornaliero", "Attivo — sell-in/sell-out per PDV e SKU"],
    ["Brico io", "Upload manuale Excel", "Attivo — agent valida e normalizza"],
    ["Esselunga", "Webhook real-time", "In configurazione endpoint"],
    ["Eurospin", "API onsite", "Pending credenziali partner"],
    ["ISEN Sensoristica", "Feed contapersone + OTS", "Attivo — foot traffic per PDV"]
  ]),
  spacer(),
  H3("Capability AI dell'agent"),
  bullet("Auto-detection formato — l'agent AI rileva automaticamente il formato e mappa i campi"),
  bullet("Mapping schema cross-retailer — ogni retailer ha colonne diverse, l'agent traduce a schema unico"),
  bullet("Alerting su anomalie — esempi reali nel mockup: \"Mancano OTS per 23 PV Conad\", \"Player offline 8 PV Carrefour\""),
  bullet("Auto-request — pull schedulato da API esterne"),
  H2("5.3 Inventory ed ecosistema"),
  bullet("Rete signage retail media (Conversational Signage + Retail Media Grid) — partner attivi: Conad, Carrefour, Brico io, Unieuro"),
  bullet("15+ case study reali con uplift sell-out misurato"),
  bullet("Rete commerciale Uniting Group — 400+ persone, €120M+ revenue gruppo"),
  bullet("Partnership tecnologiche: Var Group, Durante, Samsung VXT, Accenture, Kiwi Digital, MCube"),
  H2("5.4 Case study a supporto"),
  makeTable([2400, 2400, 2400, 2160], [
    "Cliente", "Contesto", "KPI", "Risultato"
  ], [
    ["Barilla — Pinsa", "Testata gondola digitale (Carrefour)", "Uplift sell-out", "+183%"],
    ["Barilla — Gran Cereale", "Testata gondola digitale (Carrefour)", "Uplift sell-out", "+117%"],
    ["Pavesi — Togo", "Testata gondola digitale (Carrefour)", "Uplift sell-out", "+65%"],
    ["Henkel", "Conversational Signage (Brico io)", "Aumento vendite vs 2024", "+22,33%"],
    ["Barilla — Conad", "55 PDV, contenuti per cluster", "Audience attivabile", "Segmenti riusabili"]
  ]),
  spacer(),
  P("Questi risultati sono stati ottenuti con strumenti tradizionali. Esposti via AI conversazionale, lo stesso dato diventa accessibile a 10x i clienti potenziali a costo marginale near-zero.", { italics: true, bold: true }),
];

// === FRUIZIONE ===
const fruizione = [
  H1("6. Modalità di Fruizione"),
  P("Tre assi di design: canale di accesso × forma di output × integrazione operativa."),
  H2("6.1 I 7 canali di accesso"),
  makeTable([2400, 4200, 2760], [
    "Canale", "Cosa è", "Target"
  ], [
    ["Web App ND Data Studio", "Portale proprietario: chat, dashboard, map view, audience builder", "PRO + ENTERPRISE"],
    ["Plugin Agent AI", "Claude / ChatGPT / Gemini / Copilot / Cursor", "Knowledge worker, agenzie, enterprise"],
    ["MCP Server", "stdio / HTTP-SSE / self-hosted ENTERPRISE", "Dev, system integrator, clean room"],
    ["REST API Conversational", "/ask, /audience, /forecast, /report", "Agenzie, SI, partner"],
    ["Embedded Widget", "White-label, iframe, dominio cliente", "Concessionarie, intranet retailer"],
    ["Workflow Automation", "n8n, Make, Zapier — nodi nativi ND", "PMI, marketing ops, store manager"],
    ["Voice / WhatsApp", "ElevenLabs + WhatsApp Business API", "Top management, sales field"]
  ]),
  H2("6.2 Matrice canale × tier"),
  makeTable([3600, 1320, 1800, 2640], [
    "Canale", "STARTER", "PROFESSIONAL", "ENTERPRISE"
  ], [
    ["Web App ND Data Studio", "✓ (limitato)", "✓ pieno", "✓ + white-label"],
    ["Plugin Claude/ChatGPT/Gemini", "✓ (1 plugin)", "✓ tutti", "✓ + custom"],
    ["MCP Server (hosted)", "—", "✓", "✓"],
    ["MCP Server (self-hosted)", "—", "—", "✓"],
    ["REST API", "rate-limited", "✓", "✓ + SLA dedicato"],
    ["Embedded white-label", "—", "✓ basico", "✓ full"],
    ["Workflow n8n/Make/Zapier", "✓", "✓", "✓"],
    ["Voice / WhatsApp", "—", "✓ add-on", "✓ incluso"],
    ["Clean Room dedicata", "—", "—", "✓"],
    ["Audience export → DSP", "—", "3 DSP", "tutte"],
    ["Custom model fine-tuning", "—", "—", "✓"],
    ["SLA & supporto", "community", "business hours", "24/7 + CSM"]
  ]),
  H2("6.3 Caratteristiche tecniche trasversali"),
  H3("Latenza e freschezza dato"),
  makeTable([2700, 2160, 2160, 2340], [
    "Tier dato", "Latenza", "Freshness", "Esempi"
  ], [
    ["Standard", "<3s", "T+1 batch notturno", "Footfall storico, segmenti"],
    ["Near real-time", "<5s", "15 min", "OTS signage, in-store behavior"],
    ["Real-time", "<1s", "Streaming continuo", "Eventi, alerting soglie"],
    ["Forecast", "<10s", "Modello settimanale", "Predittivo footfall, sell-out"]
  ]),
  spacer(),
  H3("Sicurezza e compliance"),
  bullet("Tenant isolation — Postgres schema separati + Pinecone namespace per RAG"),
  bullet("Clean room ENTERPRISE — dato non lascia il VPC cliente"),
  bullet("Audit log completo (chi, cosa, quando, con quale LLM)"),
  bullet("GDPR compliant — ND=Processor / Cliente=Controller (DPA standard)"),
  bullet("Data residency selezionabile: EU / IT-only per PA, banking, sanità"),
  bullet("PII redaction automatica in ogni output"),
  H3("Personalizzazione per tenant"),
  bullet("System prompt configurabile (tono, focus, KPI prioritari)"),
  bullet("Custom dataset upload (CRM/sell-out cliente correlato con dato ND)"),
  bullet("Glossario aziendale (l'agent impara la terminologia cliente)"),
  bullet("Saved query / Playbook condivisibili"),
  bullet("Brand kit per report PDF/PPTX"),
];

// === TARGETS ===
const targets = [
  H1("7. Target Clienti"),
  H2("7.1 Quick wins — pipeline ND già calda"),
  P("Riconversione di trattative attive con upgrade a moduli DaaS-AI:"),
  makeTable([2400, 3000, 3960], [
    "Cliente", "Prodotto naturale", "Hook DaaS-AI"
  ], [
    ["Barilla", "AI Retail Intelligence", "Interroga in italiano performance signage 55 PDV Conad"],
    ["Parmalat", "AI Retail + Audience", "LOI in preparazione → modulo AI come up-sell"],
    ["Valsoia", "AI Audience Generation", "Pres. 27/05 Bologna — data+targeting conversational"],
    ["Edenred", "Mobility Intelligence", "Esplorazione geo/proximity già in corso"],
    ["Eni Live", "AI Mobility + Retail", "POC Grid → estensione conversational"],
    ["Alleanza Cooperative GDO", "AI Retail Intelligence", "LOI retail media in-store → tier ENTERPRISE"],
    ["Costa Crociere/Fidia", "AI Mobility (passenger flows)", "Use case territoriale unico"],
    ["Unieuro", "AI Retail Intelligence", "Cliente vinto, espansione modulo AI"]
  ]),
  H2("7.2 Verticali strategici"),
  H3("AI Mobility Intelligence"),
  bullet("Comuni: Milano, Roma, Torino, Bologna, Firenze, Napoli, Verona"),
  bullet("Aeroporti: SEA (Linate/Malpensa), ADR (Fiumicino), SAVE Venezia, SACBO Bergamo"),
  bullet("Mobility company: Trenord, Trenitalia, ATM, ATAC, Autostrade per l'Italia"),
  bullet("Utility: A2A, Hera, Iren, Acea, Snam"),
  bullet("Real estate: IGD, Klépierre Italia, Sonae Sierra, Nhood, Svicom"),
  bullet("Sport & eventi: Lega Serie A, RCS Sport (Giro), promoter musicali"),
  H3("AI Retail Intelligence"),
  bullet("CPG: Barilla, Pavesi, Henkel, Mondelez, Ferrero, Nestlé, Danone, Lavazza, Granarolo, Galbani"),
  bullet("GDO: Conad Adriatico, Carrefour, Esselunga, Coop, Pam Panorama, Bennet"),
  bullet("Bricolage/DIY: Brico io, Leroy Merlin, OBI, Bricoman"),
  bullet("Pharma: Q-Farma/Consulcesi, Hippocrates (680 PDV), BENU (270 PDV)"),
  bullet("Specialty retail: Unieuro, MediaWorld, Decathlon, OVS, Calzedonia"),
  H3("Agenzie & Trade (segmento ad alto TAM)"),
  bullet("Centri media indipendenti: Wavemaker, Initiative, Mindshare, OMD, Carat"),
  bullet("Concessionarie: Manzoni, Publitalia, RCS Pubblicità, Cairo Pubblicità"),
  bullet("Agenzie locali/regionali: 50–200 agenzie territoriali italiane (target STARTER/PRO)"),
  bullet("Agenzie trade marketing: Promoplan, Sales Line, In Action, Promotica"),
  bullet("System integrator: Accenture, Deloitte Digital, NTT Data, Reply, BIP"),
  H3("PMI Evolute (segmento nuovo TAM expansion)"),
  bullet("Catene retail regionali 40–300 PDV — abbigliamento, ottica, ristorazione organizzata"),
  bullet("Reti franchising — Fastweb store, Eolo, agenzie immobiliari (Tecnocasa, Gabetti)"),
  bullet("HoReCa di scala media — catene ristoranti, gelaterie, bar branded"),
  H3("Enterprise cross-settore"),
  bullet("Telco: TIM, Vodafone Italia, WindTre, Iliad, Fastweb (pipeline Fastweb/Vodafone €1,28M)"),
  bullet("Banking & Insurance: Intesa Sanpaolo, UniCredit, BPER, Mediolanum, Generali, Unipol"),
  bullet("Automotive: Stellantis, Ferrari, dealer network (Autotorino, Spazio Group)"),
  bullet("Energy: Eni, Plenitude, Enel X, A2A Energia"),
  bullet("Travel: Costa, MSC, Alpitour, Eden Viaggi, lastminute.com"),
  H2("7.3 Stima ARR potenziale (orientamento)"),
  P("Bande ARR per segmento (cliente medio, ipotesi conservative):"),
  makeTable([3000, 2400, 4000], [
    "Segmento", "ARR cliente medio", "Note"
  ], [
    ["Enterprise top (telco/banking/utility)", "€80–250K", "Clean room, custom model, SLA dedicato"],
    ["GDO / GDS top retailer", "€60–180K", "Multi-retailer su Data Hub Agent"],
    ["Brand CPG mid-large", "€30–80K", "AI Retail Intelligence + audience"],
    ["Agenzia media mid-tier (revendita)", "€20–60K", "Wholesale via plugin, multi-cliente"],
    ["Comuni / mobility verticale", "€40–120K", "AI Mobility Intelligence + report"],
    ["PMI / agenzia locale (STARTER)", "€3–12K", "Self-service AI-guided, scalabile"]
  ]),
];

// === PRICING ===
const pricing = [
  H1("8. Pricing Model"),
  H2("8.1 Modello Subscription"),
  makeTable([2160, 5000, 2200], [
    "Tier", "Contenuto", "Target"
  ], [
    ["STARTER", "Query mensili limitate, dataset standard, dashboard base, 1 plugin AI", "PMI, agenzie locali"],
    ["PROFESSIONAL", "API complete, plugin AI tutti, export illimitato, segmentazioni avanzate, supporto", "Agenzie media, brand mid-market"],
    ["ENTERPRISE", "Clean room, dati custom, real-time, SLA, modelli dedicati, multiutente, white-label", "Retailer top, utility, telco, banking"]
  ]),
  H2("8.2 Modello Consumption"),
  P("Pricing variabile applicabile in aggiunta o stand-alone:"),
  bullet("Per query eseguita"),
  bullet("Per volume dati restituito"),
  bullet("Per area geografica (Italia / EU / extra-EU)"),
  bullet("Per enrichment applicato"),
  bullet("Per API call (semplice vs query con modello)"),
  H2("8.3 Pricing target (orientamento)"),
  makeTable([2160, 2400, 2400, 2400], [
    "Tier", "Canone mensile", "Setup", "Crediti inclusi"
  ], [
    ["STARTER", "€500–1.000", "€0 (self-service)", "1.000 query/mese"],
    ["PROFESSIONAL", "€3.000–7.000", "€2.000–5.000", "10.000 query/mese"],
    ["ENTERPRISE", "€15.000–50.000", "€10.000–30.000", "Custom (no cap)"]
  ]),
  spacer(),
  H2("8.4 Billing e trasparenza"),
  bullet("Token/query meter visibile in real-time nella Web App"),
  bullet("Budget alert configurabili (es. soglia 80% consumption mensile)"),
  bullet("Cost preview prima di query costose"),
  bullet("Crediti pre-pagati con sconto volumi"),
  bullet("Fatturazione mensile/trimestrale integrata con flusso preventivazione esistente"),
];

// === ROADMAP ===
const roadmap = [
  H1("9. Roadmap 12–24 mesi"),
  H2("9.1 Roadmap operativa"),
  makeTable([1800, 3600, 3960], [
    "Quarter", "Milestone", "Output"
  ], [
    ["Q3 2026", "MVP 3 design partner — Web App + MCP + Plugin Claude/ChatGPT + REST API + n8n", "MVP funzionante, 3 pilot live"],
    ["Q4 2026", "Onboarding tier PROFESSIONAL — agenzie + brand CPG. Plugin Gemini/Copilot. Audience export 3 DSP", "10+ clienti paganti, revenue ricorrente"],
    ["Q1 2027", "Lancio commerciale completo — go-to-market via Uniting + canale agenzie. M&A Combo closing (Livesignage + Immedya)", "Network proprietario schermi, CMS proprietario"],
    ["Q2 2027", "Plugin marketplace pubblici (Anthropic, OpenAI, Google, Microsoft). Voice/WhatsApp. STARTER self-service", "Acquisition organica + PR"],
    ["Q3 2027", "Clean Room ENTERPRISE (top 5 retailer/telco). Custom model fine-tuning", "Deal ENTERPRISE 6-figure firmati"],
    ["Q4 2027", "Forecast engine + Predictive AI + Marketplace dataset terzi", "Estensione TAM verso B2B2B"],
    ["2028", "AI Operating System retail completo. Marketplace plugin. Programmatic via DSP/SSP", "Revenue €3–5M BU (scenario base)"]
  ]),
  H2("9.2 Milestone critiche"),
  bullet("MVP produzione: 12–16 settimane dall'approvazione board"),
  bullet("First paying customer: entro Q4 2026"),
  bullet("Break-even DaaS-AI: Q3 2027 (scenario Base)"),
  bullet("M&A Combo closing: Q1 2027"),
  bullet("North Star (\"AI Operating System\"): 2028"),
];

// === P&L ===
const pl = [
  H1("10. Investimento e P&L Proiettato 2026–2028"),
  H2("10.1 Ipotesi alla base"),
  bullet("Baseline BU 2026: €546–615K revenue (da Budget 2026 approvato, vedi pipeline €6,27M, 17 deal vinti)"),
  bullet("Target Board 2028 (precedente al DaaS-AI): €3–5M revenue BU"),
  bullet("Costo medio FTE tech/AI: €70K loaded"),
  bullet("Costo medio FTE sales/CSM: €60K loaded"),
  bullet("Margine SaaS DaaS-AI: 70% lordo a regime"),
  bullet("M&A budget (Combo Livesignage + Immedya + ARGO): €8–15M, finanziamento misto equity/debt"),
  H2("10.2 Scenario CONSERVATIVE"),
  P("Ipotesi: zero M&A, pivot graduale, MVP a 2 design partner, ramp lento.", { italics: true }),
  makeTable([3000, 1800, 1800, 1800, 1560], [
    "Voce (€ K)", "2026", "2027", "2028", "Note"
  ], [
    ["Revenue BU (esistente)", "550", "750", "1.000", "Crescita organica"],
    ["Revenue DaaS-AI", "30", "250", "700", "Pilot + early adopter"],
    ["TOTAL REVENUE", "580", "1.000", "1.700", ""],
    ["Costi team (FTE)", "350", "550", "850", "+2 FTE/anno"],
    ["Costi tech (cloud, LLM, licenze)", "60", "120", "200", "Pay-as-you-grow"],
    ["Costi sales & marketing", "40", "100", "180", "Lead gen + eventi"],
    ["TOTAL COSTS", "450", "770", "1.230", ""],
    ["EBITDA", "130", "230", "470", ""],
    ["EBITDA margin", "22%", "23%", "28%", ""]
  ], [
    {}, {}, { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    {}, {}, {}, { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] }
  ]),
  spacer(),
  H2("10.3 Scenario BASE (raccomandato)"),
  P("Ipotesi: MVP a 3 design partner, full pivot DaaS-AI, M&A Livesignage Q1 2027 (€3M), no M&A Immedya.", { italics: true }),
  makeTable([3000, 1800, 1800, 1800, 1560], [
    "Voce (€ K)", "2026", "2027", "2028", "Note"
  ], [
    ["Revenue BU (esistente)", "615", "1.000", "1.500", "Crescita + cross-sell DaaS"],
    ["Revenue DaaS-AI", "120", "700", "2.000", "MVP → scaling enterprise"],
    ["Revenue M&A Livesignage", "—", "1.200", "2.500", "Closing Q1 2027"],
    ["TOTAL REVENUE", "735", "2.900", "6.000", ""],
    ["Costi team (FTE)", "450", "1.100", "1.900", "+5 FTE 2027 (M&A integration)"],
    ["Costi tech", "100", "300", "550", "Cloud + LLM scaling"],
    ["Costi sales & marketing", "70", "300", "700", "Canale agenzie + IAB/PR"],
    ["Costi integrazione M&A", "—", "200", "100", "One-time + integrazione"],
    ["TOTAL COSTS", "620", "1.900", "3.250", ""],
    ["EBITDA", "115", "1.000", "2.750", ""],
    ["EBITDA margin", "16%", "34%", "46%", ""]
  ], [
    {}, {}, {},
    { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    {}, {}, {}, {},
    { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] }
  ]),
  spacer(),
  H2("10.4 Scenario AGGRESSIVE"),
  P("Ipotesi: full pivot + M&A Combo completo (Livesignage + Immedya + ARGO) closing Q4 2026 / Q1 2027, ramp accelerato canale agenzie e marketplace plugin.", { italics: true }),
  makeTable([3000, 1800, 1800, 1800, 1560], [
    "Voce (€ K)", "2026", "2027", "2028", "Note"
  ], [
    ["Revenue BU (esistente)", "700", "1.500", "2.500", "Crescita + cross-sell pieno"],
    ["Revenue DaaS-AI", "200", "1.200", "3.500", "Plugin marketplace + enterprise"],
    ["Revenue M&A Livesignage", "—", "1.500", "3.000", ""],
    ["Revenue M&A Immedya", "—", "1.000", "2.000", "Network schermi monetizzato"],
    ["TOTAL REVENUE", "900", "5.200", "11.000", ""],
    ["Costi team", "550", "2.000", "3.500", "+10 FTE 2027"],
    ["Costi tech", "120", "500", "900", ""],
    ["Costi sales & marketing", "100", "500", "1.200", "PR aggressiva, IAB, eventi"],
    ["Costi integrazione M&A", "100", "500", "300", "Combo full integration"],
    ["TOTAL COSTS", "870", "3.500", "5.900", ""],
    ["EBITDA", "30", "1.700", "5.100", ""],
    ["EBITDA margin", "3%", "33%", "46%", ""]
  ], [
    {}, {}, {}, {},
    { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    {}, {}, {}, {},
    { bold: [true, true, true, true, false], shade: [LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY, LIGHTGREY] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] },
    { bold: [true, true, true, true, false], shade: [LIGHT, LIGHT, LIGHT, LIGHT, LIGHT] }
  ]),
  spacer(),
  H2("10.5 Confronto sintetico"),
  makeTable([2400, 2240, 2240, 2240, 240], [
    "KPI 2028", "Conservative", "Base", "Aggressive", ""
  ], [
    ["Revenue totale", "€1,7M", "€6,0M", "€11,0M", ""],
    ["EBITDA", "€470K", "€2,75M", "€5,1M", ""],
    ["EBITDA margin", "28%", "46%", "46%", ""],
    ["FTE totale", "12", "27", "50", ""],
    ["Investimento M&A", "€0", "€3M", "€8–15M", ""]
  ]),
  spacer(),
  H2("10.6 Cashflow e funding"),
  bullet("Scenario Conservative: autofinanziabile dal cashflow operativo BU + Uniting Group"),
  bullet("Scenario Base: richiede €3–4M funding 2027 (M&A Livesignage + working capital scaling). Mix proposta: 60% equity Uniting + 40% debt"),
  bullet("Scenario Aggressive: richiede €10–18M funding 2026–2027 (M&A Combo + scaling). Opzioni: equity round (private equity / industriale), debito strutturato, JV con partner strategico (Accenture, Reply)"),
  H2("10.7 Sensitivity analysis"),
  P("I 3 driver principali di varianza:"),
  bullet("Conversion design partner pilot → cliente pagante (assunzione Base: 80%, Conservative: 50%, Aggressive: 100%)"),
  bullet("Ramp clienti tier ENTERPRISE 2027 (Base: 5 deal, Aggressive: 15)"),
  bullet("Timing closing M&A (slittamento di 2 quarter su Livesignage = -€800K revenue 2027 nello scenario Base)"),
];

// === RISKS ===
const risks = [
  H1("11. Rischi e Mitigazioni"),
  makeTable([2400, 1800, 1800, 3360], [
    "Rischio", "Probabilità", "Impatto", "Mitigazione"
  ], [
    ["Ingresso hyperscaler verticale Italia retail/mobility", "Media", "Alto", "Velocità time-to-market, partnership esclusive retailer, IP brevettabile su matching/orchestration"],
    ["Difficoltà attrazione talenti AI senior", "Alta", "Medio", "Partnership universitarie (CNR, Polimi), remote-first, equity comp"],
    ["Resistenza adozione da agenzie tradizionali (DIY tech)", "Media", "Medio", "White-label revendita, formazione gratuita, demo concrete"],
    ["Costi LLM (token) crescenti", "Bassa", "Medio", "Multi-vendor (Claude/GPT/Gemini fallback), caching aggressivo, fine-tuning modelli proprietari"],
    ["Regolamentazione AI Act EU", "Alta", "Basso", "Compliance by design (privacy_gdpr già attivo), audit log, EU AI Act readiness assessment Q4 2026"],
    ["Slittamento M&A target (Livesignage / Immedya)", "Media", "Alto", "Pre-due diligence Q3 2026, target alternativi pre-identificati"],
    ["Concentrazione cliente (top 3 = >40% revenue)", "Media", "Alto", "Diversificazione attiva via canale agenzie e PMI self-service"],
    ["Dipendenza inventory retailer terzi", "Alta", "Alto", "M&A Immedya (network proprio), accordi esclusiva multi-retailer"],
    ["Competitor Selex Media accelera in GDO", "Alta", "Medio", "Focus segmenti scoperti: GDS, Pharma, Mobility; partnership con Selex come fornitore"],
    ["Pricing race-to-bottom su agenzie locali", "Media", "Basso", "Differenziazione qualità dato + case study sell-out + supporto"]
  ]),
];

// === DECISIONS ===
const decisions = [
  H1("12. Decisioni Aperte per il Board"),
  H2("12.1 Strategia"),
  bullet("Approvazione del pivot DaaS-AI come direzione strategica BU Data & Retail 2026–2028?"),
  bullet("Scenario di riferimento per il budget: Conservative / Base / Aggressive?"),
  bullet("Mandato esplorazione M&A Combo (Livesignage + Immedya + ARGO Vision) entro Q4 2026 / Q1 2027?"),
  H2("12.2 Brand e Posizionamento"),
  bullet("Naming prodotto: \"Next Different One\" estensione, oppure brand nuovo (\"ND Ask\", \"OneAgent\", \"Retail Mind\", \"ND Pulse\")?"),
  bullet("Positioning: AI Operating System retail vs. AI Data Access Platform — quale è il claim master?"),
  bullet("Comunicazione esterna: when go public (Q3 2026 con i primi pilot? Q1 2027 con full launch?)"),
  H2("12.3 Tech e Build vs Buy"),
  bullet("LLM layer: Claude Anthropic diretto, AWS Bedrock, Google Vertex, multi-vendor?"),
  bullet("Hosting Web App e API: AWS Milano vs Google Cloud EU vs Azure?"),
  bullet("Stack frontend: riuso bluesky4agency (React 19) o greenfield nuovo?"),
  bullet("MCP Server: open-source componenti client per accelerare adozione mercato?"),
  bullet("Forecast/Predictive engine: build interno o partnership specialistica?"),
  H2("12.4 Go-to-Market"),
  bullet("Canale agenzie: priorità 5–10 centri media indipendenti come partner wholesale Q4 2026?"),
  bullet("Pricing crediti: come convertiamo token LLM in unità di consumo cliente-friendly?"),
  bullet("Design partner pilot: quali 3? Mia proposta — 1 retailer GDO (Conad Adriatico) + 1 agenzia (Manzoni o Uniting come partner) + 1 brand CPG (Barilla o Henkel)"),
  bullet("Self-service STARTER: lanciare contemporaneamente o dopo validation enterprise?"),
  H2("12.5 Governance"),
  bullet("Spin-off DaaS-AI in società ad-hoc (vehicle dedicato per M&A e funding) vs. mantenimento dentro la BU?"),
  bullet("Reporting line: MD Data & Retail diretto a CEO Uniting, o tramite consigliere delegato dedicato?"),
  bullet("Advisory board AI/retail: formare un board tecnico esterno (es. CNR, Polimi, IAB)?"),
  H1("Appendice A — Glossario tecnico"),
  P("Termini ricorrenti nel documento:"),
  makeTable([2400, 6960], [
    "Termine", "Definizione"
  ], [
    ["DaaS-AI", "Data-as-an-Agent Service — modello in cui i dati sono interrogabili via agent AI in linguaggio naturale"],
    ["MCP", "Model Context Protocol — standard aperto per esposizione tool a LLM (Anthropic 2024)"],
    ["MAID", "Mobile Advertising ID — identificativo univoco anonimizzato del device mobile"],
    ["OTS", "Opportunity To See — utenti nel cono visione di uno schermo per >1,5s"],
    ["RAG", "Retrieval Augmented Generation — pattern di interrogazione AI su knowledge base proprietaria"],
    ["SUPER USER", "Profilo arricchito ND combinando MAID + cookie + retail data + socio-demo"],
    ["DSP / DMP / CDP", "Demand Side Platform / Data Management Platform / Customer Data Platform"],
    ["Clean Room", "Ambiente protetto in cui il dato non lascia il perimetro cliente"],
    ["Catchment area", "Area di influenza geografica di un PDV (origin-destination flussi)"],
    ["Sell-in / Sell-out", "Vendita dal produttore al retailer / dal retailer al consumatore"],
    ["GDO / GDS", "Grande Distribuzione Organizzata (food) / Grande Distribuzione Specializzata (non-food)"],
    ["RMN", "Retail Media Network — piattaforma di monetizzazione spazi del retailer"]
  ]),
  H1("Appendice B — Fonti e Bibliografia"),
  bullet("Osservatorio Polimi — Retail Media Italia 2025"),
  bullet("IAB Europe — AdEx Benchmark Report 2025"),
  bullet("IAB Italia — Standard Retail Media Italia"),
  bullet("eMarketer — Worldwide Retail Media Forecast 2024–2028"),
  bullet("GroupM — This Year Next Year 2025 (retail media supera TV entro 2028)"),
  bullet("WARC — Advertising spend forecast Europe 2025–2028"),
  bullet("Stratacache — In-store digital signage market analysis"),
  bullet("Kantar — Concentrazione GDO Italia/Francia 2025"),
  bullet("QBerg — Mapping retailer Italia 2025"),
  bullet("Osservatorio Polimi — Maturità retail media retailer italiani"),
  bullet("Anthropic — Model Context Protocol specification 2024–2026"),
  bullet("Fonti interne ND: business_data_ai.md, business_data_ai_fruizione.md, data_hub_agent.md, strategia_board_2026.md, monetizzazione_dati.md, retail_media_grid.md, sensoristica.md, privacy_gdpr.md, modelli_business.md, roi_calculator.md"),
  H1("Appendice C — Roadmap di Validazione"),
  P("Prima della finalizzazione del piano, sono raccomandate le seguenti attività di validazione (timeline 4–6 settimane post-approvazione board):"),
  bullet("Validazione tecnica MVP — review architettura con CTO Uniting e advisor esterno AI"),
  bullet("Validazione commerciale — 3 conversazioni \"problem discovery\" con prospect Conad / Barilla / Manzoni"),
  bullet("Validazione M&A — pre-due diligence Livesignage + Immedya (NDA, financials, IP scan)"),
  bullet("Validazione legale — review compliance EU AI Act, GDPR, ruoli DPA per modello DaaS-AI"),
  bullet("Validazione finanziaria — stress test scenari Conservative/Base/Aggressive con CFO Uniting"),
  bullet("Validazione brand — workshop naming con team marketing (3 ipotesi finaliste)"),
  P("Output validazione: Project Charter v1.1 finalizzato + business plan operativo + business case M&A separato per advisor finanziari."),
];

// === DOC ===
const doc = new Document({
  creator: "Marco Brandstetter — Next Different",
  title: "Project Charter — AI Data Access Platform (DaaS-AI)",
  description: "Linea di business 2026-2028 BU Data & Retail",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Calibri", color: NAVY },
        paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: BLUE },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Calibri", color: NAVY },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "◦", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }
      ]}
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BLUE, space: 2 } },
        children: [
          new TextRun({ text: "NEXT DIFFERENT", font: "Calibri", size: 16, color: NAVY, bold: true }),
          new TextRun({ text: "\tProject Charter — DaaS-AI", font: "Calibri", size: 16, color: GREY })
        ],
        tabStops: [{ type: TabStopType.RIGHT, position: 9360 }]
      })]})
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        children: [
          new TextRun({ text: "Confidenziale · Board ND / Uniting Group", font: "Calibri", size: 16, color: GREY, italics: true }),
          new TextRun({ text: "\tPag. ", font: "Calibri", size: 16, color: GREY }),
          new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 16, color: GREY }),
          new TextRun({ text: " di ", font: "Calibri", size: 16, color: GREY }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Calibri", size: 16, color: GREY })
        ],
        tabStops: [{ type: TabStopType.RIGHT, position: 9360 }]
      })]})
    },
    children: [
      ...coverContent,
      // TOC
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Indice", font: "Calibri", size: 36, bold: true, color: NAVY })] }),
      new TableOfContents("Indice", { hyperlink: true, headingStyleRange: "1-3" }),
      new Paragraph({ children: [new PageBreak()] }),
      ...execSummary,
      ...market,
      ...vision,
      ...products,
      ...assets,
      ...fruizione,
      ...targets,
      ...pricing,
      ...roadmap,
      ...pl,
      ...risks,
      ...decisions
    ]
  }]
});

const outPath = "/Users/marcobrand/PROGETTI_CLAUDECODE/ndu/deliverables/ND_Project_Charter_DaaS-AI_v1.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log("WROTE:", outPath);
  console.log("SIZE:", buffer.length, "bytes");
});
