import { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    // L'intervalle augmente le temps chaque seconde
    const id = setInterval(() => {
      setSecondes((valeurPrecedente) => valeurPrecedente + 1);
    }, 1000);

    // Nettoyage pour arrêter l'intervalle
    return () => clearInterval(id);
  }, []);

    return (
        <p style={{
            fontSize: '1.4rem',
            fontWeight: '600',
            color: '#dc2626',
            textAlign: 'center',
            margin: '1rem 0',
        }}>
            Durée écoulée : {secondes} seconde{secondes !== 1 ? 's' : ''}
        </p>
    );
}

export default Timer;