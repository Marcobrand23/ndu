---
tipo: stato
fonte: documento
confidenza: alta
aggiornato: 2026-05-15
---

# Privacy e GDPR — Next Different

## Quick Reference
> - Privacy by Design: no storage dati identificativi
> - Next Different = Data Processor, Retailer = Data Controller
> - Base giuridica principale: Legittimo Interesse (dati anonimi aggregati)
> - Uptime 99.5%, data breach: notifica entro 72h

---

## 1. Principi Fondamentali

### Privacy by Design
| Principio | Implementazione |
|-----------|-----------------|
| Minimizzazione | Solo dati strettamente necessari |
| Anonimizzazione | Nessun dato identificativo |
| Limitazione storage | No retention dati grezzi |
| Trasparenza | Informativa chiara in-store |

### Dati NON Raccolti
- Immagini/video di persone
- Riconoscimento facciale (identificazione)
- Dati biometrici identificativi
- Informazioni personali dirette
- MAC address in chiaro

### Dati Raccolti (Aggregati)
- Conteggi anonimi (OTS)
- Statistiche demografiche aggregate (fascia età, genere)
- Tempi di permanenza medi
- Flussi di traffico anonimi

---

## 2. Ruoli GDPR

| Ruolo | Soggetto | Responsabilità |
|-------|----------|----------------|
| **Data Controller** | Retailer/Cliente | Decide finalità trattamento |
| **Data Processor** | Next Different | Tratta dati per conto del Controller |
| **Data Subject** | Visitatore store | Persona i cui dati sono trattati |

### Obblighi di Next Different (Processor)
- Trattare dati solo su istruzioni del Controller
- Garantire sicurezza adeguata (ISO 27001)
- Supportare Controller per richieste degli interessati
- Notificare data breach entro 72h
- Cancellare tutti i dati a fine contratto

### Obblighi del Cliente (Controller)
- Definire finalità trattamento
- Garantire base giuridica
- Gestire richieste degli interessati
- Esporre informativa in-store
- Mantenere registro trattamenti (art. 30 GDPR)

---

## 3. Base Giuridica

| Base | Applicabilità | Note |
|------|---------------|------|
| **Legittimo Interesse** | Analytics aggregate | Base principale — dati anonimi |
| **Consenso** | Dati più dettagliati | Richiede opt-in esplicito |
| **Contratto** | Loyalty/App | Se iscrizione utente presente |

### Bilanciamento Legittimo Interesse
```
Interesse Retailer:
  - Ottimizzare layout store
  - Misurare efficacia comunicazione
  - Migliorare customer experience

Diritti Interessato:
  - Dati anonimi/aggregati
  - No identificazione individuale
  - Informativa chiara
  - Diritto di opposizione

Bilanciamento: OK se dati non identificativi
```

---

## 4. Misure Tecniche

### Edge Processing
| Fase | Dove | Cosa Succede |
|------|------|--------------|
| Cattura | Device | Frame video locale |
| Elaborazione | Device | Detection + estrazione features |
| Anonimizzazione | Device | Aggregazione, rimozione PII |
| Cancellazione | Device | Frame eliminato in <1s |
| Trasmissione | Cloud | Solo dati aggregati su HTTPS |

### Sicurezza Dati
| Misura | Dettaglio |
|--------|-----------|
| Encryption in Transit | TLS 1.3 |
| Encryption at Rest | AES-256 |
| Access Control | RBAC + MFA |
| Audit Log | Tracciamento tutti gli accessi |
| Data Isolation | Multi-tenant segregation |

### Pseudonimizzazione WiFi
```
MAC Address → SHA-256 Hash → Aggregazione → Analytics
(originale)   (irreversibile)  (statistiche)  (report)
```

---

## 5. Informativa In-Store

### Elementi Obbligatori
| Elemento | Contenuto |
|----------|-----------|
| Titolare | Nome e contatti del Controller |
| Finalità | Scopo raccolta dati |
| Base giuridica | Legittimo interesse/consenso |
| Dati trattati | Categorie di dati |
| Retention | Periodo di conservazione |
| Diritti | Come esercitarli |

### Template Cartello Sintetico
```
INFORMATIVA PRIVACY

Questo punto vendita utilizza sistemi di misurazione
anonimi per analizzare i flussi di visitatori.

NON vengono raccolti dati personali identificativi.
NON viene effettuato riconoscimento facciale.

Titolare: [Nome Retailer]
Info: [URL privacy policy]
```

### Requisiti Posizionamento
- Ingressi principali
- Altezza leggibile: 160-180cm
- Caratteri min: 4mm
- Contrasto adeguato

---

## 6. Diritti degli Interessati

| Diritto | Applicabilità | Note |
|---------|---------------|------|
| Informazione | Sì | Informativa disponibile in-store |
| Accesso | Limitato | Dati anonimi, non identificabili |
| Rettifica | N/A | No dati personali stored |
| Cancellazione | N/A | No dati personali stored |
| Opposizione | Sì | Possibile non entrare nell'area |
| Portabilità | N/A | No dati personali |

### Flusso Gestione Richieste
1. Richiesta al Controller (Retailer)
2. Controller verifica identità richiedente
3. Controller coinvolge Next Different (Processor) se necessario
4. Risposta entro 30 giorni

---

## 7. Data Breach

### Procedura Notifica
| Fase | Tempo | Azione |
|------|-------|--------|
| Rilevamento | T+0 | Identificazione incident |
| Valutazione | T+24h | Analisi impatto |
| Notifica Processor→Controller | T+48h | Comunicazione formale |
| Notifica Controller→Autorità | T+72h | Se rischio per interessati |
| Notifica Controller→Interessati | ASAP | Se rischio elevato |

### Contenuto Notifica
- Natura della violazione
- Categorie dati coinvolti
- Numero interessati (stima)
- Conseguenze probabili
- Misure adottate e proposte

---

## 8. Retention Policy

| Tipo Dato | Retention | Motivazione |
|-----------|-----------|-------------|
| Dati aggregati analytics | 24 mesi | Trend analysis |
| Log tecnici | 12 mesi | Troubleshooting |
| Backup | 90 giorni | Disaster recovery |
| Dati grezzi (frame video) | 0 giorni | Mai conservati |

### Fine Contratto
- Export dati Controller su richiesta
- Cancellazione completa entro 30 giorni
- Certificazione di cancellazione su richiesta

---

## 9. Documentazione Contrattuale

| Documento | Responsabile | Contenuto |
|-----------|--------------|-----------|
| **DPA** | Entrambi | Data Processing Agreement |
| **Privacy Policy** | Controller | Informativa completa |
| **Registro Trattamenti** | Controller | Art. 30 GDPR |
| **DPIA** | Controller | Se alto rischio |
| **Misure Sicurezza** | Processor | Allegato tecnico |

---

## 10. FAQ Privacy (Pronte per Cliente)

**"Fate riconoscimento facciale?"**
No. I sistemi rilevano la PRESENZA di persone, non la loro IDENTITÀ. Non vengono mai memorizzate immagini o dati biometrici.

**"I dati sono anonimi?"**
Sì. Tutti i dati trasmessi al cloud sono aggregati e anonimi. Non è possibile risalire a singoli individui.

**"Dove vengono elaborati i dati?"**
L'elaborazione avviene localmente (edge processing) sul dispositivo. Solo dati aggregati vengono inviati al cloud su server in UE.

**"Come posso oppormi?"**
Il trattamento riguarda dati anonimi aggregati. È possibile evitare il trattamento non entrando nell'area monitorata (segnalata con informativa).

---

## Fonte
`JarvisNEXT/knowledge-base/05_TECHNICAL/privacy-gdpr.md`, `01_NextDifferent_Azienda_Overview_v1.0.docx`, `RFP_QA_Library.xlsx`
