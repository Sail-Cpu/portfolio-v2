# Utiliser une version Alpine de Node.js
FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port pour le serveur de développement React
EXPOSE 3000

# Démarrer l'application React
CMD ["npm", "start"]
