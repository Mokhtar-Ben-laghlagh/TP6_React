// App.js
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>TP React Hooks</h1>
            <p className="intro">
                Cette application présente quelques hooks React avec des exemples simples et visuels.
            </p>

            <div className="card">
                <h2>Compteur géré avec useReducer</h2>
                <Compteur />
            </div>

            <div className="card">
                <h2>Focus sur le champ texte (useRef)</h2>
                <FocusInput />
            </div>

            <div className="card">
                <h2>Nombre de rendus du composant (useRef + useEffect)</h2>
                <CompteurRendu />
            </div>

            <div className="card">
                <h2>Liste d'articles chargée via hook personnalisé</h2>
                <ListeArticles />
            </div>

            <div className="card">
                <h2>Chronomètre avec nettoyage (useEffect)</h2>
                <Timer />
            </div>
        </div>
    );
}

export default App;