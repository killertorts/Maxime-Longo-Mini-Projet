
# Tableau de Bord FTTH – Orange RDC

Ce projet est un tableau de bord interne semi-fonctionnel conçu pour surveiller et gérer les données clients FTTH (Fiber to the Home). Il est destiné uniquement à un usage interne et permet de suivre le statut des clients, les pannes et les interventions des techniciens.

## 🛠 Technologies utilisées

- React (avec Vite)
- Tailwind CSS
- React Router DOM
- JavaScript (ES6)
- HTML5 / JSX
- Node.js / npm

## 📋 Fonctionnalités

- Connexion sécurisée avec identifiants codés en dur (nom d'utilisateur : `JeanK`, mot de passe : `123456`)
- Barre latérale de navigation comprenant :
  - Changement de langue (Anglais / Français) *(principalement pour faciliter mon environnement de travail)*
  - Gestion de la liste des clients (Ajout / Suppression)
  - Simulation de panne (génère des rapports "simulés")
  - Déconnexion avec confirmation
- Section "Flux en direct" factice (simple modèle de gabarit)
- Interface interactive utilisant Tailwind CSS
- Toutes les fonctionnalités fonctionnent hors ligne en local

## 🧪 Installation et Exécution

1. Cloner ou télécharger le projet
2. Ouvrir le dossier dans VS Code
3. Exécuter :
   ```bash
   npm install
   npm run dev
   ```
4. Aller sur : `http://localhost:5174` ou le port affiché dans le terminal.

## 🧩 Identifiants de Connexion

- Nom d'utilisateur : JeanK  
- Mot de passe : 123456

## 💡 Remarques

- Le tableau de bord n’utilise ni base de données ni backend. Toutes les données sont simulées dans l’application.
- Le changement de langue met à jour dynamiquement tous les textes de l’interface entre l’anglais et le français.
- L’application est construite pour être réaliste dans le cadre d’un entretien d’embauche ou d’une démonstration interne.

## ⚠️ Problèmes rencontrés

- Des erreurs de configuration de React Router ont initialement entraîné des écrans blancs.
- L'importation d'images a échoué en raison de chemins incorrects.
- Des conflits d'importations dynamiques avec Vite ont nécessité des ajustements de code.
- L'intégration de Google Maps a échoué à cause de problèmes de clé/sécurité, donc remplacée par une section "Flux en direct".
- Le réglage fin des boutons (simulations aléatoires, suppression par menu déroulant) a demandé des essais et erreurs.

---

Ce projet m’a permis de renforcer ma compréhension des workflows modernes de React et de la gestion d’état des interfaces, et il est conçu pour refléter un outil interne semi-professionnel dans un contexte télécom.
