---
tipo: stato
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# Sensoristica — Next Different

## Quick Reference
> - 3 tecnologie: CAM (computer vision), WiFi, BLE
> - Edge processing locale — nessun dato grezzo inviato al cloud
> - Privacy by Design: no storage immagini/video, dati solo aggregati

---

## 1. Overview Tecnologie

| Tecnologia | Dati Raccolti | Precisione | Costo Relativo |
|------------|---------------|------------|----------------|
| **CAM** | OTS, dwell time, demographics | Alta | Medio |
| **WiFi** | Flussi, device count | Media | Basso |
| **BLE** | Proximity, dwell per zona | Alta | Medio |

---

## 2. Sensori CAM (Computer Vision)

### Metriche
| Metrica | Descrizione | Accuratezza |
|---------|-------------|-------------|
| OTS | Utenti nel cono visivo >1.5s | 95%+ |
| Dwell Time | Tempo permanenza in zona | ±0.5s |
| Demographics | Età (range), genere | 85-90% |
| Attention | Sguardo verso schermo | 80%+ |

### Specifiche Hardware
| Parametro | Valore |
|-----------|--------|
| Risoluzione | 1080p min |
| Frame Rate | 15-30 fps |
| FOV | 90-120° |
| Illuminazione minima | 50 lux |
| Connessione | USB 3.0 / PoE |

### Flusso di Elaborazione
```
1. Cattura frame (locale)
2. Detection volti/persone
3. Estrazione features anonime
4. Aggregazione metriche
5. Cancellazione frame immediata
6. Invio dati aggregati a cloud
```

### Privacy CAM
- NO riconoscimento facciale (identificazione)
- NO storage immagini/video
- Solo features statistiche aggregate
- Elaborazione 100% edge (locale)

---

## 3. Sensori WiFi

### Metriche
| Metrica | Descrizione | Accuratezza |
|---------|-------------|-------------|
| Device Count | Numero dispositivi in zona | ±10% |
| Flussi | Direzione movimento | 80% |
| Dwell | Permanenza approssimativa | ±30s |
| Return Visit | Visite ripetute (MAC hashed) | 70% |

### Specifiche Hardware
| Parametro | Valore |
|-----------|--------|
| Standard | 802.11 a/b/g/n/ac |
| Range | 10-30m (configurabile) |
| Alimentazione | PoE / DC |

### Flusso di Elaborazione
```
1. Cattura probe request
2. MAC address hashing (SHA-256)
3. Filtraggio randomized MAC
4. Aggregazione per zona/tempo
5. Invio dati aggregati
```

### Limitazioni WiFi
- MAC randomization riduce accuratezza su device moderni
- Meglio per conteggi macro, meno per dwell time preciso

---

## 4. Sensori BLE (Beacon)

### Metriche
| Metrica | Descrizione | Accuratezza |
|---------|-------------|-------------|
| Proximity | Distanza da beacon | ±1-2m |
| Zone Dwell | Tempo per micro-zona | ±2s |
| Path | Percorso cliente | 85% |
| Interaction | Prossimità a touchpoint | Alta |

### Specifiche Hardware
| Parametro | Valore |
|-----------|--------|
| Standard | BLE 4.0+ |
| Range | 1-10m (configurabile tramite TX power) |
| Batteria beacon | 2-3 anni |
| Frequenza advertising | ogni 100-1000ms |

### Modalità Operative
| Modalità | Descrizione | Requisiti |
|----------|-------------|-----------|
| Passive | Rileva app con SDK installato | App utente |
| Active | Beacon trasmette, device riceve | Bluetooth on |

---

## 5. Kit Sensoristica Standard

### Kit Base (A-HW-KIT-01)
| Componente | Qtà |
|------------|-----|
| Sensore CAM | 1 (integrato o esterno) |
| Edge Gateway | 1 |
| Cablaggio USB/Ethernet | 1 set |
| Staffaggio | 1 set |

### Kit Avanzato (A-HW-KIT-02)
| Componente | Qtà |
|------------|-----|
| Sensore CAM | 1-2 (multi-angolo) |
| WiFi Sensor | 1 |
| BLE Beacon | 3-5 |
| Edge Gateway Pro | 1 |

### Kit Enterprise (A-HW-KIT-03)
| Componente | Qtà |
|------------|-----|
| Sensori CAM | 2+ (copertura completa) |
| WiFi Sensor Array | 1 |
| BLE Network | 10+ (full store mapping) |
| Edge Server | 1 (processing centralizzato) |

---

## 6. Requisiti di Installazione

| Requisito | Specifica |
|-----------|-----------|
| Alimentazione | 220V o PoE |
| Connettività | Ethernet preferito, WiFi backup |
| Illuminazione | >50 lux per CAM |
| Altezza ottimale | 2-3m da terra |
| Copertura | Cono 90-120° |

### Posizionamento CAM
- Angolo: 15-30° verso il basso
- Distanza ottimale: 2-4m dal punto di interesse
- Evitare: controluce, riflessi, ostruzioni

### Posizionamento BLE
- Altezza: 2-2.5m
- Spacing: 5-8m tra beacon
- Evitare: superfici metalliche, acqua, interferenze RF

---

## 7. Calibrazione

### Procedura Standard
1. Installazione fisica
2. Configurazione zone di interesse
3. Test baseline (verifica detection rate)
4. Tuning parametri (soglie, sensibilità)
5. Validazione con conteggi manuali
6. Go-live produzione

### Target Metriche
| Metrica | Target | Accettabile |
|---------|--------|-------------|
| Detection Rate | >95% | >90% |
| False Positive | <5% | <10% |
| Dwell Accuracy | ±1s | ±3s |
| Demographics Acc | >85% | >80% |

---

## 8. Manutenzione

| Attività | Frequenza |
|----------|-----------|
| Pulizia lenti CAM | Mensile |
| Verifica allineamento | Trimestrale |
| Check connettività | Continuo (automatico) |
| Firmware update | Quando disponibile |
| Ricalibrazione | Annuale |

### Troubleshooting Comune
| Problema | Causa Probabile | Soluzione |
|----------|-----------------|-----------|
| OTS basso | Lente sporca | Pulizia |
| Demographics errate | Illuminazione insufficiente | Verifica lux |
| WiFi count basso | MAC randomization | Normale, integrare con CAM |
| BLE non rileva | Batteria beacon scarica | Sostituzione |

---

## Fonte
`JarvisNEXT/knowledge-base/05_TECHNICAL/sensoristica.md`, `01_NextDifferent_Azienda_Overview_v1.0.docx`
