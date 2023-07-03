# Exercice

## Le but du projet

Le but du projet est de tester vos connaissances du framework Vue.js et de son écosystème :

- la gestion des requêtes en tâche de fond (fetch ou axios ou alova ou oh-my-fetch ou autre, libre à vous)
- pinia
- vue-router

## Seront attendus

- que l’application réponde au besoin
- que le HTML soit le plus sémantique possible
- du code propre, facile à lire et à comprendre
- une bonne indentation du code
- une bonne organisation du code
- tests unitaires (au moins un)

- Bonus :
  - bonne UI
  - bonne UX
  - ARIA
  - balise `title` changeant pour chaque page

## Prérequis

Le candidat doit savoir lire une documentation en anglais (<https://swapi.dev/documentation>) et y rechercher des informations.

## Ce que doit proposer l’application

### Moteur de recherche de personnage et de films Star Wars

- Une page d’accueil avec
  - un champ de saisie `search`
  - deux boutons radio `personnage` et `film`
  - un bouton de recherche avec une icône de loupe qui lance la recherche sur [swapi.dev](https://swapi.dev/documentation) pour un personnage ou pour un film selon ce que l’utilisateur aura sélectionné comme bouton radio
  - une liste de résultats
    - pour les personnages :
      - nom
      - année de naissance
      - couleur des yeux
      - nom du homeworld
      - un lien vers la page du personnage sur cette application (`/people/:id`)
    - pour les films
      - titre
      - épisode
      - réalisateur
      - année de sortie
      - un lien vers la page du film sur cette application (`/films/:id)

### Deux autres pages : une pour les personnages et l’autre pour les films Star Wars

- une page de personnage (`/people/:id`) avec
  - Le nom en gros et aligné horizontalement
  - sa date de naissance
  - le nom de son homeworld avec quelques informations dessus (climat, gravité, population)
  - liste des titre de films dans lesquels il apparaît (avec un lien vers la page de film de l’application)
- une page de film (`/films/:id`) avec
  - le titre du film en gros et aligné horizontalement
  - sa date de sortie
  - le(s) réalisateur(s)
  - le(s) producteur(s)
  - les personnages (avec un lien vers la page de personnage de l’application)

### Bonus

Garder en mémoire dans le localstorage les recherches précédentes et les proposer en autocompletion dans le champ de saisie
