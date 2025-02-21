import React, { useEffect, useRef } from "react"
import { obstableSetting, px } from "../../common/constants.ts"

export default function Obstacle({ obstacle }) {
    const ref = useRef<HTMLImageElement>(null)
    const style = {
        top: obstacle.y,
        left: obstacle.x,
        width: obstableSetting.width,
        height: obstableSetting.height
    }

    useEffect(() => {
        if (!ref.current) return
        ref.current.style.top = `${obstacle.y} ${px}`
        ref.current.style.left = `${obstacle.x} ${px}`
    }, [obstacle])

    return <img ref={ref} src={obstacle.src} className="obstacle" style={style}></img>
}