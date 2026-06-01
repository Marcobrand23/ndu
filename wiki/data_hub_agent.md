---
tipo: prodotto
bu: data_retail
fonte: JarvisNEXT/materiale/retail-media-dashboard/ (15 schermate HTML, Apr 2026)
status: prototipo funzionante (mockup HTML navigabili)
audience: board, prodotto, tech, sales
confidenza: alta
aggiornato: 2026-05-15
---

# Data Hub Agent — Orchestratore Dati Retail Media

> **Prototipo già esistente** di orchestratore dati cross-retailer per Retail Media. Cuore tecnico di [AI Retail Intelligence](business_data_ai.md) (§5.D del documento DaaS-AI). Sostanzia con asset concreti la vision *"rendere interrogabile il mondo reale tramite AI"*.

## TL;DR

- **Stato**: 15 schermate HTML navigabili (Apr 2026), repo `JarvisNEXT/materiale/retail-media-dashboard/`
- **Cosa fa**: ingestion + normalizzazione + quality check di dati retail media provenienti da N retailer con N protocolli diversi (API, SFTP, email, webhook, upload manuale, sensoristica IoT)
- **Differenziatore**: AI Agent rileva automaticamente formato, mappa colonne, gestisce mapping cross-retailer, alerta su anomalie
- **Allegato**: `Barilla_RetailMedia_NextStep_Pitch.pptx` (18MB) — pitch dedicato Barilla che usa queste schermate
- **Implicazione strategica**: ND ha **già** il prodotto che il documento DaaS-AI ipotizza — serve solo formalizzare, integrare LLM/MCP layer, andare in produzione

---

## 1. Le 15 schermate della dashboard

Repo: `JarvisNEXT/materiale/retail-media-dashboard/`

| # | Schermata | Funzione |
|---|---|---|
| 01 | Overview Dashboard | KPI aggregati cross-retailer, alert summary |
| 02 | Mappa Retailer | View geografica PDV attivi, stato connettori |
| 03 | Campagne Grid | Lista campagne con filtri (cliente, retailer, status) |
| 04 | Dettaglio Campagna | Drill-down singola campagna (KPI, asset, timeline) |
| 05 | KPI Analysis | Analisi performance per metrica (OTS, attention, conversion) |
| 06 | Confronto Campagne | Benchmark side-by-side multi-campagna |
| 07 | Timeline Storico | Trend temporali per cliente/retailer/SKU |
| 08 | Sell-In / Sell-Out | Correlazione vendite (in: a retailer, out: a consumatore) |
| 09 | Sensoristica & Dati | Feed sensori ISEN (people counting, OTS) |
| 10 | Report & Export | Generazione report PDF/Excel + scheduling automatico |
| **11** | **★ Data Hub Agent** | **Cuore orchestratore — ingestion, normalizzazione, QC** |
| 12 | Marketing Mix & Attribution | Attribution multi-touch, contributo per canale |
| 13 | Forecast & Simulazioni | Modelli predittivi, what-if scenari |
| 14 | Marginalità & ROI | P&L per campagna, break-even, ROI vs benchmark |
| 15 | Decision Hub | Cockpit decisionale top management — next-best-action |

---

## 2. Schermata 11 — Data Hub Agent (cuore tecnico)

### Pipeline a 4 step (esplicita nell'UI)

1. **Ingestion** — Scaricamento dati da connettori diversi (API, email, SFTP, upload, webhook)
2. **Normalizzazione** — Mapping colonne, conversione unità, dedup, data cleaning
3. **Quality Check** — Validazione range, outlier detection, confronto storico
4. **Distribution** — Aggiornamento viste, notifica stakeholder, snapshot backup

### Connettori multi-retailer documentati nel mockup

| Retailer | Protocollo | Stato mockup | Note |
|---|---|---|---|
| **Carrefour** | API Retail Media diretta | ✅ Attivo | Sell-out, impressions, foot traffic automatici |
| **Conad** | Email Parser (allegati Excel/PDF) | ✅ Attivo | Agent monitora inbox, parsing automatico ed estrazione KPI |
| **Coop** | SFTP file drop (CSV giornaliero) | ✅ Attivo | Sell-in/sell-out per PDV e SKU |
| **Brico io** | Upload manuale Excel mensile | ✅ Attivo | Agent valida e normalizza |
| **Esselunga** | Webhook real-time | ⚙️ In configurazione | Endpoint piattaforma Esselunga |
| **Eurospin** | API onsite | ⏳ Pending | In attesa credenziali API partner |
| **ISEN Sensoristica** | Feed contapersone + OTS | ✅ Attivo | Foot traffic per PDV |
| **Agenzia Media Offsite** | Report ricevuto e normalizzato | ✅ Attivo | 4.6M impressions in esempio |

### Capability AI dell'Agent (esplicite nell'UI)

- **Auto-detection formato**: "L'agent AI rileva automaticamente il formato e mappa i campi"
- **Mapping schema cross-retailer**: ogni retailer ha colonne diverse (es. "Formato colonne — Esselunga"), l'agent traduce a schema unico
- **Auto-request**: pull schedulato da API esterne
- **Alerting**: rilevamento anomalie attive nel mockup:
  - *"Mancano dati OTS per 23 PV Conad. Sensori non configurati o feed interrotto."*
  - *"Player offline in 8 PV Carrefour (Milano, Roma). Impressions non tracciate dal 10 Apr."*
  - *"Nuovo formato CSV con colonne rinominate. Agent necessita mapping aggiornato."*
- **Processing in real-time** visualizzato: *"Retail Media Agent sta processando 3 nuovi dataset..."*
- **Drop zone**: "Trascina file o clicca per caricare" — ingestion ad-hoc

### Tipi di dato gestiti

- Dati **onsite** (web retailer.it)
- Dati **offsite** (ads programmatic, agenzia media)
- Dati **in-store** (sensoristica, OTS, foot traffic, impressions digital, sell-out)
- **Geo-coordinates** e catchment area (es. "Dati catchment area completi per tutti i 187 PV")

### Output esposti (drill-down per record)

- Nome retailer
- Data campagna
- SKU / Prodotto
- Sell-in unità
- Sell-out unità
- Impressions
- OTS Score
- Foot traffic
- Geo-analytics

---

## 3. Architettura logica derivata

```
            ┌─────────────────────────────────────────────────┐
            │   CONNETTORI MULTI-RETAILER (eterogenei)        │
            │  API · Email · SFTP · Upload · Webhook · IoT   │
            └─────────────────┬───────────────────────────────┘
                              │
            ┌─────────────────▼───────────────────────────────┐
            │   DATA HUB AGENT (AI orchestratore)             │
            │  • Format auto-detection                         │
            │  • Schema mapping cross-retailer                 │
            │  • Normalizzazione e quality check              │
            │  • Alerting su anomalie/gap                     │
            └─────────────────┬───────────────────────────────┘
                              │
            ┌─────────────────▼───────────────────────────────┐
            │   SCHEMA UNIFICATO RETAIL MEDIA                 │
            │  campaign × retailer × PDV × SKU × KPI × geo   │
            └─────────────────┬───────────────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
┌────────────┐        ┌────────────────┐    ┌──────────────────┐
│ Dashboard  │        │ AI Conversa-   │    │ Activation       │
│ (1-15)     │        │ tional Layer   │    │ DSP/DMP/CRM      │
│            │        │ (DaaS-AI)      │    │                  │
└────────────┘        └────────────────┘    └──────────────────┘
```

---

## 4. Posizionamento nel modello DaaS-AI

Mapping al documento [business_data_ai.md](business_data_ai.md):

| Componente DaaS-AI | Realizzato da Data Hub Agent |
|---|---|
| **Asset dati retail media** (§3) | Sì — connettori multi-retailer già definiti |
| **AI Retail Intelligence** (§5.D) | **Sì — questo è il prodotto** |
| **Conversational Data API** (§5.B) | Parziale — manca layer LLM sopra schema unificato |
| **AI Plugin Marketplace** (§5.A) | No — i tool MCP/plugin sono da costruire sopra il Data Hub |
| **Pricing tier ENTERPRISE** (§7) | Adatto — clean room, dato custom, real-time già nel modello |

**Conclusione**: il Data Hub Agent è il **backend** del prodotto DaaS-AI per la verticale retail. Manca solo il layer conversazionale (LLM + MCP server + plugin) sopra lo schema unificato.

---

## 5. Asset disponibili adiacenti

Nella stessa cartella `JarvisNEXT/materiale/retail-media-dashboard/`:

- **`Barilla_RetailMedia_NextStep_Pitch.pptx`** (18 MB) — pitch dedicato Barilla che usa queste schermate come supporto. Ottimo per pitch DaaS-AI a brand CPG.
- **`BARILLA_BRAND_GUIDELINES.md`** — brand kit applicabile al pitch
- **`assets/`** + **`pptx-workspace/`** — risorse grafiche e workspace di lavoro

---

## 6. Gap da colmare per andare in produzione

| Componente | Stato | Effort stimato |
|---|---|---|
| UI (15 schermate) | ✅ Mockup HTML | → portare a React 19 + Vue 3 (riuso stack [bluesky4agency](https://github.com/Marcobrand23/...) o finaldraft-frontend) |
| Connettori reali | ⚙️ Specificati nel mockup | API Carrefour reale, parser Conad, SFTP Coop ecc. — 4-8 settimane |
| Schema unificato | ⚙️ Derivabile dall'UI | Modellazione DB + migration — 2-3 settimane |
| AI orchestrator layer | 🔧 Da costruire | Format detection + mapping LLM-driven — 4-6 settimane |
| **MCP Server + REST API** | ❌ Da costruire | Esposizione schema unificato come MCP/REST — 3-4 settimane |
| **Plugin Claude/ChatGPT/Gemini** | ❌ Da costruire | Pubblicazione marketplace — 2-3 settimane per plugin |
| Multi-tenancy | ⚙️ Schema base già in [integrazioni_tecniche.md](integrazioni_tecniche.md) | Adattamento tenant isolation — 2 settimane |
| Billing meter | ❌ Da costruire | Stripe metered + token tracking — 2-3 settimane |

**Stima MVP produzione**: 12-16 settimane con team dedicato (2 backend, 1 frontend, 1 AI engineer, 1 PM).

---

## 7. Target clienti immediati (proof-point reali)

Dal pitch Barilla e dalla pipeline esistente, clienti che potrebbero adottare il Data Hub Agent come prima fase:

- **Barilla** ([trattativa_barilla.md](trattativa_barilla.md)) — pitch già allineato
- **Conad / Conad Adriatico** ([cliente_durante.md](cliente_durante.md)) — case study Barilla/Conad esistente
- **Parmalat** ([trattativa_parmalat.md](trattativa_parmalat.md)) — LOI in corso, pilota signage
- **Unieuro** ([trattativa_unieuro.md](trattativa_unieuro.md)) — cliente attivo, rollout in corso
- **Brico io** — case study Henkel +22,33%, già nel mockup come retailer ingestion

---

## 8. Decisioni aperte

- [ ] **Naming prodotto**: "Data Hub Agent" funziona o serve brand più commerciale (es. "ND Pulse", "OneFlow", "Retail Mind")?
- [ ] **Build vs buy connettori**: integrazione Carrefour Retail Media API ufficiale (se esiste) o reverse engineering?
- [ ] **Quale retailer "design partner"** per il primo deploy produzione? Conad Adriatico (via Durante) sembra il più rapido
- [ ] **Pricing**: il modulo Data Hub viene venduto separatamente (entry product) o solo come parte del bundle DaaS-AI ENTERPRISE?
- [ ] **Open-source connettori?** Pubblicare i connettori (parser email, SFTP) come repo aperto per accelerare adozione mercato

---

## Riferimenti

- [business_data_ai.md](business_data_ai.md) — strategia DaaS-AI (questo prodotto = §5.D AI Retail Intelligence)
- [business_data_ai_fruizione.md](business_data_ai_fruizione.md) — canali di fruizione (Data Hub diventa backend di tutti i canali)
- [retail_media_grid.md](retail_media_grid.md) — Retail Media Grid (MEASURE/ENGAGE/MONETIZE) — Data Hub è la base del modulo MEASURE
- [sensoristica.md](sensoristica.md) — CAM/WiFi/BLE — alimentano il connettore ISEN del Data Hub
- [architettura.md](architettura.md) — stack tecnico generale
- [integrazioni_tecniche.md](integrazioni_tecniche.md) — multi-tenancy
- [trattativa_barilla.md](trattativa_barilla.md) — pitch Barilla che usa questa dashboard

**Fonti file system**:
- `JarvisNEXT/materiale/retail-media-dashboard/01-overview-dashboard.html` ... `15-decision-hub.html`
- `JarvisNEXT/materiale/retail-media-dashboard/Barilla_RetailMedia_NextStep_Pitch.pptx`
- `JarvisNEXT/materiale/retail-media-dashboard/BARILLA_BRAND_GUIDELINES.md`
