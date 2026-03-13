# TP React Hooks – Exemples Simples

Application de démonstration des principaux **React Hooks** avec des exemples concrets et pédagogiques.

Projet créé dans le cadre d’un TP pour comprendre et manipuler :

- useState
- useEffect
- useRef
- useReducer
- Custom Hook (useFetch)

## Aperçu des composants

| Composant          | Hook principal       | Fonctionnalité principale                              |
|--------------------|----------------------|--------------------------------------------------------|
| Compteur           | useReducer           | Compteur simple avec +1 / -1                           |
| FocusInput         | useRef               | Focus automatique sur un champ input via un bouton     |
| CompteurRendu      | useRef + useEffect   | Compte et affiche le nombre de rendus du composant     |
| ListeArticles      | Custom Hook (useFetch) | Récupère et affiche une liste d’articles (JSONPlaceholder) |
| Timer              | useEffect + setInterval | Chronomètre qui compte les secondes écoulées          |

## Technologies utilisées

- **React** (avec hooks)
- **fetch** API (pour les requêtes HTTP)
- **CSS vanilla** (pas de framework CSS)
````
src/
├── App.js                # Composant principal + organisation des exemples
├── App.css               # Styles globaux simples
├── Compteur.js           # Exemple useReducer
├── FocusInput.js         # Exemple useRef + focus input
├── CompteurRendu.js      # Démonstration useRef pour compter les rendus
├── useFetch.js           # Hook personnalisé pour fetch + loading/error
├── ListeArticles.js      # Utilisation de useFetch
├── Timer.js              # Exemple useEffect + setInterval + cleanup
└── index.js

````
## Resultat d'execution


https://github.com/user-attachments/assets/282be10b-c37b-44f3-a910-b626b61fe08d


