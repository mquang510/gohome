/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react"
import Circle from './common/Circle.tsx'
import Obstacle from './common/Obstacle.tsx'
import { 
    changePositionAnimals, 
    convertKeyDownToDirect, 
    createEndPoint, 
    createNextPointByKeydownEvent, 
    getIntersectPoint, 
    randomObstacles, 
    validateIsOutScreen, 
    validateLine1 } from '../utils/functions.ts'
import MainLine from "./line/mainLine.tsx"
import SystemLine from "./line/systemLine.tsx"
import { 
    windowWidth,
    windowHeight,
    windowKeyDownEvent,
    diameterStartPoint,
    startPoint,
    f1
} from "../utils/constants.ts"
import { useState, useEffect } from 'react'
import Image from './common/Image.tsx'
import Point from './common/Point.tsx'
import isEqual from 'lodash/isEqual'
import ObstacleInterface from "../domain/Obstacle.ts"
import PointInterface from "../domain/Point.ts"
import InformationPopup from "./popup/information.tsx"
import ResultPopup from "./popup/result.tsx"
import SettingPopup from "./popup/settings.tsx"
import { introGame } from "../utils/language-vi.ts"
import { SettingContext } from "../app/context/SettingContext.tsx"
import { settingActions } from "../utils/enums.ts"

export default function Layout() {
    const { state, dispatch } = useContext(SettingContext)
    const start: PointInterface = startPoint
    //Ant Design preferred
    const keydown = (event: KeyboardEvent) => {
        if (event.key === f1) {
            event.preventDefault()
            setOpenSetting(true)
            return
        }
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
   
    const updateSettings = (newSettings: any) => {
        dispatch({ type: settingActions.setConfig, payload: {
            config: newSettings
        }})
        setOpenSetting(false)
        setReset(true)
    }
    const setIsFirstTime = (value) => {
        dispatch({ type: settingActions.setIsFirstTime, payload: {
            isFirstTime: value
        }})
    }
    let [end, setEndPoint] = useState(createEndPoint())
    const [points, setPoints] = useState([start])
    const [isCompleted, setCompleted] = useState(false)
    const [isReset, setReset] = useState(false)
    const obstacleInitItems = []
    let [obstacles, setObstacles] = useState<ObstacleInterface[]>(obstacleInitItems)
    const initObstacle = () => {
        const obstacleItems = randomObstacles(state.config?.level, windowWidth, windowHeight)
        return obstacleItems
    }
    const initAnimalRunning = (items) => {
        const id = setInterval(() => {
            processAnimalRunning(items)
        }, state.config?.time)
        setAnimalRunningId(id)
    }
    const processAnimalRunning = (items) => {
        changePositionAnimals(items)
        setObstacles([...items])
    }
    
    const [isAnimalRunning, setAnimalRunning] = useState(true)
    const [animalRunningId, setAnimalRunningId] = useState<NodeJS.Timeout>()
    const [isOpenSetting, setOpenSetting] = useState(false)
    const [time, setTime] = useState(1)
    const [isTimeRunning, setTimeRunning] = useState(false)
    const [timeRunningId, setTimeRunningId] = useState<NodeJS.Timeout>()
    useEffect(() => {
        setObstacles([...randomObstacles(state.config?.level, windowWidth, windowHeight)])
        setReset(true)
    }, [state.config]) 
    useEffect(() => {
        if (isTimeRunning && !timeRunningId) {
            setTime(1)
            const id = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime + 1
                })
            }, 1000)
            setTimeRunningId(id)
        }
        else if (!isTimeRunning) {
            clearInterval(timeRunningId)
            setTimeRunningId(undefined)
        }
    }, [isTimeRunning, timeRunningId]);

    useEffect(() => {
        setAnimalRunning(!(isCompleted || isOpenSetting))
        setTimeRunning(!(isCompleted || isOpenSetting))
    }, [isCompleted, isOpenSetting])

    useEffect(() => {
        if (isAnimalRunning && !animalRunningId) {
            initAnimalRunning(obstacles)
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
            clearInterval(animalRunningId)
            setAnimalRunningId(undefined)
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
            <InformationPopup isFirstTime={state.isFirstTime} onHide={() => setIsFirstTime(false)} />
            <ResultPopup 
                isCompleted={isCompleted} 
                onHide={resetPopupHide}
                isFailed={!isEqual(lastestPoint, end)}
                total={points.length - 1}
                time={time}/>
            <SettingPopup 
                isOpenSetting={isOpenSetting} 
                onHide={() => setOpenSetting(false)} 
                settings={state.config}
                onUpdate={updateSettings} />
            <div className='intro-game'>{introGame}</div>
        </div>
    )
}