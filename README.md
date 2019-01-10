# The Movie Challenge

Pour réussir ce challenge, vous allez devoir développer une application front-end ou backend. Vous avez la possibilité de choisir l’une des deux applications proposées: Movies explorer ou Movie Time. 

À la fin du challenge, vous devez rendre:

1. un repo Github avec tout votre code
2. un fichier README.md qui explique comment tester votre application
3. le formulaire Google Forms: [https://goo.gl/nwZUVk](https://goo.gl/nwZUVk)



## Option 1: Movies explorer

**Introduction**

Si vous optez pour cette option vous allez devoir développer une application web de suggestion de films. Dans un premier temps, l’utilisateur sélectionne dans une liste les films qu’il a déjà visionnés et appréciés. Après avoir fait son choix, l’application lui propose une liste de suggestions de films prochainement en salles, basée sur ses préférences.

**Consigne**

- Mettre en place un environnement de développement front-end basé sur un framework de votre choix (React, Vue.js, Angular, ou autre).

- Utiliser l’API publique de [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) afin de récupérer les données des films. Pour éviter de vous faire perdre du temps précieux, vous utiliserez l'API key que nous vous fournissons et suivrez les instructions dans les sections qui suivent concernant l'utilisation de l'API.

  Comme vous serez plusieurs à tester l'API simultanément, il sera nécessaire de contourner la limitation sur le nombre de requêtes par adresse IP. Une solution est par exemple d'utiliser ce proxy:  [dev-proxy-server](https://github.com/paulnta/dev-proxy-server) 

- Vous mettrez l'accent sur la partie fonctionnelle plutôt que sur le design ou l'expérience utilisateur. 

- Implémenter les fonctionnalités demandées dans les étapes listées ci-dessous.



### 1. Films populaires (3pt)

Dans cette première étape, nous demandons d'afficher une liste de films. Pour cela, vous pouvez écrire un script qui récupère les données de l’endpoint suivant:

```
https://api.themoviedb.org/3/movie/popular?page=1&api_key=<YOUR_API_KEY>
```

Voici un example de réponse pour cette requête retournant la première page de résultats (20 films les plus populaires).

```js
{
  "page": 1,
  "total_results": 19854,
  "total_pages": 993,
  "results": [
    {
      "vote_count": 2070,
      "id": 297802,
      "video": false,
      "vote_average": 6.9,
      "title": "Aquaman",
      "popularity": 499.057,
      "poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
      "original_language": "en",
      "original_title": "Aquaman",
      "genre_ids": [28, 14, 878, 12],
      "backdrop_path": "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
      "adult": false,
      "overview": "Arthur Curry learns that...",
      "release_date": "2018-12-07"
    }
    // ...
  ]
}
```



**Répartion des points:**

- (1pt) – Si vous récupérez au minimum 20 films.

- (2pt) – Si vous affichez la liste des films avec leur image de couverture.

- *(BONUS 0.5pt) – si vous affichez plus de détails par films (titre, date de sortie, genres). La liste de tous les genres officiels est disponible à l'endpoint suivant:*

  ```
  http://api.themoviedb.org/3/genre/movie/list?api_key=<YOUR_API_KEY>
  ```


### 2. Films prochainement à l'affiche (2pt)

Vous allez devoir créer une deuxième vue affichant la liste des films prochainement en salles. Il doit être possible de naviguer entre les deux vues. Ces informations sont accesibles à l'endpoint suivant:

```
https://api.themoviedb.org/3/movie/upcoming?page=1?api_key=<YOUR_API_KEY>
```

La réponse est tout à fait similaire à celle de l'endpoint `/movie/popular`.



**Répartion des points:**

- (1pt) – Si vous affichez la liste des films prochainements en salle avec leurs pochettes. Nous pour cette vue, nous vous demandons de récupérer au moins 100 films.
- (1pt) – Si il est possible de passer d’une vue à l’autre en cliquant sur un bouton. (Vue analyse, Vue prochainement en salle). Il n’est pas nécessaire de mettre en place un *router*.
- *(BONUS 0.5pt) – Si vous récupérez exactement toutes les pages résultats de manière dynamique.*

### 3. Sélection de films (2pt)

Le but de cette étape est de permettre à l'utilisateur de sélectionner/déselectionner des films. **Vous ajouterez cette fonctionnalité uniquement dans la vue "films populaires"** de l'étape 1.

**Répartion des points:**

- (1pt) – Il est possible de cliquer sur un film pour le sélectionner/désélectionner. Vous maintenez une liste de films sélectionnés. Nous ne vous demandons pas de persister ces informations dans une quelconque base de donnée. Par exemple, si vous utilisez React, maintenir cette liste dans le `state` d’un composant est suffisant.
- (1pt) – L’interface indique l'état du film (sélectionné/désélectionné). Vous pouvez par exemple rajouter une bordure autour de la pochette. Utilisez la manière la plus simple à implémenter.

### 4. Recommendations (1pt)

**Vous utiliserez la vue "films prochainement à l'affiche"** pour proposer des recommendations basée sur les préférences de l'utilisateurs. Le but étant d'affiner les résultats reçus à l'endpoint `/movie/upcoming` en gardant uniquement ceux qui correspondent à certains critères. C'est à vous de définir les critères de filtre en vous basant sur la liste des films sélectionnés par l'utilisateur.

Répartion des points:

- (0.5pt) – Vous avez appliqué un filtre sur les films prochainement à l'affiche afin d’en faire des suggestions.
- (0.5pt) – Le filtre appliqué est basé sur une ou plusieurs propriétés des films sélectionnés par l’utilisateur.
- *(BONUS 0.5pt): Si les recommendations sont ordonnées selon leur pertinence.*



### 5. Qualité du code (1pt)

Les points pour cette étape sont répartis comme suit:

- 0.25pt) – La structure des fichiers est cohérente (
- (0.25pt) – Tout code non utilisé est supprimé y compris les logs de debug dans la console.
- (0.25pt) – Votre code est suffisament documenté lorsque nécessaire.
- (0.25pt) – Les variables d’environnement sont utilisées lorsque nécessaire.
- *(BONUS 0.5pt) – Les fonctions complexes sont également testées avec Mocha et Chai ou autres. Par exemple vous pouvez créer un test qui valide que la logique utilisée pour créer/trier les recommendations fonctionne correctement.*

### 6. Déploiement (1pt)

Finalement, vous allez déployer votre application statique sur la plateforme de votre choix. Pour gagner du temps, considérez l’utilisation de l’outil <https://zeit.co/now>.



## Option 2: Movie Time

**Introduction**

Si vous optez pour cette option, vous allez devoir développer une API permettant de récupérer des informations sur des films. Depuis cette API, les utilisateurs auront la possibilité de récupérer une liste de films populaire et de gérer leur *watchlist* (liste des films à voir plus tard).

**Consigne**

- Mettre en place un environnement de développement backend (repo, linter) avec Node.js
- Implémenter une API REST ou GraphQL.
- Persister les données dans une base de donnée MongoDB avec un ORM tels que mongoose ou équivalent.
- Implémenter les fonctionnalités et endpoints demandées dans les étapes listées ci-dessous.



### 1. Importer une collection de films (0.5pt)

Le fichier `movies.json` contient une liste de 10’000 films à importer dans votre de base donnée. Pour cela vous pouvez utiliser la commande `mongoimport` .

**Example localhost**

Cette commande peut être utilisé de la manière suivante pour importer un fichier dans une base de donnée locale.

```
mongoimport --host localhost --port 27017 --db movie-time --collection movies --drop --file data/movies.json --jsonArray
```

 `--drop` permet de vider la collection avant l'importation, ``--jsonArray` permet d'importer un tableau JSON et `db` est le nom de la base de donnée:



**Exemple Mongo Atlas**

Lors du déploiement de votre API, vous aurez également besoin d'une base de donnée en ligne. Pour cela vous pouvez par exemple utiliser [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Afin de pouvoir exécuter la commande ``mongoimport` vous devez au préalable: 

- avoir un compte Mongo Atlas avec un cluster actif.

- avoir créé MongoDB user configurable depuis l’onglet: Clusters > Security > MongoDB users

- L'adresse IP courante incluse dans la whitelist: Clusters > Security > IP Whitelist

- connaître le `DATABASE_HOST` ayant la forme suivante:

  ```
  <NOM_DU_REPLICASET>/<HOST_1:port>,<HOST_2:port>,<HOST_3:port>
  ```

  Pour trouver cette url ainsi que la commande à exécuter, naviguez vers l'onglet: "Command Line tools" de votre cluster.

```
mongoimport --host myAtlasRS/atlas-host1:27017,atlas-host2:27017,atlas-host3:27017 --ssl --username myAtlasUsername --password myAtlasPassword --authenticationDatabase admin --db movie-time --collection movies --jsonArray --file data/movies.json
```



**Vérification**

Si l’opération s’est bien déroulée vous devriez avoir le message `imported 10000 documents` affiché dans le terminal



**Répartion des points:**

- (1pt) – Les films ont étés importés dans un MongoDB local ou distant. Ajoutez un screenshot de l'opération réussie.


### 2. Liste des films (3pt)

Une fois la collection de films importée, vous allez devoir créer un endpoint pour récupérer une liste paginée des films.

**Répartion des points:**

- (1pt) – Utiliser l’ORM de votre choix afin de créer le model `Movie` contenant toutes les propriétés définies dans le dataset.
- (1pt) – créer le endpoint /movies permettant de récupérer la liste complète des films.
- (1pt) - paginer les résultats de ce endpoint. Utiliser la méthode de votre choix.



### 3. Authentification (3pt)

Pour cette étape vous allez devoir créer le model `User` ainsi qu'un endpoint pour créer un utilisateur et pour s'authentifier. Pour cela vous avez le choix d'utiliser les outils que vous souhaitez tels que [passportjs](http://www.passportjs.org), etc..) à condition que les utilisateurs soient stockés dans votre base de donnée MongoDB.

Si vous optez pour une solution avec [express](https://expressjs.com/fr/) + [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) vous pouvez partir des examples suivants:

- `/auth/register`: Pour la création d'un nouvel utilisateur

  ```js
  app.post('/auth/register', (req, res) => {
    const { username, password } = req.body;
    // register a user and send 201 Created.
  });
  ```

- `/auth/login`: Pour l'authentification. 

  ```js
  const jwt = require('jsonwebtoken');
  
  app.post('auth/login', (req, res) => {
    const { username, password } = req.body;
    // check the credentials
    // generate a token token -> jwt.sign()
    // include the userId inside the token's payload
    // if the check fails, send 401 Unauthorized
  })
  ```

- *(Bonus) Middleware d'authentification*

  ```js
  const jwt = require('jsonwebtoken');
  
  app.use((req, res, next) => {
    const token = req.headers.authorization;
    // verify the token -> jwt.verify()
    // attach the payload to req.user
    // call next() when you're done
  })
  ```


**Répartition des points:**

- (1pt) – Le Model `User` contient au minium le nom d'utilisateur ou l'email et le mot de passe. Pour ce challenge, nous acceptons les mots de passe stockés en clair à condition qu’ils ne soit jamais retournés à l’utilisateur.
- (1pt) – Lors de la création d'un nouvel utilisateur, l'API envoie le status `201 Created`. Le nom d'utilisateur et l'email sont unique.
- (1pt) – Lors du login, l'API retourne un JWT token contenant au minimum l'id de l'utilisateur.
- *(BONUS 0.5pt) – Vous implémentez (à la main ou à l'aide d'une libraire) un middleware qui attache l’utilisateur courant à l’objet requête `req.user`.* 

### 4. Watchlist (2pt)

Vous allez devoir ajouter implémenter la fonctionnalité *watchlist*. Les utilisateurs possèdent une *watchlist* (liste de films à regarder).  Pour cela vous devez adapter la structure de la base de donnée et ajouter des endpoints permettant de récupérer des *watchlists* et de les modifiers.

**Répartition des points:**

- (1pt) - Récupérer la liste des films se trouvant dans la watchlist d’un utilisateur. (retourner une liste d’identifiants n’est pas suffisant).
- (1pt) – Ajouter un film dans la *watchlist* d’un utilisateur. 
- *(Bonus): Sécuriser ces endpoints afin de les rendres accessible uniquement aux utilisateurs connectés. Utiliser l’id de l’utilisateur connecté lors de l’ajout d’un film dans une watchlist.*

### 5. Qualité du code (1pt)

Les points pour cette étape sont répartis comme suit:

- (0.25pt) – La structure des fichiers est cohérente 
- (0.25pt) – Tout code non utilisé est supprimé y compris les logs de debug dans la console 
- (0.25pt) – Vous utilisez un linter
-  (0.25pt) – Les variables d’environnement sont utilisées lorsque nécessaire.
- *(BONUS 0.5pt): Vous créez au moins un test unitaire afin de valider la fonctionnalité de votre choix.*

### 6. Déploiement (0.5pt)

Finalement vous allez devoir déployer votre API et la base de donnée sur la plateforme de votre choix.
