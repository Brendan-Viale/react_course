export const Project = ({titre,img}) => {
    return(
        <div>
            <h2 className="titre">{titre}</h2>
            <img src={img} alt={titre} />
        </div>
    )
}