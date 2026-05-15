---
tipo: stato
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# Retail Media Grid — Piattaforma Software

## Quick Reference
> - 3 moduli: MEASURE (analytics), ENGAGE (contenuti + AI), MONETIZE (ADV)
> - SaaS cloud AWS + edge processing locale
> - Integrazione programmatic DSP/SSP, Samsung VXT/MagicInfo, CRM

---

## 1. Overview

**Retail Media Grid** è il prodotto software che abilita tutte le funzionalità di Conversational Signage. È organizzato in 3 moduli funzionali, ciascuno indipendente e attivabile separatamente.

---

## 2. Modulo MEASURE

### OTS Measurement (Opportunity To See)
- **Definizione**: utenti nel cono di visione per >1.5 secondi
- Metriche pre-campagna disponibili:
  - Mappatura PDV e formati schermi
  - Slot disponibili per formato
  - Passaggi orari per PDV
  - OTS per schermo

### Analytics Socio-Demo
- Stima genere/età tramite CAM e sensori
- Cluster: uomo/donna, under/over 25

### Visitor Engagement Rate
| Metrica | Descrizione |
|---------|-------------|
| Area Attraction | Rilevazione presenza nell'area |
| Attention | OTS / totale rilevazioni |
| Content Attraction | Tempo di attenzione sul contenuto |
| Gaming Attraction | Avvio interazione/gamification |
| Audience Interaction | QR scan, interazioni touch |

### IoT Monitoring
- Monitoraggio real-time sensoristica
- Dashboard analisi continua
- ML per previsione problemi
- Allarmi, analisi log, diagnostica
- Manutenzione predittiva

### Role-Based Access Control
- Livelli accesso per ruolo (IAM)
- Tracciamento attività
- Autenticazione avanzata (2FA)

---

## 3. Modulo ENGAGE

### Advanced Analytics
Campione base: 15 milioni device con consenso privacy.

| Dato | Descrizione |
|------|-------------|
| Provenienza | Città vs provincia |
| Heatmap | Visualizzazione geografica flussi |
| Stato civile | Profilo demografico |
| Titolo di studio | Livello istruzione |
| Interessi online | Categorizzazione IAB |
| Home/Work location | Posizioni principali utente |
| Foot-fall attribution | Attribuzione visite al PDV |
| Arena competitiva | Analisi competitor |
| Loyalty | Frequenza ritorno |
| Clienti condivisi | Overlap con competitor |

### Remote Content Management & Scheduling
- Programmazione e rotazione contenuti
- Cicli orari/giornalieri/settimanali
- Analisi performance contenuti
- Personalizzazione continua del palinsesto

### AI-Dynamic Content Optimization
- Ottimizzazione contenuto in base a metriche di attenzione real-time
- Modifica automatica basata su socio-demo/interessi rilevati
- Effetti: aumento rilevanza, attenzione, ingaggio, sell-out

### Content A/B Testing
Confronto versioni contenuti su:
- Visualizzazioni totali
- OTS
- Tempo di attenzione

### SDK Integration
- SDK GDPR compliant per analisi utenti online/offline
- Ricontatto con advertising display
- Push geolocalizzate tramite app partner

### CMS
- CMS light integrato nativo
- API per integrazione con CMS di mercato (Samsung MagicInfo, VXT, altri)

---

## 4. Modulo MONETIZE

### Media Planning Platform
- SaaS per pianificazione spazi pubblicitari
- Gestione autonoma da remoto per retailer e advertiser

### Programmatic Integration
- Integrazione DSP/SSP
- Marketplace advertiser-retailer

### Audience Segments
- Creazione segmenti per ADV retargeting
- Disponibilità su piattaforme reservation e programmatic

### Inventory Profiling
- Profilazione socio-demo degli spazi (per giorno/orario)
- Base per ottimizzazione fill rate e pricing ADV

### Historical Campaigns Performance
- Storico performance campagne
- Trend e analytics predittive

### CRM Integration Ready
- Visione cliente unificata
- Attivazioni marketing mirate

---

## 5. Architettura Tecnica

### Location (Edge)
- Unità edge processing locale
- Gestione aggiornamenti contenuti
- CAM processing (nessun dato grezzo inviato)
- Invio dati "aggregated & anonymized" su HTTPS
- VPN tunnel verso cloud

### Cloud (AWS)
| Componente | Funzione |
|------------|----------|
| Amazon Kinesis Data Firehose | Ingestion dati real-time |
| Fleet Management | Gestione centralizzata device |
| KPI Engine | Calcolo metriche |
| Dashboard | Reporting e analytics |
| GRID Platform | Core piattaforma |
| ID Graph | Risoluzione identità anonima |

### Integrazioni Supportate
- Samsung VXT
- Samsung MagicInfo
- WiFi Routers API
- LED-Stripes API
- DMP/DSP (programmatic)

---

## 6. Compatibilità CMS

| CMS | Integrazione |
|-----|--------------|
| Samsung Magic Info | Nativa |
| Samsung VXT | API |
| Altri CMS di mercato | Via API RESTful |

---

## Fonte
`JarvisNEXT/knowledge-base/02_PRODOTTI/retail-media-grid.md`, `01_NextDifferent_Azienda_Overview_v1.0.docx`, `03_NextDifferent_ProdottiEServizi_v1.1.docx`
