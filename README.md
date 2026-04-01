# 🇵🇷 Puerto Rico Politician Intelligence Database

> **Private — Internal Intelligence Repository**
> Wikipedia-level reference system for Puerto Rico elected officials.
> Used to power personalized campaign landing pages, AI knowledge bases, outreach strategy, and content creation.

---

## 🗂️ Repository Architecture

```
pr-politician-intelligence-db/
│
├── _SYSTEM/                          # Meta-system: schemas, rubrics, methodology
│   ├── profile-schema.md             # Master template for every politician
│   ├── belief-system-taxonomy.md     # Classification system for political beliefs
│   ├── party-mechanics-guide.md      # How each PR party actually operates
│   ├── buzz-scoring-rubric.md        # How to calculate buzz/heat scores
│   └── data-sources.md              # Where to research every data point
│
├── _PARTIES/                         # Deep party intelligence
│   ├── PNP/                          # Partido Nuevo Progresista
│   │   ├── overview.md               # Full party profile
│   │   ├── belief-system.md          # Ideology, values, positions
│   │   ├── structure.md              # Leadership, internal mechanics
│   │   ├── history.md                # Founding to present
│   │   ├── base-profile.md           # Who votes for them and why
│   │   └── messaging-patterns.md     # How they communicate
│   ├── PPD/                          # Partido Popular Democrático
│   │   ├── overview.md
│   │   ├── belief-system.md
│   │   ├── structure.md
│   │   ├── history.md
│   │   ├── base-profile.md
│   │   └── messaging-patterns.md
│   ├── MVC/                          # Movimiento Victoria Ciudadana
│   │   ├── overview.md
│   │   ├── belief-system.md
│   │   ├── structure.md
│   │   ├── history.md
│   │   ├── base-profile.md
│   │   └── messaging-patterns.md
│   ├── PIP/                          # Partido Independentista Puertorriqueño
│   │   ├── overview.md
│   │   ├── belief-system.md
│   │   ├── structure.md
│   │   ├── history.md
│   │   ├── base-profile.md
│   │   └── messaging-patterns.md
│   └── PD/                           # Proyecto Dignidad
│       ├── overview.md
│       ├── belief-system.md
│       └── base-profile.md
│
├── _DISTRICTS/                       # District & municipality intelligence
│   ├── senatorial-districts/
│   │   ├── distrito-III-arecibo.md   # Senate District III (Arecibo)
│   │   └── ...7 more
│   └── representative-districts/
│       ├── distrito-14.md            # Rep District 14 (Arecibo/Hatillo)
│       └── ...39 more
│
├── representatives/                  # C. de Representantes
│   ├── edgar-robles-rivera/          # Distrito 14
│   │   ├── 00-index.md               # Quick reference card
│   │   ├── 01-biography.md           # Life story, background, education
│   │   ├── 02-political-career.md    # Career timeline, elections, offices
│   │   ├── 03-belief-system.md       # Values, ideology, positions on issues
│   │   ├── 04-legislative-record.md  # Bills, votes, committee work
│   │   ├── 05-district-profile.md    # District demographics, issues, needs
│   │   ├── 06-public-persona.md      # Media presence, tone, brand
│   │   ├── 07-relationships.md       # Allies, rivals, endorsers, network
│   │   ├── 08-vulnerabilities.md     # Political weaknesses, controversies
│   │   ├── 09-campaign-intelligence.md # Electoral data, strategy, donors
│   │   └── 10-landing-page-brief.md  # AI-ready brief for landing page build
│   ├── joel-franqui-atiles/          # Distrito 19
│   ├── mariana-nogales-molinelli/    # Por Acumulación
│   └── [more representatives]/
│
├── senators/                         # Senado de Puerto Rico
│   ├── brenda-perez-soto/            # Distrito Arecibo
│   │   ├── 00-index.md
│   │   ├── 01-biography.md
│   │   ├── 02-political-career.md
│   │   ├── 03-belief-system.md
│   │   ├── 04-legislative-record.md
│   │   ├── 05-district-profile.md
│   │   ├── 06-public-persona.md
│   │   ├── 07-relationships.md
│   │   ├── 08-vulnerabilities.md
│   │   ├── 09-campaign-intelligence.md
│   │   └── 10-landing-page-brief.md
│   ├── thomas-rivera-schatz/
│   ├── carmelo-rios-santiago/
│   ├── jose-vargas-vidot/
│   └── [more senators]/
│
├── mayors/                           # Alcaldes
│   ├── [municipality-name]/
│   │   ├── 00-index.md
│   │   └── [...same 10-file structure]
│   └── ...
│
└── _ISSUES/                          # Issue intelligence (cross-reference)
    ├── agua-y-infraestructura.md     # Water, PRASA, AAA
    ├── economia-y-empleo.md          # Economy, jobs, federal funds
    ├── seguridad.md                  # Crime, police, public safety
    ├── educacion.md                  # Schools, university, UPR
    ├── salud.md                      # Healthcare, hospitals
    ├── energia.md                    # LUMA, electricity crisis
    ├── vivienda.md                   # Housing, homelessness
    ├── estatus-politico.md           # Statehood, Commonwealth, Independence
    └── medio-ambiente.md             # Environment, climate
```

---

## 🧠 How to Use This Database

### To build a landing page for a politician:
1. Open their `00-index.md` for the quick snapshot
2. Pull key achievements from `04-legislative-record.md`
3. Use `03-belief-system.md` to write their issue cards authentically
4. Pull district pain points from `05-district-profile.md`
5. Use `06-public-persona.md` to match their communication style
6. The `10-landing-page-brief.md` is AI-ready — feed it directly to Claude

### To configure an AI voice assistant:
1. Use `03-belief-system.md` + `04-legislative-record.md` for knowledge base
2. Use `06-public-persona.md` for tone configuration
3. Use `05-district-profile.md` for local issue awareness

### To write outreach or pitch content:
1. Use `08-vulnerabilities.md` to find their pain points (diplomatically)
2. Use `09-campaign-intelligence.md` to understand their strategic needs
3. Use `_PARTIES/[party]/messaging-patterns.md` to write in their style

---

## 📊 Coverage Status

| Folder | Politicians | Status |
|--------|-------------|--------|
| representatives/ | 51 total | 3 complete, building |
| senators/ | 27 total | 2 complete, building |
| mayors/ | 78 total | Queued |
| _PARTIES/ | 5 parties | 4 complete |
| _DISTRICTS/ | 48 districts | Building |
| _ISSUES/ | 9 issue areas | Building |

---

*Owner: PR-botsAI | Last updated: April 2026*
