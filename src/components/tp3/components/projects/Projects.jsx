import { Project } from "./Project"
import "../../styles/projects/projects.css"


const projects = {
    morpion : {
        id : "1",
        titre : "Morpion en PHP (une joie)",
        img : "https://play-lh.googleusercontent.com/LBERj-6YHlRzpaZEJQwNZAtEIIeIUs-u7lnsamqsUrPfXYwOSrViZ6P-7A3dASR9N2U"
    },
    patissier : {
        id : "2",
        titre : "Site vitrine pour un pâtissier",
        img : "./assets/img/LgPastry.JPG"
    },
    recim : {
        id : "3",
        titre : "Site pour une société de jeux mobiles",
        img : "./assets/img/recim.JPG"
    }
}

export const Projects = () => {
    return(
        <section id="projects">
            <h2>Projets</h2>
            <ul>
                {/* Voir Experiences.jsx */}
                {Object.values(projects).map((project, index)=>
                    <li key={index}>
                        <Project {...project} />
                    </li>
                )}
            </ul>
        </section>
    )
}