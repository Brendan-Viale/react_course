import "./styles/students.css";

export const Student = ({nom, prenom, avatar, campus, isFromRi7, devLang}) => {
    const messageAlert = () => {
        alert("Bonjour, je m'appelle " +  nom + " " + prenom);
    }

    return(
        <div className="student">
            <img src={avatar} alt="avatar"/>
            <div>
                <p>{nom} {prenom}</p>
                <p className="campus">{campus} {isFromRi7 && " - Ri7"}</p>
                <p className="devLangage">{devLang}</p>
            </div>
            <button onClick={messageAlert}>Spam incoming</button>
        </div>
    )
}