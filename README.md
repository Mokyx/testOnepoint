# Compte rendu test MCP

Ce que j'ai réalisé : 
- Du refactoring et du cleaning
    - suppression de certains ts-ignore
    - Typos
    - Simplifications et modularisations
    - Quelques magic strings supprimées et mises en const
    - Ajout de validations et de typage avec zod

- Fonctionnellement
    - Ajout de détails pour la liste des albums spotify (nombre de tracks, type d'albums...). J'aurais pu en rajouter d'autres, l'api donne bcp d'infos.
    - Changement de l'affichage Card pour utiliser une DataView PrimeReact.
    - Cablage avec l'API en back end pour afficher les 10 albums les plus écoutés sur la BDD (fichier csv) fourni.


Par soucis de temps et n'étant pas familier avec NestJS (j'ai plutôt l'habitude de travailler avec Prisma+Express/NextJS), j'ai préféré me concentrer sur le front.
<br>
Quelques idées de modifications d'ensemble : 

- Typer et cabler les albums du back et du front sur un seul type TS 
- Mapper les albums spotify sur ce type OU aller chercher les albums spotify liés aux albums du .csv via une recherche API et stocker le tout sur la base SQLite.
- Factorisation de l'affichage des albums en un seul composant
- Les idées déjà mentionnées dans le backlog (favoris, expiration du token spotify...)
- Ajouter des tests (il est mention d'unit test Jest dans le front mais je n'ai rien vu de tel).

<br>

# myspotify-front-react-ts

## Setup : Accès à l'API Spotify

* Aller sur la page [Spotify Dashboard](https://developer.spotify.com/dashboard).
* Se connecter ou créer un compte (gratuit).
* Ensuite dans le dashboard, il faut créer une application (bouton "Create an app")
    * Lui donner un nom
    * Valider
* Editer les settings
    * Ajouter un redirect URI : http://localhost:3000/callback
* Récupérer le Client ID (vers le haut à gauche)
* Copier ensuite le fichier .env vers un fichier .env.local
* Dans le fichier .env.local, modifier la variable VITE_SPOTIFY_CLIENT_ID avec votre clientId

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
