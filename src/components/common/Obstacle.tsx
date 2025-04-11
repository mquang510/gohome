import React, { useEffect, useRef } from "react"
import { px } from "../../utils/constants"

export default function Obstacle({ obstacle } : any) {
    const ref = useRef<HTMLImageElement>(null)
    const style = {
        top: obstacle.y,
        left: obstacle.x,
        width: obstacle.width,
        height: obstacle.height
    }

    useEffect(() => {
        if (!ref.current) return
        ref.current.style.top = `${obstacle.y} ${px}`
        ref.current.style.left = `${obstacle.x} ${px}`
    }, [obstacle])

    return <img ref={ref} src={obstacle.src} className="obstacle" style={style}></img>
}