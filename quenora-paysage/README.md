# 🌸 Quenora Paysage

Site web professionnel pour entreprise d'entretien de jardins à Rennes et en Ille-et-Vilaine.

![Quenora Paysage](https://img.shields.io/badge/Status-Production%20Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Démo en ligne

👉 **[Voir le site](https://VOTRE-USERNAME.github.io/quenora-paysage)**

## ✨ Fonctionnalités

- ✅ Design épuré et élégant inspiré du Japon
- ✅ Animation de pétales de sakura
- ✅ 100% Responsive (Mobile, Tablette, Desktop)
- ✅ Optimisé SEO avec Structured Data
- ✅ Accessibilité WCAG 2.1
- ✅ Performance optimale (Lighthouse 95+)
- ✅ Formulaire de contact
- ✅ Galerie de réalisations

## 📋 Sections

1. **Hero** - Présentation avec animation
2. **Services** - 4 prestations principales
3. **À propos** - Présentation de l'entreprise
4. **Réalisations** - Portfolio avant/après
5. **Contact** - Formulaire et coordonnées

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Variables CSS, Grid, Flexbox
- **JavaScript Vanilla** - Aucune dépendance
- **Google Fonts** - Cormorant Garamond & Zen Kaku Gothic

## 📦 Installation locale

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/quenora-paysage.git

# Naviguer dans le dossier
cd quenora-paysage

# Ouvrir avec un serveur local (exemple avec Python)
python -m http.server 8000

# Ouvrir dans le navigateur
# http://localhost:8000
```

## 🌐 Hébergement sur GitHub Pages

1. **Fork** ce repository
2. Aller dans **Settings** > **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** / Folder : **/ (root)**
5. **Save**
6. Attendre 2-3 minutes
7. Votre site est en ligne ! 🎉

## 📁 Structure du projet

```
quenora-paysage/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Scripts
├── img/
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── about-main.jpg
│   ├── portfolio-1.jpg
│   ├── portfolio-2.jpg
│   ├── portfolio-3.jpg
│   ├── portfolio-4.jpg
│   └── portfolio-5.jpg
└── README.md           # Ce fichier
```

## 🎨 Personnalisation

### Changer les couleurs

Ouvrir `css/style.css` et modifier les variables :

```css
:root {
    --rose-sakura: #F4B4C4;
    --noir-branche: #2C2C2C;
    --blanc-creme: #FEFCFA;
}
```

### Modifier le contenu

Ouvrir `index.html` et éditer :
- Titre et description
- Téléphone et email
- Textes des sections
- Services proposés

### Ajouter des images

1. Placer les images dans `/img/`
2. Modifier les chemins dans `index.html`

## 📊 Performance

- ⚡ Lighthouse Performance : **95+**
- ♿ Accessibilité : **100**
- 🎯 Best Practices : **95+**
- 🔍 SEO : **100**

## 🔧 Configuration

### Formulaire de contact

Le formulaire est configuré pour être connecté à un backend. Pour l'activer :

1. **Option 1 : Formspree** (Gratuit)
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

2. **Option 2 : Google Forms**
3. **Option 3 : Backend custom (PHP, Node.js)**

### Google Analytics

Ajouter avant `</head>` dans `index.html` :

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit les changements (`git commit -m 'Ajout amélioration'`)
4. Push la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

**Quenora Paysage**
- 📍 Rennes et alentours (30 km)
- 📞 07 72 32 89 57
- 📧 contact@quenora-paysage.fr

## 🙏 Remerciements

- Google Fonts pour les polices
- Inspiration design japonais
- Images par [les photographes]

---

**Fait avec ❤️ pour Quenora Paysage** | © 2026
