# SupFlow — Documentation Succincte

## 1. Choix des frameworks : Angular & Spring Boot

Le projet utilise une architecture moderne basée sur deux technologies complémentaires :

### Front-end : Angular
Angular a été choisi pour les raisons suivantes :
- **Structure claire et modulaire** grâce aux composants.
- **TypeScript** permettant un code plus fiable et maintenable.
- **Gestion efficace du routing et des formulaires** (template-driven et reactive forms).
- **Évolutivité** adaptée aux applications professionnelles de grande taille.

### Back-end : Spring Boot
Spring Boot a été retenu pour construire une API backend robuste car il offre :
- **Configuration simplifiée** grâce à l’auto-configuration.
- **Création rapide d’API REST** via Spring Web.
- **Gestion de la sécurité** avec Spring Security.
- **Intégration facile avec les bases de données** .
- **Scalabilité et performance** adaptées aux applications professionnelles.
- **Écosystème mature** et largement utilisé dans l’industrie.

## 2. Fonctionnalités développées

Les principales fonctionnalités de SupFlow sont :

### Côté Angular :
- Dashboard utilisateur (statistiques + visualisation projet).
- Pages de gestion des projets (CRUD).
- Routing multi-pages.
- Interface responsive.

### Côté Spring Boot :
- API REST sécurisée.
- Gestion des projets (POST, GET, PUT, DELETE).
- Connexion base de données.
- Services + Repositories + Entities.


## 3. Étapes de lancement du projet

## 4. Lancer le projet

### Back-end (Spring Boot)

1. Se déplacer dans le dossier backend 

2. Installer les dépendances Maven :
mvn clean install

3. Lancer le serveur Spring Boot :
mvn spring-boot:run

API disponible à :
http://localhost:8080/api

### Front-end (Angular)
1. Se déplacer dans le dossier frontend 

2. Installer les dépendances :
npm install

3. Lancer Angular :
ng serve

4. Application disponible à :
http://localhost:4200/

Projet développé par Chayma Romdhane& Yassmine El Arbi.