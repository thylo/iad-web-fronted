# Plan de Restructuration des Ressources Interactives pour Astro

## 📋 Contexte et Objectif

**Objectif Principal :** Restructurer les ~136 ressources interactives et contenus théoriques en une architecture de données normalisée que **Astro peut consommer et utiliser pour générer les pages dynamiquement**.

**Contraintes Principales :**
- ✅ Une oeuvre peut appartenir à **plusieurs catégories** (pas de classification hiérarchique)
- ✅ Les structures narratives sont des contenus à part entière (pas du contenu imbriqué)
- ✅ Format : YAML Frontmatter + Markdown/MDX compatible Astro Content Collections
- ✅ Relations croisées via références d'IDs
- ✅ Structure plate pour les oeuvres (pas de sous-dossiers par catégorie)
- ✅ Pages générées dynamiquement avec `getStaticPaths()`

**Source de données :** `/src/content/docs/ressources/` (fichiers MDX Astro actuels)
**Destination :** `/src/content/oeuvres/`, `/src/content/structures-narratives/`, `/src/content/ressources-theoriques/`

---

## 🎯 Schémas de Données Normalisés

### Schema A : OEUVRES INTERACTIVES

**Chemin des fichiers :** `/src/content/oeuvres/`
**Format :** `.mdx` avec frontmatter YAML

```yaml
---
# BLOC 1 : Identité
id: string                  # Identifiant unique (slug, ex: "bandersnatch")
title: string              # Titre complet
creators: string[]         # Tableau de noms/studios (ex: ["Netflix", "Charlie Brooker"])
year: number              # Année de création (ex: 2018)

# BLOC 2 : Classification (MULTICATÉGORIES)
categories: string[]       # Catégories possibles (peut être vide ou plusieurs)
                          # Valeurs: "Fiction" | "Documentaire" | "Interface" | "Outil" |
                          #          "Jeu" | "Muséale" | "Urbain" | "Performance"
types: string[]           # Types spécifiques (ex: ["Film interactif", "Narrative"])

# BLOC 3 : Contenu descriptif
description: string        # Courte description (1-2 phrases)
whatWorks: string         # Ce qui fonctionne techniquement/narrativement (💡)
inspiration: string       # Pourquoi c'est inspirant pédagogiquement (🎯)

# BLOC 4 : Accès et statut
status: string            # "functional" | "unavailable" | "archived"
url: string              # Lien externe complet (avec https://)

# BLOC 5 : Relations et contexte
relevantFor: string[]     # Cours/Territoires applicables
                         # Format: "MM2B" | "MM3B" | "RTMF1M" |
                         #         "RTMF1M-T1" | "RTMF1M-T2" | etc.
concepts: string[]        # Tags thématiques (ex: ["embranchements", "multilinéaire"])
relatedStructures: string[] # IDs des structures narratives utilisées (ex: ["structure-arborescence"])
relatedWorks: string[]    # IDs d'autres oeuvres connexes

# BLOC 6 : Métadonnées Astro
featured: boolean         # Afficher en avant (galerie, homepage)
draft: boolean           # Masquer du site public
tags: string[]           # Tags Astro (auto-générés depuis categories)
---

## Contenu optionnel (Markdown)

Explications, analyses, images, embeds, etc.
```

**Exemple complet :**

```mdx
---
id: bandersnatch
title: Bandersnatch
creators:
  - Netflix
  - Charlie Brooker
year: 2018
categories:
  - Fiction
  - Narrative
types:
  - Film interactif
description: Film dont le spectateur influence le déroulement par des choix narratifs à moments clés
whatWorks: Structure narrative complexe avec multiples fins. Système de sauvegarde local stocke les choix antérieurs
inspiration: Démocratisé le film interactif auprès du grand public. Prouve que Netflix est un medium interactif potent
status: functional
url: https://www.netflix.com/title/80988062
relevantFor:
  - MM3B
  - RTMF1M-T3
concepts:
  - embranchements
  - multilinéaire
  - film
  - interaction-choix
relatedStructures:
  - structure-arborescence
featured: true
draft: false
tags:
  - fiction
  - narrative
---

## Analyse pédagogique

Contenu additionnel...
```

---

### Schema B : STRUCTURES NARRATIVES

**Chemin des fichiers :** `/src/content/structures-narratives/`
**Format :** `.mdx` avec frontmatter YAML

```yaml
---
# BLOC 1 : Identité
id: string                 # slug unique (ex: "structure-arborescence")
title: string              # Titre (ex: "Arborescence / Multilinéaire")
type: "structure"          # Type constant pour les structures

# BLOC 2 : Contenu conceptuel
description: string        # Description courte
definition: string         # Définition détaillée, caractéristiques (peut être dans body)

# BLOC 3 : Relations aux oeuvres
examples: string[]         # IDs des oeuvres qui illustrent cette structure
                          # (ex: ["bandersnatch", "late-shift", "the-boat"])
relatedStructures: string[] # IDs d'autres structures connexes

# BLOC 4 : Contexte pédagogique
relevantFor: string[]      # Cours concernés
concepts: string[]         # Tags thématiques
relatedWorks: string[]     # Alias pour "examples" si nécessaire

# BLOC 5 : Métadonnées Astro
featured: boolean
draft: boolean
tags: string[]            # Auto: ["structure-narrative"]
---

## Caractéristiques de l'arborescence

Explications, exemples, illustrations...
```

**Exemple complet :**

```mdx
---
id: structure-arborescence
title: Arborescence / Multilinéaire
type: structure
description: Structure proposant au spectateur plusieurs chemins distincts et indépendants
definition: |
  L'arborescence narrative présente plusieurs branches parallèles où chaque décision ferme
  définitivement une branche et ouvre une autre. Contrairement au réseau, chaque chemin
  mène à une fin spécifique sans possibilité de revenir.

  Caractéristiques :
  - Multiples chemins distincts
  - Décisions irréversibles
  - Fins variées selon les choix
  - Non-linéarité marquée
examples:
  - bandersnatch
  - late-shift
  - the-boat
  - lifeline
relatedStructures:
  - structure-parallele
  - structure-hypertexte
relevantFor:
  - MM3B
  - RTMF1M-T3
concepts:
  - choix
  - embranchements
  - non-linearité
  - multilinéaire
featured: true
draft: false
---

## Analyse détaillée

Bandersnatch utilise l'arborescence avec boucles : chaque choix...
```

---

### Schema C : RESSOURCES THÉORIQUES (Généralisé)

**Chemin des fichiers :** `/src/content/ressources-theoriques/`
**Format :** `.mdx` avec frontmatter YAML
**Sous-dossiers possibles :** `formes-interactivite/`, `roles-du-public/`, `interfaces-narratives/`, `types-de-choix/`

```yaml
---
# BLOC 1 : Identité
id: string                 # slug unique
title: string              # Titre
type: string              # "forme" | "role" | "interface" | "concept" | "autre"

# BLOC 2 : Contenu
description: string        # Courte description
definition: string         # Définition conceptuelle

# BLOC 3 : Relations
examples: string[]         # IDs d'oeuvres qui illustrent ce concept
                          # (ex: ["patatap", "the-johnny-cash-project"])
relatedResources: string[] # IDs d'autres ressources théoriques connexes
relatedStructures: string[] # IDs de structures narratives connexes

# BLOC 4 : Contexte pédagogique
relevantFor: string[]      # Cours concernés
concepts: string[]         # Tags

# BLOC 5 : Métadonnées Astro
featured: boolean
draft: boolean
tags: string[]
---

## Contenu détaillé

Explications, illustrations, références...
```

**Exemples :**

```mdx
---
id: forme-machine
title: Interactivité Machine
type: forme
description: L'utilisateur dialogue avec un système informatique qui répond selon ses règles
definition: |
  Interaction directe entre l'utilisateur et une machine/système algorithmique.
  La machine applique ses règles déterministes et donne un feedback immédiat.
examples:
  - patatap
  - incredibox
  - silk
relatedResources:
  - forme-sociale
  - forme-contributive
relevantFor:
  - MM2B
  - MM3B
concepts:
  - feedback
  - algorithmique
featured: true
draft: false
---

## Caractéristiques

L'interactivité machine se caractérise par...
```

---

## 📂 Structure des Dossiers Astro

```
/src/content/

├── oeuvres/                          # ⭐ Structure PLATE (pas de subfolders)
│   ├── bandersnatch.mdx              # Schema A
│   ├── the-boat.mdx
│   ├── patatap.mdx
│   ├── rain-room.mdx
│   ├── familiar-tales.mdx
│   ├── prison-valley.mdx
│   ├── incredibox.mdx
│   ├── qwop.mdx
│   ├── late-shift.mdx
│   ├── lifeline.mdx
│   ├── phallaina.mdx
│   ├── immortality.mdx
│   ├── fort-mcmoney.mdx
│   ├── snow-fall.mdx
│   ├── can-you-see-me-now.mdx
│   └── ... (105+ fichiers .mdx)
│
├── structures-narratives/             # ⭐ Schema B dédié
│   ├── structure-lineaire.mdx
│   ├── structure-arborescence.mdx
│   ├── structure-parallele.mdx
│   ├── structure-boucle.mdx
│   ├── structure-hypertexte.mdx
│   └── structure-interactive.mdx
│
└── ressources-theoriques/            # ⭐ Schema C généralisé
    ├── formes-interactivite/
    │   ├── forme-machine.mdx
    │   ├── forme-sociale.mdx
    │   └── forme-contributive.mdx
    │
    ├── roles-du-public/
    │   ├── role-fantome.mdx
    │   ├── role-personnage.mdx
    │   ├── role-divinite.mdx
    │   └── role-soi-meme.mdx
    │
    ├── interfaces-narratives/
    │   ├── interface-inventaire.mdx
    │   ├── interface-arborescence-visuelle.mdx
    │   └── ... (8+ fichiers)
    │
    ├── types-de-choix/
    │   ├── choix-exploratoire.mdx
    │   ├── choix-rationnel.mdx
    │   ├── faux-choix.mdx
    │   └── ... (autres types)
    │
    ├── ethique-environnement.mdx
    ├── artistes-a-explorer.mdx
    └── pedagogiques.mdx
```

---

## 🔧 Configuration Astro (astro.config.mjs)

**Astro Content Collections à configurer :**

```javascript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Schema pour les oeuvres
const oeuvresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    creators: z.array(z.string()),
    year: z.number(),
    categories: z.array(z.string()).optional(),
    types: z.array(z.string()).optional(),
    description: z.string(),
    whatWorks: z.string(),
    inspiration: z.string(),
    status: z.enum(['functional', 'unavailable', 'archived']),
    url: z.string().url(),
    relevantFor: z.array(z.string()).optional(),
    concepts: z.array(z.string()).optional(),
    relatedStructures: z.array(z.string()).optional(),
    relatedWorks: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Schema pour les structures narratives
const structuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    type: z.literal('structure'),
    description: z.string(),
    definition: z.string(),
    examples: z.array(z.string()).optional(),
    relatedStructures: z.array(z.string()).optional(),
    relevantFor: z.array(z.string()).optional(),
    concepts: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Schema pour les ressources théoriques
const ressourcesThéoriquesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(), // 'forme' | 'role' | 'interface' | 'concept'
    description: z.string(),
    definition: z.string(),
    examples: z.array(z.string()).optional(),
    relatedResources: z.array(z.string()).optional(),
    relatedStructures: z.array(z.string()).optional(),
    relevantFor: z.array(z.string()).optional(),
    concepts: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  oeuvres: oeuvresCollection,
  'structures-narratives': structuresCollection,
  'ressources-theoriques': ressourcesThéoriquesCollection,
};
```

**Utilisation dans les pages Astro :**

```astro
---
// src/pages/oeuvres/[id].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const oeuvres = await getCollection('oeuvres');
  return oeuvres
    .filter(entry => !entry.data.draft)
    .map(entry => ({
      params: { id: entry.data.id },
      props: { entry },
    }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
const { title, creators, year, categories, description, url } = entry.data;
---

<Layout title={title}>
  <h1>{title}</h1>
  <p>{description}</p>
  <!-- Affichage du contenu MDX -->
  <Content />
  <a href={url}>{url}</a>
</Layout>
```

**Récupération des données dans les composants :**

```astro
---
// src/pages/galerie.astro
import { getCollection } from 'astro:content';

// Toutes les oeuvres non-draft
const oeuvres = await getCollection('oeuvres', ({ data }) => !data.draft);

// Oeuvres d'une catégorie spécifique
const oeuvreFiction = oeuvres.filter(o => o.data.categories?.includes('Fiction'));

// Oeuvres pertinentes pour un cours
const oeuvreMM3B = oeuvres.filter(o => o.data.relevantFor?.includes('MM3B'));

// Structures narratives avec exemples
const structures = await getCollection('structures-narratives');
---

<div>
  {oeuvres.map(oeuvre => (
    <div>
      <h2>{oeuvre.data.title}</h2>
      <p>{oeuvre.data.description}</p>
    </div>
  ))}
</div>
```

---

## 📊 Distribution des Ressources à Extraire

### Oeuvres Interactives (~105)

| Catégorie | Nombre | Sources |
|-----------|--------|---------|
| Fiction | 18 | `/ressources/galerie/fiction.mdx` |
| Documentaire | 17 | `/ressources/galerie/documentaires.mdx` |
| Interface | 18 | `/ressources/galerie/interfaces.mdx` |
| Outil | 15 | `/ressources/galerie/outils-creatifs.mdx` |
| Jeu | 15 | `/ressources/galerie/jeux-societe.mdx` |
| Muséale | 7 | `/ressources/galerie/museales.mdx` |
| Urbain | 3 | `/ressources/galerie/parcours-urbains.mdx` |
| Performance | 12 | `/ressources/galerie/performance.mdx` |
| **Total** | **~105** | |

### Structures Narratives (6)
- Structure Linéaire
- Structure Arborescence
- Structure Parallèle
- Structure Boucle
- Structure Hypertexte
- Structure Interactive

### Ressources Théoriques (~30+)
- Formes d'interactivité (3)
- Rôles du public (4)
- Interfaces narratives (8+)
- Types de choix (4+)
- Autres concepts

---

## ✅ Critères de Succès

### Phase 1 : Extraction et Structuration
- [ ] Tous les IDs sont uniques et en slug format (kebab-case)
- [ ] Chaque oeuvre a un frontmatter complet selon Schema A
- [ ] Chaque structure a un frontmatter complet selon Schema B
- [ ] Chaque ressource théorique a un frontmatter complet selon Schema C
- [ ] Les fichiers `.mdx` sont syntaxiquement valides
- [ ] Les références croisées (relatedStructures, examples) pointent vers des IDs existants

### Phase 2 : Validation
- [ ] Aucun ID en doublon
- [ ] Tous les liens externes ont le protocole `https://`
- [ ] Aucun frontmatter requis n'est manquant
- [ ] Les catégories utilisent exactement les valeurs définies
- [ ] Les codes cours/territoires suivent le format spécifié

### Phase 3 : Intégration Astro
- [ ] Content Collections Astro se configurent sans erreur
- [ ] Les pages détail des oeuvres se génèrent correctement avec `getStaticPaths()`
- [ ] Les galeries filtrées par catégorie/cours fonctionnent
- [ ] Les liens croisés oeuvre ↔ structure fonctionnent

---

## 🚀 Étapes d'Exécution

### Étape 1 : Préparation
- [ ] Valider les 3 schémas YAML avec l'utilisateur
- [ ] Créer la structure de dossiers
- [ ] Préparer un template de fichier `.mdx`

### Étape 2 : Extraction des Oeuvres
- [ ] Parser les 9 fichiers MDX dans `/ressources/galerie/`
- [ ] Extraire chaque oeuvre (titre, créateurs, année, description, whatWorks, inspiration, url)
- [ ] Classifier par catégories primaires (noter les multicatégories)
- [ ] Créer un fichier `.mdx` par oeuvre dans `/src/content/oeuvres/`
- [ ] Générer les IDs en slug format
- [ ] Normaliser les métadonnées manquantes

### Étape 3 : Extraction des Structures Narratives
- [ ] Extraire les 6 structures narratives depuis les fichiers théoriques
- [ ] Créer un fichier `.mdx` par structure dans `/src/content/structures-narratives/`
- [ ] Mapper les oeuvres exemples pour `examples: []`
- [ ] Identifier les structures connexes pour `relatedStructures: []`

### Étape 4 : Extraction des Ressources Théoriques
- [ ] Extraire formes d'interactivité, rôles, interfaces, types de choix
- [ ] Créer fichiers dans `/src/content/ressources-theoriques/` avec sous-dossiers
- [ ] Mapper les exemples d'oeuvres
- [ ] Identifier les relations croisées

### Étape 5 : Validation et Liens Croisés
- [ ] Vérifier tous les IDs sont uniques
- [ ] Vérifier que tous les références croisées pointent vers des IDs existants
- [ ] Tester que la structure compile en 11ty
- [ ] Générer un rapport de validation

### Étape 6 : Documentation
- [ ] Documenter la migration
- [ ] Créer des exemples de templates 11ty pour l'affichage
- [ ] Créer un guide de maintenance

---

## 📝 Format des Fichiers

### Nommage des fichiers
- **Format :** `{id}.mdx` en kebab-case minuscules
- **Exemples :** `bandersnatch.mdx`, `structure-arborescence.mdx`, `forme-machine.mdx`
- **Caractères autorisés :** a-z, 0-9, trait d'union uniquement

### Frontmatter
- **Format :** YAML valide
- **Guillemets :** Utiliser pour les strings contenant `:` ou caractères spéciaux
- **Arrays :** Syntaxe YAML standard avec `-`
- **Booléens :** `true` ou `false` (minuscules)

### Contenu Markdown
- **Structure :** Frontmatter → Corps optionnel en Markdown
- **Titres :** Commencer par `##` (le titre H1 vient du frontmatter)
- **Liens relatifs :** Utiliser les IDs pour références croisées dans Astro

---

## 🔗 Relations et Références Croisées

**Règles de liaison :**

1. **Oeuvre → Structure Narrative**
   ```yaml
   # Dans oeuvre.mdx
   relatedStructures: ["structure-arborescence", "structure-boucle"]
   ```

2. **Structure → Oeuvres Exemples**
   ```yaml
   # Dans structure.mdx
   examples: ["bandersnatch", "the-boat", "late-shift"]
   ```

3. **Ressource Théorique → Oeuvres**
   ```yaml
   # Dans ressource.mdx
   examples: ["patatap", "incredibox"]  # Alias pour relatedWorks
   ```

4. **Entre Ressources Théoriques**
   ```yaml
   # Dans ressource.mdx
   relatedResources: ["forme-machine", "forme-sociale"]
   ```

---

## ⚠️ Notes Importantes

1. **Pas de hiérarchie de dossiers pour les oeuvres** : Tous les ~105 fichiers dans `/src/content/oeuvres/` même niveau
2. **Multicatégories** : Une oeuvre peut avoir `categories: ["Fiction", "Interface"]`
3. **IDs uniques** : Chaque ressource doit avoir un ID unique dans TOUT le projet
4. **Relations bidirectionnelles** : Si oeuvre → structure, ajouter aussi structure → oeuvre
5. **Statut des liens** : Vérifier régulièrement que les URLs en `status: functional` sont à jour
6. **Draft** : Utiliser `draft: true` pour les ressources en construction, elles ne seront pas publiées

---

## 📚 Ressources de Référence

**Source de données actuelles :**
- `/src/content/docs/ressources/galerie/` - Oeuvres par catégorie
- `/src/content/docs/ressources/` - Fichiers théoriques

**Destination Astro :**
- `/src/content/oeuvres/` - Toutes les oeuvres (flat)
- `/src/content/structures-narratives/` - Structures uniquement
- `/src/content/ressources-theoriques/` - Ressources théoriques

---

## 🎯 Prochaine Étape

**Attendre la confirmation de l'utilisateur pour :**
1. ✅ Les 3 schémas YAML sont-ils validés ?
2. ✅ La structure de dossiers convient-elle ?
3. ✅ La configuration Astro Content Collections convient-elle ?
4. ✅ Commencer l'extraction des ~105 oeuvres ?