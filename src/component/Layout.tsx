import React from "react"
import Circle from './item/Circle.tsx'
import Obstacle from './item/Obstacle.tsx'
import { randomMounts } from '../common/functions.tsx'
import MainLine from "./Line/mainLine.tsx"
import SystemLine from "./Line/systemLine.tsx"
import { defaultObstacleEasy, defaultObstacleHard, defaultObstacleNormal, defaultObstacleSuperHard } from "../common/constants.tsx"

export default function Layout() {
    const start = {
        x: 50,
        y: 50
    }
    const end = {
        x: 800,
        y: 500
    }
    const amountPositions = randomMounts(defaultObstacleSuperHard, window.innerWidth, window.innerHeight)
    console.log(amountPositions)
    // const amountPositions = amountPoints
    function renderAmount (a: any) {
        return <Obstacle obstacle={a} />
    }

    const amounts: any[] = []
    for (var i = 0; i < amountPositions.length; i++) {
        amounts.push(renderAmount(amountPositions[i]))
    }
    return (
        <div className="layout">
            <Circle position={end} diameter={20}/>
            <div className="obstacle-swapper">
            {amounts}
            </div>
            <MainLine start={start}/>
            <SystemLine />
        </div>
    )
}