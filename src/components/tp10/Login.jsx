import { useEffect, useState } from "react"
import ids from "./ids.json"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    // Fonction jouée au submit du formulaire
    // Vérifie les identifiants, renvoie vers l'accueil et génère un token s'ils sont bons, affiche une erreur sinon
    const verifyLogin = (event) => {
        event.preventDefault();
        if(ids["username"] === username && ids["password"] === password){
            axios.request("https://api.themoviedb.org/3/authentication/token/new?api_key=942793ac262d56a416455b75eba35928")
            .then((res)=>{
                sessionStorage.setItem("token",res.data.request_token);
                navigate("/tp8");
            })
            .catch((err)=>{
                setError(err.response?.data?.status_message);
            })
        }
        else{
            console.log("Erreur")
        }
    }

    return(
        <>
            {error ? ( 
                <p>{error}</p>
            ) : (
                <form onSubmit={verifyLogin}>
                    <input type="text" name="username" value={username} placeholder="Username" onChange={(event) => {setUsername(event.target.value)}} />
                    <input type="text" name="password" value={password} placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} />
                    <button type="submit">Se connecter</button>
                </form>
            )}
        </>
    )
}