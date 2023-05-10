import {useState} from 'react';

export const Player = () => {
    // On crée notre useState. Concrètement, player devient une variable d'état modifiable grâce à la fonction setPlayer()
    // La déclaration se fait de cette façon : const [nomDeVariable, fonctionPourModifierVariable] = useState(valeurInitiale)
    // Une variable d'état est une variable dont la valeur peut différer à chaque re-render du composant
    // A noter que l'utilisation de la fonction setPlayer impliquera automatiquement le re-render du composant
    const [player, setPlayer] = useState("");
    // Fonction appelée au onChange de l'input, affecte au state "player" ce qu'est en train de taper l'utilisateur
    const onChangePlayer = (event) => {setPlayer(event.target.value)};
    return(
        <section id="player">
            {/* Utilisation du ternaire : Si player a une valeur, on l'affiche, sinon non */}
            {player ? <p>{player}</p> : null}
            <label htmlFor="player">Nom du joueur : </label>
            {/* Je récupère ce que tape l'utilisateur dans le champ grâce à l'event onChange */}
            <input id="playerInput" type="text" name="player" onChange={onChangePlayer} value={player} />
        </section>
    )
}