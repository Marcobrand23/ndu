---
tipo: processo
fonte: documento
confidenza: alta
aggiornato: 2026-05-10
---

# Integrazioni tecniche — NDU

Riferimenti rapidi alle integrazioni multi-tenant **filtrate sul tenant NDU**. La doc completa è in `PERSONALASSISTANT/docs/database.md`.

## Tenant ID

| Sistema | Valore NDU |
|---------|------------|
| DB classifier | `NDU` |
| Account email | `nextdifferent` (`marco@nextdifferent.com`) |
| Pinecone namespace | `nextdifferent-docs` |
| Monday API key | `MONDAY_API_KEY_NEXTDIFFERENT` |
| Google Calendar MCP | `*_event_nextdifferent` |
| Google Drive MCP | account `nextdifferent` |

## Query DB tipiche

```sql
-- Email NDU recenti
SELECT * FROM get_tenant_emails('NDU', 20);
```

## RAG

- **RAG Nextdifferent Search Tool** — ricerca vettoriale su `nextdifferent-docs`
- Indicizzazione documenti via workflow n8n (multi-tenant)

## Workflow n8n rilevanti

(Tutti residenti in PERSONALASSISTANT — multi-tenant, non spostare)
- `Plaud Transcription Processor v2` — match calendari include `Search Cal Nextdifferent`
- `Marco Personal Assistant` — orchestratore, classifica tenant
- `Monday Multi Account API` — query board NDU
