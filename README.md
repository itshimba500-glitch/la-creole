# La Créole — site vitrine (démonstration)

Site statique HTML/CSS/JS pour Restaurant-Lounge-Traiteur La Créole, Liberté 2, Dakar.
Aucun serveur, aucune base de données, aucune clé secrète. Le site fonctionne localement sans Lovable ni crédits supplémentaires.

## Fichiers
- `index.html` — contenu et structure
- `styles.css` — couleurs, polices, mise en page (variables en haut du fichier)
- `script.js` — menu mobile, horaires, animations
- `assets/` — images (toutes TEMPORAIRES)

## Ouvrir sur Windows
1. Décompressez le dossier (clic droit > « Extraire tout »).
2. Double-cliquez sur `index.html` : il s'ouvre dans votre navigateur.
3. (Les polices Google nécessitent Internet ; sans connexion, une police de secours s'affiche.)
4. Pour vérifier l’affichage sur téléphone depuis un ordinateur, ouvrez les outils développeur de votre navigateur et activez la barre d’outils d’appareil mobile. Le test sur un vrai téléphone reste recommandé.

## Modifier
- **Textes** : ouvrez `index.html` avec le Bloc-notes ou VS Code, modifiez le texte entre les balises.
- **Couleurs / polices** : bloc `:root` en haut de `styles.css`.
- **Téléphone** : remplacez toutes les occurrences de `+221774516262` et `+221 77 451 62 62` (Ctrl+H).
- **Horaires** : variable `HORAIRES` en haut de `script.js`. Elle indique par défaut « Horaires à confirmer » : ne renseignez une plage horaire qu’après confirmation par l’établissement.
- **Images** : remplacez les fichiers dans `assets/` en gardant le même nom, puis retirez les mentions « Image de démonstration ».
- **Carte** : remplacez le bloc commenté `ZONE CARTE` dans `index.html`.

## Images temporaires (générées, à remplacer)
- `assets/demo-cuisine.jpg` — plat (accueil)
- `assets/demo-lounge.jpg` — salon lounge
- `assets/demo-traiteur.jpg` — buffet traiteur
Elles ne représentent PAS l'établissement.

## À confirmer avant publication
- [ ] Horaires exacts (à confirmer directement auprès de l’établissement)
- [ ] Adresse précise et lien Google Maps exact du profil
- [ ] Menu et tarifs
- [ ] Détail des prestations traiteur
- [ ] WhatsApp (non ajouté tant que non confirmé)
- [ ] Logo officiel (l'identité actuelle est provisoire)
- [ ] Photographies authentiques

## Publier sur GitHub Pages (plus tard)
1. Créez un dépôt GitHub, déposez-y le contenu de ce dossier (index.html à la racine).
2. Settings > Pages > Source : branche `main`, dossier `/ (root)`.
3. L'adresse s'affiche après quelques minutes.
