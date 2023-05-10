export const Formation = (props) => {
    return(
        <div>
            <div>
                <p className="date">{props.data.date}</p>
                <p className="lieu">{props.data.lieu}</p>
            </div>
            <p className="intitule">{props.data.intitule}</p>
        </div>
    )
}