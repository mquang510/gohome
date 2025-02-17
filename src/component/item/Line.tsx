import React from "react"

export default function Line({ start, end }) {
    const width = end.x - start.x || 0
    const height = end.y - start.y || 0
    const style = {
        width: width,
        height: height,
        top: start.y,
        left: start.x
    }
    return <div className="line" style={style}></div>
}
