# Pour lancer le projet

## Dans le dossier serveur

`yarn`

`yarn start`

## Dans le dossier client

`yarn`

`yarn start`

Pour lancer les tests

`yarn test`

# La demande ressemblait beaucoup à un système de chat ainsi j'ai pris l'initiative d'en faire un vrai en websocket.

Ne sachant pas votre langage de prédilection j'ai rédigé le readme en français mais j'ai plutôt l'habitude de tout écrire en anglais.

J'ai pris une journée (équivalent journée de travail donc 8h d'affilées à peu près) pour effectuer ce projet.

J'ai relu que vous vouliez une approche API centrique mais comme il manque la partie graphql que j'évoque plus bas je me suis permi d'ajouter un peu de redux-saga pour gérer du side effect comme on aurait eu avec des fetch.

## Je me permet aussi d'ajouter une liste d'exemple des fonctionnalités que j'avais prévu de développer avec plus de temps devant moi:
Ajouter l'heure des messages
Utiliser isPublic et du routing pour faire une page par utilisateur en cliquant sur la colonne de gauche sur un utilisateur pour des conversations privées (en passant l'id utilisateur dans la route)
J'ai fais un POC sur graphql-ws il y a deux semaines et j'avais dans l'idée de faire une API graph pour la partie utilisateur et utiliser le websocket pour la diffusions des messages mais je me suis contenté d'un serveur ws standard comme la partie serveur n'était pas la priorité
Pourquoi pas des notifications avec un service worker
Ajouter des alias (je me suis fais la réflexion en consommant mes composant du dossier commons)

En espérant que ce projet saura satisfaire vos attentes.

P.A