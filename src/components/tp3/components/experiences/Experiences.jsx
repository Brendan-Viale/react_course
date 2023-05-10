import { Experience } from "./Experience"
import "../../styles/experiences/experiences.css"

const experiences = {
    dut : {
        id : "1",
        date : "2020 - Aujourd'hui",
        lieu : "Marseille",
        intitule : "Freelance"
    },
    itecom : {
        id : "2",
        date : "2014 - Aujourd'hui",
        lieu : "Isola 2000",
        intitule : "Hey ! tu sais c'est qui ?"
    },
    bac : {
        id : "3",
        date : "2016 - 2017",
        lieu : "Antibes",
        intitule : "Stage Développeur Web"
    }
}

export const Experiences = () => {
    return(
        <section id="experiences">
            <h2>Expériences</h2>
            <ul>
                {/* J'utilise la fonction map() afin de créer une Expérience pour chaque clé existante dans la variable experiences  */}
                {/* experiences a 3 clés (dut, itecom, bac), il y aura donc 3 Experience */}
                {/* La variable "experience" passée en paramètre fait référence au contenu de chaque clé (donc id, date, lieu et intitule de "dut" au 1er passage de boucle) */}
                {Object.values(experiences).map((experience)=>
                    <li key={experience.id}>
                        {/* On utilise le spread operator "..." afin d'exploser la collection */}
                        {/* Concrètement, chaque sous-clé (id, date, lieu, intitule) sera envoyée comme props indépendant à Experience */}
                        {/* Cela équivaut à écrire <Experience id=1 date="2020 - Aujourd'hui" lieu="Marseille" intitule="Freelance" /> */}
                        <Experience {...experience} />
                    </li>
                )}
            </ul>
        </section>
    )
}