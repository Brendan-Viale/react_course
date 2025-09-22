import {Movies} from "./Movies"

export const Tp8 = () => {
    const token = sessionStorage.getItem("token");
    return (
        <>
            {
                token && 
                <Movies />
            }
        </>
    )
}