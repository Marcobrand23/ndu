---
tipo: stato
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# Monetizzazione dei Dati — Next Different

## Quick Reference
> - 3 prodotti: Feed Mobilità (2A), Piattaforma Footfall (2B), Segmenti Audience (2C)
> - Piattaforma proprietaria "One Data Platform"
> - 15M MAID tracciati/semestre, 40M profili comportamentali
> - Attivazione su DSP/DMP/CDP

---

## 1. Overview

L'offerta data-centric si basa sulla piattaforma tecnologica proprietaria **"Next Different One"** che integra informazioni da touchpoint fisici e digitali con algoritmi proprietari (Naive Bayes, entity linking, motore semantico co-sviluppato con CNR).

### Obiettivo
Abilitare l'utilizzo di dati di prima e terza parte per:
- Analisi footfall
- Costruzione segmenti audience
- Attivazione media (OOH e digital)

---

## 2. Prodotto 2A — Feed Dati di Mobilità

### Descrizione
Fornitura di feed dati geo-location (LAT/LONG) associato a Device ID anonimizzati e attributi comportamentali.

### Dato Mobility Geo Feed
| Campo | Descrizione |
|-------|-------------|
| Latitude / Longitude | Coordinate geografiche |
| Device ID | Anonimizzato |
| Attributi | Interessi, profilazione IAB |

### Dato Proximity Grezzo
| Campo | Descrizione |
|-------|-------------|
| MAID | Mobile Advertising ID |
| Timestamp | Data/ora/minuto/secondo |
| Posizione | Lat/Long |
| Precisione | Accuratezza posizione |
| Velocità | Movimento utente |

### Volume
- 30 rilevazioni/giorno per utente (media)
- 15 milioni MAID tracciati su base semestrale

### Pricing
| Voce | Prezzo |
|------|--------|
| Canone mensile dati geo | 5.000 EUR |
| Canone mensile interesse IAB | 1.000 EUR |

### Vincoli
- Nomina a Responsabile Esterno ex art. 28 GDPR
- Obblighi informativa privacy
- Gestione consensi a carico del cliente

---

## 3. Prodotto 2B — Piattaforma Analisi Footfall

### Descrizione
Piattaforma proprietaria **"Next Different One"** per delineare il profilo utente combinando comportamento fisico (POI frequentati, frequenza) e comportamento online (interessi IAB).

### Funzionalità Principali
- Profilazione utente fisica + online
- Analisi geolocalizzata e comportamentale
- Creazione cluster/segmenti personalizzati
- Integrazione in DSP
- Misurazione uplift proprietaria

### Output di Misurazione
| Metrica | Descrizione |
|---------|-------------|
| Utenti esposti | Audience raggiunta dalla campagna |
| Visite PDV | Utenti esposti che si sono recati fisicamente |
| % Uplift | Incremento vs gruppo controllo non esposto |

### Volume Dati
| Tipo | Volume |
|------|--------|
| Users' behaviour (cookie) | 40 milioni |
| Users' POI location (mobile-ID) | 15 milioni |

### Arricchimenti Disponibili
- Tipologia negozi visitati + insegna
- Attributi socio-demografici (ISTAT)
- Categorizzazione ATECO
- Reddito e potere d'acquisto (zona residenza)

### Pricing
| Voce | Prezzo |
|------|--------|
| Pricing mensile (contratto annuale) | 5.000 EUR + IVA |

Include: accesso piattaforma, creazione/ottimizzazione audience, insight pre-campagna, calcolo uplift, reportistica, supporto dedicato.

---

## 4. Prodotto 2C — Segmenti di Audience

### Descrizione
Segmenti audience precostruiti ("Segmenti Next") con caratteristiche di acquisto, comportamentali, sociodemografiche e geografiche.

### Processo di Costruzione

**Step 1 — Raccolta Proximity**
MAID + segnali spazio-temporali da sensori

**Step 2 — Arricchimento**
Dati POI, socio-demo, economici (Agenzia delle Entrate)

**Step 3 — Matching Probabilistico**
Dato online: interesse IAB, keyword, classificazione pagine per tassonomia IAB

**Step 4 — Matching Deterministico**
Dato retail: visita PDV con giorno/ora, visione ADV, interazione touchscreen, QR code

**Step 5 — Profilo "SUPER USER"**
Attributi ottenibili:
- Dove vive e lavora
- Età/genere
- Potere d'acquisto
- Contenuti web consultati
- Abitudini retail
- Altri POI frequentati
- Prodotti/servizi considerati
- Modalità di interazione con campagne

### Utilizzo
- Erogazione campagne pubblicitarie online
- Retargeting e prospecting
- Disponibilità su piattaforme reservation/programmatic

### Estensioni Possibili
- Tracciamento eCommerce
- Integrazione CRM per "SUPER USER" custom

---

## 5. Attivazione Media

### Schema Operativo
1. Raccolta dati in-store (sensori/proximity/behavioural)
2. Creazione segmenti personalizzati
3. Invio a DMP/DSP
4. Attivazione campagne (OOH e ADV digital)
5. Misurazione foot-fall post campagna

### Canali Retargeting
| Canale | Descrizione |
|--------|-------------|
| Ads Mobile | Campagne mentre utente naviga web/social |
| Push Notification | Tramite network app partner |

---

## Fonte
`JarvisNEXT/knowledge-base/02_PRODOTTI/monetizzazione-dati.md`, `03_NextDifferent_ProdottiEServizi_v1.1.docx`
