import React from "react"

export default function Circle({ position, diameter }) {
    const style = {
        width: diameter,
        height: diameter,
        top: position.y - diameter/2 + 1,
        left: position.x - diameter/2 + 1
    }

    return <div className="circle" style={style}></div>
}