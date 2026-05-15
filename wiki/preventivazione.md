---
tipo: processo
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# Preventivazione — Flusso e Regole

## Quick Reference
> - Flusso conversazionale in 6 step
> - Output: preventivo multi-anno con breakdown Anno 1 / Anni 2+
> - Sconti automatici per partner level + fascia device + durata contratto

---

## 1. Flusso Conversazionale

### Step 1 — Identificazione Cliente
| Domanda | Opzioni | Impatto |
|---------|---------|---------|
| Tipo cliente? | Retailer / Brand / Concessionaria | Modello business suggerito |
| Partner level? | PP35 / P10 / RRP | Listino prezzi applicato |
| Settore? | Food / Non-food / GDO / Specializzato | Case study rilevanti |

### Step 2 — Dimensionamento
| Domanda | Opzioni | Impatto |
|---------|---------|---------|
| Quanti device? | 1 / 2-50 / 51-500 / >500 | Fascia prezzo |
| Tipo installazione? | Totem / Testata / Kit sensori | Voci hardware |
| Location type? | Alto / Medio / Basso traffico | Stima OTS |

### Step 3 — Configurazione Software
| Domanda | Opzioni | Impatto |
|---------|---------|---------|
| Moduli attivi? | Measure / Engage / Monetize | Licenze software |
| Integrazioni? | CRM / Loyalty / eCommerce | Setup aggiuntivo |
| Dashboard? | Standard / Custom | Costo dashboard |

### Step 4 — Contenuti
| Domanda | Opzioni | Impatto |
|---------|---------|---------|
| Setup iniziale? | Template / Custom | Ore design |
| Gestione ricorrente? | Sì / No | Canone mensile |
| Gamification? | No / Esistente / Custom | Sviluppo ad hoc |

### Step 5 — Modello Business
| Domanda | Opzioni | Impatto |
|---------|---------|---------|
| Chi investe? | Retailer / Terzi / Nessuno | Direct / RevShare / Reservation |
| Durata contratto? | 12 / 24 / 36 mesi | Sconti lungo termine |
| Revenue share %? | % retailer | Solo se RevShare |

### Step 6 — Output Preventivo
- Breakdown costi Anno 1 (setup + canoni)
- Breakdown costi Anni 2+ (solo canoni)
- Stima ROI su orizzonte contratto
- Elementi esclusi (trasporto, installazione)

---

## 2. Regole di Pricing

### Fasce Device
| Fascia | Range | Sconto Base |
|--------|-------|-------------|
| 1 | 1 device | 0% |
| 2 | 2-50 device | 5% |
| 3 | 51-500 device | 10% |
| 4 | >500 device | 15% (negoziabile) |

### Partner Level
| Level | Codice | Sconto su RRP |
|-------|--------|---------------|
| Partner Platinum | PP35 | -35% |
| Partner | P10 | -10% |
| Cliente Finale | RRP | 0% |

### Sconti Aggiuntivi Cumulabili
| Condizione | Sconto Extra |
|------------|--------------|
| Contratto 24 mesi | +3% |
| Contratto 36 mesi | +5% |
| Pagamento anticipato anno | +2% |
| Bundle HW+SW+Content | +5% |

---

## 3. Struttura Documento Preventivo

### Sezione 1 — Anagrafica
```
Cliente:     [Nome]
Contatto:    [Referente]
Data:        [GG/MM/AAAA]
Validità:    30 giorni
```

### Sezione 2 — Configurazione
```
Numero Device:  [N]
Tipo:           [Totem 50" / Testata / Kit]
Moduli:         [Measure, Engage, Monetize]
Modello:        [Direct / RevShare / Reservation]
```

### Sezione 3 — Dettaglio Economico Anno 1
| Voce | Codice | Qtà | Prezzo Unit. | Totale |
|------|--------|-----|--------------|--------|
| Kit Sensoristica | A-HW-KIT-01 | N | xxx | xxx |
| Licenza SW Base | A-LIC-SW-01 | N×12 | xxx | xxx |
| Setup Contenuti | A-CNT-SET-01 | 1 | xxx | xxx |
| **TOTALE ANNO 1** | | | | **XXX** |

### Sezione 4 — Dettaglio Economico Anni 2+
| Voce | Codice | Qtà | Prezzo Unit. | Totale |
|------|--------|-----|--------------|--------|
| Licenza SW Base | A-LIC-SW-01 | N×12 | xxx | xxx |
| Gestione Contenuti | A-CNT-MNG-01 | 12 | xxx | xxx |
| **TOTALE ANNO 2+** | | | | **XXX** |

### Sezione 5 — Esclusioni Standard
- Trasporto dispositivi
- Installazione/disinstallazione
- Connettività internet
- Contenuti extra oltre pacchetto
- Sviluppo gamification custom

### Sezione 6 — Condizioni
- Pagamento: 50% all'ordine, 50% alla consegna
- Fatturazione licenze: mensile anticipata
- Durata minima: 12 mesi
- Rinnovo: tacito salvo disdetta 60gg

---

## 4. Checklist Pre-Invio

### Verifica Tecnica
- [ ] Numero device confermato
- [ ] Tipo installazione compatibile
- [ ] Connettività verificata
- [ ] Spazi fisici idonei

### Verifica Commerciale
- [ ] Partner level corretto
- [ ] Sconti applicati verificati
- [ ] Margine minimo rispettato
- [ ] Approvazione sales manager (se >100k)

### Verifica Legale
- [ ] T&C allegati
- [ ] Privacy policy inclusa
- [ ] SLA definiti
- [ ] Clausole speciali evidenziate

---

## 5. Template Email di Invio

```
Oggetto: Preventivo Next Different - [Cliente] - [Data]

Gentile [Nome],

in allegato il preventivo per la soluzione Conversational Signage
configurata secondo le esigenze emerse nel nostro incontro.

Configurazione:
- [N] dispositivi [tipo]
- Moduli: [elenco]
- Modello: [Direct/RevShare/Reservation]

Investimento Anno 1: EUR [totale]
Canone Anni Successivi: EUR [totale]/anno

Il preventivo ha validità 30 giorni.

Resto a disposizione per qualsiasi chiarimento.

Cordiali saluti,
[Firma]
```

---

## Fonte
`JarvisNEXT/knowledge-base/06_OPERATIONS/preventivazione.md`, `04_NextDifferent_PricingEListini_v1.0.docx`
