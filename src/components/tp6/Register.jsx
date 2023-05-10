import {useState} from 'react';
import { InputText } from './inputText';

export const Register = () => {
    //On stockera les infos de chaque input dans des states séparés (1 state par input)
    const [gender, setGender] = useState("M");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");

    //On stocke l'id, le name, le label et la fonction permettant de modifier le state au onChange de l'input
    const inputs = {
        firstName : {
            id:1,
            event : e => {setFirstName(e.target.value)},
            name : "firstName",
            label : "First name : "
        },
        lastName : {
            id:2,
            event : e => {setLastName(e.target.value)},
            name : "lastName",
            label : "Last name : "
        },
        email : {
            id:3,
            event : e => {setEmail(e.target.value)},
            name : "email",
            label : "Email : "
        },
        birthday : {
            id:4,
            event : e => {setBirthday(e.target.value)},
            name : "birthday",
            label : "Birthday : "
        },
        zipCode : {
            id:5,
            event : e => {setZipCode(e.target.value)},
            name : "zipCode",
            label : "Zip code : "
        },
        city : {
            id:6,
            event : e => {setCity(e.target.value)},
            name : "city",
            label : "City : "
        }
    }
    // Function permettant de prompt le résultat des formulaires (on affiche tous les states)
    function promptData(e){
        e.preventDefault();
        alert("Civilité : " + gender + "\nNom : " + firstName + "\nPrénom : " + lastName + "\nEmail : " + email + "\nBirthday : " + birthday + "\nZip Code : " + zipCode + "\nCity : " + city)
    }

    return(
        // Au clic d'un bouton submit dans le formulaire, on lance la fonction prompData
        <form onSubmit={promptData}>
            <div id="civilite">
                {/* Au onChange de l'input, on affecte la valeur à gender */}
                <input type="radio" name="civilite" value="M" checked={gender==="M"} onChange={e => setGender(e.target.value)} />
                <label htmlFor="civilite">M</label>
                <input type="radio" name="civilite" value="Mme" checked={gender==="Mme"} onChange={e => setGender(e.target.value)} />
                <label htmlFor="civilite">Mme</label>
            </div>
            {/* Je crée un InputText pour chacun des champs de formulaire que je souhaite créer */}
            {Object.values(inputs).map((input)=>
                <InputText key={input.id} event={input.event} name={input.name} label={input.label} />
            )}
            <button type="submit">Valider</button>
        </form>
    )
}