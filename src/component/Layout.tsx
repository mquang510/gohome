import React from "react"
import Circle from './item/Circle.tsx'
import Obstacle from './item/Obstacle.tsx'
import { changePositionAnimals, convertKeyDownToDirect, createEndPoint, createNextPointByKeydownEvent, randomObstacles, validateIsOutScreen, validateLine1 } from '../common/functions.ts'
import MainLine from "./line/mainLine.tsx"
import SystemLine from "./line/systemLine.tsx"
import { 
    defaultDiameterStartPoint,
    windowWidth,
    windowHeight,
    windowKeyDownEvent,
    isFirstTimeKey,
    obstacleLevel,
    animalRunningTime,
    direction,
    amountPoints
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
    // const end: PointInterface = createEndPoint()
    const localStorageIsFirstTime = localStorage.getItem(isFirstTimeKey)
    const isFirstTimeDefault = !!localStorageIsFirstTime ? JSON.parse(localStorageIsFirstTime) : true
    const defaultEndPoint = createEndPoint()
    const [end, setEndPoint] = useState(defaultEndPoint)
    const [points, setPoints] = useState([start])
    const [isFirstTime, setFirstTime] = useState(isFirstTimeDefault)
    const [isCompleted, setCompleted] = useState(false)
    const [isReset, setReset] = useState(false)
    const [obstacles, setObstacles] = useState<ObstacleInterface[]>(initObstacle())
    const [isAnimalRunning, setAnimalRunning] = useState(true)
    const [animalRunningId, setAnimalRunningId] = useState<NodeJS.Timeout>()
    function keydown(event: KeyboardEvent) {
        if (points.length === 0) {
            points.push(start)
        }
        
        const lastPoint = points[points.length - 1]
        const nextPoint = createNextPointByKeydownEvent(event, lastPoint)
        if (!!nextPoint) {
            const result = validateLine1(lastPoint, nextPoint, obstacles, [convertKeyDownToDirect(event.key)])
            if (!result.valid) {
                if (!!result.intersectPoint) points.push(result.intersectPoint)
                window.removeEventListener(windowKeyDownEvent, keydown)
                setCompleted(true)
                setPoints([...points])
            }
            if (!validateIsOutScreen(nextPoint, null)) {
                points.push(nextPoint)
                if (isEqual(nextPoint, end)) {
                    window.removeEventListener(windowKeyDownEvent, keydown)
                    setCompleted(true)
                }
                setPoints([...points])
            }
        }
    }
    function initObstacle() {
        // const obstacleItems = randomObstacles(obstacleLevel.hard, windowWidth, windowHeight)
        // console.log(obstacleItems)
        const obstacleItems = amountPoints
        return obstacleItems
    }
    function initKeydownEvent() {
        window.addEventListener(windowKeyDownEvent, keydown)
    }
    function resetPoints() {
        points.length = 0
        points.push(start)
        setPoints([...points])
    }
    function resetPopupHide() {
        setReset(true)
    }
    function processAnimalRunning() {
        changePositionAnimals(obstacles)
        setObstacles([...obstacles])
    }
  
    function initAnimalRunning() {
        // const id = setInterval(processAnimalRunning, animalRunningTime.easy)
        // setAnimalRunningId(id)
    }
    useEffect(() => {
        initKeydownEvent()
    }, [])

    useEffect(() => {
        localStorage.setItem(isFirstTimeKey, JSON.stringify(isFirstTime));
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
    }, [isAnimalRunning])

    useEffect(() => {
        if (isReset) {
            const obstacleItems = initObstacle()
            setObstacles(obstacleItems)
            initKeydownEvent()
            setCompleted(false)
            resetPoints()
            setReset(false)
            const endPoint = createEndPoint()
            setEndPoint(endPoint)
        }
    }, [isReset])
    
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
            <InformationPopup isFirstTime={isFirstTime} onHide={() => setFirstTime(false)} />
            <ResultPopup 
                isCompleted={isCompleted} 
                onHide={resetPopupHide} 
                total={points.length - 1}/>
        </div>
    )
}