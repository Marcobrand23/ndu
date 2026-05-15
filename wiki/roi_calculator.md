---
tipo: processo
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# ROI Calculator — Next Different

## Quick Reference
> - Payback obiettivo: entro 18 mesi (Direct Model, 50 device)
> - Valore spazio media: 800–4.000 EUR/quindicina (per traffico)
> - Revenue Share e Reservation: ROI immediato (zero costi retailer)

---

## 1. Componenti del ROI

### Costi
| Voce | Tipo | Note |
|------|------|------|
| Hardware | CAPEX | Totem, kit sensoristica |
| Licenze Software | OPEX | Canone mensile per device |
| Installazione | CAPEX | Una tantum (esclusa da ND, a carico cliente) |
| Contenuti | OPEX | Setup iniziale + gestione ricorrente |
| Manutenzione | OPEX | Fleet management incluso in licenza |

### Ricavi Potenziali
| Fonte | Descrizione |
|-------|-------------|
| ADV Revenue | Vendita spazi a brand/CPG |
| Data Monetization | Feed dati, footfall, segmenti |
| Sell-out Uplift | Incremento vendite prodotti esposti |
| Operational Savings | Riduzione costi comunicazione tradizionale |

---

## 2. Formula Base

```
ROI = (Ricavi Totali - Costi Totali) / Costi Totali × 100

Ricavi Anno = (Spazi Venduti × Valore Spazio × Quindicine/Anno)
            + (Uplift Sell-out × Margine Prodotto)
            + (Feed Dati Venduti)

Costi Anno  = (Licenze × 12 mesi)
            + (Contenuti Ricorrenti × 12)
            + (Ammortamento HW / Anni)
```

---

## 3. Parametri di Riferimento

### Valore Spazio Media
| Tipo Location | Valore Quindicina |
|---------------|-------------------|
| Alto traffico (ipermercati, centri commerciali) | 2.500 – 4.000 EUR |
| Medio traffico (supermercati, negozi specializzati) | 1.500 – 2.500 EUR |
| Basso traffico (punti vendita di prossimità) | 800 – 1.500 EUR |

### OTS e Fill Rate Target
| Metrica | Valore Target | Impatto |
|---------|---------------|---------|
| OTS/giorno | >500 | Attrattività per advertiser |
| Fill Rate ADV | >60% | Efficienza monetizzazione |
| Dwell Time | >3 sec | Qualità engagement |

---

## 4. Scenari Tipici

### Scenario A — Direct Model (50 device)
| Anno | Costi | Ricavi | ROI Cumulativo |
|------|-------|--------|----------------|
| 1 | 150.000 | 80.000 | -47% |
| 2 | 60.000 | 120.000 | +6% |
| 3 | 60.000 | 140.000 | +33% |

**Payback**: ~18 mesi

### Scenario B — Revenue Share (50 device)
| Anno | Costi Retailer | Ricavi Retailer |
|------|----------------|-----------------|
| 1 | 0 | 30.000 |
| 2 | 0 | 45.000 |
| 3 | 0 | 50.000 |

**ROI**: infinito — retailer non sostiene costi, riceve quota revenue

### Scenario C — Reservation
| Campagna | Costo Retailer | Ricavo Retailer |
|----------|----------------|-----------------|
| 1 quindicina | 0 | 500 – 1.000 EUR |

**Modello**: pay-per-campaign, zero commitment

---

## 5. Uplift Sell-out Atteso

### Benchmark da Case Study
| Brand | Categoria | Uplift | Contesto |
|-------|-----------|--------|----------|
| Gran Cereale | Cereali | +117% | Carrefour |
| Mulino Bianco | Biscotti | +183% | Carrefour |
| Pavesi | Snack | +65% | Carrefour |
| Henkel | Detergenza | +22.33% | Carrefour (avg) |

### Formula Valore Uplift
```
Valore Uplift = Volume Incrementale × Prezzo Medio × Margine %
```

---

## 6. Break-even Analysis

### Variabili Chiave
| Variabile | Impatto su Break-even |
|-----------|----------------------|
| Numero Device | Più device = economie di scala |
| Fill Rate ADV | +10% fill = -2 mesi payback |
| Valore Spazio | +500 EUR/quindicina = -3 mesi payback |
| Costo Licenza | Negoziabile su volumi |

### Soglia Minima Convenienza
| Modello | Soglia |
|---------|--------|
| Direct | >20 device per economie di scala |
| Revenue Share | Qualsiasi numero (zero rischio) |
| Reservation | 1-5 device per test |

---

## 7. Input/Output del Calcolo

### Input Richiesti
1. Numero device previsti
2. Tipo location (alto/medio/basso traffico)
3. Modello business scelto
4. Durata contratto (anni)
5. Budget contenuti stimato

### Output Generati
1. Costo totale per anno
2. Ricavo potenziale per anno
3. ROI annuale e cumulativo
4. Mese di break-even
5. Sensitività su variabili chiave

---

## Fonte
`JarvisNEXT/knowledge-base/06_OPERATIONS/roi-calculator.md`, `04_NextDifferent_PricingEListini_v1.0.docx`
