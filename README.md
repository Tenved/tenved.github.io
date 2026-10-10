# Site du cabinet infirmier d'Aubigny

Site statique (HTML/CSS/JS, sans dépendance ni build) pour le cabinet infirmier
d'Aubigny-Les Clouzeaux. Une page principale + une page de mentions légales.

## Structure

```
index.html             page principale (accueil, horaires, prestations, équipe, vaccination, fiches pratiques, contact)
mentions-legales.html  mentions légales (obligatoires en France)
styles.css             mise en forme, responsive mobile
script.js              menu mobile + carte Google chargée au clic (pas de cookies sans action du visiteur)
images/                photos du cabinet
```

## Hébergement gratuit sur GitHub Pages

1. Créer un dépôt public dédié, par exemple `cabinet-infirmier-aubigny`.
2. Y copier **le contenu** de ce dossier (index.html à la racine du dépôt).
3. Dans le dépôt : *Settings → Pages → Build and deployment → Source : Deploy from a branch*,
   branche `main`, dossier `/ (root)`.
4. Le site est en ligne après 1–2 minutes à l'adresse
   `https://<compte>.github.io/cabinet-infirmier-aubigny/`.

Nom de domaine propre (ex. `infirmieres-aubigny.fr`) : environ 10 €/an chez un registrar,
à déclarer dans *Settings → Pages → Custom domain*. L'hébergement reste gratuit.

Alternatives gratuites équivalentes : Netlify ou Cloudflare Pages (glisser-déposer le dossier).

## À compléter avant la mise en ligne

- [ ] Photos des 4 infirmières : déposer `images/prenom.jpg` (format carré) et remplacer
      les initiales dans la section « Notre équipe » par `<img src="images/prenom.jpg" alt="Prénom Nom">`.
- [ ] Prénom de Mme Mengozzi et nom de la 4ᵉ infirmière.
- [ ] Mentions légales : directrice de la publication, n° RPPS de chaque infirmière.
- [ ] Faire relire la section vaccination (liste des vaccins) par l'équipe.
- [ ] Ajouter le lien du site sur la fiche Google Business Profile.
