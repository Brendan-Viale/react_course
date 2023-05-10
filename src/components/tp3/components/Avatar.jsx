export const Avatar = () => {
    return(
        // On peut appliquer du style directement dans la balise, par contre les propriétés sont écrites en camelCase
        // Aparté : les src des images sont faites par rapport au dossier dans lequel se trouve index.html, il faut donc mettre les images dans le dossier public/assets/img
        <img style={{width:150 + "px"}} src="https://cdn-icons-png.flaticon.com/128/4139/4139981.png" alt="Avatar" />
    )
}