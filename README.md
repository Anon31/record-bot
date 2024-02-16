# Global

Add description here

## Setup

Create an .env file at the root with an TOKEN key which contains the discord bot token. We find its information in :

_Settings_ >> _General Information_ for `APPLICATION_ID` and `PUBLIC_KEY`

_Settings_ >> _Bot_ for `TOKEN`

#### TOKEN=<>

#### APPLICATION_ID=<>

#### PUBLIC_KEY=<>

## Launch

Run `npx tsc` `npm run start` to start the bot.

## Commits convention

Le format du message est le suivant : ```<#number>_<type>-<subject>```

Exemple : ```#00001_FEAT_adding-a-new-feature```

### Liste des types et leur description

| Type | Description |
| ------ | ------ |
| feat | Introduction d’une nouvelle fonctionnalité |
| fix | Correction d’une erreur |
| docs | Modification de la documentation |
| style | Changement qui n’affecte pas la signification du code (espace, formatage, points-virgules manquants, etc...) |
| refactor | Changement de code qui ne corrige pas d’erreur et n’ajoute pas de fonctionnalité |
| perf | Changement de code qui améliore les performances |
| test | Ajout de tests manquants ou correction des tests existants |
| revert | Annule un commit précédent |
| build | Changements qui affectent le système de build ou les dépendances externes (npm, make...) |
