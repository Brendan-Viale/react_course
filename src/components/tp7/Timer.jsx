import {useState, useEffect, useRef} from 'react';

export const Timer = () => {
    //On utilise l'objet de type Date afin de récupérer la date courante
    const today = useRef(new Date());
    const refreshToday = () => {
        today.current = new Date();
    }
    // On récupère les heures, minutes et secondes en y ajoutant un "0" devant s'il n'y a qu'un seul chiffre (donc de 0 à 9)
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes =  ':' + ("0" + today.getMinutes()).slice(-2) ;
    let seconds = ':' + ("0" + today.getSeconds()).slice(-2);
    const [currentTime, setTime] = useState(hours + minutes + seconds);
    // On utilise useEffect afin de lancer les instructions avant le 1er chargement et à chaque re-render
    // Ici, on met à jour le state currentTime après 1 seconde grâce au setTimeOut(), ce qui re-render le composant (car modification de state)
    // Cela rappelle les instructions du useEffect une nouvelle fois (donc remet à jour le state après 1sec)
    useEffect(() => {
        setTimeout(() => {
            // On récupère la date et reproduit le format voulu une nouvelle fois
            refreshToday();
            setTime(("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2) + ':' + ("0" + (today.getSeconds())).slice(-2));
        }, 1000);
        // On ne souhaite rentrer dans le useEffect que si le state currentTime est modifié
    }, [currentTime]);

    // Un nouveau useEffect pour afficher "BOOM" après 10sec
    // On le met dans un useEffect à part afin que les instructions ne soient pas rappelées (faites le test de mettre l'alert() dans le précédent useEffect)
    useEffect(() => {
        setTimeout(() => {
            alert("BOOM");
        }, 10000);
        // On donne un tableau de dépendances vide afin que les instructions ne soient qu'au 1er chargement uniquement
    }, []);

    return(
        <p>Heure : {currentTime}</p>
    )
}
