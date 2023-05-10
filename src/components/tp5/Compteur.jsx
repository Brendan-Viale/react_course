import {useState} from 'react';

export const Compteur = () => {
    // Le state est expliqué dans le fichier Player.jsx
    const [compteur, setCompteur] = useState(0);
    
    return(
        <section id="compteur">
            {/* Si compteur est supérieur à 10, affiche la pop-up "BOOM", sinon ne fait rien */}
            {(compteur > 10) ? alert('BOOM') : null}
            <p id="compteurPrompt">{compteur}</p>
            {/* Si on clique sur le bouton "-", on modifie compteur en lui enlevant 1 */}
            <button onClick={() => {setCompteur(compteur-1)}}>-</button>
            {/* Si on clique sur "+", on incrémente compteur */}
            <button onClick={() => {setCompteur(compteur+1)}}>+</button>
            {/* Si on clique sur reset, on le remet à 0 */}
            <button onClick={() => {setCompteur(0)}}>reset</button>
        </section>
    )
}