import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { Loader, Placeholder } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import "./movies.css";

export const Movies = () => {
    // Je stocke les résultats dans des tableaux afin d'accéder à la propriété length permettant de vérifier qu'on ait récupéré les données
    // Stockera le résultat de la récupération des films populaires
    const [popularMovies,setPopularMovies] = useState([]);
    // Stockera le résultat de la récupération des films les mieux notés
    const [topRatedMovies,setTopRatedMovies] = useState([]);
    // Stockera l'erreur, s'il y en a, provoquée par l'appel à l'api
    const [error,setError] = useState(null);

    // On écrit nos requêtes dans des fonctions séparées afin de toutes les appeler en même temps (voir dans le useEffect)
    // Dans notre cas, nous allons utiliser axios (bien penser à installer la dépendance et à l'importer dans le composant)
    function getPopularMovies (){
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=942793ac262d56a416455b75eba35928');
    }

    function getTopRatedMovies(){
        return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=942793ac262d56a416455b75eba35928');
    }
    
    // Toujours mettre l'appel à l'api dans un useEffect() afin de récupérer les données avant le 1er render
    useEffect(() => {
        // On utilise la fonction all() de Promise afin de gérer plusieurs requêtes à la fois, il suffit de les lister dans l'ordre souhaité dans un tableau
        Promise.all([getPopularMovies(),getTopRatedMovies()])
        .then((res) => {
            // Le setTimeOut n'a aucune utilité, je l'ai mis pour que vous puissiez voir le loader
            setTimeout(()=>{
                // Si on rentre dans le then, cela signifie qu'on a bien récupéré les données, donc on affecte aux states les résultats des requêtes
                // Les résultats sont stockés dans le paramètre du then : "res", qui est un tableau contenant à chaque entrée le résultat de chaque requête dans l'ordre d'appel
                // Ici, j'ai d'abord appelé getPopularMovies, donc res[0] contient le résultat de la requête sur les films populaires
                // Le slice(0,5) permet de ne récupérer que 5 films dans la liste, pas la totalité
                // A noter que les résultats sont toujours stockés dans res.data (bien penser au .data), et dans le cas d'une seule requête res ne serait pas un tableau, on pourrait directement appeler res.data
                // J'appelle res[0].data.results et non res[0].data car l'api me renvoie le résultat dans une clé results, bien lire la doc de l'api !
                setPopularMovies(res[0].data.results.slice(0,5));
                setTopRatedMovies(res[1].data.results.slice(0,5));
            },1000)
        })
        // S'il y a une erreur, je la récupère
        // Le "?." permet de tester que la valeur existe avant la moindre opération
        .catch((err) => setError(err.response?.data?.status_message))
    }, []);
    
    return(
        <div>
            {/* S'il y a une erreur, affiche l'erreur */}
            { error ? (
                <p>Erreur : {error}</p>
            // S'il n'y a pas d'erreur et que j'ai bien des films stockés dans popularMovies, je les affiche
            ) : popularMovies.length > 0 ? (
                <section id="movies">
                    <h2>Popular Movies</h2>
                    <ul id="popular_movies">
                        {popularMovies.map((movie) => (
                            <li key={movie.id}>
                                <Movie {...movie} />
                            </li>
                        ))}
                    </ul>
                    <h2>Top rated Movies</h2>
                    <ul id="topRated_movies">
                        {topRatedMovies.map((movie) => (
                            <li key={movie.id}>
                                <Movie {...movie} />
                            </li>
                        ))}
                    </ul>
                </section>  
            // S'il n'y a pas d'erreur et pas de données stockées dans popularMovies, on affiche le loader
            ) : (
                <>
                {/* J'ai utilisé le Loader d'une dépendance externe (rsuite) */}
                    <Placeholder.Paragraph rows={2} />
                    <Loader backdrop content="loading..." vertical />
                </>
            )}
        </div>
    );
}