/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import Circle from './item/Circle.tsx'
import Obstacle from './item/Obstacle.tsx'
import { changePositionAnimals, convertKeyDownToDirect, createEndPoint, createNextPointByKeydownEvent, getIntersectPoint, randomObstacles, validateIsOutScreen, validateLine1 } from '../common/functions.ts'
import MainLine from "./line/mainLine.tsx"
import SystemLine from "./line/systemLine.tsx"
import { 
    windowWidth,
    windowHeight,
    windowKeyDownEvent,
    isFirstTimeKey,
    obstacleLevel,
    animalRunningTime,
    diameterEndPoint,
    diameterStartPoint
} from "../common/constants.ts"
import { useState, useEffect } from 'react'
import Image from './item/Image.tsx'
import Point from './item/Point.tsx'
import isEqual from 'lodash/isEqual'
import ObstacleInterface from "../interfaces/Obstacle.ts"
import PointInterface from "../interfaces/Point.ts"
import InformationPopup from "./popup/information.tsx"
import ResultPopup from "./popup/result.tsx"

export default function Layout() {
    const start: PointInterface = {
        x: 50,
        y: 50
    }
    const initObstacle = () => {
        const obstacleItems = randomObstacles(obstacleLevel.hard, windowWidth, windowHeight)
        return obstacleItems
    }
    const keydown = (event: KeyboardEvent) => {
        if (isCompleted) return
        if (points.length === 0) {
            points.push(start)
        }
        const lastPoint = points[points.length - 1]
        const nextPoint = createNextPointByKeydownEvent(event, lastPoint)
        if (!!nextPoint) {
            const result = validateLine1(lastPoint, nextPoint, obstacles, [convertKeyDownToDirect(event.key)])
            if (!result.valid) {
                if (!!result.obstaclePoint) {
                    const intersectPoint = getIntersectPoint(lastPoint, result.obstaclePoint)
                    if (!!intersectPoint) points.push(intersectPoint)
                }
                setCompleted(true)
                setPoints([...points])
                return
            }
            if (!validateIsOutScreen(nextPoint, 0)) {
                points.push(nextPoint)
                if (isEqual(nextPoint, end)) {
                    setCompleted(true)
                }
                setPoints([...points])
            }
        }
    }
    const resetPoints = () => {
        points.length = 0
        points.push(start)
        setPoints([...points])
    }
    const resetPopupHide = () => {
        setReset(true)
    }
    const processAnimalRunning = () => {
        changePositionAnimals(obstacles)
        setObstacles([...obstacles])
    }
    const initAnimalRunning = () => {
        const id = setInterval(processAnimalRunning, animalRunningTime.normal)
        setAnimalRunningId(id)
    }
    // const end: PointInterface = createEndPoint()
    const localStorageIsFirstTime = localStorage.getItem(isFirstTimeKey)
    const isFirstTimeDefault = !!localStorageIsFirstTime ? JSON.parse(localStorageIsFirstTime) : true
    let [end, setEndPoint] = useState(createEndPoint())
    const [points, setPoints] = useState([start])
    const [isFirstTime, setFirstTime] = useState(isFirstTimeDefault)
    const [isCompleted, setCompleted] = useState(false)
    const [isReset, setReset] = useState(false)
    let [obstacles, setObstacles] = useState<ObstacleInterface[]>(initObstacle())
    const [isAnimalRunning, setAnimalRunning] = useState(true)
    const [animalRunningId, setAnimalRunningId] = useState<NodeJS.Timeout>()
    
    useEffect(() => {
        localStorage.setItem(isFirstTimeKey, JSON.stringify(isFirstTime))
    }, [isFirstTime])

    useEffect(() => {
        setAnimalRunning(!isCompleted)
    }, [isCompleted])

    useEffect(() => {
        if (isAnimalRunning && !animalRunningId) {
            initAnimalRunning()
        }
        else if (!isAnimalRunning) {
            clearInterval(animalRunningId)
            setAnimalRunningId(undefined)
        }
    }, [animalRunningId, isAnimalRunning])

    useEffect(() => {
        window.addEventListener(windowKeyDownEvent, keydown)
        if (isReset) {
            const obstacleItems = initObstacle()
            setObstacles(obstacleItems)
            setCompleted(false)
            resetPoints()
            setReset(false)
            const endPoint = createEndPoint()
            setEndPoint({
                x: endPoint.x,
                y: endPoint.y
            })
        }
        return () => {
            window.removeEventListener(windowKeyDownEvent, keydown)
        }
    }, [isReset, keydown, resetPoints])
    
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
            <Circle position={end} />
            <div className="obstacle-swapper">
                {amounts}
            </div>
            <MainLine points={points}/>
            <SystemLine />
            <Image
                position={lastestPoint}
                src={"/image/people.png"}
                />
            {!isEqual(start, lastestPoint) ? <Point position={start} diameter={diameterStartPoint}/> : '' }
            <InformationPopup isFirstTime={isFirstTime} onHide={() => setFirstTime(false)} />
            <ResultPopup 
                isCompleted={isCompleted} 
                onHide={resetPopupHide} 
                total={points.length - 1}/>
        </div>
    )
}