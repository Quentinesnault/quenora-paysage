# 📘 Guide d'hébergement sur GitHub Pages

## 🎯 Étapes à suivre

### 1️⃣ Créer un compte GitHub (si vous n'en avez pas)
- Aller sur [github.com](https://github.com)
- Cliquer sur **Sign up**
- Suivre les instructions

### 2️⃣ Créer un nouveau repository

1. Cliquer sur le **+** en haut à droite
2. Sélectionner **New repository**
3. Remplir les informations :
   - **Repository name** : `quenora-paysage`
   - **Description** : `Site web Quenora Paysage - Entretien de jardins à Rennes`
   - **Public** (cocher)
   - **Add a README file** (décocher, on en a déjà un)
4. Cliquer sur **Create repository**

### 3️⃣ Uploader les fichiers

#### Méthode A : Via l'interface web (plus simple)

1. Sur la page de votre repository, cliquer sur **uploading an existing file**
2. Glisser-déposer TOUS les fichiers et dossiers :
   ```
   - index.html
   - README.md
   - LICENSE
   - .gitignore
   - css/ (dossier complet)
   - js/ (dossier complet)
   - img/ (dossier complet)
   ```
3. En bas de la page :
   - **Commit message** : `Initial commit`
   - Cliquer sur **Commit changes**

#### Méthode B : Via Git en ligne de commande

```bash
# Dans votre terminal/PowerShell
cd chemin/vers/quenora-paysage

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit"

# Ajouter le remote (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/quenora-paysage.git

# Renommer la branche en main
git branch -M main

# Push vers GitHub
git push -u origin main
```

### 4️⃣ Activer GitHub Pages

1. Sur votre repository, aller dans **Settings** (⚙️)
2. Dans le menu de gauche, cliquer sur **Pages**
3. Sous "Build and deployment" :
   - **Source** : Deploy from a branch
   - **Branch** : main
   - **Folder** : / (root)
4. Cliquer sur **Save**
5. Attendre 2-3 minutes ⏳

### 5️⃣ Voir votre site en ligne ! 🎉

Votre site sera accessible à l'adresse :
```
https://VOTRE-USERNAME.github.io/quenora-paysage
```

## 🔧 Mises à jour du site

### Via l'interface web
1. Cliquer sur le fichier à modifier
2. Cliquer sur l'icône crayon ✏️
3. Faire les modifications
4. Cliquer sur **Commit changes**
5. Attendre 1-2 minutes pour que les changements soient en ligne

### Via Git
```bash
# Faire vos modifications localement
# Puis :
git add .
git commit -m "Description des modifications"
git push
```

## 🌐 Domaine personnalisé (optionnel)

### Si vous avez un nom de domaine (ex: quenora-paysage.fr)

1. Dans **Settings** > **Pages**
2. Sous "Custom domain", entrer : `www.quenora-paysage.fr`
3. Cliquer sur **Save**
4. Chez votre hébergeur de domaine, créer un enregistrement CNAME :
   ```
   Type: CNAME
   Host: www
   Value: VOTRE-USERNAME.github.io
   ```

## ✅ Checklist de vérification

Avant de partager votre site, vérifier que :

- [ ] Toutes les images s'affichent
- [ ] Tous les liens fonctionnent
- [ ] Le numéro de téléphone est correct
- [ ] L'email est correct
- [ ] Le site est responsive (tester sur mobile)
- [ ] Les animations fonctionnent
- [ ] Le formulaire s'affiche (même s'il ne fonctionne pas encore)

## 🔍 SEO & Référencement

### Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter votre site
3. Vérifier la propriété
4. Soumettre votre sitemap

### Google My Business
1. Créer une fiche entreprise
2. Ajouter votre site web
3. Demander des avis clients

## 📧 Activer le formulaire de contact

### Option 1 : Formspree (Gratuit)
1. Aller sur [formspree.io](https://formspree.io)
2. S'inscrire
3. Créer un nouveau form
4. Copier l'URL fournie
5. Dans `index.html`, ligne 360, remplacer :
   ```html
   <form class="form" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

### Option 2 : Google Forms
1. Créer un formulaire Google
2. Récupérer le lien
3. Rediriger vers ce lien

### Option 3 : Backend custom
Créer un backend PHP ou Node.js pour gérer les emails.

## 📊 Analytics (optionnel)

### Google Analytics
1. Créer un compte sur [analytics.google.com](https://analytics.google.com)
2. Créer une propriété
3. Copier l'ID de mesure (G-XXXXXXXXXX)
4. Ajouter le code dans `index.html` avant `</head>` :
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🆘 Problèmes courants

### Le site ne s'affiche pas
- Attendre 5 minutes après l'activation de Pages
- Vérifier que le fichier s'appelle bien `index.html`
- Vérifier dans Settings > Pages que c'est bien activé

### Les images ne s'affichent pas
- Vérifier que les chemins sont corrects (`img/about-1.jpg`)
- Vérifier que les images ont bien été uploadées

### Le site n'est pas à jour
- Attendre 1-2 minutes après le commit
- Vider le cache du navigateur (Ctrl + F5)

### Erreur 404
- Vérifier l'URL : `https://USERNAME.github.io/quenora-paysage`
- Le nom du repository doit correspondre

## 💡 Conseils

- ✅ Faire des commits réguliers
- ✅ Tester localement avant de push
- ✅ Utiliser des messages de commit clairs
- ✅ Sauvegarder localement votre code
- ✅ Mettre à jour régulièrement le contenu

## 📱 Partager le site

Une fois en ligne, partager l'URL sur :
- Facebook
- Instagram
- Google My Business
- Email signature
- Cartes de visite

## 🚀 Prochaines étapes

1. [ ] Mettre le site en ligne
2. [ ] Configurer le formulaire
3. [ ] Ajouter Google Analytics
4. [ ] Créer Google My Business
5. [ ] Partager sur les réseaux sociaux
6. [ ] Demander des avis clients

---

**Besoin d'aide ?** Créer une issue sur GitHub ou consulter la [documentation](https://docs.github.com/en/pages)

**Bon hébergement ! 🎉**
