# Piiquante
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
