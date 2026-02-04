@echo off
chcp 65001 >nul
cls

echo ========================================
echo 🚀 Déploiement GitHub - Quenora Paysage
echo ========================================
echo.

set /p username="Entrez votre nom d'utilisateur GitHub : "
echo.

echo 📝 Initialisation du repository Git...
git init
git add .
git commit -m "Initial commit - Site Quenora Paysage"

echo.
echo 🔗 Connexion au repository GitHub...
git branch -M main
git remote add origin https://github.com/%username%/quenora-paysage.git

echo.
echo ⬆️  Upload vers GitHub...
git push -u origin main

echo.
echo ✅ Terminé !
echo.
echo 📍 Prochaines étapes :
echo 1. Aller sur https://github.com/%username%/quenora-paysage
echo 2. Settings ^> Pages
echo 3. Source: Deploy from a branch
echo 4. Branch: main / Folder: / (root)
echo 5. Save
echo.
echo 🌐 Votre site sera disponible à :
echo    https://%username%.github.io/quenora-paysage
echo.
echo ⏳ Attendre 2-3 minutes pour la mise en ligne
echo.
pause
