// On ne récupère que les props qui nous intéressent (on ne récupère pas l'id par exemple, cf Experiences.jsx)
export const Experience = ({date, lieu, intitule}) => {
    return(
        <div>
            <div>
                <p className="date">{date}</p>
                <p className="lieu">{lieu}</p>
            </div>
            <p className="intitule">{intitule}</p>
        </div>
    )
}