export const Movie = ({title,vote_average,release_date,poster_path,funct}) => {
    // poster_path ne contient qu'une partie du chemin, il faut rajouter l'url du début (cf la doc de l'api)
    const poster = "https://image.tmdb.org/t/p/w300" + poster_path;
    return(
        <div>
            <img src={poster} alt={title} />
            <h3>{title}</h3>
            <p>Note : {vote_average}</p>
            <p>Date de sortie : {release_date}</p> 
        </div>
    );
}