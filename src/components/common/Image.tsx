import React, { useRef, useEffect, useLayoutEffect } from "react"
import { diameterStartPoint, px } from "../../utils/constants.ts"

export default function Image({ position, src }: any) {
    const ref = useRef<HTMLImageElement>(null)
    const getValue = (a:number) => {
        return a - diameterStartPoint/2 + 1
    }
    const style = { 
        top: getValue(position.y),
        left: getValue(position.x),
    }

    useLayoutEffect(() => {
        if (!ref.current) return
        ref.current.style.top = `${getValue(position.y)} ${px}`
        ref.current.style.left = `${getValue(position.x)} ${px}`
    }, [position])
    
    return (<div className="image-swapper">
        <img ref={ref} src={src} className="image" style={style} alt=""></img>
    </div>)
}