import React from "react"
import { obstacleLength } from "../../common/constants.tsx"

export default function Obstacle({ position }) {
    const style = {
        top: position.y,
        left: position.x,
        width: obstacleLength,
        height: obstacleLength
    }

    return <div className="obstacle" style={style}></div>
}