# Base Bootcamp — nouveau site (refonte 2026)

Refonte de la page d'accueil, en HTML / CSS / JS statique, prête à déployer sur Netlify.
Aucune dépendance, aucun build : c'est un site statique.

## Structure

```
basebootcamp/
├── index.html        ← page d'accueil (CSS + JS intégrés)
├── netlify.toml      ← config Netlify (en-têtes + cache)
└── assets/
    └── img/          ← photos optimisées (issues du site actuel)
```

## Déployer sur Netlify (3 options)

1. **Glisser-déposer** (le plus rapide) : aller sur https://app.netlify.com/drop
   et déposer le dossier `basebootcamp` complet. C'est en ligne en ~10 s.
2. **Git** : pousser ce dossier dans un dépôt GitHub, puis « Add new site →
   Import an existing project » sur Netlify. Aucune commande de build,
   publish directory = `.`
3. **CLI** : `npm i -g netlify-cli` puis `netlify deploy --prod` depuis le dossier.

Brancher ensuite le domaine `basebootcamp.ca` dans Netlify → Domain settings.

## Ce qui a été fait

- **Hero émotionnel** : grande photo plein écran + titre « Développez votre
  équipe par l'aventure » + sous-titre adressé aux 3 publics.
- **Sélecteur « Choisis ta mission »** : 3 gros boutons — *Je représente une
  école / une équipe sportive / une entreprise* — pour que le visiteur sache
  immédiatement que le site s'adresse à lui (priorité du propriétaire).
- Sections : statistiques, 3 fiches publics détaillées (avec prix exacts repris
  du site actuel), section « expérience », autres missions (Super Héros, fêtes
  d'enfant, groupes privés), preuve sociale (Radio-Canada + galerie) et contact.
- Responsive (mobile inclus), navigation mobile, focus clavier, `prefers-reduced-motion`.

## Notes / pistes pour la suite

- **Polices** : Anton + Oswald + Barlow chargées depuis Google Fonts.
- **Photos** : récupérées du site WordPress actuel et compressées (max 1600px).
  Idéalement, refaire une séance photo et exporter en WebP pour gagner du poids.
- **Réservation** : les boutons ouvrent un courriel pré-rempli vers
  `commandant@basebootcamp.ca`. On pourra brancher un vrai formulaire
  (Netlify Forms, gratuit) ou un système de réservation/paiement plus tard.
- **Pages internes** : chaque « mission » pointe pour l'instant vers une section
  de la page d'accueil. Prochaine étape : créer une page dédiée par public
  (écoles, sportives, entreprises) sur ce même gabarit.
- L'ancien site était sous WooCommerce ; le panier n'a pas été repris (aucun
  produit n'y était réellement vendu). À rediscuter si la vente en ligne revient.
