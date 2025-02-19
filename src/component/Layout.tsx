import React from "react"
import Circle from './item/Circle.tsx'
import Obstacle from './item/Obstacle.tsx'
import { createNextPointByKeydownEvent, randomObstacles } from '../common/functions.ts'
import MainLine from "./line/mainLine.tsx"
import SystemLine from "./line/systemLine.tsx"
import { defaultObstacleEasy, 
    defaultObstacleHard, 
    defaultObstacleNormal, 
    defaultObstacleSuperHard,
    defaultDiameterStartPoint,
    windowWidth,
    windowHeight,
    windowKeyDownEvent
} from "../common/constants.ts"
import { useState, useEffect } from 'react'
import Image from './item/Image.tsx'
import Point from './item/Point.tsx'
import isEqual from 'lodash/isEqual'
import ObstacleInterface from "../interfaces/Obstacle.ts"
import PointInterface from "../interfaces/Point.ts"

export default function Layout() {
    const start: PointInterface = {
        x: 50,
        y: 50
    }
    const end: PointInterface = {
        x: 800,
        y: 500
    }
    const [points, setPoints] = useState([start])
    const [obstacles, setObstacles] = useState<ObstacleInterface[]>([])
    function keydown(event: KeyboardEvent) {
        if (points.length === 0) {
            points.push(start)
        }
        
        const lastPoint = points[points.length - 1]
        const nextPoint = createNextPointByKeydownEvent(event, lastPoint)
        if (!!nextPoint) {
            points.push(nextPoint)
            if (isEqual(nextPoint, end)) {
                window.removeEventListener(windowKeyDownEvent, keydown);
            }
            setPoints([...points])
        }
    }
    useEffect(() => {
        var obstacles = randomObstacles(defaultObstacleHard, windowWidth, windowHeight)
        setObstacles(obstacles)
        window.addEventListener(windowKeyDownEvent, keydown);
    }, []);  
    
    function renderAmount (a: any) {
        return <Obstacle obstacle={a} />
    }

    const amounts: any[] = []
    for (var i = 0; i < obstacles.length; i++) {
        amounts.push(renderAmount(obstacles[i]))
    }
    const lastestPoint = points[points.length - 1]
    return (
        <div className="layout">
            <Circle position={end} diameter={20}/>
            <div className="obstacle-swapper">
                {amounts}
            </div>
            <MainLine points={points}/>
            <SystemLine />
            <Image
                position={lastestPoint}
                src={"/image/people.png"}
                />
            {!isEqual(start, lastestPoint) ? <Point position={start} diameter={defaultDiameterStartPoint}/> : '' }
        </div>
    )
}