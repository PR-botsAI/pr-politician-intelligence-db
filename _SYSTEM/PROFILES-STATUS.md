# GobiStats – Profile Completion Status
## Updated: 2026-04-13

## EXECUTIVE (2/2) ✅
- [x] Jenniffer González-Colón (Gobernadora, PNP)
- [x] Pablo José Hernández Rivera (Comisionado Residente, PPD)

## SENATE (27/27) ✅
### PNP (19)
- [x] Thomas Rivera Schatz (Presidente)
- [x] Carmelo J. Ríos Santiago (1er Vicepresidente)
- [x] Marissa Jiménez Santoni (2da Vicepresidenta)
- [x] Gregorio Matías Rosario (Portavoz)
- [x] Juan Oscar Morales Rodríguez (Portavoz Alterno)
- [x] Nitza Morán Trinidad
- [x] Migdalia Padilla Alvelo
- [x] Brenda Pérez Soto
- [x] Héctor Gabriel González López
- [x] Karen Michelle Román Rodríguez
- [x] Jeison Rosa Ramos
- [x] Jamie Barlucea Rodríguez
- [x] Wilmer Reyes Berríos
- [x] Rafael Santos Ortiz
- [x] Wanda M. Soto Tolentino
- [x] Luis Daniel Colón La Santa
- [x] Héctor Joaquín Sánchez Álvarez
- [x] Ángel Toledo López
- [x] Roxanna I. Soto Aguilú
### PPD (5)
- [x] Luis Javier Hernández Ortiz (Portavoz)
- [x] Marially González Huertas (Portavoz Alterna)
- [x] José L. Dalmau Santiago
- [x] José A. Santiago Rivera
- [x] Ada M. Álvarez Conde
### PIP (2)
- [x] María De L. Santiago Negrón (Portavoz)
- [x] Adrián González Costa (Portavoz Alterno)
### Independientes (2)
- [x] Joanne M. Rodríguez Veve
- [x] Eliezer Molina Pérez

## REPRESENTATIVES (40/40) ✅
### Presidente
- [x] Carlos Berdiel Torres (Presidente Cámara, PNP, At-Large)
### Distritos 1-36
- [x] D1 – Carlos Bianchi Anglero (PNP)
- [x] D2 – José "Memo" Aponte Dalmau (PPD)
- [x] D3 – Lydia Méndez Silva (PNP)
- [x] D4 – Jesús Santa Ramos (PNP)
- [x] D5 – Ana Irma Rivera Lassen (PIP)
- [x] D6 – Jorge Navarro Suárez (PNP)
- [x] D7 – Pedro Julio Rodríguez (PPD)
- [x] D8 – Nelson DeJesús Colón (PNP)
- [x] D9 – María Milagros Charbonier Laureano (PNP)
- [x] D10 – Ángel Matos García (PPD)
- [x] D11 – Pablo Crespo Hernández (PNP)
- [x] D12 – Lisie Burgos Muñiz (PNP)
- [x] D13 – Óscar Santiago Meléndez (PPD)
- [x] D14 – Edgar Robles Rivera (PNP) ← Arecibo/Hatillo
- [x] D15 – Jimmy González Núñez (PNP)
- [x] D16 – José Bernardo Márquez (PPD)
- [x] D17 – David Huertas Morales (PNP)
- [x] D18 – Iraida González Torres (PNP)
- [x] D19 – José Pérez Cordero (PPD)
- [x] D20 – Melissa Vargas Ferrer (PNP)
- [x] D21 – Manuel Natal Albelo (Independiente)
- [x] D22 – Arnaldo Irizarry Pabón (PNP)
- [x] D23 – Éric Morales Cardona (PNP)
- [x] D24 – Félix Rodríguez Fuentes (PPD)
- [x] D25 – Wanda Ivelisse Serrano (PPD)
- [x] D26 – Víctor Paredes Maisonet (PNP)
- [x] D27 – Rafael Hernández Montañez (PPD, Portavoz)
- [x] D28 – José Torres Cruz (PNP)
- [x] D29 – Carlos Irizarry Pagán (PPD)
- [x] D30 – Aida García Torres (PNP)
- [x] D31 – Noel Torres Rodríguez (PPD)
- [x] D32 – Melinda Romero Donaldson (PNP)
- [x] D33 – José Vargas Vidot (Independiente)
- [x] D34 – Omar Rivera Reyes (PNP)
- [x] D35 – Miriam Santiago Cruz (PPD)
- [x] D36 – Christian Sobrino Vega (PNP)
### At-Large
- [x] Wilmarie González Colón (PNP)
- [x] Luis Raúl Torres Cruz (PPD)
- [x] Carlos Berdiel Torres (PNP, Presidente)

## MAYORS (78/78) ✅
All 78 municipalities covered in mayors/ folder
Source: CEE Certificación de Resultados Finales 2024
https://ww2.ceepur.org/

## GRAND TOTALS
| Branch | Count | Status |
|--------|-------|--------|
| Executive | 2 | ✅ |
| Senate | 27 | ✅ |
| Representatives | 40 | ✅ |
| Mayors | 78 | ✅ |
| **TOTAL** | **147** | **✅** |

## Supabase Sync Verification
After running github-sync, confirm:
```sql
SELECT COUNT(*) FROM politicians; -- Expected: 147
SELECT position, COUNT(*) FROM politicians GROUP BY position;
```

## GitHub Sync Command
```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/github-sync \
  -H 'x-sync-secret: YOUR_SYNC_SECRET'
```
