# Piiquante
<h1>P6 · Construisez une API sécurisée pour une application d'avis gastronomiques.</h1>

<h2>Configuration de l'environnement de travail et initialisation du projet.</h2>

<p><b>Cloner dans le dossier "frontend" le code fourni pour initialiser ce projet depuis ce repository : </b></p>
    https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6   <br><br>
<p><b>Initialiser un dépôt Git del projecte.</b></p>
<p>Depuis la terminal, entrer dans le répertoire frontend (cd frontend) et exécuter (npm install) pour installer les dépendances requises par l'application. Lancer le serveur de développement avec (npm run start), et on peut maintenant ouvrir la page http://localhost:4200 dans le navigateur.</p>

<img src = "./ImgReadme/Inici_01.png"/>

<p>Il est important d'avoir un terminal en cours d'exécution (npm run start) pendant que nous travaillons pour pouvoir tester le code en temps réel.<br>
N'oublier pas de créer un fichier ".gitignore" contenant la ligne (node_modules) pour éviter surcharger le dépôt.</p>

<p>Pour terminer la configuration de notre environnement de développement, à partir de la racine du projet, créer un autre dossier appelé "backend".<br>
Ouvrir un autre terminal et aller dans ce dossier (cd backend), pour initialiser le projet en exécutant (npm init).L'unique chose à changer c'est "server.js" comme point d'entrée. <br>
Un fichier "package.json" est généré dans lequel les détails de tous les packages "npm" qui seront utilisés dans le projet seront enregistrés.</p>

<p>Créez le premier serveur Node : créez un fichier "server.js" dans le dossier "backend".</p>

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

