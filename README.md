# 🇵🇷 Puerto Rico Politician Intelligence Database

> **Private — Internal Intelligence Repository**
> Wikipedia-level reference system for Puerto Rico elected officials.
> Used to power personalized campaign landing pages, AI knowledge bases, outreach strategy, and content creation.

---

## 📊 Coverage Status (Full Build — April 2026)

| Folder | Content | Status |
|--------|---------|--------|
| `_SYSTEM/` | Profile schema, belief taxonomy, data sources | ✅ Complete |
| `_PARTIES/PNP/` | Overview, belief system, structure, history, base, messaging | ✅ Complete |
| `_PARTIES/PPD/` | Overview, belief system, structure, history, base, messaging | ✅ Complete |
| `_PARTIES/MVC/` | Overview, belief system, structure, history, base, messaging | ✅ Complete |
| `_PARTIES/PIP/` | Overview, belief system, structure, history, base, messaging | ✅ Complete |
| `_PARTIES/PD/` | Overview, belief system, base | ✅ Complete |
| `representatives/edgar-robles-rivera/` | Files 00–06 + 10 | ✅ Deep profile |
| `representatives/mariana-nogales-molinelli/` | 00-index, 03-belief | 🟡 Expanding |
| `representatives/joel-franqui-atiles/` | 00-index, 03-belief, 10-brief | ✅ Tier 1 done |
| `representatives/jorge-rivera-segarra/` | 00-index, 03-belief | 🟡 Expanding |
| `representatives/lisie-burgos-muniz/` | 00-index | 🔵 Queued |
| `representatives/jose-quiquito-melendez/` | 00-index | 🔵 Queued |
| `senators/brenda-perez-soto/` | 00-index, 03-belief | 🟡 Expanding |
| `senators/thomas-rivera-schatz/` | 00-index, 03-belief | ✅ Key profile done |
| `senators/jose-vargas-vidot/` | 00-index, 03-belief | ✅ Key profile done |
| `senators/carmelo-rios-santiago/` | 00-index | 🔵 Queued |
| `senators/juan-zaragoza-gomez/` | 00-index | 🔵 Queued |
| `senators/ada-garcia-montes/` | 00-index | 🔵 Queued |
| `mayors/san-juan/` | 00-index (Miguel Romero) | ✅ Done |
| `mayors/arecibo/` | 00-index | ✅ Done |
| `mayors/hatillo/` | 00-index | ✅ Done |
| `mayors/ponce/` | 00-index | ✅ Done |
| `mayors/bayamon/` | 00-index | ✅ Done |
| `mayors/carolina/` | 00-index | ✅ Done |
| `mayors/mayaguez/` | 00-index | ✅ Done |
| `mayors/morovis/` | 00-index | ✅ Done |
| `_DISTRICTS/senatorial/` | All 8 districts (I–VIII) | ✅ Complete |
| `_DISTRICTS/representative/` | Dist 14, 15, 19 + template | ✅ Key districts done |
| `_ISSUES/agua-y-infraestructura` | Full deep dive | ✅ Complete |
| `_ISSUES/economia-y-empleo` | Full deep dive | ✅ Complete |
| `_ISSUES/seguridad` | Full deep dive | ✅ Complete |
| `_ISSUES/educacion` | Full deep dive | ✅ Complete |
| `_ISSUES/salud` | Full deep dive | ✅ Complete |
| `_ISSUES/energia` | Full deep dive | ✅ Complete |
| `_ISSUES/vivienda` | Full deep dive | ✅ Complete |
| `_ISSUES/estatus-politico` | Full deep dive | ✅ Complete |
| `_ISSUES/medio-ambiente` | Full deep dive | ✅ Complete |

---

## 🗂️ Repository Architecture

```
pr-politician-intelligence-db/
│
├── _SYSTEM/                          # Meta-system: schemas, rubrics, methodology
│   ├── profile-schema.md             # Master 10-file template for every politician
│   ├── belief-system-taxonomy.md     # 5-dimension classification system
│   └── data-sources.md              # Every source: SUTRA, CEE, NotiCel, etc.
│
├── _PARTIES/                         # Deep party intelligence — all 5 parties
│   ├── PNP/                          # 6 files: overview, belief, structure, history, base, messaging
│   ├── PPD/                          # 6 files
│   ├── MVC/                          # 6 files
│   ├── PIP/                          # 6 files
│   └── PD/                           # 3 files
│
├── _DISTRICTS/                       # District intelligence
│   ├── senatorial-districts/         # All 8 senatorial districts
│   └── representative-districts/     # Key districts + template for all 40
│
├── representatives/                  # Each rep gets their own folder
│   ├── edgar-robles-rivera/          # ⭐ PRIORITY 1 — Dist 14 (Arecibo/Hatillo/PNP)
│   ├── mariana-nogales-molinelli/    # ⭐ PRIORITY 2 — Acumulación (PIP/MVC)
│   ├── joel-franqui-atiles/          # ⭐ PRIORITY 3 — Dist 19 (Hatillo/Camuy/PPD)
│   └── [+ 3 more indexed]
│
├── senators/                         # Each senator gets their own folder
│   ├── brenda-perez-soto/            # ⭐ PRIORITY 1 — Dist III Arecibo (PNP)
│   ├── thomas-rivera-schatz/         # Senate President (PNP)
│   ├── jose-vargas-vidot/            # MVC flagship senator
│   └── [+ 3 more indexed]
│
├── mayors/                           # 8 major municipalities profiled
│   ├── san-juan/                     # Capital — Elite tier target
│   ├── arecibo/                      # OUR HOME MARKET — Priority 1
│   ├── hatillo/                      # Norte region
│   ├── ponce/                        # Second city
│   ├── bayamon/                      # Largest suburban market
│   ├── carolina/                     # Airport corridor
│   ├── mayaguez/                     # Western hub
│   └── morovis/                      # Interior Norte
│
└── _ISSUES/                          # 9 complete issue intelligence files
    ├── agua-y-infraestructura.md     # PRASA/AAA crisis deep dive
    ├── economia-y-empleo.md          # Economic crisis, Act 60, PROMESA
    ├── seguridad.md                  # Crime, police reform
    ├── educacion.md                  # Schools, UPR, vouchers
    ├── salud.md                      # Healthcare, brain drain, Medicaid
    ├── energia.md                    # LUMA, grid crisis, renewables
    ├── vivienda.md                   # Housing, gentrification, recovery
    ├── estatus-politico.md           # Statehood/ELA/Independence full analysis
    └── medio-ambiente.md             # Climate, environment, Camuy Caves
```

---

## 🧠 How to Use This Database

### To build a landing page for a politician:
1. Open their `00-index.md` for the quick snapshot
2. Pull key achievements from `04-legislative-record.md`
3. Use `03-belief-system.md` to write their issue cards authentically
4. Pull district pain points from `05-district-profile.md`
5. Use `06-public-persona.md` to match their communication style
6. Feed `10-landing-page-brief.md` directly to Claude — it's AI-ready

### To configure an AI voice assistant:
1. Use `03-belief-system.md` + `04-legislative-record.md` for knowledge base
2. Use `06-public-persona.md` for tone/voice configuration
3. Use `05-district-profile.md` for local issue awareness
4. Use `_ISSUES/[issue].md` for deep topic knowledge

### To write outreach or pitch content:
1. Use `08-vulnerabilities.md` for their pain points
2. Use `09-campaign-intelligence.md` for strategic needs
3. Use `_PARTIES/[party]/messaging-patterns.md` to write in their style
4. Cross-reference `_DISTRICTS/` for local specificity

### To add a new politician:
1. Copy `_SYSTEM/profile-schema.md` template
2. Create folder: `representatives/[firstname-lastname]/`
3. Create 10 files using the schema
4. Cross-reference `_PARTIES/`, `_DISTRICTS/`, and `_ISSUES/` files

---

## ⭐ Priority Targets (Outreach Order)

| # | Name | Role | Party | File |
|---|------|------|-------|------|
| 1 | Edgar Robles Rivera | Rep Dist 14 | PNP | representatives/edgar-robles-rivera/ |
| 2 | Brenda Pérez Soto | Senator Dist III | PNP | senators/brenda-perez-soto/ |
| 3 | Joel Franqui Atiles | Rep Dist 19 | PPD | representatives/joel-franqui-atiles/ |
| 4 | Mariana Nogales Molinelli | Rep Acumulación | PIP/MVC | representatives/mariana-nogales-molinelli/ |
| 5 | José Vargas Vidot | Senator Acumulación | MVC | senators/jose-vargas-vidot/ |
| 6 | Thomas Rivera Schatz | Senate President | PNP | senators/thomas-rivera-schatz/ |
| 7 | Arecibo Mayor | Municipality | TBD | mayors/arecibo/ |
| 8 | Hatillo Mayor | Municipality | TBD | mayors/hatillo/ |

---

*Owner: PR-botsAI | Built: April 2026 | Private Repository*
