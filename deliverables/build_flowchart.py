#!/usr/bin/env python3
"""Schema visivo flusso discorso - Marco Brandstetter - Game On Padova 29/05/2026
Una pagina A4 portrait, leggibile a colpo d'occhio per memorizzare."""

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm

OUT = "/Users/marcobrand/PROGETTI_CLAUDECODE/ndu/deliverables/Schema_Visivo_MarcoBrandstetter_GameOn.pdf"

NAVY = HexColor("#1B1464")
BLUE = HexColor("#4C86FF")
LIGHT_BLUE = HexColor("#E8EFFE")
RED = HexColor("#D7263D")
GREEN = HexColor("#1B998B")
ORANGE = HexColor("#F46036")
GRAY = HexColor("#6E6E6E")
LIGHT_GRAY = HexColor("#F2F2F2")

W, H = A4
c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("Schema Visivo - Marco Brandstetter - Game On Padova")

# ===== Helpers =====
def box(x, y, w, h, fill, stroke=None, radius=4):
    c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(1.2)
    else:
        c.setStrokeColor(fill)
        c.setLineWidth(0)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1 if stroke else 0)

def text(x, y, txt, size=9, color=black, font='Helvetica', center=False):
    c.setFillColor(color)
    c.setFont(font, size)
    if center:
        c.drawCentredString(x, y, txt)
    else:
        c.drawString(x, y, txt)

def arrow(x1, y1, x2, y2, color=NAVY, width=2):
    c.setStrokeColor(color)
    c.setFillColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)
    # arrowhead
    import math
    angle = math.atan2(y2-y1, x2-x1)
    ah = 4*mm
    c.line(x2, y2, x2 - ah*math.cos(angle-math.pi/6), y2 - ah*math.sin(angle-math.pi/6))
    c.line(x2, y2, x2 - ah*math.cos(angle+math.pi/6), y2 - ah*math.sin(angle+math.pi/6))

def vline_arrow(x, y_top, y_bot, color=NAVY):
    arrow(x, y_top, x, y_bot, color=color, width=2.2)

# ===== Header =====
y = H - 14*mm
box(10*mm, y-2*mm, W-20*mm, 12*mm, NAVY, radius=2)
text(W/2, y+3*mm, "SCHEMA VISIVO DISCORSO - PANEL EVENTI",
     size=13, color=white, font='Helvetica-Bold', center=True)
text(W/2, y-1*mm, "Marco Brandstetter  -  Game On Padova  -  29 mag 2026  -  ~11:55  -  ~2'55\"",
     size=8.5, color=LIGHT_BLUE, center=True)

# ===== STEP 0 - DOMANDA =====
y0 = H - 32*mm
box(15*mm, y0-12*mm, W-30*mm, 14*mm, LIGHT_GRAY, stroke=GRAY, radius=4)
text(20*mm, y0-1*mm, "[ DOMANDA - Scarcelli ]", size=8, color=GRAY, font='Helvetica-Bold')
text(20*mm, y0-6*mm, "Conversational Signage: che IMPATTO sul FUTURO delle sponsorship?",
     size=9, color=black, font='Helvetica-Oblique')
text(20*mm, y0-10*mm, "Possibilita di MISURARE meglio l'engagement live?",
     size=9, color=black, font='Helvetica-Oblique')
# 3 chiavi
text(W-65*mm, y0-6*mm, "IMPATTO  -  FUTURO  -  MISURARE",
     size=8, color=RED, font='Helvetica-Bold')

vline_arrow(W/2, y0-14*mm, y0-20*mm)

# ===== STEP 1 - GAP =====
y1 = y0 - 22*mm
box(15*mm, y1-22*mm, W-30*mm, 22*mm, white, stroke=NAVY, radius=4)
# tab title
box(15*mm, y1-5*mm, 35*mm, 5*mm, NAVY, radius=2)
text(17*mm, y1-3.7*mm, "1 - IL GAP  - 25\"", size=8, color=white, font='Helvetica-Bold')

text(20*mm, y1-10*mm, "PROXY storiche:", size=8.5, color=NAVY, font='Helvetica-Bold')
text(50*mm, y1-10*mm, "impression TV  -  share of voice  -  ricordo spontaneo",
     size=8.5, color=black)
text(20*mm, y1-14.5*mm, "dicono:", size=8.5, color=GRAY)
text(36*mm, y1-14.5*mm, "\"quanti POTEVANO vedere il logo\"", size=8.5, color=black, font='Helvetica-Oblique')
text(20*mm, y1-18.5*mm, "NON dicono:", size=8.5, color=RED, font='Helvetica-Bold')
text(42*mm, y1-18.5*mm, "chi ha guardato  -  chi era  -  cosa ha fatto dopo",
     size=8.5, color=black, font='Helvetica-Oblique')

# arrow + claim
vline_arrow(W/2, y1-23*mm, y1-29*mm, color=BLUE)
box(30*mm, y1-35*mm, W-60*mm, 6*mm, LIGHT_BLUE, stroke=BLUE, radius=3)
text(W/2, y1-32.5*mm, "CONV. SIGNAGE colma il GAP -> logiche FULL-FUNNEL nello stadio",
     size=9, color=NAVY, font='Helvetica-Bold', center=True)

vline_arrow(W/2, y1-36*mm, y1-42*mm)

# ===== STEP 2 - THE PEAK =====
y2 = y1 - 44*mm
box(15*mm, y2-42*mm, W-30*mm, 42*mm, white, stroke=NAVY, radius=4)
box(15*mm, y2-5*mm, 60*mm, 5*mm, NAVY, radius=2)
text(17*mm, y2-3.7*mm, "2 - CASE THE PEAK  - 60\"", size=8, color=white, font='Helvetica-Bold')

text(20*mm, y2-10*mm, "Coca-Cola  -  Milano Cortina 2026  -  38 giorni  -  3 location:",
     size=9, color=NAVY, font='Helvetica-Bold')
text(20*mm, y2-14*mm, "MILANO  -  CORTINA  -  LIVIGNO",
     size=9, color=black, font='Helvetica-Bold')

# 4 numeri box grid
nx = 20*mm
ny = y2-18*mm
nw = (W-40*mm)/2
nh = 9*mm
nums = [
    ("2,06 M", "Opportunity To See", NAVY),
    ("1,53 M", "Engaged Views (>3 sec)", BLUE),
    ("118.500", "Accessi fisici esperienziali", GREEN),
    ("82% / 26\"", "Attention / tempo medio (MI)", ORANGE),
]
for i, (n, l, col) in enumerate(nums):
    row = i // 2
    col_i = i % 2
    bx = nx + col_i*nw
    by = ny - row*(nh+1*mm) - nh
    box(bx, by, nw-2*mm, nh, col, radius=2)
    text(bx+3*mm, by+5*mm, n, size=11, color=white, font='Helvetica-Bold')
    text(bx+3*mm, by+1.5*mm, l, size=7.5, color=white)

# cluster line
cy = ny - 2*(nh+1*mm) - 4*mm
text(20*mm, cy, "4 CLUSTER profilati:", size=8.5, color=NAVY, font='Helvetica-Bold')
text(53*mm, cy, "Shop.Seekers 34%  -  Prof.Networkers 32%  -  Outdoor 18%  -  Urban 16%",
     size=8.5, color=black)
text(20*mm, cy-4*mm, "uso:", size=8, color=GRAY)
text(28*mm, cy-4*mm, "RETARGETING sponsor  +  intelligence per prossima edizione",
     size=8.5, color=black, font='Helvetica-Oblique')

vline_arrow(W/2, y2-43*mm, y2-49*mm)

# ===== STEP 3 - TRIPLICE IMPATTO =====
y3 = y2 - 51*mm
box(15*mm, y3-30*mm, W-30*mm, 30*mm, white, stroke=NAVY, radius=4)
box(15*mm, y3-5*mm, 60*mm, 5*mm, NAVY, radius=2)
text(17*mm, y3-3.7*mm, "3 - TRIPLICE IMPATTO  - 50\"", size=8, color=white, font='Helvetica-Bold')

# 3 colonne
col_w = (W-40*mm)/3 - 2*mm
col_y = y3 - 27*mm
col_h = 19*mm
cols = [
    ("1  PAGA", "flat-fee", "->", "PAY-FOR-PERFORMANCE", "KPI = canali digitali", BLUE),
    ("2  OTTIMIZZA", "in corsa, durante", "82% -> 86%", "21\" -> 28\"", "videoshow riorientato", GREEN),
    ("3  RICONNETTI", "NON finisce al", "fischio finale", "RETARGETING", "mobile / social / digital", ORANGE),
]
for i, (title, l1, l2, l3, l4, col) in enumerate(cols):
    bx = 20*mm + i*(col_w+3*mm)
    box(bx, col_y, col_w, col_h, LIGHT_BLUE, stroke=col, radius=3)
    box(bx, col_y+col_h-5*mm, col_w, 5*mm, col, radius=2)
    text(bx+col_w/2, col_y+col_h-3.7*mm, title, size=8.5, color=white,
         font='Helvetica-Bold', center=True)
    text(bx+col_w/2, col_y+col_h-9*mm, l1, size=8, color=GRAY, center=True)
    text(bx+col_w/2, col_y+col_h-12.5*mm, l2, size=8, color=black,
         font='Helvetica-Bold', center=True)
    text(bx+col_w/2, col_y+col_h-15.5*mm, l3, size=8.5, color=col,
         font='Helvetica-Bold', center=True)
    text(bx+col_w/2, col_y+col_h-18*mm, l4, size=7.5, color=black, center=True)

vline_arrow(W/2, y3-31*mm, y3-37*mm)

# ===== STEP 4 - CHIUSURA =====
y4 = y3 - 39*mm
box(15*mm, y4-18*mm, W-30*mm, 18*mm, NAVY, radius=4)
text(20*mm, y4-4*mm, "4 - CHIUSURA  - 20\"", size=8, color=LIGHT_BLUE, font='Helvetica-Bold')
text(W/2, y4-9*mm, "evento sportivo = CANALE MEDIA misurabile",
     size=11, color=white, font='Helvetica-Bold', center=True)
text(W/2, y4-13*mm, "chi possiede l'evento -> ASSET CLASS con KPI come il digitale",
     size=9, color=LIGHT_BLUE, center=True)
# parola finale
box(W/2-25*mm, y4-17.5*mm, 50*mm, 4.5*mm, RED, radius=2)
text(W/2, y4-16.5*mm, "sponsorship -> ADULTA", size=9, color=white,
     font='Helvetica-Bold', center=True)

# ===== Footer mnemonic =====
fy = 14*mm
text(W/2, fy+4*mm, "RICORDA LA CATENA:", size=8, color=GRAY,
     font='Helvetica-Bold', center=True)
text(W/2, fy, "GAP  ->  THE PEAK (38gg, 3loc, 4 numeri, 4 cluster)  ->  PAGA / OTTIMIZZA / RICONNETTI  ->  ADULTA",
     size=9, color=NAVY, font='Helvetica-Bold', center=True)

c.showPage()
c.save()
print(f"OK: {OUT}")
