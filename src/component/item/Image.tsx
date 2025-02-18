import React from "react"

export default function Image({ position, diameter, src }) {
    const style = {
        top: position.y - diameter/2 + 1,
        left: position.x - diameter/2 + 1
    }

    return <img src={src} className="image" style={style}></img>
}