import React from "react"

export default function Point({ position, diameter }: any) {
    const style = {
        top: position.y,
        left: position.x - diameter/2
    }

    return <div className="point" style={style}></div>
}