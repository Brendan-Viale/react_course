export const InputText = ({event, name, label}) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type="text" onChange={event} name={name}  />
        </>
    )
}