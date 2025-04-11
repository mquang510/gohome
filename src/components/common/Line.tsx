import React, { useEffect, useRef } from "react"
import { px } from "../../utils/constants"

export default function Line({ start, end, attr }: any) {
    const ref = useRef<HTMLDivElement>(null)
    const width = Math.abs(end.x - start.x) || 0
    const height = Math.abs(end.y - start.y) || 0
    const style = {
        width: width,
        height: height,
        top: Math.min(start.y, end.y),
        left: Math.min(start.x, end.x)
    }
    useEffect(() => {
        if (!ref.current) return
        ref.current.style.top = `${Math.min(start.y, end.y)} ${px}`
        ref.current.style.left = `${Math.min(start.x, end.x)} ${px}`
        ref.current.style.width = `${width} ${px}`
        ref.current.style.height = `${height} ${px}`
    }, [start, end, width, height])
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
   
    return <div ref={ref} className={getClassByPoint()} style={style} title={attr}></div>
}
