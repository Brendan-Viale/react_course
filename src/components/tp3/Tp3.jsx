import {Avatar} from "./components/Avatar"
import {Identity} from "./components/Identity"
import {Formations} from "./components/formations/Formations"
import {Experiences} from "./components/experiences/Experiences"
import {Projects} from "./components/projects/Projects"
import "./tp3.css"

export const Tp3 = () => {
    return(
        <div id="tp3">
            <aside>
                <Avatar />
                <Identity />
            </aside>
            <section id="content">
            <div>
                    <Formations />
                    <Experiences />
            </div>
                <Projects />
            </section>
        </div>
    )
}