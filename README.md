# Piiquante <br>

<img src = "./ImgReadme/Piiquante.png"/>

<h1>P6 · Construisez une API sécurisée pour une application d'avis gastronomiques.</h1>

<h2>Configuration de l'environnement de travail et initialisation du projet.</h2>

<p><b>Cloner dans le dossier "frontend" le code fourni pour initialiser ce projet depuis ce repository : </b></p>
    https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6   <br><br>
<p><b>Initialiser un dépôt Git del projecte.</b></p>
<p>Depuis la terminal, entrer dans le répertoire frontend "cd frontend" et exécuter "npm install" pour installer les dépendances requises par l'application. Lancer le serveur de développement avec "npm run start", et on peut maintenant ouvrir la page http://localhost:4200 dans le navigateur.</p>

<img src = "./ImgReadme/Inici_01.png"/>

<p><b>Il est important d'avoir un terminal en cours d'exécution "npm run start" pendant que nous travaillons pour pouvoir tester le code en temps réel.</b></p>
<br>
<p>. N'oublier pas de créer un fichier ".gitignore" contenant la ligne "node_modules" pour éviter surcharger le dépôt.</p>

<p>. Pour terminer la configuration de notre environnement de développement, à partir de la racine du projet, créer un autre dossier appelé "backend".<br>
. Ouvrir un autre terminal et aller dans ce dossier "cd backend", pour initialiser le projet en exécutant "npm init". L'unique chose à changer c'est "server.js" comme point d'entrée. <br>
. Un fichier "package.json" est généré dans lequel les détails de tous les packages "npm" qui seront utilisés dans le projet seront enregistrés.</p>

<h2>Construire le serveur.</h2>

<p>. Créer le premier serveur Node avec le fichier "server.js" dans le dossier backend.</p>

<p><b>Démarrer le server.</b></p>
        <p>· Importer le package http depuis Node.</p>
        <p>· Créer le corps du serveur.</p>
        <p>· Déclarer le port de connexion"3000" et l'alternative.</p>

<p><b>Recommandation:</b></p>
        <p>· Utiliser l'outil de test Postman pour effectuer les requêtes vers l'URL: http://localhost:3000 .</p>

<p><b>Installer nodemon</b></p>
        <p>· Depuis le backend exécuter la commande: "npm install -g nodemon" .</p>
        <p>· Désormais, au lieu d'utiliser "node server" pour démarrer le serveur, utiliser "nodemon server" .</p>

<p> Nodemon surveille les modifications des fichiers et redémarre le serveur et garantit d'avoir le server toujours mise à jour sans devoir le relancer manuallement.</p>

<h2>Créer l'aplication Express.</h2>

<p>L'utilisation du framework Express simplifie les tâches pour coder des serveurs web en Node, en nous permettant de déployer nos API beaucoup plus rapidement.</p>

<p><b>Installer Express.</b></p>
        <p>· Exécuter la commande "npm install express --save" à partir du dossier backend.</p>
        <p>· Créer un fichier "app.js" pour placer l'aplication Express.</p>
        <p>· Exécuter l'application Express sur le serveur Node.</p>

<p><b>Préparer des middlewares.</b></p>
    <p>· Chaque élément de middleware reçoit les objets <b>request</b> et <b>response</b>, peut les lire, les analyser et les manipuler, le cas échéant. <br> 
    · Le middleware Express reçoit également la méthode <b>next</b> , qui permet à chaque middleware de passer l'exécution au middleware suivant. <br>
    · Cette application Express contiendra huit éléments de middleware.</p>

<p><b>Améliorer server.js.</b></p>
    <p>· La fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;<br>
    · La fonction errorHandler recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;<br>
    · Un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.</p>

<h2>Configurez votre base de données. MongoDB</h2>

<p>MongoDB est une base de données NoSQL. Cela signifie que l'on ne peut pas utiliser SQL pour communiquer avec. <br>
Les données sont stockées comme des collections de documents individuels décrits en JSON "JavaScript Object Notation". <br>
Il n'y a pas de schéma strict de données "on peut écrire, en gros, ce que l'on veut où l'on veut", et il n'y a pas de relation concrète entre les différentes données.</p>

<p><b>Configurer MongoDB Atlas.</b></p>
        <p>· Créer un compte gratuit sur le site web de MongoDB.</p>
        <p>· Créer un <i>cluster</i> configuré avec l'<b>option AWS</b> et <b>uniquement les options gratuites</b>.</p>
        <p>· Ajouter un utilisateur disposant de la capacité de lecture et d'écriture pour n'importe quelle base de données, dans l'onglet <b>Database Access</b>.<br>
        N'oublier pas de bien noter le nom d'utilisateur et le mot de passe pour connecter l'API au <i>cluster</i>.</p>
        <p>· Dans l'onglet <b>Network Access</b> ajouter une adresse IP "ADD IP ADDRESS", choisir l'option "ALLOW ACCESS FROM ANYWHERE" qui permet à tout utilisateur d'accéder à l'API. Une entrée de liste blanche sera créée avec l'IP "0.0.0.0".</p>

<p><b>Connecter l'API au <i>cluster</i> MongoDB.</b></p>
        <p>· Dans l'onglet <b>Atlas</b> cliquer sur <b>Connect</b> et choisir <b>Connect your application</b>.
        <p>· Sélectionner la version la plus récente de Node.js, et <b>Connection String Only</b>.</p>
        <p>· Copier la chaine de caractères du code retournée. Exemple: <br>
        mongodb+srv://<b>NomUtilisateur</b>:<b>password</b>@clusterocr.76dpav8.mongodb.net/?retryWrites=true&w=majority</p>
        <p>· Revenir au projet et, à partir du backend, exécuter "npm install mongoose" pour installer le package Mongoose.</p>
        <p>· Importer et connecter mongoose dans app.js.</p>

<h2>Préparer la base de données pour les informations d'authentification.</h2>

<p>· Étant donné que l'authentification doit être implémentée dans l'API, par e-mail et mot de passe, le mot de passe de chaque utilisateur doit être stocké sous la forme d'un <b>hash</b> ou d'une chaîne chiffrée.</p>

<p><b>Créer un modèle de données.</b></p>
        <p>· Afin qu'il n'y ait pas d'e-mails en double entre différents utilisateurs, nous utiliserons dans le schéma le mot-clé <b>"unique"</b> pour l'attribut d'e-mail.</p>
        <p>· On peut avoir des erreurs ilisibles de la part de mongoose, pour le résoudre; installer un package de validation pour prévalider les informations avant de les enregistrer. Exécuter la commande suivante à partir du backend "npm install --save mongoose-unique-validator".</p>
        <p>· Ajouter et appliquer ce validateur en tant que plug-in au schéma.</p>

<h2>Créer des utilisateurs.</h2>

<p><b>Configurer les routes d'authentification.</b></p>
        <p>· On besoin un contrôlleur et un routeur, puis enregistrer ce routeur dans l'application Express.</p>
        <p>· Créer le dossier controllers et dedans le fichier user.js.</p>
        <p>· Créer le dossier routes et dedans, a nouveau un autre fichier user.js.</p>
        <p>· Créer les routes d'authentification selon sont prévues par l'application front-end.</p>
        <p>. Importer le routeur dans app.js et enregistrer les routes vers la racine API de toutes les routes.</p>
        <p>· Importer le controlleur dans routes/user.js pour associer les fonctions des differentes routes, utilisant deux routes POST avec les métodes "/signup" et "/login".</p>

<p><b>Créer des utilisateurs.</b></p>
        <p>· Comencer par installer le package de chiffrement <b>bcrypt</b> pour la fonction <b>signup</b><br> "npm install --save bcrypt".</p>
        <p>. Importer le model User dans le controlleur.</p>
        <p>· Importer également bcrypt.</p>
        <p>· Dans la fonction signup, hacher le mot de pass et avec le <b>hash</b> créé par bcrypt, s'enregistre l'utilisateur "user" dans la base de donnés.</p>

<h2>Vérifiez l'identification d'un utilisateur.</h2>

<p><b>Implémenter la fonction login.</b></p>
        <p>· Dans cette fonction, les informations d'identification de l'utilisateur sont vérifiées, le user_id est transmis à partir de la base de données ainsi qu'un token web JSON signé(contenant également l'_id de l'utilisateur).</p>
        <p>· Notre modèle Mongoose permet de vérifier si l'email saisi par l'utilisateur existe dans la base de données :</p>
        <p>     - Sinon, une erreur <b>"401 Unauthorized"</b> est envoyée.</p>
        <p>     - Si l'e-mail correspond à un utilisateur existant, continue.</p>
        <p>· Pour comparer le mot de passe saisi par l'utilisateur avec le <b>hash</b> enregistré dans la base de données, c'est utilisée la fonction "compare" de "bcrypt".</p>
        <p>     - S'ils ne correspondent pas, nous renvoyons une erreur <b>"401 Unauthorized"</b> avec le même message que lorsque l’utilisateur n’a pas été trouvé, afin de ne pas laisser quelqu’un vérifier si une autre personne est inscrite sur notre site.</p>
        <p>     - S'ils correspondent, les informations d'identification de notre utilisateur sont valides. Dans ce cas, nous renvoyons une réponse <b>"200</b> contenant l'ID utilisateur et un token. Ce token est une chaîne générique pour l'instant, mais nous allons le modifier et le crypter dans le prochain chapitre.</p>

<h2>Créer des tokens d'authentification.</h2>

<p>Les <i>tokens</i> d'authentification permettent aux utilisateurs de se connecter une seule fois à leur compte. Lorsqu'ils se connectent, ils reçoivent leur <i>token</i> et le transmettent immédiatement dans chaque requête, ce qui permet au back-end de vérifier que la requête est authentifiée.</p>


        <p>· Pour créer et vérifier les <i>tokens</i> d'authentification, nous avons besoin d'un nouveau package, installez-le avec la commande suivante : "npm install --save jsonwebtoken".</p>
        <p>· Importer le package dans notre contrôleur utilisateur.</p>
        <p>· L'utiliser dans la fonction <b>login.</b></p>
        <p>· Utiliser la fonction <b>sign</b> de <b>jsonwebtoken</b> pour chiffrer un nouveau <i>token</i>.</p>
        <p>· Utiliser une chaîne secrète pour crypter le <i>token</i>; <b>CLAU_SECRETA_ALEAT0RIA_PER_ESMIC0LAR_C0NTRASENYA</b> .</p>
        <p>· Définir la durée de validité du <i>token</i> à 24h.</p>
        <p>. Envoyer le <i>token</i> au front-end avec la réponse.</p>

<h2>Configurer le middleware d'authentification.</h2>

<p>· Créer un dossier middleware et un fichier auth.js à l'intérieur.</p>
<p>· Dans ce middleware :<br>
        · Étant donné que de nombreux problèmes peuvent se produire, nous insérons tout à l'intérieur d'un bloc <b>try...catch</b>.<br>
        · Nous extrayons le <i>token</i> du header <b>Authorization</b> de la requête entrante. N'oubliez pas qu'il contiendra également le mot-clé <b>Bearer</b>. Nous utilisons donc la fonction <b>split</b> pour tout récupérer après l'espace dans le header. Les erreurs générées ici s'afficheront dans le bloc <b>catch</b>.<br>
        · Nous utilisons ensuite la fonction <b>verify</b> pour décoder notre <i>token</i>. Si celui-ci n'est pas valide, une erreur sera générée.<br>
        · Nous extrayons l'ID utilisateur de notre <i>token</i> et le rajoutons à l’objet <b>Request</b> afin que nos différentes routes puissent l’exploiter.<br>
        · Dans le cas contraire, tout fonctionne et notre utilisateur est authentifié. Nous passons à l'exécution à l'aide de la fonction <b>next()</b>.</p>

<p>· Maintenant, nous devons appliquer ce <i>middleware</i> à nos routes <b>stuff</b>, qui sont celles à protéger. Dans notre routeur <b>stuff</b>, nous importons notre <i>middleware</i> et le passons comme argument aux routes à protéger.</p>

<h2> Créer une route GET.</h2>

<p><b>Remettre le catalogue de sauces.</b></p>
        <p>· Passer a l'argument supplémentaire du métode <b>get</b> un <i>string</i> qui correspond à la route où i faut enregistrer cet élément de <i>middleware</i>. La route sera <b>http://localhost:3000/api/sauces (aussi appelée <i>endpoint</i>)</b>.
        <p>· Créer dans ce <i>middleware</i> un groupe d'articles avec le schéma de donnés comme demandé par le front-end. Puis envoyer ces articles sous le format JSON, avec un code (200) pou une demande réussie.</p>

<p><b>Traiter les Erreurs de CORS.</b></p>
<p>· CORS signifie « <b>Cross Origin Resource Sharing</b> ». Il s'agit d'un système de sécurité qui, par défaut, bloque les appels HTTP entre des serveurs <b><i>différents</b></i>, ce qui empêche donc les requêtes malveillantes d'accéder à des ressources sensibles. Dans notre cas, nous avons deux origines : <b>localhost:3000</b> et <b>localhost:4200</b> , et nous souhaiterions qu'elles puissent communiquer entre elles. Pour cela, nous devons ajouter des headers à nos objets <b>response</b>.</p>
        <p>· Dans <b>app.js</b>, ajouter un middelware avec trois headers qui permettron.<p>
                <p>- d'accéder à notre API depuis n'importe quelle origine ( <b>'*'</b> ) ;</p>
                <p>- d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (<b>Origin , X-Requested-With</b> , etc.) ;</p>
                <p>- d'envoyer des requêtes avec les méthodes mentionnées ( <b>GET</b> ,<b>POST</b> , etc.).
<p>· Le <i>middleware</i> ne prend pas d'adresse en premier paramètre, afin de s'appliquer à toutes les routes.

<h2> Créer une route POST.</h2>

<p><b>Recevoir des articles de l'app front-end.</b></p>
        <p>· Utiliser un middleware très simple disponible par le framework Express, qui prend toutes les requêtes qui ont comme Content-Type <b>application/json</b> et met à disposition leur <b>body</b> sur l'objet req.</p>
        <p>· Placer la route POST au-dessus du middleware pour les requêtes GET, car la logique GET interceptera actuellement toutes les requêtes envoyées à votre endpoint <b>/api/sauces</b> , étant donné qu'on ne lui a pas indiqué de verbe spécifique.

<h2> Créer un schéma de données.</h2>

<p>· L'un des avantages que nous avons à utiliser Mongoose pour gérer notre base de données MongoDB est que nous pouvons implémenter des schémas de données stricts, qui permettent de rendre notre application plus robuste. Commençons par créer un schéma Salsa (« varieté de sauce ») pour tout objet mis dans notre application.</p>

<p><b>Créer un schéma Salsa.</b></p>
        <p>· Commencer par créer dans le dossier models, un fichier appelé <b>Salsa.js</b>.</p>
        <p>· Salsa.js crée un schema de donnés qui contient tous les champs qu'on besoin pour chaque Salsa, indiquant leur type et leur caractère (required ou pas).</p>
        <p>· Pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose.</p>
        <p>· La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.</p>
        <p>· La méthode  model  transforme ce modèle en un modèle utilisable.</p>



