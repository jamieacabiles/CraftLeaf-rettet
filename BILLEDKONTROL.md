# Billedkontrol – CraftLeaf

Kontrolleret 10. oktober 2026 mod [Figma-designets otte frames](https://www.figma.com/design/5Em2m7nvDqFztg7bqYeSVq/Temaopgave-2?node-id=67-1055).

Alle billedstier i de fire HTML-filer er opdateret. CSS og JavaScript er også gennemgået: de indeholder ingen billedstier, som skulle ændres. CSS-beskæringen af desktopopskriften til Crafting Table og den mobile Iron pickaxe er rettet efter Figma. Mobile huskortnavne og relevante alt-tekster er rettet, så de passer til billederne.

## Browserkontrol

| Side | Billedreferencer | Desktop 1440 × 1000 | Mobil 390 × 844 |
|---|---:|---|---|
| index.html | 54 | Alle indlæst | Alle indlæst |
| husinspiration.html | 44 | Alle indlæst | Alle indlæst |
| byggeguide.html | 37 | Alle indlæst | Alle indlæst |
| materialeguide.html | 27 | Alle indlæst | Alle indlæst |

Alle otte visninger er gennemgået visuelt som skærmbilleder af hele siden. Ingen manglende billeder eller vandret sideoverløb ved de testede bredder. De fem synlige desktopkarruseller er testet frem og tilbage; billederne i begge paneler indlæses korrekt. Der er ingen referencer til de gamle nummererede billedfilnavne. JavaScript-syntaks er kontrolleret med `node --check`.

## Billedmatch

Figma-kilderne til huskort, biomekort, byggetrin, materialeliste, inventory, craftingfelt og opskrifter er sammenlignet med de lokale billeder. Matchene nedenfor er bekræftet ved identiske billedpixels eller kildehashes. Logo og mobilikoner er genkendt visuelt som de nye lokale versioner; de har en lidt anden indramning/baggrund end Figma-kilderne.

| Placering | Ny lokal fil |
|---|---|
| Forsidebanner, desktop | baggrund 2.png |
| Husinspirationbanner, desktop | baggrund 1.png |
| Husinspirationbanner, mobil | baggrund 5.png |
| Biome tæt på hav/vand | BIOME TÆT PÅ VAND.2.png |
| Biome efterår / Willow Manor | HUSKORT 7.png |
| Biome bjerg / Willow Cottage | HUSKORT 1.png |
| Biome sne | BIOME SNE.png |
| Tidewood, hero og videopladsens miniature | HUSKORT 9 .png |
| Forest Haven | HUSKORT 3.png |
| Amber Loft | HUSKORT 6.png |
| Pinecrest | HUSKORT 4.png |
| Dune Retreat | HUSKORT 5.png |
| Woodhouse | HUSKORT 8.png |
| Crafting Table i spillet | CRAFTING TABLE.png |
| Fritlagt Crafting Table | CRAFTING TABLE TP.png |
| Craftingfelt / mobilopskrift | craft crafting table.png |
| Inventory | inventory.png |
| Materialeliste | MATERIALELISTE.png |
| Trin 1 | STEP 1.png |
| Trin 2 | STEP 2.png |
| Trin 3, i rækkefølge | STEP 3.png, STEP 3.1.png, STEP 3.2.png |
| Trin 4 | STEP 4.png |
| Trin 5, i rækkefølge | STEP 5.png, STEP 5.1.png |
| Trin 6, i rækkefølge | STEP 6.1.png, STEP 6.png |
| Trin 7, i rækkefølge | STEP 7.png, BYGGEGUIDE INSPO 2.png |
| Filter Easy | BYGGEGUIDE INSPO 2.png |
| Galleri, i rækkefølge | BYGGEGUIDE INSPO 4.png, HUSKORT 9 .png, BYGGEGUIDE INSPO 3.png, BYGGEGUIDE HOUSE.png |
| Cobblestone stairs-opskrift | MATERIALEKORT COBBLESTONE STAIRS.png |
| Iron pickaxe-opskrift | UDSTYRKORT IRON PICKAXE.png |
| Shears-opskrift | UDSTYRKORT SHEARS.png |

## Gendannet fra Figma

To nødvendige billedkilder fandtes ikke blandt de tilbageførte filer. De præcise originaler fra Figma er gemt lokalt, uden billedændringer:

- `assets/images/baggrund mobil forside.png`: mobilforsidens banner, Figma-node `112:2777`, kildehash `8e050b2a3137b97dd0920a755f61470fafa45a97`.
- `assets/images/MATERIALEKORT CRAFTING TABLE.png`: desktopopskriften, Figma-node `I173:3763;57:959`, kildehash `5e693d1e9cdaafb0ed11c6e97ed0f466f1907c8e`.

Eksisterende layout- og tekstafvigelser uden relation til billedvalgene er bevaret. Kontrollen gælder billedvalg, placering og indlæsning; den er ikke en fuld pixel-for-pixel rekonstruktion af alle layoutdetaljer.
