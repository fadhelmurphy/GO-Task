import React from "react"


export default function Rectangle(props){
    return (
    <>
    <div className={`rect-${props.idx}`} onClick={()=>props.onClick(props.rgb)}></div>
    <style jsx>
        {`
            .rect-${props.idx} {
                height: 5vh;
                width: 5vw;
                background: ${props.rgb};
                text-align: center;
                cursor: pointer;
            }
        `}
    </style>
    </>
)}