# Piiquante <br>
<img src = "./ImgReadme/Piiquante.png"/>
<h1>P6 · Construisez une API sécurisée pour une application d'avis gastronomiques.</h1>

<h2>Configuration de l'environnement de travail et initialisation du projet.</h2>

<p><b>Cloner dans le dossier "frontend" le code fourni pour initialiser ce projet depuis ce repository : </b></p>
    https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6   <br><br>
<p><b>Initialiser un dépôt Git del projecte.</b></p>
<p>Depuis la terminal, entrer dans le répertoire frontend (cd frontend) et exécuter (npm install) pour installer les dépendances requises par l'application. Lancer le serveur de développement avec (npm run start), et on peut maintenant ouvrir la page http://localhost:4200 dans le navigateur.</p>

<img src = "./ImgReadme/Inici_01.png"/>

<p><b>Il est important d'avoir un terminal en cours d'exécution (npm run start) pendant que nous travaillons pour pouvoir tester le code en temps réel.</b></p>
<br>
<p>. N'oublier pas de créer un fichier ".gitignore" contenant la ligne (node_modules) pour éviter surcharger le dépôt.</p>

<p>. Pour terminer la configuration de notre environnement de développement, à partir de la racine du projet, créer un autre dossier appelé "backend".<br>
. Ouvrir un autre terminal et aller dans ce dossier (cd backend), pour initialiser le projet en exécutant (npm init).L'unique chose à changer c'est "server.js" comme point d'entrée. <br>
. Un fichier "package.json" est généré dans lequel les détails de tous les packages "npm" qui seront utilisés dans le projet seront enregistrés.</p>

<h2>Construire le serveur.</h2>

<p>. Créez le premier serveur Node avec le fichier "server.js" dans le dossier backend.</p>

<p><b>Démarrer le server.</b></p>
        <p>· Importer le package http depuis Node.</p>
        <p>· Créer le corps du serveur.</p>
        <p>· Déclarer le port de connexion(3000) et l'alternative.</p>

<p><b>Recommandation:</b></p>
        <p>· Utiliser l'outil de test Postman pour effectuer les requêtes vers l'URL: http://localhost:3000 .</p>

<p><b>Installer nodemon</b></p>
        <p>· Depuis le backend exécuter la commande: (npm install -g nodemon) .</p>
        <p>· Désormais, au lieu d'utiliser (node server) pour démarrer le serveur, utiliser (nodemon server) .</p>

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
Les données sont stockées comme des collections de documents individuels décrits en JSON (JavaScript Object Notation). <br>
Il n'y a pas de schéma strict de données (on peut écrire, en gros, ce que l'on veut où l'on veut), et il n'y a pas de relation concrète entre les différentes données.</p>

<p><b>Configurer MongoDB Atlas.</b></p>
        <p>· Créer un compte gratuit sur le site web de MongoDB.</p>
        <p>· Créer un <i>cluster</i> configuré avec l'<b>option AWS</b> et <b>uniquement les options gratuites</b>.</p>
        <p>· Ajouter un utilisateur disposant de la capacité de lecture et d'écriture pour n'importe quelle base de données, dans l'onglet <b>Database Access</b>.<br>
        N'oublier pas de bien noter le nom d'utilisateur et le mot de passe pour connecter l'API au <i>cluster</i>.</p>
        <p>· Dans l'onglet <b>Network Access</b> ajouter une adresse IP(ADD IP ADDRESS), choisir l'option (ALLOW ACCESS FROM ANYWHERE) qui permet à tout utilisateur d'accéder à l'API. Une entrée de liste blanche sera créée avec l'ip (0.0.0.0).</p>

<p><b>Connecter l'API au <i>cluster</i> MongoDB.</b></p>
        <p>· Dans l'onglet <b>Atlas</b> cliquer sur <b>Connect</b> et choisir <b>Connect your application</b>.
        <p>· Sélectionner la version la plus récente de Node.js, et <b>Connection String Only</b>.</p>
        <p>· Copier la chaine de caractères du code retournée.<br>
        mongodb+srv://<b>NomUtilisateur</b>:<b>password</b>@clusterocr.76dpav8.mongodb.net/?retryWrites=true&w=majority</p>
        <p>· Revenir au projet et, à partir du backend, exécutez "npm install mongoose" pour installer le package Mongoose.</p>
        <p>· Importer et connecter mongoose dans app.js.</p>

<h2>Préparer la base de données pour les informations d'authentification.</h2>

<p>· Étant donné que l'authentification doit être implémentée dans l'API, par e-mail et mot de passe, le mot de passe de chaque utilisateur doit être stocké sous la forme d'un <b>hash</b> ou d'une chaîne chiffrée.</p>

<p><b>Créer un modèle de données.</b></p>
        <p>· Afin qu'il n'y ait pas d'e-mails en double entre différents utilisateurs, nous utiliserons dans le schéma le mot-clé <b>"unique"</b> pour l'attribut d'e-mail.</p>
        <p>· On peut avoir des erreurs ilisibles de la part de mongoose, pour le résoudre installer un package de validation pour prévalider les informations avant de les enregistre. Exécutez la commande suivante à partir du backend "npm install --save mongoose-unique-validator".</p>
        <p>· Ajouter et appliquer ce validateur en tant que plug-in au schéma.</p>
