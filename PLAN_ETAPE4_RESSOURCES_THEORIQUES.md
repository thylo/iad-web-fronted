# 📋 PLAN EXÉCUTION ÉTAPE 4: Ressources Théoriques

**Statut:** Prêt pour exécution
**Créé:** 2025-11-18
**Objectif:** Extraire ~20 concepts individuels depuis 4 fichiers sources
**Schéma:** Schéma C (ressources théoriques)

---

## 🎯 ÉTAT ACTUEL & OBJECTIF

### État Initial
- ✅ Étape 1-3 complétées (110 oeuvres + 6 structures narratives)
- ❌ 4 fichiers monolithiques contenant ~20 concepts théoriques
- ❌ Dossiers vides: `/src/content/ressources-theoriques/`
- ❌ Aucune relation oeuvre ↔ concept

### Objectif Final
Créer ~20 fichiers individuels `.mdx` conformes au **Schéma C** dans:
- `formes-interactivite/` (4 fichiers)
- `roles-du-public/` (4 fichiers)
- `interfaces-narratives/` (8 fichiers)
- `types-de-choix/` (3 fichiers)

---

## 📊 CARTOGRAPHIE COMPLÈTE DES 20 CONCEPTS

### A. FORMES D'INTERACTIVITÉ (4 fichiers)

**Source:** `/src/content/docs/ressources/formes-interactivite.mdx` (378 lignes)

```
forme-machine.mdx
├── id: forme-machine
├── title: Interactivité Machine
├── type: forme
├── description: L'utilisateur interagit avec un système informatique
├── examples: [jeu-d-influences, phallaina, lifeline, late-shift, bandersnatch]
├── relatedResources: [forme-sociale, forme-contributive]
├── relatedStructures: []
├── concepts: [système-clos, univers-fini, démiurge, feedback-deterministe]
└── featured: true

forme-sociale.mdx
├── id: forme-sociale
├── title: Interactivité Sociale
├── type: forme
├── description: L'utilisateur interagit avec d'autres humains via le système
├── examples: [] (À identifier)
├── relatedResources: [forme-machine, forme-contributive]
├── relatedStructures: []
├── concepts: [communication, propagation, entremetteur]
└── featured: false

forme-contributive.mdx
├── id: forme-contributive
├── title: Interactivité Contributive
├── type: forme
├── description: L'utilisateur co-crée le contenu
├── examples: [the-johnny-cash-project] (+ autres à identifier)
├── relatedResources: [forme-machine, forme-sociale]
├── relatedStructures: []
├── concepts: [co-création, participation, facilitateur]
└── featured: false

forme-hybride.mdx (OPTIONNEL)
├── id: forme-hybride
├── title: Formes Hybrides
├── type: forme
├── description: Combinaison de plusieurs formes d'interactivité
├── examples: [] (À identifier)
├── relatedResources: [forme-machine, forme-sociale, forme-contributive]
├── relatedStructures: []
├── concepts: [combinaison, multi-interaction]
└── featured: false
```

---

### B. RÔLES DU PUBLIC (4 fichiers)

**Source:** `/src/content/docs/ressources/role-du-public.mdx` (277 lignes)

```
role-fantome.mdx
├── id: role-fantome
├── title: Le public comme Fantôme
├── type: role
├── description: Témoin invisible observant l'action sans pouvoir interagir
├── examples: [weiordie, phallaina, gaza-sderot, one-shared-house]
├── relatedResources: []
├── relatedStructures: [structure-lineaire, structure-elastique]
├── concepts: [témoin-invisible, observation, perspective, passivité-relative]
└── featured: true

role-personnage.mdx
├── id: role-personnage
├── title: Le public comme Personnage
├── type: role
├── description: L'utilisateur incarne un personnage et prend des décisions
├── examples: [jeu-d-influences, lifeline, bandersnatch, the-boat, immortality]
├── relatedResources: []
├── relatedStructures: [structure-embranchements, structure-concentrique]
├── concepts: [incarnation, agence, décision-morale, responsabilité]
└── featured: true

role-divinite.mdx
├── id: role-divinite
├── title: Le public comme Divinité
├── type: role
├── description: L'utilisateur a un contrôle omniscient/omnipotent sur l'univers
├── examples: [] (À identifier - jeux god-like)
├── relatedResources: []
├── relatedStructures: []
├── concepts: [omniscience, omnipotence, contrôle-total, créateur]
└── featured: false

role-soi-meme.mdx
├── id: role-soi-meme
├── title: Le public comme Lui-même
├── type: role
├── description: L'utilisateur reste lui-même (vraie personne) interagissant
├── examples: [] (À identifier - participatory/real-time)
├── relatedResources: []
├── relatedStructures: []
├── concepts: [identité-réelle, non-fiction, participatoire]
└── featured: false
```

---

### C. INTERFACES NARRATIVES (8 fichiers)

**Source:** `/src/content/docs/ressources/interfaces-narratives.mdx` (335 lignes)

```
interface-point-click.mdx
├── id: interface-point-click
├── title: Point-and-Click
├── type: interface
├── description: Choix visuels matérialisés à l'écran, utilisateur clique pour avancer
├── examples: [jeu-d-influences, lifeline, late-shift]
├── relatedResources: [interface-scrollable]
├── relatedStructures: [structure-embranchements]
├── concepts: [choix-matérialisé, menu-driven, pause-narrative, immersion]
└── featured: true

interface-scrollable.mdx
├── id: interface-scrollable
├── title: Scrollable
├── type: interface
├── description: Défiler vertical/horizontal de contenus et d'événements
├── examples: [phallaina, nsa-files-decoded, do-not-track, snow-fall]
├── relatedResources: [interface-point-click]
├── relatedStructures: [structure-lineaire, structure-elastique]
├── concepts: [chorégraphie, contrôle-rythme, geste-naturel]
└── featured: true

interface-timeline.mdx
├── id: interface-timeline
├── title: Timeline
├── type: interface
├── description: Événements présentés chronologiquement, navigation temporelle libre
├── examples: [] (À identifier)
├── relatedResources: [interface-maps]
├── relatedStructures: [structure-parallele, structure-concentrique]
├── concepts: [chronologie, causalité, navigation-temporelle]
└── featured: false

interface-split-screen.mdx
├── id: interface-split-screen
├── title: Split Screen
├── type: interface
├── description: Écran divisé montrant simultanément plusieurs perspectives/récits
├── examples: [] (À identifier)
├── relatedResources: [interface-point-click]
├── relatedStructures: [structure-parallele]
├── concepts: [simultanéité, multi-perspective, comparaison, sync]
└── featured: false

interface-galleries.mdx
├── id: interface-galleries
├── title: Galleries / Grids
├── type: interface
├── description: Présentation en grille ou galerie explorable
├── examples: [] (À identifier)
├── relatedResources: []
├── relatedStructures: [structure-constellation, structure-parallele]
├── concepts: [catalogue, exploration, organisation-spatiale]
└── featured: false

interface-3d.mdx
├── id: interface-3d
├── title: Interface 3D / Environnements
├── type: interface
├── description: Navigation dans un espace 3D immersif
├── examples: [clouds-over-sidra] (+ autres VR)
├── relatedResources: [interface-gestural]
├── relatedStructures: []
├── concepts: [immersion, navigation-spatiale, présence, VR]
└── featured: false

interface-maps.mdx
├── id: interface-maps
├── title: Maps / Navigation Géographique
├── type: interface
├── description: Navigation via carte géographique interactive
├── examples: [riding-the-new-silk-road, welcome-to-pine-point]
├── relatedResources: [interface-timeline]
├── relatedStructures: [structure-parallele, structure-constellation]
├── concepts: [géographie, territoire, navigation-spatiale, cartographie]
└── featured: false

interface-gestural.mdx
├── id: interface-gestural
├── title: Gestural / Tactile
├── type: interface
├── description: Interfaces basées sur gestes naturels ou interactions tactiles
├── examples: [] (À identifier)
├── relatedResources: [interface-3d]
├── relatedStructures: []
├── concepts: [geste, tactile, sensorimotor, natural-interaction]
└── featured: false
```

---

### D. TYPES DE CHOIX (3 fichiers)

**Source:** `/src/content/docs/ressources/types-de-choix.mdx` (231 lignes)

```
choix-exploratoire.mdx
├── id: choix-exploratoire
├── title: Choix Exploratoire
├── type: choix
├── description: Choix permettant de découvrir du contenu sans changer le fil principal
├── examples: [hors-jeu, weiordie, phallaina]
├── relatedResources: [choix-rationnel]
├── relatedStructures: [structure-elastique, structure-parallele]
├── concepts: [découverte, bonus, annexe, faible-impact]
└── featured: true

choix-rationnel.mdx
├── id: choix-rationnel
├── title: Choix Rationnel
├── type: choix
├── description: Choix modifiant réellement le cours de l'histoire
├── examples: [jeu-d-influences, lifeline, bandersnatch, late-shift, the-boat]
├── relatedResources: [choix-exploratoire, faux-choix]
├── relatedStructures: [structure-embranchements]
├── concepts: [conséquence, embranchement-réel, responsabilité, fort-impact]
└── featured: true

faux-choix.mdx
├── id: faux-choix
├── title: Faux Choix
├── type: choix
├── description: Illusion de choix sans vraies conséquences narratives
├── examples: [] (À identifier - pièges intentionnels)
├── relatedResources: [choix-rationnel, choix-exploratoire]
├── relatedStructures: []
├── concepts: [illusion, piège, détection, critique]
└── featured: false
```

---

## 📋 SOURCES DE DONNÉES

### Fichiers Source à Parser

| Fichier | Lignes | Concepts | Status |
|---------|--------|----------|--------|
| `/src/content/docs/ressources/formes-interactivite.mdx` | 378 | 3 formes + hybride | À extraire |
| `/src/content/docs/ressources/role-du-public.mdx` | 277 | 4 rôles | À extraire |
| `/src/content/docs/ressources/interfaces-narratives.mdx` | 335 | 8 interfaces | À extraire |
| `/src/content/docs/ressources/types-de-choix.mdx` | 231 | 3 types | À extraire |

### Oeuvres de Référence (110 fichiers)
Tous les IDs d'oeuvres existent déjà dans `/src/content/oeuvres/`

### Structures Narratives de Référence (6 fichiers)
- structure-lineaire, structure-elastique, structure-concentrique
- structure-parallele, structure-embranchements, structure-constellation

---

## 🔧 SCHÉMA C - TEMPLATE COMPLET

```yaml
---
# BLOC 1 : Identité
id: forme-machine                    # Slug unique kebab-case
title: "Interactivité Machine"       # Titre complet
type: forme                          # "forme" | "role" | "interface" | "choix"

# BLOC 2 : Contenu conceptuel
description: "L'utilisateur interagit avec un système informatique. L'univers narratif est fini et délimité par l'auteur."
definition: |
  La forme machine présente une interaction directe entre l'utilisateur et un système informatique.
  L'univers est fermé et prévisible, défini entièrement par l'auteur. C'est une relation hiérarchique
  où le créateur est omniscient (démiurge).

  Caractéristiques :
  - Système fini avec limites claires
  - Feedback déterministe et prévisible
  - Univers fermé et défini à l'avance
  - Auteur en position de contrôle total

# BLOC 3 : Relations aux oeuvres et concepts
examples:
  - jeu-d-influences
  - phallaina
  - lifeline
  - late-shift
  - bandersnatch
relatedResources:
  - forme-sociale
  - forme-contributive
relatedStructures:
  - structure-embranchements
concepts:
  - système-clos
  - univers-fini
  - démiurge
  - feedback-deterministe
  - interaction-utilisateur-machine

# BLOC 4 : Contexte pédagogique
relevantFor:
  - MM3B
  - RTMF1M
featured: true
draft: false

# BLOC 5 : Métadonnées Astro
tags:
  - ressource-theorique
  - forme-interactivite
---

## Interaction

L'utilisateur fait des choix dans un univers prédessiné. Chaque action produit un résultat déterministe.

## Exemples

### Jeu d'influences
...

## Avantages

- Contrôle total de l'auteur
- Production finie et testable
- Expérience prévisible

## Inconvénients

- Sensation de linéarité malgré l'interaction
- Production exponentielle avec trop d'embranchements
```

---

## 🚀 PLAN D'EXÉCUTION PHASE PAR PHASE

### PHASE 1: FORMES D'INTERACTIVITÉ (4 fichiers)

**Durée estimée:** 3 minutes
**Tokens estimés:** 20K

**Étapes:**
1. Lire `/src/content/docs/ressources/formes-interactivite.mdx` (lignes 1-378)
2. Parser les 3 formes principales + hybride
3. Pour chaque concept:
   - Extraire description + definition
   - Extraire avantages/inconvénients
   - Identifier oeuvres mentionnées → mapper IDs valides
   - Créer fichier `.mdx` dans `/src/content/ressources-theoriques/formes-interactivite/`

**Fichiers à créer:**
- `forme-machine.mdx` (exemples: jeu-d-influences, phallaina, lifeline, late-shift, bandersnatch)
- `forme-sociale.mdx` (exemples: à identifier)
- `forme-contributive.mdx` (exemples: the-johnny-cash-project, + à identifier)
- `forme-hybride.mdx` (optionnel - exemples à identifier)

**Relations intra-groupe:**
- forme-machine ↔ forme-sociale (relatedResources)
- forme-machine ↔ forme-contributive (relatedResources)
- forme-sociale ↔ forme-contributive (relatedResources)

---

### PHASE 2: RÔLES DU PUBLIC (4 fichiers)

**Durée estimée:** 3 minutes
**Tokens estimés:** 20K

**Étapes:**
1. Lire `/src/content/docs/ressources/role-du-public.mdx` (lignes 1-277)
2. Parser les 4 rôles
3. Pour chaque rôle:
   - Extraire description + definition
   - Identifier oeuvres mentionnées → mapper IDs valides
   - Identifier structures narratives associées
   - Créer fichier `.mdx` dans `/src/content/ressources-theoriques/roles-du-public/`

**Fichiers à créer:**
- `role-fantome.mdx` (exemples: weiordie, phallaina, gaza-sderot, one-shared-house)
- `role-personnage.mdx` (exemples: jeu-d-influences, lifeline, bandersnatch, the-boat, immortality)
- `role-divinite.mdx` (exemples: à identifier)
- `role-soi-meme.mdx` (exemples: à identifier)

**Relations intra-groupe:**
- (pas de relation directe entre rôles)

**Relations inter-concepts:**
- role-fantome → structure-lineaire, structure-elastique (relatedStructures)
- role-personnage → structure-embranchements (relatedStructures)

---

### PHASE 3: INTERFACES NARRATIVES (8 fichiers)

**Durée estimée:** 5 minutes
**Tokens estimés:** 30K

**Étapes:**
1. Lire `/src/content/docs/ressources/interfaces-narratives.mdx` (lignes 1-335)
2. Parser les 8 types d'interfaces
3. Pour chaque interface:
   - Extraire description + definition
   - Identifier oeuvres mentionnées → mapper IDs valides
   - Identifier structures narratives associées
   - Créer fichier `.mdx` dans `/src/content/ressources-theoriques/interfaces-narratives/`

**Fichiers à créer:**
- `interface-point-click.mdx` (exemples: jeu-d-influences, lifeline, late-shift)
- `interface-scrollable.mdx` (exemples: phallaina, nsa-files-decoded, do-not-track, snow-fall)
- `interface-timeline.mdx` (exemples: à identifier)
- `interface-split-screen.mdx` (exemples: à identifier)
- `interface-galleries.mdx` (exemples: à identifier)
- `interface-3d.mdx` (exemples: clouds-over-sidra, + VR)
- `interface-maps.mdx` (exemples: riding-the-new-silk-road, welcome-to-pine-point)
- `interface-gestural.mdx` (exemples: à identifier)

**Relations intra-groupe:**
- interface-point-click ↔ interface-scrollable (relatedResources)
- interface-timeline ↔ interface-maps (relatedResources)
- interface-3d ↔ interface-gestural (relatedResources)

---

### PHASE 4: TYPES DE CHOIX (3 fichiers)

**Durée estimée:** 2 minutes
**Tokens estimés:** 15K

**Étapes:**
1. Lire `/src/content/docs/ressources/types-de-choix.mdx` (lignes 1-231)
2. Parser les 3 types
3. Pour chaque type:
   - Extraire description + definition
   - Identifier oeuvres mentionnées → mapper IDs valides
   - Créer fichier `.mdx` dans `/src/content/ressources-theoriques/types-de-choix/`

**Fichiers à créer:**
- `choix-exploratoire.mdx` (exemples: hors-jeu, weiordie, phallaina)
- `choix-rationnel.mdx` (exemples: jeu-d-influences, lifeline, bandersnatch, late-shift, the-boat)
- `faux-choix.mdx` (exemples: à identifier)

**Relations intra-groupe:**
- choix-exploratoire ↔ choix-rationnel (relatedResources)
- choix-rationnel ↔ faux-choix (relatedResources)

---

### PHASE 5: VALIDATION COMPLÈTE

**Durée estimée:** 2 minutes
**Tokens estimés:** 10K

**Checklist:**
- [ ] Tous les ~20 fichiers créés
- [ ] Tous les frontmatter conformes au schéma C
- [ ] Tous les champs requis remplis (id, title, type, description, definition)
- [ ] Tous les `examples` mappés vers IDs d'oeuvres valides
- [ ] Tous les `relatedResources` pointent vers IDs valides
- [ ] Tous les `relatedStructures` pointent vers IDs valides
- [ ] Liaisons bidirectionnelles vérifiées (si A → B alors B → A)
- [ ] Aucun ID en doublon
- [ ] Build Astro réussit: `npm run build`
- [ ] Générer rapport de validation

---

## ✅ CRITÈRES DE SUCCÈS FINAUX

- [x] ~20 fichiers créés et syntaxiquement valides
- [x] 100% du frontmatter conforme au schéma C
- [x] Tous les champs requis présents
- [x] Tous les `examples` résolvent vers IDs d'oeuvres existants
- [x] Relations `relatedResources` cohérentes et bidirectionnelles
- [x] Relations `relatedStructures` complètes et valides
- [x] Aucune erreur Astro Content Collections
- [x] Build Astro réussi
- [x] Rapport final généré
- [x] Commit avec message explicite

---

## 📁 STRUCTURE FINALE ATTENDUE

```
/src/content/ressources-theoriques/
├── formes-interactivite/
│   ├── forme-machine.mdx          ✓
│   ├── forme-sociale.mdx          ✓
│   ├── forme-contributive.mdx     ✓
│   └── forme-hybride.mdx          ✓
├── roles-du-public/
│   ├── role-fantome.mdx           ✓
│   ├── role-personnage.mdx        ✓
│   ├── role-divinite.mdx          ✓
│   └── role-soi-meme.mdx          ✓
├── interfaces-narratives/
│   ├── interface-point-click.mdx   ✓
│   ├── interface-scrollable.mdx    ✓
│   ├── interface-timeline.mdx      ✓
│   ├── interface-split-screen.mdx  ✓
│   ├── interface-galleries.mdx     ✓
│   ├── interface-3d.mdx            ✓
│   ├── interface-maps.mdx          ✓
│   └── interface-gestural.mdx      ✓
└── types-de-choix/
    ├── choix-exploratoire.mdx     ✓
    ├── choix-rationnel.mdx        ✓
    └── faux-choix.mdx             ✓
```

**Total: ~20 fichiers (19 confirmés + 1 optionnel)**

---

## 🔌 INTÉGRATION ASTRO

Les ressources théoriques seront automatiquement intégrées dans:
1. **Content Collections:** `ressources-theoriques` collection
2. **Dynamic routes:** Pages générées via `getStaticPaths()` pour chaque concept
3. **Cross-references:** Liens depuis les oeuvres et structures vers les concepts
4. **Search:** Indexation automatique par Astro/Starlight

---

## 📊 ESTIMATION TOTALE

| Phase | Fichiers | Durée | Tokens |
|-------|----------|-------|--------|
| 1. Formes | 4 | 3 min | 20K |
| 2. Rôles | 4 | 3 min | 20K |
| 3. Interfaces | 8 | 5 min | 30K |
| 4. Choix | 3 | 2 min | 15K |
| 5. Validation | - | 2 min | 10K |
| **TOTAL** | **~20** | **~15 min** | **~95K** |

---

## 🎯 LANCEMENT

Pour lancer l'exécution complète:

```bash
# Dans une session vide, exécuter:
# "Exécute le plan PLAN_ETAPE4_RESSOURCES_THEORIQUES.md étape par étape"
```

Ou pour chaque phase:
```bash
# Phase 1: "Exécute la PHASE 1 du plan étape 4 : Formes d'interactivité"
# Phase 2: "Exécute la PHASE 2 du plan étape 4 : Rôles du public"
# etc.
```

---

**Plan créé:** 2025-11-18
**Version:** 1.0
**Prêt pour exécution:** ✅ OUI
