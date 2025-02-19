import React from "react"

export default function Line({ start, end, attr }) {
    const width = Math.abs(end.x - start.x) || 0
    const height = Math.abs(end.y - start.y) || 0
    function getClassByPoint() {
        let className = 'line '
        if (start.x === end.x) {
            className += start.y < end.y ? 'top' : 'bottom'
        }
        else if (start.y === end.y) {
            className += start.x < end.x ? 'left' : 'right'
        }
        return className
    }
    const style = {
        width: width,
        height: height,
        top: Math.min(start.y, end.y),
        left: Math.min(start.x, end.x)
    }
    return <div className={getClassByPoint()} style={style} title={attr}></div>
}
