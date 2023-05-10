//On importe les différents composants dont on souhaite se servir
import { VilleNaissance } from "./VilleNaissance";
import { ClickButton } from "./ClickButton";

//On crée le composant Tp1 qui contiendra tous les composants de l'exercice
//On pense bien au mot-clé "export" afin de pouvoir importer le composant Tp1 dans un autre fichier
export const Tp1 = () => {
    //Création de variable
    const prenom = "Brendan";
    //On retourne ce que l'on souhaite afficher, ici on affiche le nom, la ville de naissance (dans le composant VilleNaissance) et un bouton (dans le composant ClickButton)
    return (
        //Il faut toujours une balise parente de toutes les autres, si on n'en a pas on peut rajouter une balise vide : "<></>"
        <>
            <p>Hello Ri7, je m'appelle {prenom}</p>
            <VilleNaissance />
            <ClickButton />
        </>
    )
}