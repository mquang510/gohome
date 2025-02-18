import React from "react"

export default function Line({ start, end, attr }) {
    const width = Math.abs(end.x - start.x) || 0
    const height = Math.abs(end.y - start.y) || 0
    const className = start.x === end.x ? 'line top' : 'line left'
    const style = {
        width: width,
        height: height,
        top: Math.min(start.y, end.y),
        left: Math.min(start.x, end.x)
    }
    return <div className={className} style={style} title={attr}></div>
}
