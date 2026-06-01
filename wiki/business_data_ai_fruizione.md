---
tipo: strategia
bu: data_retail
fonte: documento strategico interno
audience: board, team Data & Retail, prodotto, tech
confidenza: alta
aggiornato: 2026-05-15
status: draft v1
parent: business_data_ai.md
---

# AI Data Access Platform — Modalità di Fruizione

> **Documento companion di [business_data_ai.md](business_data_ai.md)** — definisce come il cliente accede al prodotto, in quali forme riceve l'output e con quali caratteristiche tecniche trasversali. Riferimento vincolante per roadmap prodotto e tech.

## TL;DR

- **3 assi di design**: canale di accesso × forma di output × integrazione operativa
- **7 canali** di accesso (Web App, Plugin AI, MCP, REST API, Embedded, Workflow, Voice)
- **9 forme di output** (testo, tabella, mappa, grafico, audience export, PDF/PPTX, dashboard, webhook, embed)
- **4 tier di freschezza dato** (Standard T+1, Near real-time 15min, Real-time streaming, Forecast)
- **MVP consigliato**: Web App + MCP Server + Plugin Claude/ChatGPT come bundle minimo credibile per i primi 3 design partner

---

## A. Canali di Accesso

### A1 — Web App ND Data Studio (interfaccia proprietaria)

Portale web responsive, single-sign-on, multi-utente con ruoli e permessi.

**Componenti**:
- Chat conversazionale (input testo + voce)
- Dashboard real-time componibili (drag-and-drop widget)
- Map view interattiva (heatmap, isocrone, catchment area)
- Audience Builder visuale (segmenti generati via NL)
- Report library con versioning, commenti, condivisione team
- Saved query / Playbook condivisibili tra utenti del tenant

**Target**: tier PROFESSIONAL e ENTERPRISE, agenzie, brand mid-market.

**SLA**: 99.9% uptime, query <3s su dataset standard.

---

### A2 — Plugin per Agent AI (canale agentico nativo)

Il cliente non lascia il tool che già usa. ND distribuisce plugin sui marketplace dei principali LLM.

| Plugin | Marketplace | Use case primario |
|---|---|---|
| **Claude Skill / Plugin** | Anthropic Marketplace | Knowledge worker, analisti, consulenti |
| **Claude Code plugin** | CLI / IDE | Dev cliente, system integrator |
| **ChatGPT App / Custom GPT** | OpenAI GPT Store | Marketing manager, agenzie |
| **Gemini Extension** | Google Workspace Marketplace | Aziende Google-first |
| **Microsoft Copilot Plugin** | Microsoft 365 Marketplace | Enterprise corporate (banking, PA, insurance) |
| **Cursor / Windsurf integration** | Marketplace IDE | Dev team, partner SI |

Ogni plugin espone un set **curato** di tool con prompting pre-ottimizzato lato ND:
- `get_audience(query_nl)` → segmento + size + attivabilità
- `analyze_footfall(area, period)` → flussi + cluster
- `compare_areas(area_a, area_b, kpi)` → benchmark
- `forecast_traffic(area, horizon)` → predizione + intervallo confidenza
- `generate_report(brief)` → PDF/PPTX brandato

---

### A3 — MCP Server (Model Context Protocol)

Server MCP standard installabile dal cliente nel proprio ambiente AI.

**Varianti**:
- **MCP stdio** — uso desktop/dev (Claude Desktop, Cursor, Cline)
- **MCP HTTP/SSE** — enterprise (Copilot Studio, n8n, custom agent)
- **Self-hosted ENTERPRISE** — dato non esce dal VPC cliente (clean room)

**Vantaggi**:
- Zero lock-in: il cliente continua a usare il proprio LLM preferito
- Allineato a [integrazioni_tecniche.md](integrazioni_tecniche.md) (tenant isolation già esistente)
- Distribuzione anche tramite registry MCP pubblici (Anthropic Directory, ecc.)

---

### A4 — REST API Conversational

API HTTP standard, ma con endpoint pensati per agent (input in linguaggio naturale, non solo strutturato).

| Endpoint | Funzione |
|---|---|
| `POST /v1/ask` | Query NL → JSON + insight + export media-ready |
| `POST /v1/audience` | Generazione segmenti (output attivabile DSP/DMP) |
| `POST /v1/forecast` | Proiezioni footfall, sell-out, audience |
| `POST /v1/report` | Generazione report PDF/PPTX su brief NL |
| `GET /v1/datasets` | Catalogo dataset disponibili al tenant |
| `GET /v1/usage` | Consumi correnti (token, query, volumi) |

**Auth**: API key + OAuth2 + JWT per scenari B2B2C.

**Target**: agenzie, system integrator, partner che integrano nel proprio prodotto.

---

### A5 — Embedded Widget / White-Label

Widget JavaScript integrabile in portali terzi.

- White-label completo (logo, palette, dominio cliente)
- Audit log e billing separato per sub-tenant
- Iframe sicuro con auth token a scadenza

**Target**: concessionarie, agenzie che rivendono il servizio ai propri clienti finali, retailer che vogliono offrirlo ai brand fornitori.

---

### A6 — Workflow Automation (n8n / Make / Zapier)

Nodi nativi ND sui principali tool no-code di automazione.

**Trigger**:
- Schedulati ("ogni lunedì 8:00 invia report flussi weekend a marketing")
- Event-based ("se OTS PDV X scende sotto soglia, alert WhatsApp store manager")
- Webhook in entrata da CRM cliente

**Output verso**: Slack, Teams, email, Google Sheets, Salesforce, HubSpot, Monday.

**Target**: PMI evolute, agenzie locali, marketing ops, store manager retail.

---

### A7 — Voice / WhatsApp Agent

Canale conversazionale via voce (ElevenLabs) e messaging (WhatsApp Business API).

**Esempi reali**:
- Store manager: *"Quanti visitatori ha avuto il PDV di Verona ieri?"* → risposta vocale
- Direttore vendite: *"Top 5 città per uplift sell-out questa settimana"* → tabella WhatsApp
- Marketing manager in field: dictation di brief → ND genera audience + report

**Target**: top management, sales field, store manager retail, account agenzia.

---

## B. Forme dell'Output

Ogni canale può restituire output multipli, scelti dall'agent in base alla query. Output sempre **multimodali** e **componibili**.

| Forma | Quando | Dettaglio tecnico |
|---|---|---|
| **Risposta testuale** | Domanda diretta | Markdown + citazioni dataset + confidence score |
| **Tabella strutturata** | Confronti, ranking, top-N | JSON + render HTML/CSV scaricabile |
| **Heatmap geografica** | Analisi territoriali | Mapbox/Leaflet, export PNG/GeoJSON |
| **Grafico time-series** | Trend storici, forecast | Plotly/Recharts, export PNG/SVG |
| **Audience export** | Attivazione media | CSV + push diretto a DSP/DMP (TTD, DV360, Adform, Xandr) |
| **Report PDF/PPTX** | Output cliente-finale | Template ND brandato + tema white-label cliente |
| **Dashboard live link** | Condivisione interna | URL pubblico/protetto, auto-refresh |
| **Webhook event** | Trigger automation | Push verso sistema cliente al verificarsi di soglia |
| **Embed iframe** | Pubblicazione su portali | Codice embed con auth token + dominio whitelist |

**Principio architetturale**: l'agent decide la forma migliore in base a (a) tipo query, (b) canale di richiesta, (c) preferenze tenant.

---

## C. Caratteristiche Tecniche Trasversali

### C1 — Latenza e Freschezza Dato

| Tier dato | Latenza query | Freshness | Esempi |
|---|---|---|---|
| **Standard** | <3s | T+1 (batch notturno) | Footfall storico, segmenti audience |
| **Near real-time** | <5s | 15 min | OTS signage, in-store behavior |
| **Real-time** | <1s | Streaming continuo | Eventi, alerting soglie, retail signage live |
| **Forecast** | <10s | Modello rigenerato settimanale | Predittivo footfall, sell-out, audience |

### C2 — Multi-tenancy e Sicurezza

- **Tenant isolation** a livello DB (Postgres schema separati) + Pinecone namespace per RAG, allineato a [integrazioni_tecniche.md](integrazioni_tecniche.md)
- **Clean room ENTERPRISE**: dato cliente non lascia mai il suo VPC
- **Audit log completo**: chi ha interrogato cosa, quando, con quale modello LLM
- **GDPR compliant**: ruoli ND=Processor / Cliente=Controller già normati in [privacy_gdpr.md](privacy_gdpr.md)
- **Data residency selezionabile**: EU / IT-only per PA, banking, sanità
- **PII redaction automatica** in ogni output

### C3 — Personalizzazione per Tenant

- **System prompt per tenant**: tono, focus, KPI prioritari configurabili
- **Custom dataset upload**: cliente carica CRM/sell-out, ND lo correla con dato proprietario (matching deterministico/probabilistico via One Data Platform)
- **Glossario aziendale**: l'agent impara la terminologia cliente (acronimi, naming PDV, brand interni)
- **Saved query / Playbook**: query ricorrenti salvate come template condivisibili tra utenti
- **Brand kit**: logo, palette, font per report PDF/PPTX

### C4 — Billing Trasparente

- **Token/query meter** visibile in real-time nella Web App
- **Budget alert** configurabili ("avvisami all'80% del consumption mensile")
- **Cost preview** prima di query costose ("Questa interrogazione consumerà ~250 crediti, procedere?")
- **Fatturazione** mensile/trimestrale, integrata con [preventivazione.md](preventivazione.md) e [pricing.md](pricing.md)
- **Crediti pre-pagati** per consumption (sconto volumi)

---

## D. Matrice Canale × Tier

| Canale | STARTER | PROFESSIONAL | ENTERPRISE |
|---|:-:|:-:|:-:|
| Web App ND Data Studio | ✓ (limitato) | ✓ pieno | ✓ pieno + white-label |
| Plugin Claude/ChatGPT/Gemini | ✓ (1 plugin) | ✓ tutti | ✓ tutti + custom |
| Plugin Copilot/Cursor | — | ✓ | ✓ |
| MCP Server (hosted) | — | ✓ | ✓ |
| MCP Server (self-hosted) | — | — | ✓ |
| REST API | rate-limited | ✓ | ✓ + SLA dedicato |
| Embedded Widget white-label | — | ✓ (basico) | ✓ full |
| Workflow n8n/Make/Zapier | ✓ | ✓ | ✓ |
| Voice / WhatsApp | — | ✓ add-on | ✓ incluso |
| Clean Room dedicata | — | — | ✓ |
| Dashboard real-time | base | avanzate | custom |
| Audience export → DSP | — | 3 DSP | tutte |
| Custom model fine-tuning | — | — | ✓ |
| SLA + supporto dedicato | community | business hours | 24/7 + CSM |

---

## E. Onboarding — Tre Percorsi

### E1 — Self-Service AI-Guided (STARTER)

- Registrazione → l'agent stesso guida l'utente con domande
- Configura account, suggerisce 3 query d'esempio, mostra primo insight in <5 min
- **Zero touch sales** sotto 1K€/mese
- Onboarding completo in 15 minuti

### E2 — Assisted Setup (PROFESSIONAL)

- Kick-off remoto 1h con Customer Success Manager ND
- Configurazione tenant: dataset abilitati, glossario, brand kit
- Training team cliente: 2 sessioni (1 user, 1 admin)
- Go-live in 1-2 settimane

### E3 — Enterprise Integration (ENTERPRISE)

- Progetto di integrazione 4-12 settimane con SI partner (Accenture, Reply, BIP)
- Clean room setup, custom model training, SLA negoziato
- Integrazione con stack cliente (SSO aziendale, data warehouse, DSP/DMP corporate)
- Allineato al flusso [preventivazione.md](preventivazione.md) (6-step)

---

## F. Stack Tecnico di Riferimento

Sintesi componenti necessari (dettaglio in [architettura.md](architettura.md)):

| Layer | Componente | Tecnologia indicativa |
|---|---|---|
| **Frontend** | Web App ND Data Studio | React 19 + Vite, TypeScript, shadcn/ui |
| **Backend API** | REST Conversational + auth | Laravel 10 / Node fastify |
| **AI Orchestration** | Routing query, tool calling | LangGraph / custom |
| **LLM** | Modelli per query NL | Claude Opus/Sonnet (default), GPT-4o, Gemini 2 (fallback) |
| **Vector store** | RAG dataset + glossario tenant | Pinecone (namespace per tenant) |
| **Data warehouse** | Storico footfall, OTS, audience | BigQuery / Snowflake |
| **Streaming** | Real-time signage, alerting | Kafka / Kinesis |
| **Forecast engine** | Modelli predittivi | Python + Prophet/PyTorch |
| **MCP runtime** | Server hosted + self-hosted bundle | Node TypeScript MCP SDK |
| **Plugin distribution** | Marketplace LLM | Claude/OpenAI/Google/Microsoft directory |
| **Billing meter** | Token/query/volume tracking | Stripe Metered + custom usage events |
| **Audit & compliance** | Log accessi, PII redaction | OpenSearch + Vault |

---

## G. MVP Consigliato (primi 3 design partner)

**Obiettivo**: validare in 90-120 giorni che il modello DaaS-AI converte e scala.

**Bundle minimo credibile**:
1. **Web App ND Data Studio** — versione base (chat + map view + audience builder)
2. **MCP Server hosted** — un endpoint MCP unico, multi-tenant
3. **Plugin Claude** + **Plugin ChatGPT** — distribuzione marketplace (anche se in beta)
4. **REST API** v1 con 3 endpoint (`/ask`, `/audience`, `/forecast`)
5. **Workflow n8n** — nodo nativo ND per automazioni base

**Out of scope MVP** (post-validation):
- Plugin Copilot/Gemini/Cursor
- Voice / WhatsApp
- Clean room ENTERPRISE
- Custom model fine-tuning
- White-label completo

**Design partner ideali** (1 per categoria):
- 1 retailer GDO (Conad Adriatico via Durante? Carrefour via Barilla?)
- 1 agenzia mid-tier (Manzoni? Uniting come partner?)
- 1 brand CPG con rete signage attiva (Barilla, Henkel, Parmalat)

---

## H. Domande Aperte (per board e tech)

- [ ] Build vs. partner per layer LLM (Claude Anthropic direct vs. Bedrock vs. Vertex)?
- [ ] Dove ospitare Web App e API (AWS Milano vs. Google Cloud EU)?
- [ ] Quale stack frontend? Riuso bluesky4agency (React 19) o nuovo greenfield?
- [ ] MCP Server: open-source la parte client per accelerare adozione?
- [ ] Brand prodotto: usiamo "Next Different One" come naming oppure brand nuovo (es. *"ND Ask"*, *"OneAgent"*)?
- [ ] Pricing crediti: come convertiamo token LLM in unità di consumo cliente-friendly?

---

## Riferimenti

- [business_data_ai.md](business_data_ai.md) — documento madre: vision, prodotti, pricing, target
- [architettura.md](architettura.md) — stack tecnico, edge, cloud, GDPR
- [integrazioni_tecniche.md](integrazioni_tecniche.md) — tenant isolation, multi-tenancy
- [privacy_gdpr.md](privacy_gdpr.md) — ruoli GDPR, DPA, retention
- [monetizzazione_dati.md](monetizzazione_dati.md) — One Data Platform, dataset disponibili
- [pricing.md](pricing.md) — listino attuale (base per nuovi tier)
- [preventivazione.md](preventivazione.md) — flusso 6-step (base per onboarding ENTERPRISE)
- [modelli_business.md](modelli_business.md) — Direct / RevShare / Reservation / DMP
- [roi_calculator.md](roi_calculator.md) — formule ROI applicabili anche al nuovo modello
