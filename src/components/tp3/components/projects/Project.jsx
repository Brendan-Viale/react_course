export const Project = ({titre,img}) => {
    return(
        <div>
            <p className="titre">{titre}</p>
            <img src={img} alt={titre} />
        </div>
    )
}