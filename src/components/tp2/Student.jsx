//On peut importer du style dans le composant directement, cela permet de l'exporter avec sa mise en forme, même dans un tout autre projet
import "./styles/students.css";

//Je définis le paramètre "props" qui contiendra tous les "attributs" donnés au composant Student dans son parent
//Exemple : <Student nom="Swag" prenom="Yolo" avatar="..." campus="Aubagne" devLang="Js" isFromRi7={true}/>
//          Ici : nom, prenom, avatar, campus, devLang et isFromRi7 sont des props récupérables grâce à ce paramètre props
//          Pour les récupérer, il suffit de faire props.nomDeL'Attribut, exemple : props.nom
//Dans ce cas précis, props fait référence à data (qui est une collection, cf Tp2.jsx) contenant les nom, prénom, ... ainsi qu'à isFromRi7
export const Student = (props) => {
    //J'écris une fonction dans une variable messageAlert, cela permettra d'alléger le code dans mon return() et d'écrire des instructions complexes si besoin
    const messageAlert = () => {
        alert("Bonjour, je m'appelle " +  props.data.nom + " " + props.data.prenom);
    }

    return(
        <div className="student">
            {/* Je récupère les informations données par le parent de ce composant (ici Tp2.jsx) grâce à props */}
            <img src={props.data.avatar} alt="avatar"/>
            <div>
                <p>{props.data.nom} {props.data.prenom}</p>
                {/* Si le props "isFromRi7" vaut true, on affiche " - Ri7", sinon non */}
                <p className="campus">{props.data.campus} {props.isFromRi7 && " - Ri7"}</p>
                <p className="devLangage">{props.data.devLang}</p>
            </div>
            {/* Lorsqu'on clique sur le bouton, cela lance la fonction stockée dans la variable messageAlert */}
            <button onClick={messageAlert}>Spam incoming</button>
        </div>
    )
}