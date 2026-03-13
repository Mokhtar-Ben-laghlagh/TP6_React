import { useRef } from 'react';

function FocusInput() {
  // Référence liée au champ input
  const inputRef = useRef(null);

  const handleClick = () => {
    // Mettre directement le curseur dans le champ
    inputRef.current.focus();
  };


    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
                ref={inputRef}
                placeholder="Saisir un texte..."
                style={{ flex: 1, minWidth: '220px' }}
            />
            <button onClick={handleClick}>Donner le focus</button>
        </div>
    );
}

export default FocusInput;