# 🐺 Wolves & Whispers - Website

Site web officiel pour l'application mobile Wolves & Whispers (Loups-Garous).

## 📋 Ce qui a été fait par Claude

### ✅ Structure du projet créée
- **Next.js 15** avec TypeScript et Tailwind CSS
- Configuration pour **export statique** (compatible OVH)
- **5 pages complètes** : Home, Download, Rules, Support, Privacy

### ✅ Pages développées
1. **Homepage (/)** - Présentation moderne avec features de l'app
2. **Download (/download)** - Page téléchargement (prête pour store links)
3. **Rules (/rules)** - Règles complètes du jeu avec tous les rôles
4. **Support (/support)** - FAQ et contact support@wolvesandwhispers.app  
5. **Privacy (/privacy)** - Politique de confidentialité

### ✅ Configuration technique
- **next.config.js** - Export statique pour OVH
- **Design responsive** - Fonctionne sur mobile/desktop
- **Thème cohérent** - Couleurs violet/noir comme l'app
- **Navigation complète** - Menu et footer sur toutes les pages

### ✅ Build de production
- **Dossier `out/`** - Fichiers statiques prêts pour OVH
- **Optimisation** - Images, CSS, JS minifiés
- **SEO ready** - Meta tags et structure optimisée

## 🚀 À faire maintenant

### 1. Commander hébergement OVH
- **Produit** : Hébergement web "Perso" (~3€/mois)
- **Option CMS** : "Sans module" 
- **SSL** : Let's Encrypt (gratuit, inclus)

### 2. Déployer le site
- **Upload** : Contenu du dossier `out/` vers la racine OVH
- **SSL** : Activer Let's Encrypt dans l'espace client OVH
- **Test** : Vérifier https://wolvesandwhispers.app

### 3. Mise à jour future
Quand l'app sera sur les stores, modifier :
```typescript
// Dans src/app/download/page.tsx
href="#"  // Remplacer par vrais liens App Store/Play Store
```

## 💻 Commandes de développement

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Les fichiers à uploader sont dans le dossier out/
```

## 📁 Structure des fichiers

```
wolvesandwhispers-website/
├── src/app/              # Pages Next.js
│   ├── page.tsx         # Homepage
│   ├── download/        # Page téléchargement
│   ├── rules/          # Règles du jeu
│   ├── support/        # Support et FAQ
│   └── privacy/        # Politique confidentialité
├── out/                 # 📦 FICHIERS À UPLOADER SUR OVH
├── next.config.js       # Configuration export statique
├── DEPLOYMENT.md        # Guide de déploiement détaillé
└── package.json         # Dépendances du projet
```

## 🔗 Liens importants

- **Domaine** : wolvesandwhispers.app (OVH)
- **Email support** : support@wolvesandwhispers.app
- **Privacy policy** : https://y0k099.github.io/privacy-policy-lg/

---

**✅ Site web prêt pour déploiement OVH !**
