# 🎯 Workflow Complet d'Enrichissement d'une Œuvre

## Vue d'ensemble

Ce processus permet d'enrichir et de documenter une nouvelle œuvre pour l'ajouter à la base de données `/src/content/oeuvres/`.

Quand vous me donnez une œuvre, je vais automatiquement :
1. Rechercher les informations complètes
2. Proposer les meilleures catégories
3. Identifier la structure narrative
4. Proposer les ressources théoriques pertinentes
5. Trouver des images illustratives
6. Générer le fichier `.mdx` complet prêt à ajouter

---

## Phase 1 : Recherche des Informations

Je vais chercher et valider :
- ✅ Titre complet et alternatif
- ✅ Créateurs/Studios/Auteurs
- ✅ Année de création
- ✅ URL officielles
- ✅ Description détaillée
- ✅ Contexte pédagogique

**Méthode** : WebSearch + WebFetch pour les sites officiels

---

## Phase 2 : Proposer des Catégories

Parmi ces 8 catégories officielles :

| Catégorie | Description |
|-----------|-------------|
| **Fiction** | Récits narratifs fictionnels |
| **Documentaire** | Contenus factuels, journalistiques, éducatifs |
| **Interface** | Focus sur l'interface/interaction elle-même |
| **Outil** | Outils créatifs, générateurs, constructeurs |
| **Jeu** | Jeux vidéo, jeux de société, expériences ludiques |
| **Muséale** | Installations, œuvres in situ, expériences physiques |
| **Urbain** | Parcours urbains, GPS-based, géolocalisation |
| **Performance** | Performances, events, œuvres temporelles |

**Output** : Proposition de 1-3 catégories avec justifications

---

## Phase 3 : Identifier la Structure Narrative

### Structure Linéaire
- Un seul chemin narratif, spectateur passif
- **Ex** : Clouds Over Sidra, What the 1921 Tulsa Race Massacre Destroyed
- Quand utiliser : Message avec ordre précis, documentaires informatifs

### Structure Embranchements
- Arborescence de choix avec conséquences
- **Ex** : Bandersnatch, Late Shift, Lifeline
- Quand utiliser : Dilemmes moraux, exploration de conséquences

### Structure Parallèle
- Plusieurs récits simultanés
- **Ex** : Highrise, Generation What
- Quand utiliser : Récits chorale, perspectives croisées

### Structure Élastique
- Trame principale + digressions optionnelles
- **Ex** : Snow Fall, Do Not Track
- Quand utiliser : Documentaires éducatifs, articles enrichis

### Structure Concentrique
- Couches autour d'un événement central
- **Ex** : One Shared House, Riding the New Silk Road
- Quand utiliser : Perspectives multiples, événements complexes

### Structure Constellation
- Réseau hypertexte sans hiérarchie
- **Ex** : Nicky Case Explorable Explanations, Observable
- Quand utiliser : Exploration poétique, bases de données

**Output** : 1 structure proposée avec justification

---

## Phase 4 : Proposer les Ressources Théoriques

### Formes d'Interactivité (avec quoi on interagit ?)

| Forme | Description | Exemples |
|-------|-------------|----------|
| **forme-machine** | Interaction utilisateur ↔ système informatique fermé | Jeu d'influences, Phallaina, Lifeline |
| **forme-sociale** | Interaction avec d'autres utilisateurs | Fort McMoney (votes), Twitch Plays Pokemon |
| **forme-contributive** | Contribution de contenu par les utilisateurs | The Johnny Cash Project, Incredibox |
| **forme-hybride** | Combinaisons des précédentes | Various |

### Rôles du Public (quelle est ma position ?)

| Rôle | Description | Exemples |
|------|-------------|----------|
| **role-fantome** | Témoin invisible observant | Wei or Die, Phallaina, Gaza/Sderot |
| **role-personnage** | Incarnation d'un personnage | Lifeline, Bandersnatch |
| **role-divinite** | Contrôle omnipotent de l'univers | QWOP, Incredibox |
| **role-soi-meme** | Participation authentique (dialogue réel) | Various |

### Interfaces Narratives (comment on navigue ?)

| Interface | Description | Exemples |
|-----------|-------------|----------|
| **interface-point-click** | Choix visuels à cliquer | Jeu d'influences, Lifeline, Late Shift |
| **interface-scrollable** | Défilement horizontal/vertical | Phallaina, The Boat |
| **interface-timeline** | Navigation temporelle | Various |
| **interface-split-screen** | Écrans parallèles | Various |
| **interface-galleries** | Galeries exploratoires | Observable, Various |
| **interface-3d** | Environnements immersifs 3D | Clouds Over Sidra |
| **interface-maps** | Navigation géographique | Can You See Me Now |
| **interface-gestural** | Gestes tactiles/mouvements | Various |

### Types de Choix (quel impact narratif ?)

| Type | Description | Exemples |
|------|-------------|----------|
| **choix-exploratoire** | Découvrir du contenu bonus (impact faible) | Hors-Jeu, Wei or Die, Phallaina |
| **choix-rationnel** | Décisions avec conséquences réelles | Bandersnatch, Late Shift |
| **faux-choix** | Illusion de choix (tout mène au même) | Various |

**Output** : Proposition de 1-2 formes, 1 rôle, 1-2 interfaces, 1 type de choix

---

## Phase 5 : Trouver des Images

Je vais chercher et proposer :
- ✅ Screenshots/captures d'écran
- ✅ Affiches officielles
- ✅ Photos de l'installation (si applicable)
- ✅ Illustrations pertinentes
- ✅ Logos/branding

**Sources** : Sites officiels, galleries, presse, archives

**Output** : 3-5 URLs d'images avec descriptions

---

## Phase 6 : Résumé Complet et Proposé

```
═══════════════════════════════════════════════════════════
Œuvre: [Titre]
═══════════════════════════════════════════════════════════

📋 MÉTADONNÉES
├─ Créateurs: [List]
├─ Année: [YYYY]
├─ URL: [https://...]
└─ Status: [functional/unavailable/archived]

🎬 CATÉGORIES PROPOSÉES
├─ [Catégorie 1] ✓ Justification
├─ [Catégorie 2] ✓ Justification
└─ [Catégorie 3] ✓ Justification

📐 STRUCTURE NARRATIVE
└─ [structure-X] ✓ Justification détaillée

🔧 RESSOURCES THÉORIQUES PROPOSÉES
├─ Forme: [forme-X] ✓ Pourquoi
├─ Rôle: [role-X] ✓ Pourquoi
├─ Interface: [interface-X] ✓ Pourquoi
└─ Type de choix: [choix-X] ✓ Pourquoi

📝 DESCRIPTION
Description courte (1-2 phrases) : ...

💡 CE QUI FONCTIONNE
Aspects techniques et narratifs : ...

🎯 INSPIRANT PÉDAGOGIQUEMENT
Pourquoi c'est pertinent pour les cours : ...

🖼️ IMAGES
├─ [Screenshot 1] (URL)
├─ [Screenshot 2] (URL)
├─ [Affiche] (URL)
└─ [Photo installation] (URL)

✅ PRÊT À AJOUTER
Fichier généré : {id}.mdx
Contenu complet fourni ci-dessous
═══════════════════════════════════════════════════════════
```

---

## Phase 7 : Génération du Fichier .mdx

Format standard avec template complet :

```mdx
---
id: {kebab-case}
title: "{titre}"
creators:
  - Creator 1
  - Creator 2
year: YYYY
categories:
  - Category
types:
  - Type
description: "{courte description}"
whatWorks: "{aspects techniques/narratifs}"
inspiration: "{intérêt pédagogique}"
status: functional
url: https://...
relevantFor:
  - MM3B
  - RTMF1M
concepts:
  - concept1
  - concept2
relatedStructures:
  - structure-id
relatedWorks:
  - work-id
featured: true/false
draft: false
---

## Contenu optionnel

Analyse détaillée, contexte additionnel, etc.
```

---

## Optimisations Token (Best Practices)

1. ✅ **Batch des créations** : Une œuvre = une réponse complète
2. ✅ **Références auto-générées** : Les IDs sont déduits automatiquement
3. ✅ **Format structuré** : Sortie cohérente et testable
4. ✅ **Validation implicite** : Les références croisées sont vérifiées
5. ✅ **Pas de questions inutiles** : Tout est recherché/proposé d'office

---

## Format de Soumission Optimal

Simplement envoyer :
```
Ajoute l'œuvre : [Nom complet ou URL ou description]
```

Et je fais tout le reste ! 🚀

---

## Checklist de Validation Post-Création

- [ ] ID en kebab-case unique
- [ ] Frontmatter complet selon Schema A
- [ ] URL en https://
- [ ] Catégories valides
- [ ] RelatedStructures pointent vers des IDs existants
- [ ] RelatedWorks pointent vers des IDs existants
- [ ] Description courte (1-2 phrases)
- [ ] whatWorks et inspiration complets
- [ ] Fichier `.mdx` syntaxiquement valide

---

## Exemples de Soumission Valides

```
1. Ajoute l'œuvre : Bandersnatch
2. Ajoute l'œuvre : https://www.netflix.com/title/80988062
3. Ajoute l'œuvre : Un film interactif Netflix de 2018 permettant des choix narrative
4. Ajoute l'œuvre :
   - Titre: Nom l'œuvre
   - Créateurs: Studio, Auteur
   - Année: 2024
   - Description: ...
```

Tous les formats fonctionnent ! Je fais la recherche. ✅
