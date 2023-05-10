import { Formation } from "./Formation"
import "../../styles/formations/formations.css"

const formations = {
    itecom : {
        id : "1",
        date : "2017 - 2020",
        lieu : "Nice",
        intitule : "Itecom Art Design - Généraliste 3D"
    },
    dut : {
        id : "2",
        date : "2014 - 2017",
        lieu : "Nice",
        intitule : "DUT Informatique"
    },
    bac : {
        id : "3",
        date : "2014",
        lieu : "Nice",
        intitule : "Bac Scientifique - Mention Acte de présence"
    }
}

export const Formations = () => {
    return(
        <section id="formations">
            <h2>Formations</h2>
            <ul>
                {/* Voir Experiences.jsx */}
                {Object.values(formations).map((formation)=>
                    <li key={formation.id}>
                        <Formation data={formation} />
                    </li>
                )}
            </ul>
        </section>
    )
}