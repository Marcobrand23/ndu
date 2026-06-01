#!/usr/bin/env python3
"""Cue card A5 - Marco Brandstetter - Panel Eventi Game On Padova 29/05/2026"""

from reportlab.lib.pagesizes import A5
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

OUT = "/Users/marcobrand/PROGETTI_CLAUDECODE/ndu/deliverables/CueCard_MarcoBrandstetter_GameOn_29mag2026.pdf"

NAVY = HexColor("#1B1464")
BLUE = HexColor("#4C86FF")
LIGHT = HexColor("#E8EFFE")
RED = HexColor("#D7263D")
GREEN = HexColor("#1B998B")
GRAY = HexColor("#4A4A4A")

doc = SimpleDocTemplate(
    OUT, pagesize=A5,
    leftMargin=10*mm, rightMargin=10*mm,
    topMargin=10*mm, bottomMargin=12*mm,
    title="Cue Card - Marco Brandstetter - Game On Padova"
)

styles = getSampleStyleSheet()

H1 = ParagraphStyle('H1', parent=styles['Heading1'], fontSize=13, textColor=NAVY,
                   spaceAfter=2, spaceBefore=0, leading=15, alignment=TA_LEFT)
H2 = ParagraphStyle('H2', parent=styles['Heading2'], fontSize=10, textColor=white,
                   spaceAfter=4, spaceBefore=2, leading=12, backColor=NAVY,
                   borderPadding=4, alignment=TA_LEFT)
H3 = ParagraphStyle('H3', parent=styles['Heading3'], fontSize=9, textColor=BLUE,
                   spaceAfter=2, spaceBefore=4, leading=11)
BODY = ParagraphStyle('Body', parent=styles['BodyText'], fontSize=8.5, textColor=black,
                     leading=11, spaceAfter=3, alignment=TA_LEFT)
QUOTE = ParagraphStyle('Quote', parent=styles['BodyText'], fontSize=8.5, textColor=black,
                      leading=11, leftIndent=6, rightIndent=4, spaceAfter=4,
                      fontName='Helvetica-Oblique', borderColor=BLUE,
                      borderPadding=4, backColor=LIGHT)
MEMO = ParagraphStyle('Memo', parent=styles['BodyText'], fontSize=8, textColor=RED,
                     leading=10, spaceAfter=3, fontName='Helvetica-Bold')
SMALL = ParagraphStyle('Small', parent=styles['BodyText'], fontSize=7.5, textColor=GRAY,
                      leading=9, spaceAfter=2)
TOTAL = ParagraphStyle('Total', parent=styles['BodyText'], fontSize=10, textColor=NAVY,
                      leading=12, spaceAfter=2, fontName='Helvetica-Bold',
                      alignment=TA_CENTER)

story = []

# --- PAGINA 1 ---
story.append(Paragraph("CUE CARD &middot; Panel Eventi", H1))
story.append(Paragraph("Marco Brandstetter &middot; Game On Padova &middot; 29 mag 2026 &middot; ~11:55", SMALL))
story.append(Spacer(1, 4))

story.append(Paragraph("DOMANDA (Scarcelli)", H2))
story.append(Paragraph(
    '"La vostra soluzione tecnologia proprietaria, il <b>conversational signage</b> '
    'porta negli eventi fisici capacit&agrave; tipiche del digitale, soprattutto in termini '
    'di interazione e raccolta dati. Che impatto pu&ograve; avere questo approccio sul '
    '<b>futuro delle sponsorship sportive</b> e sulla possibilit&agrave; di <b>misurare</b> '
    'in modo pi&ugrave; preciso l\'engagement live?"', QUOTE))
story.append(Paragraph("&#x1F511; Chiavi: <b>IMPATTO &middot; FUTURO &middot; MISURARE</b>", MEMO))
story.append(Spacer(1, 4))

# Blocco 1
story.append(Paragraph("BLOCCO 1 &middot; IL GAP &middot; ~25\"", H2))
story.append(Paragraph("Trigger: <i>proxy &rarr; gap &rarr; colma</i>", MEMO))
story.append(Paragraph(
    '"Storicamente la sponsorship sportiva &egrave; stata misurata con proxy: '
    '<b>impression TV, share of voice, ricordo spontaneo</b>. Sono metriche che dicono '
    '<i>quante persone hanno potuto vedere il logo</i>, non <i>quante hanno '
    'effettivamente prestato attenzione, chi erano e cosa hanno fatto dopo</i>. '
    'Il Conversational Signage <b>colma esattamente questo gap</b>: porta nello stadio, '
    'nella livesite, nel village dell\'evento le stesse logiche <b>full-funnel</b> '
    'che uno sponsor usa gi&agrave; sui propri canali digitali."', QUOTE))

story.append(PageBreak())

# --- PAGINA 2 - BLOCCO 2 ---
story.append(Paragraph("BLOCCO 2 &middot; THE PEAK &middot; ~60\"", H2))
story.append(Paragraph("Trigger: <i>38gg &middot; 3 loc &middot; 4 numeri &middot; 4 cluster</i>", MEMO))
story.append(Paragraph(
    '"Lo abbiamo appena visto in azione su <b>THE PEAK</b>, l\'attivazione '
    '<b>Coca-Cola</b> alle Olimpiadi di Milano Cortina 2026 nelle tre location di '
    '<b>Milano, Cortina e Livigno</b>. In <b>38 giorni</b> la tecnologia ha misurato:"',
    QUOTE))

# Tabella numeri chiave
data = [
    ['2,06 M', 'Opportunity To See'],
    ['1,53 M', 'Engaged Views (>3 sec)'],
    ['118.500', 'Accessi fisici aree esperienziali'],
    ['82% / 26"', 'Attention rate / tempo medio (Milano)'],
]
t = Table(data, colWidths=[28*mm, 80*mm])
t.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), NAVY),
    ('TEXTCOLOR', (0,0), (0,-1), white),
    ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,-1), 9),
    ('ALIGN', (0,0), (0,-1), 'CENTER'),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BACKGROUND', (1,0), (1,-1), LIGHT),
    ('TEXTCOLOR', (1,0), (1,-1), black),
    ('LEFTPADDING', (1,0), (1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ('GRID', (0,0), (-1,-1), 0.5, white),
]))
story.append(t)
story.append(Spacer(1, 4))

story.append(Paragraph(
    '"Solo a Milano l\'<b>attention rate &egrave; stato dell\'82%</b> con '
    '<b>26 secondi</b> di tempo medio di attenzione &mdash; numeri che nessuna metrica '
    'tradizionale di sponsorship riesce a catturare. E i visitatori non sono restati '
    'anonimi: incrociando dati socio-demografici con interessi online e offline abbiamo '
    'profilato cluster precisi &mdash; <b>Shopping Seekers (34%), Professional Networkers '
    '(32%), Outdoor Enthusiasts (18%), Urban Connectors (16%)</b> &mdash; utili sia allo '
    'sponsor per il <b>retargeting post-evento</b> sia all\'organizzatore per la '
    '<b>prossima edizione</b>."', QUOTE))
story.append(Paragraph("&#x1F9EE; Check: 34+32+18+16 = 100", MEMO))

story.append(PageBreak())

# --- PAGINA 3 - BLOCCO 3 ---
story.append(Paragraph("BLOCCO 3 &middot; TRIPLICE IMPATTO &middot; ~50\"", H2))
story.append(Paragraph("Trigger: <i>PAGA &middot; OTTIMIZZA &middot; RICONNETTI</i> (1-2-3 dita)", MEMO))
story.append(Paragraph(
    '"L\'impatto sul futuro della sponsorship sportiva &egrave; <b>triplice</b>."', QUOTE))

story.append(Paragraph("1&#xFE0F;&#x20E3; PAGA", H3))
story.append(Paragraph(
    '"<b>Primo</b>: si passa dal modello <b>flat-fee al modello pay-for-performance</b>, '
    'perch&eacute; lo sponsor ha finalmente KPI confrontabili con quelli dei suoi canali '
    'digitali."', QUOTE))

story.append(Paragraph("2&#xFE0F;&#x20E3; OTTIMIZZA", H3))
story.append(Paragraph(
    '"<b>Secondo</b>: l\'attivazione diventa <b>ottimizzabile in corsa</b> &mdash; '
    'su THE PEAK abbiamo spostato gli orari del videoshow durante l\'evento stesso e '
    'l\'attention rate &egrave; salito <b>dall\'82% all\'86%</b>, il content attraction '
    '<b>da 21 a 28 secondi</b>."', QUOTE))

story.append(Paragraph("3&#xFE0F;&#x20E3; RICONNETTI", H3))
story.append(Paragraph(
    '"<b>Terzo</b>: la conversazione <b>non finisce al fischio finale</b>. I profili '
    'rilevati live alimentano campagne di <b>retargeting</b> che riconnettono il brand '
    'con quegli stessi spettatori sui canali mobile, social e digital nelle settimane '
    'successive."', QUOTE))

story.append(PageBreak())

# --- PAGINA 4 - BLOCCO 4 + TIMING + SAFETY ---
story.append(Paragraph("BLOCCO 4 &middot; CHIUSURA &middot; ~20\"", H2))
story.append(Paragraph("Trigger: <i>luogo &rarr; canale &middot; asset class &middot; ADULTA</i>", MEMO))
story.append(Paragraph(
    '"In sintesi: il Conversational Signage trasforma l\'evento sportivo '
    '<b>da \'luogo di esposizione\' a vero e proprio canale media misurabile</b>. '
    'Chi possiede l\'evento &mdash; leghe, federazioni, organizzatori &mdash; possiede '
    'anche un\'<b>asset class con KPI confrontabili al digitale</b>. Ed &egrave; '
    'esattamente questo, secondo noi, il modo in cui la sponsorship sportiva '
    '<b>diventer&agrave; adulta</b> nei prossimi anni."', QUOTE))
story.append(Paragraph("&#x1F3AF; Ultima parola: <b>ADULTA</b> &mdash; chiudi netto.", MEMO))
story.append(Spacer(1, 6))

# Timing
story.append(Paragraph("TIMING", H2))
tdata = [
    ['Blocco', 'Target'],
    ['1 · GAP', '25"'],
    ['2 · THE PEAK', '60"'],
    ['3 · TRIPLICE', '50"'],
    ['4 · CHIUSURA', '20"'],
    ['TOTALE', '~2\'55"'],
]
tt = Table(tdata, colWidths=[60*mm, 30*mm])
tt.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), NAVY),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
    ('FONTNAME', (0,-1), (-1,-1), 'Helvetica-Bold'),
    ('BACKGROUND', (0,-1), (-1,-1), BLUE),
    ('TEXTCOLOR', (0,-1), (-1,-1), white),
    ('FONTSIZE', (0,0), (-1,-1), 9),
    ('ALIGN', (1,0), (1,-1), 'CENTER'),
    ('GRID', (0,0), (-1,-1), 0.4, GRAY),
    ('TOPPADDING', (0,0), (-1,-1), 3),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
]))
story.append(tt)
story.append(Spacer(1, 6))

# Safety
story.append(Paragraph("SE DEVI TAGLIARE", H2))
story.append(Paragraph("&#x2702; Sacrifica i 4 cluster con %: <i>\"4 cluster precisi utili al retargeting\"</i>", BODY))
story.append(Paragraph("&#x2702; Sacrifica 21&rarr;28\" nel blocco 3, tieni solo 82&rarr;86%", BODY))
story.append(Paragraph("&#x1F6AB; <b>MAI tagliare</b>: i 3 numeri grossi (2,06M / 1,53M / 118.500) e la chiusura <b>\"adulta\"</b>", BODY))

doc.build(story)
print(f"OK: {OUT}")
