import React from "react"
import { obstacleLength } from "../../common/constants.tsx"

export default function Obstacle({ obstacle, key }) {
    const style = {
        top: obstacle.y,
        left: obstacle.x,
        width: obstacleLength,
        height: obstacleLength
    }

    return <img src={obstacle.src} key={key} className="obstacle" style={style}></img>
}