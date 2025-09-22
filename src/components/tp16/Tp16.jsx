import React, { useEffect, useRef, useState } from 'react'

const Tp16 = () => {
    const [liker, setLiker] = useState(0);
    const likerDom = useRef(false);
    const like = () => {
        likerDom.current=true;
        setLiker(liker+1)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            if(likerDom.current===true){
                setLiker(liker+1);
            }
        },200)
    }, [liker])

    return (
        <>
            <p>{liker}</p>
            <button onMouseDown={like} onMouseUp={()=>{likerDom.current=false}}>I love it !</button>
        </>
    )
}

export default Tp16