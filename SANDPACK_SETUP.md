# 📦 Configuration Sandpack - Digital Doppler

Ce document explique comment utiliser les exemples de code interactifs Sandpack dans le projet.

## 🎯 Vue d'ensemble

Le projet utilise maintenant **Sandpack** (par CodeSandbox) pour afficher des exemples de code interactifs et éditables directement dans les cours. Cette approche remplace l'ancienne solution Codapi.

### Avantages

- ✅ **Exemples séparés** : code organisé dans `src/examples/`
- ✅ **Maintenance facilitée** : modification des exemples sans toucher au MDX
- ✅ **Coloration syntaxique** : éditeur de code professionnel
- ✅ **Prévisualisation en direct** : voir le résultat immédiatement
- ✅ **Testable** : exemples isolés et versionnables

## 📁 Structure du projet

```
src/
├── examples/                    # Tous les exemples de code
│   └── mm2b/
│       ├── cours-1-semantique/
│       │   ├── structure-complete/
│       │   │   ├── index.html
│       │   │   └── styles.css
│       │   └── site-histoire/
│       │       ├── index.html
│       │       └── styles.css
│       ├── cours-2-typographie/  # À créer
│       ├── cours-3-layout/       # À créer
│       └── cours-4-interactivite/ # À créer
├── components/
│   └── mdx/
│       ├── LiveCode.astro        # Composant principal
│       └── SandpackEditor.astro  # Composant inline (optionnel)
└── content/
    └── docs/
        └── mm2b/
            └── *.mdx
```

## 🚀 Utilisation

### Dans un fichier MDX

#### 1. Importer le composant

```mdx
---
title: "Mon cours"
---

import LiveCode from '../../../components/mdx/LiveCode.astro';
```

#### 2. Utiliser le composant

```mdx
<LiveCode example="mm2b/cours-1-semantique/structure-complete" />
```

#### 3. Options disponibles

```mdx
<LiveCode 
  example="mm2b/cours-1-semantique/site-histoire" 
  height="700px" 
  theme="dark"
/>
```

**Paramètres :**
- `example` (obligatoire) : chemin depuis `src/examples/`
- `height` (optionnel) : hauteur de l'éditeur (défaut: `400px`)
- `template` (optionnel) : `static` ou `vanilla` (défaut: `static`)
- `theme` (optionnel) : `light`, `dark` ou `auto` (défaut: `auto`)

## 📝 Créer un nouvel exemple

### Étape 1 : Créer la structure

```bash
mkdir -p src/examples/mm2b/cours-2-typographie/google-fonts
```

### Étape 2 : Ajouter les fichiers

Créez les fichiers nécessaires dans le dossier :

**`index.html`**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon exemple</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Mon exemple</h1>
</body>
</html>
```

**`styles.css`**
```css
body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}
```

### Étape 3 : Utiliser dans le MDX

```mdx
<LiveCode example="mm2b/cours-2-typographie/google-fonts" />
```

## 🎨 Convention de nommage

### Structure des dossiers

```
src/examples/
└── {cours}/
    └── {theme}/
        └── {nom-exemple}/
            ├── index.html
            ├── styles.css
            └── script.js (optionnel)
```

**Exemples :**
- `mm2b/cours-1-semantique/structure-complete/`
- `mm2b/cours-2-typographie/google-fonts/`
- `mm2b/cours-3-layout/flexbox-navigation/`
- `mm2b/cours-4-interactivite/toggle-theme/`

### Noms de fichiers

Sandpack reconnaît automatiquement :
- `index.html` → `/index.html`
- `styles.css` → `/styles.css`
- `script.js` → `/script.js`

## 🔧 Scripts npm disponibles

```bash
# Développement
npm run dev                # Lancer le serveur de développement
npm run build              # Builder le projet

# Formatage
npm run format             # Formatter le code
npm run format:check       # Vérifier le formatage

# Linting
npm run lint:style         # Vérifier le CSS
npm run lint:examples      # Vérifier les exemples
npm run check              # Vérifier tout
```

## ⚙️ Configuration

### Prettier (.prettierrc)

Configure le formatage automatique du code :
- Utilise le plugin Astro
- Single quotes pour JS/TS
- Semi-colons activés
- Largeur de ligne : 100 caractères

### Stylelint (.stylelintrc.json)

Configure la validation CSS :
- Étend `stylelint-config-standard`
- Désactive certaines règles trop strictes

### TypeScript (tsconfig.json)

Configure les alias de chemins :
- `~/*` → `./src/*`
- `components/*` → `./src/components/*`
- `examples/*` → `./src/examples/*`

## 🐛 Dépannage

### L'exemple ne s'affiche pas

**Vérifiez :**
1. Le chemin est correct depuis `src/examples/`
2. Au moins un fichier `.html` existe
3. Le build réussit : `npm run build`

### Erreur "Exemple introuvable"

```mdx
<LiveCode example="mm2b/cours-1-semantique/mon-exemple" />
```

**Solution :** Vérifiez que le dossier existe :
```bash
ls -la src/examples/mm2b/cours-1-semantique/mon-exemple/
```

### Le CSS ne s'applique pas

**Vérifiez :**
1. Le fichier s'appelle `styles.css` (pas `style.css`)
2. Le HTML contient : `<link rel="stylesheet" href="styles.css">`

### Avertissement sur la taille du chunk Sandpack

C'est normal ! Sandpack est une bibliothèque complète (~634KB). Pour optimiser :
- Le chunk est mis en cache par le navigateur
- Chargement lazy possible si nécessaire

## 📚 Prochaines étapes

### Migration des autres cours

1. **Cours 2 : Typographie et Couleurs**
   - [ ] Extraire les exemples Google Fonts
   - [ ] Créer l'exemple variables CSS
   - [ ] Créer l'exemple hero avec dégradé

2. **Cours 3 : Layout et Responsive**
   - [ ] Extraire les exemples Flexbox
   - [ ] Extraire les exemples Grid
   - [ ] Créer des exemples responsive

3. **Cours 4 : Interactivité et Finalisation**
   - [ ] Extraire les exemples JavaScript
   - [ ] Créer des exemples interactifs

### Règles de sélection

**✅ Convertir en Sandpack :**
- Exemples visuellement intéressants
- Exemples complets et fonctionnels
- Bonnes pratiques à montrer

**❌ Laisser en code statique :**
- Exemples triviaux (juste `<h1>Hello</h1>`)
- Bad practices (à montrer comme contre-exemple)
- Fragments de code pédagogiques

## 🔗 Ressources

- [Documentation Sandpack](https://sandpack.codesandbox.io/)
- [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)

---

**Créé le :** 31 octobre 2025  
**Version Sandpack :** 2.20.0  
**Version Astro :** 5.6.1
