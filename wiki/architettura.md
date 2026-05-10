---
tipo: processo
fonte: documento
confidenza: alta
aggiornato: 2026-05-10
---

# Architettura Tecnica — Next Different

## Quick Reference
> - Edge processing + Cloud AWS
> - Latenza <100ms per contenuti dinamici
> - Privacy by Design (no storage video)

---

## Overview

```
CLOUD (AWS)
├── Analytics Engine     — aggregazione dati, KPI, ML
├── Content Manager      — CMS, scheduling, targeting, A/B
└── Monetization Platform

        ↕ HTTPS / WebSocket

EDGE LAYER (per-device)
├── Edge Gateway
│   ├── CAM / WiFi sensor processing
│   ├── Content Player
│   └── Local Cache
```

---

## Componenti Edge

### Sensoristica Supportata
| Tipo | Tecnologia | Dati Raccolti |
|------|------------|---------------|
| CAM | Computer Vision | OTS, dwell time, demographics |
| WiFi | Probe request | Flussi traffico, device count |
| BLE | Beacon | Proximity, dwell by zone |

### Hardware Edge
| Parametro | Valore |
|-----------|--------|
| RAM | 4-8 GB |
| Storage | 64-128 GB SSD |
| Connettività | Ethernet + WiFi + 4G backup |
| OS | Linux-based custom |

---

## Cloud Components

- **Analytics Engine**: aggregazione multi-location, KPI, ML, report
- **Content Manager**: CMS, scheduling, targeting, A/B testing, asset library
- **Monetization Platform**: gestione revenue share, inventory ADV

---

## Privacy & GDPR

- **No video storage**: elaborazione solo in-edge, nessun frame salvato
- **Anonimizzazione**: dati demografici aggregati, nessun dato personale
- **Consenso**: segnaletica informativa obbligatoria nel PDV
- Supporto certificazione privacy disponibile (→ [pricing.md](pricing.md): A-PRIV)

---

## Stack FinalDraft (API Platform)

*Piattaforma proprietaria per gestione agent e workflow*

- Backend: PHP / Laravel 10
- Frontend: Vue 3 + TypeScript + Vite
- Container: Docker Compose
- Docs API: → [api_docs.md](api_docs.md)

---

## Fonte
`JarvisNEXT/knowledge-base/05_TECHNICAL/architettura.md` — `docs/ARCHITECTURE.md`
