# Guide de migration : IAD Interactive CSS

Ce guide explique comment migrer les composants existants vers les nouvelles classes CSS unifiées.

## Vue d'ensemble

Les styles CSS ont été extraits et unifiés dans une architecture ITCSS :

```
src/styles/
├── 1-settings/
│   └── iad-tokens.css          # Variables CSS (tokens)
├── 2-elements/
│   └── iad-forms.css           # Styles de base (sliders, selects, etc.)
├── 3-components/
│   ├── iad-demo-container.css  # Conteneurs de démo
│   ├── iad-button.css          # Boutons
│   └── iad-code-output.css     # Blocs de code
└── iad-interactive.css         # Import principal
```

## Principes de migration

1. **Remplacer les classes custom** par les classes `.iad-*`
2. **Utiliser les tokens CSS** au lieu de valeurs en dur
3. **Simplifier le markup** en utilisant les classes composées
4. **Conserver Alpine.js** pour la réactivité

---

## Table de correspondance

### Conteneurs

| Ancien | Nouveau | Notes |
|--------|---------|-------|
| `.hsl-playground`, `.box-model-demo`, etc. | `.iad-demo` | Conteneur principal |
| `.controls`, `.controls-section` | `.iad-controls` | Zone de contrôles |
| `.playground-controls` | `.iad-controls` | Zone de contrôles |
| `.control-group` | `.iad-control-group` | Groupe de contrôle |
| `.slider-group` | `.iad-slider-group` | Slider avec label |
| `.visualization` | `.iad-visualization` | Zone de visualisation |

### Formulaires

| Ancien | Nouveau | Notes |
|--------|---------|-------|
| `.slider` | `.iad-slider` | Input range |
| `select` (sans classe) | `.iad-select` | Select |
| `.radio-group` | `.iad-radio-group` | Groupe de radios |
| `input[type="radio"]` | `.iad-radio` | Radio button |
| `label` (en général) | `.iad-label` ou `.iad-label-inline` | Labels |

### Boutons

| Ancien | Nouveau | Notes |
|--------|---------|-------|
| `.copy-btn`, `.swatch-copy` | `.iad-copy-button` | Bouton de copie |
| `.item-selector-btn` | `.iad-selector-button` | Bouton de sélection |
| `.theme-switch` | `.iad-switch` | Switch toggle |

### Code output

| Ancien | Nouveau | Notes |
|--------|---------|-------|
| `.code-output` | `.iad-code-output` | Conteneur de code |
| `.code-block` | `.iad-code-block` | Bloc de code |
| `.output-item` | `.iad-output-item` | Item de sortie |

### Grilles et layout

| Ancien | Nouveau | Notes |
|--------|---------|-------|
| `.variable-grid`, `.controls-grid` | `.iad-controls-grid` | Grille de contrôles |
| `.comparison-grid` | `.iad-grid` | Grille générique |

---

## Exemples de migration

### Exemple 1 : HSLPlayground

**Avant :**
```html
<div class="hsl-playground">
  <div class="playground-controls">
    <div class="control-group">
      <label>
        <span>Hue (Teinte)</span>
        <span class="value" x-text="hue + '°'"></span>
      </label>
      <input type="range" x-model.number="hue" min="0" max="360" class="slider hue-slider">
    </div>
  </div>
</div>
```

**Après :**
```html
<div class="iad-demo">
  <div class="iad-controls">
    <div class="iad-slider-group">
      <label class="iad-label-inline">
        <span>Hue (Teinte)</span>
        <span class="iad-label-value" x-text="hue + '°'"></span>
      </label>
      <input type="range" x-model.number="hue" min="0" max="360" class="iad-slider hue-slider">
    </div>
  </div>
</div>
```

**Notes :**
- Le slider garde sa classe spécifique `.hue-slider` pour le gradient de fond
- Les styles de base sont fournis par `.iad-slider`

---

### Exemple 2 : BoxModelDemo

**Avant :**
```html
<div class="box-model-demo">
  <div class="controls">
    <div class="control-group">
      <label>box-sizing :</label>
      <div class="radio-group">
        <label>
          <input type="radio" x-model="boxSizing" value="content-box">
          content-box
        </label>
      </div>
    </div>
  </div>
</div>
```

**Après :**
```html
<div class="iad-demo">
  <div class="iad-controls">
    <div class="iad-control-group">
      <label class="iad-label">box-sizing :</label>
      <div class="iad-radio-group">
        <label class="iad-radio-label">
          <input type="radio" x-model="boxSizing" value="content-box" class="iad-radio">
          content-box
        </label>
      </div>
    </div>
  </div>
</div>
```

---

### Exemple 3 : FlexboxPlayground (sélection d'items)

**Avant :**
```html
<div class="item-selector">
  <button 
    @click="selectedItem = i"
    :class="{ active: selectedItem === i }"
    class="item-selector-btn"
  >
    Item <span x-text="i"></span>
  </button>
</div>
```

**Après :**
```html
<div class="iad-item-selector">
  <button 
    @click="selectedItem = i"
    :class="{ active: selectedItem === i }"
    class="iad-selector-button"
  >
    Item <span x-text="i"></span>
  </button>
</div>
```

---

### Exemple 4 : Code output

**Avant :**
```html
<div class="code-output">
  <p><strong>Code CSS généré :</strong></p>
  <div class="code-block">
    <div>.container {</div>
    <div>  width: <span x-text="width"></span>;</div>
    <div>}</div>
  </div>
</div>
```

**Après :**
```html
<div class="iad-code-output">
  <p><strong>Code CSS généré :</strong></p>
  <div class="iad-code-block">
    <div>.container {</div>
    <div>  width: <span x-text="width"></span>;</div>
    <div>}</div>
  </div>
</div>
```

---

## Styles spécifiques à conserver

Certains styles doivent rester dans les composants car ils sont **spécifiques à leur fonctionnement** :

### 1. Gradients de sliders

Les sliders avec gradients colorés (HSL, RGBA) gardent leurs styles inline ou spécifiques :

```css
/* Garder dans le composant */
.hue-slider {
  background: linear-gradient(to right, 
    hsl(0, 100%, 50%), 
    hsl(60, 100%, 50%), 
    hsl(120, 100%, 50%), 
    hsl(180, 100%, 50%), 
    hsl(240, 100%, 50%), 
    hsl(300, 100%, 50%), 
    hsl(360, 100%, 50%)
  );
}
```

### 2. Visualisations spécifiques

Les styles de visualisation propres à chaque démo (box model, flexbox, etc.) restent dans le composant :

```css
/* Garder dans le composant */
.flex-container {
  border: 2px solid #3498db;
  background: rgba(52, 152, 219, 0.05);
}

.flex-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 3. Patterns de fond (damier pour transparence)

```css
/* Garder dans le composant */
.comparison-swatch.transparent {
  background-image: 
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%);
  background-size: 20px 20px;
}
```

---

## Étapes de migration d'un composant

### 1. Nettoyer le `<style>` existant

- Supprimer les styles qui existent dans `iad-interactive.css`
- Conserver les styles spécifiques (voir section précédente)

### 2. Remplacer les classes HTML

- Utiliser la table de correspondance ci-dessus
- Ajouter les classes `.iad-*` aux éléments

### 3. Vérifier visuellement

- Lancer le dev server
- Tester le composant
- Vérifier le mode dark et light

### 4. Nettoyer le CSS restant

- Simplifier les styles spécifiques si possible
- Utiliser les tokens CSS (`var(--iad-*)`) au lieu de valeurs en dur

---

## Tokens CSS disponibles

Voir le fichier `src/styles/1-settings/iad-tokens.css` pour la liste complète.

**Principaux tokens :**

```css
/* Conteneurs */
--iad-demo-bg
--iad-demo-border
--iad-demo-border-radius

/* Contrôles */
--iad-control-bg
--iad-control-border
--iad-control-text

/* États */
--iad-hover-bg
--iad-focus-outline
--iad-active-bg

/* Texte */
--iad-text-primary
--iad-text-secondary

/* Espacement */
--iad-gap-xs, --iad-gap-sm, --iad-gap-md, --iad-gap-lg, --iad-gap-xl

/* Transitions */
--iad-transition-fast
--iad-transition-normal
--iad-transition-smooth
```

---

## Checklist de migration

Pour chaque composant :

- [ ] Remplacer les classes custom par `.iad-*`
- [ ] Supprimer les styles CSS dupliqués
- [ ] Conserver les styles spécifiques (gradients, visualisations)
- [ ] Utiliser les tokens CSS pour les valeurs restantes
- [ ] Tester en mode dark et light
- [ ] Vérifier tous les états interactifs (hover, focus, active)
- [ ] Valider avec Alpine.js (si applicable)

---

## Support

En cas de doute, consulter :
- `docs/IAD_INTERACTIVE_DOCS.md` - Documentation complète
- `src/styles/1-settings/iad-tokens.css` - Tokens disponibles
- Composants existants déjà migrés comme référence
