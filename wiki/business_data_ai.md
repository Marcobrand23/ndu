---
tipo: strategia
bu: data_retail
fonte: documento strategico interno
audience: board, team Data & Retail, sales
confidenza: alta
aggiornato: 2026-05-15
status: draft v1
---

# AI Data Access Platform — Linea di Business Data & Retail

> **Documento interno** — definisce la nuova linea di business Data & Retail di Next Different nell'era agentica. Da "vendita dato" a "rendere interrogabile il mondo reale tramite AI".

## TL;DR

- **Pivot strategico**: da Data Monetization → **Data-as-an-Agent Service (DaaS-AI)**
- **Asset abilitanti**: già in casa (One Data Platform, 15M MAID, 40M cookie, motore semantico CNR, inventory retail media)
- **Nuovo livello**: layer conversazionale AI (plugin Claude/Gemini/OpenAI/Copilot + MCP + REST) sopra dataset esistenti
- **TAM amplificato**: agenzie locali, PMI evolute, trade — segmenti finora esclusi da barriera tecnica
- **Vantaggio competitivo unico**: ND è l'unico player italiano con dato + tecnologia + media + retail + AI + casi reali nello stesso ecosistema
- **North Star**: *"The AI Operating System for Retail & Mobility Data"*

---

## 1. Scenario di Mercato

### 1.1 Dimensione del mercato retail media

Fonte: [strategia_board_2026.md](strategia_board_2026.md), Osservatorio Polimi, IAB Europe, GroupM.

| Perimetro | 2024 | 2025 | 2026E | 2028E | CAGR |
|---|---|---|---|---|---|
| Globale | $140 mld | $184 mld | $200+ mld | — | ~20% |
| Europa | €13,7 mld | €16,9 mld | €20,8-22,3 mld | €28,8-31,3 mld | ~28% |
| **Italia** | **€510M** | **€640M** | **~€810M** | **~€1 mld+** | **~27%** |

In Italia l'80% del valore è in mano a piattaforme e-commerce (Amazon). Il **20% restante (~€130M)** è l'arena competitiva per i retailer fisici e sta crescendo molto più velocemente del totale.

**L'in-store è il sleeping giant**: rappresenta solo ~5% del totale retail media ma il **90%+ delle vendite avviene in negozio fisico**. Il **2026 è identificato come anno di svolta** per l'in-store digital retail media. Questo è esattamente il mercato dove ND ha già asset, dati, case study.

### 1.2 L'opportunità AI-agentica

Il mercato della monetizzazione dati si è storicamente sviluppato su due modelli:

1. **Vendita di report e insight elaborati** — alto margine, bassa scalabilità, dipendente da consulenza
2. **Vendita di dato raw** — riservata a player con data team, BI specialist, infrastrutture proprietarie

Lo scenario AI-agentico cambia il paradigma. Con la diffusione di:

- Claude / Claude Code
- Gemini
- OpenAI / ChatGPT Enterprise / Codex
- Microsoft Copilot
- Cursor
- protocollo MCP e API-ready agents

**anche aziende non strutturate tecnicamente possono interrogare dataset complessi tramite linguaggio naturale.**

Il dato passa da:

> asset tecnico → **servizio conversazionale intelligente**

---

## 2. Vision

Trasformare la BU Data & Retail in una **AI-native Data Infrastructure** che renda interrogabili via AI:

- Dati location & mobility
- Dati social & trend
- Dati comportamentali digitali (cookie, browsing)
- Dati retail media (OTS, attention, conversion)
- Dati proximity
- Dati sensoristici in-store
- Dati audience & CRM enrichment

**Obiettivo finale**: permettere a clienti, agenzie, retailer e aziende di ottenere insight complessi **senza** dover disporre di data scientist, BI specialist, infrastrutture proprietarie o team analitici dedicati.

---

## 3. Asset Dati Disponibili Oggi

Base già operativa (vedi [monetizzazione_dati.md](monetizzazione_dati.md) e [architettura.md](architettura.md)):

### Mobility & Location

- **15M MAID** tracciati su base semestrale
- **~30 rilevazioni/giorno per utente** (proximity grezzo: MAID, timestamp, lat/long, precisione, velocità)
- Use case: flussi cittadini, drive-to-store, catchment area, percorsi casa-lavoro, traffico, impatto eventi territoriali

### Retail Media

- KPI misurati su rete signage ND: **OTS, Attention Rate, Content Attraction, Engaged Views**
- Correlazione esposizione → scontrino certificata
- Risultati reali (vedi §5): uplift sell-out fino a **+183%** (Pinsa Barilla in Carrefour), **+117%** (Gran Cereale), **+22,33%** Henkel in Brico io

### Social & Trend

- Monitoraggio trend, sentiment, argomenti emergenti, audience behavior, correlazioni territoriali

### Navigation & Behavioral

- **40M cookie** profilati per browsing behavior, interessi IAB, categorie consumo

### Sensor & In-store

- Telecamere, sensori, digital signage interattivo, proximity SDK, AI contextual insight
- Asset prodotto: [conversational_signage.md](conversational_signage.md), [retail_media_grid.md](retail_media_grid.md)

### Piattaforma Tecnologica

- **One Data Platform** (Next Different One) — motore proprietario
- Motore semantico sviluppato con **CNR**, algoritmi Naive Bayes, entity linking
- Profilo **SUPER USER**: dove vive/lavora, età/genere, potere d'acquisto, abitudini retail, POI frequentati, modalità interazione campagne

---

## 4. Nuovo Modello di Business — DaaS-AI

**Data-as-an-Agent Service**: il dato non viene venduto né come report né come feed raw, ma reso interrogabile in linguaggio naturale tramite agent AI che il cliente già usa (o tramite la nostra piattaforma white-label).

### Cosa cambia rispetto al modello attuale

| Dimensione | Modello attuale | Modello DaaS-AI |
|---|---|---|
| **Output** | Feed dati / dashboard / report | Risposta conversazionale + insight + media-ready export |
| **Skill richieste cliente** | Data team, BI | Nessuna — parla in italiano all'agent |
| **Time-to-insight** | Giorni/settimane | Secondi |
| **Pricing** | Canone fisso (5K€/mese tipico) | Subscription tier + consumption (query, volumi, API call) |
| **Cliente target** | Enterprise con BI interna | Enterprise + agenzie + PMI evolute + trade |
| **Margine incrementale** | Lineare con il dato | Esponenziale (layer software ad alto margine) |

---

## 5. Prodotti Previsti

### A — AI Plugin Marketplace

Plugin proprietari ND distribuiti su:

- Claude (anche Claude Code per devops/integratori)
- Gemini
- OpenAI / ChatGPT (Custom GPT + Apps)
- Microsoft Copilot
- Cursor
- server MCP standard
- REST API per agent custom

**Funzioni esposte**: query in linguaggio naturale, generazione insight, analisi geo, audience generation, report automatici, forecasting, benchmark territoriali.

### B — Conversational Data API

API intelligenti interrogabili da qualsiasi agent AI.

**Esempio query**:
> *"Mostrami i flussi di persone interessate al fitness che frequentano centri commerciali nel weekend a Milano."*

**Output strutturato**:
- audience profilata
- heatmap geografica
- insight testuali
- trend storici
- KPI quantitativi
- export media-ready (per attivazione DSP/DMP)

### C — AI Mobility Intelligence

Verticale per **comuni, utility, mobility company, aeroporti, GDO, centri commerciali**.

Basato sui modelli già sviluppati per le analisi mobilità (catchment area, drive-to-store, flussi origin-destination).

### D — AI Retail Intelligence

Interrogazione conversazionale di:
- dati retail media (rete ND + partner)
- in-store behavior
- OTS, engagement, conversion uplift
- correlazione signage → sell-out

Naturale estensione AI dei prodotti [conversational_signage.md](conversational_signage.md) e [retail_media_grid.md](retail_media_grid.md).

**Backend già esistente**: il prodotto si appoggia sul **Data Hub Agent** (vedi [data_hub_agent.md](data_hub_agent.md)) — orchestratore multi-retailer già prototipato in 15 schermate HTML navigabili, con connettori per Carrefour API, Conad email, Coop SFTP, Brico io upload, Esselunga webhook, Eurospin pending, sensoristica ISEN. Aggiunto il layer LLM + MCP sopra lo schema unificato, AI Retail Intelligence è producibile in **12-16 settimane**.

---

## 6. Target Clienti

### Enterprise (cliente storico ND, upgrade naturale)

Retailer, GDO, utility, telco, banking, mobility.

### Agenzie Media & Trade (segmento ampliato — KEY)

Agenzie locali, centri media indipendenti, concessionarie, agenzie trade.
**Perché**: la barriera tecnica scompare. Un account locale può vendere insight territoriali al cliente PMI senza data team interno.

### PMI Evolute (segmento nuovo — TAM expansion)

Aziende che oggi non possono permettersi data team, dashboard BI complesse, struttura analitica.
**Pricing entry** pensato per essere accessibile (STARTER).

---

## 7. Pricing Model

### Subscription

| Tier | Contenuto | Target |
|---|---|---|
| **STARTER** | Query mensili limitate, dataset standard, dashboard base | PMI, agenzie locali |
| **PROFESSIONAL** | API complete, plugin AI, export illimitato, segmentazioni avanzate, supporto | Agenzie media, brand mid-market |
| **ENTERPRISE** | Clean room, dati custom, real-time, SLA, modelli dedicati, multiutente | Retailer top, utility, telco |

### Consumption (in aggiunta o stand-alone)

Pricing variabile per:
- query eseguita
- volume dati restituito
- area geografica (Italia / EU / extra-EU)
- enrichment applicato
- API call (chiamata semplice vs query con modello)

**Hooks pricing**: integrare con [pricing.md](pricing.md) per allineamento fasce e con [operations.md](operations.md) per modello ROI.

---

## 8. Vantaggio Competitivo

Next Different è — al momento — l'unico player italiano che possiede **simultaneamente**:

- ✅ dato proprietario (mobility, behavioral, retail media)
- ✅ tecnologia proprietaria (One Data Platform, motore CNR)
- ✅ capability media (pianificazione, attivazione DSP/DMP)
- ✅ capability retail (signage, sensoristica, in-store)
- ✅ capability AI (skill MCP, plugin, agent)
- ✅ casi reali misurati (Carrefour, Conad, Brico io, Barilla)
- ✅ inventory fisica e digitale (rete schermi + audience digital)

Risultato: ND può costruire **insight → attivazione → misurazione → retargeting → AI recommendation** in un unico ecosistema, senza dipendere da terzi.

I competitor sono frammentati: chi ha il dato non ha l'inventory, chi ha l'inventory non ha il modello AI, chi ha il modello AI non ha i case study retail misurati.

---

## 9. Case Study a Supporto (proof points)

Vedi [sales.md](sales.md) per il dettaglio completo. Sintesi dei proof point spendibili nel pitch DaaS-AI:

| Cliente | Contesto | KPI | Risultato |
|---|---|---|---|
| **Barilla — Pinsa** (Carrefour) | Testata gondola digitale | Uplift sell-out | **+183%** |
| **Barilla — Gran Cereale** (Carrefour) | Testata gondola digitale | Uplift sell-out | **+117%** |
| **Pavesi — Togo** (Carrefour) | Testata gondola digitale | Uplift sell-out | +65% |
| **Henkel** (Brico io) | Conversational Signage + drive-to-store | Aumento vendite vs 2024 | **+22,33%** |
| **Barilla — Conad** | 55 PDV, contenuti per cluster | Clusterizzazione + segmenti riusabili | Audience attivabile |

**Punto chiave per il pitch DaaS-AI**: questi risultati sono stati ottenuti con strumenti tradizionali. Esposti via AI conversazionale, lo stesso dato diventa accessibile a 10x i clienti potenziali a costo marginale near-zero.

---

## 10. Evoluzione Strategica — North Star

> **"The AI Operating System for Retail & Mobility Data"**

Piattaforma unica che permette a qualsiasi azienda di:

1. **Interrogare il mondo fisico** (dove sono le persone, cosa fanno, dove vanno)
2. **Comprendere comportamenti** (correlazione online ↔ offline)
3. **Generare audience** attivabili
4. **Attivare campagne** (DSP/DMP/CDP + signage)
5. **Misurare impatto** (uplift sell-out certificato)

Tutto tramite **un'unica interfaccia conversazionale AI**.

---

## 11. Opportunità Future

Evoluzioni naturali (12-24 mesi):

- **Marketplace dataset** (terze parti pubblicano dataset interrogabili sulla piattaforma ND)
- **Agent verticali** (es. "Mobility Agent per Comuni", "Retail Agent per GDO")
- **Predictive AI** (forecasting flussi, sell-out, footfall)
- **Simulazioni urbanistiche** (scenari "what if" per comuni e developer)
- **Retail planning AI** (assortimento, layout, planogramma data-driven)
- **AI recommendation engine** (next-best-action per brand/retailer)
- **Media planning automatico**
- **Autonomous campaign optimization**

---

## 12. Perché il Momento è Adesso

**Prima**: il dato era utilizzabile solo da tecnici → TAM ristretto, ciclo vendita lungo, dipendenza da BI interna del cliente.

**Adesso**: qualsiasi manager interroga sistemi complessi via AI → TAM esploso, ciclo vendita corto, zero dipendenza da BI cliente.

Il passaggio storico non è "vendere dati", ma:

> **"rendere interrogabile il mondo reale tramite AI"**

ND ha gli asset, ha i case study, ha la tecnologia. La finestra di vantaggio competitivo è **adesso**, prima che i grandi player (Google, OpenAI, hyperscaler dato) entrino verticalmente sul mercato italiano retail/mobility.

---

## 13. Next Steps (open — da definire con board)

- [ ] Validazione board pivot DaaS-AI
- [ ] Roadmap prodotto Q3-Q4 2026 (priorità: Plugin Marketplace vs Conversational API)
- [ ] Identificazione design partner (1 retailer + 1 agenzia + 1 PMI per pilot)
- [ ] Pricing finale tier STARTER/PROFESSIONAL/ENTERPRISE
- [ ] Posizionamento brand: nuovo naming prodotto?
- [ ] Investimento R&D necessario (team AI/MCP, integrazioni)
- [ ] Go-to-market: leva su clienti esistenti BU Data & Retail (vedi [bu_data_retail.md](bu_data_retail.md))

---

## Riferimenti

- [business_data_ai_fruizione.md](business_data_ai_fruizione.md) — ★ modalità di fruizione (canali, output, caratteristiche tecniche, MVP)
- [data_hub_agent.md](data_hub_agent.md) — ★ orchestratore dati retail media (prototipo già esistente, backend di AI Retail Intelligence)
- [strategia_board_2026.md](strategia_board_2026.md) — ★ piano board 2026-2028 (mercato, posizionamento, M&A, roadmap)
- [bu_data_retail.md](bu_data_retail.md) — team, numeri, prodotti BU
- [monetizzazione_dati.md](monetizzazione_dati.md) — One Data Platform, feed mobility, segmenti audience
- [conversational_signage.md](conversational_signage.md) — prodotto signage AI
- [retail_media_grid.md](retail_media_grid.md) — rete retail media
- [architettura.md](architettura.md) — stack tecnico, edge, cloud, GDPR
- [pricing.md](pricing.md) — listino attuale (base per nuovi tier)
- [sales.md](sales.md) — case studies dettagliati, RFP library
- [operations.md](operations.md) — modelli business, ROI calculator

**Fonti esterne**: documento strategico interno "AI Data Access Platform" (input board 2026-05-15), case studies JarvisNEXT knowledge-base.
