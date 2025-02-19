import React from "react"
import { obstacleLength } from "../../common/constants.ts"

export default function Obstacle({ obstacle }) {
    const style = {
        top: obstacle.y,
        left: obstacle.x,
        width: obstacleLength,
        height: obstacleLength
    }

    return <img src={obstacle.src} className="obstacle" style={style}></img>
}