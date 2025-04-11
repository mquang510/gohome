import ObstacleInterface from "../domain/Obstacle"
import Point from "../domain/Point"
import ResultValidate from "../domain/ResultValidate"
import { 
    defaultLength, 
    endpointMarginRow, 
    obstacleLength, 
    obstacleObjects, 
    windowHeight, 
    windowMinHeight,
    windowMinWidth, 
    windowWidth } from "./constants"
import _ from 'lodash'
import { direction, keydownEnum } from "./enums"

const onSegment = (p: any, q: any, r: any) => { 
    if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && 
        q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) 
    return true; 
    
    return false; 
} 
  
const orientation = (p: any, q: any, r: any) => { 
    const val = (q.y - p.y) * (r.x - q.x) - 
            (q.x - p.x) * (r.y - q.y); 
    
    if (val === 0) return 0; // collinear 
    
    return (val > 0)? 1: 2; // clock or counterclock wise 
} 
  
const isIntersect = (p1: any, q1: any, p2: any, q2: any) => { 
    let o1 = orientation(p1, q1, p2); 
    let o2 = orientation(p1, q1, q2); 
    let o3 = orientation(p2, q2, p1); 
    let o4 = orientation(p2, q2, q1); 
    
    if (o1 !== o2 && o3 !== o4) 
        return true; 
    
    // Special Cases 
    // p1, q1 and p2 are collinear and p2 lies on segment p1q1 
    if (o1 === 0 && onSegment(p1, p2, q1)) return true; 
    
    // p1, q1 and q2 are collinear and q2 lies on segment p1q1 
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; 
    
    // p2, q2 and p1 are collinear and p1 lies on segment p2q2 
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; 
    
    // p2, q2 and q1 are collinear and q1 lies on segment p2q2 
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; 
    
    return false;
} 

const validateLine = (start: Point, end: Point, obstacles: ObstacleInterface[], directions: direction[]) : ResultValidate => {
    const a = obstacles.find((item) => {
        const b = isIntersect(start, end, item, {
            x: item.x + item.width,
            y: item.y
        })

        const c = isIntersect(start, end,  {
            x: item.x + item.width,
            y: item.y
        }, {
            x: item.x + item.width,
            y: item.y + item.height
        })

        const d = isIntersect(start, end, item, {
            x: item.x,
            y: item.y + item.height
        })

        const e = isIntersect(start, end, {
            x: item.x,
            y: item.y + item.height
        }, {
            x: item.x + item.width,
            y: item.y + item.height
        })

        return b || c || d || e
    })
    return {
        valid: !a,
        nextPoint: end,
        obstaclePoint: a
    }
}

const validateLine1 = (start: Point, end: Point, obstacles: ObstacleInterface[], directions: direction[]) : ResultValidate => {
    const a = obstacles.find((item) => {
        const isIntersectTop = isIntersect(start, end, item, {
            x: item.x + item.width,
            y: item.y
        })

        const isIntersectRight = isIntersect(start, end,  {
            x: item.x + item.width,
            y: item.y
        }, {
            x: item.x + item.width,
            y: item.y + item.height
        })

        const isIntersectLeft = isIntersect(start, end, item, {
            x: item.x,
            y: item.y + item.height
        })

        const isIntersectBottom = isIntersect(start, end, {
            x: item.x,
            y: item.y + item.height
        }, {
            x: item.x + item.width,
            y: item.y + item.height
        })
        const isValid = isIntersectTop || isIntersectRight || isIntersectLeft || isIntersectBottom
        if (isValid) {
            item.direction = isIntersectTop ? direction.top :
            isIntersectRight ? direction.right :
            isIntersectLeft ? direction.left : direction.bottom
        }

        return isValid
    })
    return {
        valid: !a,
        nextPoint: end,
        obstaclePoint: a
    }
}

const getIntersectPoint = (point: Point, obstacle: ObstacleInterface) => {
    if (!point || !obstacle?.direction) return
    switch (obstacle.direction)
    {
        case direction.top:
            return {
                x: point.x,
                y: obstacle.y
            }
        case direction.right:
            return {
                x: obstacle.x + obstacle.width,
                y: point.y
            }
        case direction.left:
            return {
                x: obstacle.x,
                y: point.y
            }
        case direction.bottom:
            return {
                x: point.x,
                y: obstacle.y + obstacle.height
            }
    }
}

const getPointByDiretion = (points:[Point], start: Point, end: Point, obstacles: ObstacleInterface[], directionSolutions: direction[], ignorePoints: Point[] = []) => {
    let nextPoint:Point = {
        x: 0,
        y: 0
    }
    let result = false
    for (let i = 0; i < directionSolutions.length; i++) {
        switch(directionSolutions[i]) {
            case direction.top: {
                nextPoint = {
                    x: start.x,
                    y: start.y - defaultLength
                }
                break
            }
            case direction.right: {
                nextPoint = {
                    x: Math.min(start.x + defaultLength, end.x),
                    y: start.y
                }
                break
            }
            case direction.bottom: {
                nextPoint = {
                    x: start.x,
                    y: Math.min(start.y + defaultLength, end.y)
                }
                break
            }
            case direction.left: {
                nextPoint = {
                    x: Math.max(start.x - defaultLength, start.x),
                    y: start.y
                }
                break
            }
        }
        if (nextPoint.x === start.x && nextPoint.y === start.y) continue
        // eslint-disable-next-line no-loop-func
        if (points.find((x) => nextPoint.x === x.x && nextPoint.y === x.y)) continue
        // eslint-disable-next-line no-loop-func
        if (ignorePoints.find((x) => nextPoint.x === x.x && nextPoint.y === x.y)) continue
        result = validateLine(start, nextPoint, obstacles, directionSolutions)?.valid
        if (result) {
            break
        }
    }

    return { nextPoint, result }
}

const addNextPoint = (points:[Point], start: Point, end: Point, defaultLength: number, obstacles: ObstacleInterface[], directionSolution: direction[], ignorePoints: Point[] = []) : boolean => {
    let result = getPointByDiretion(points, start, end, obstacles, directionSolution, ignorePoints)
    
    if (result.result) {
        points.push(result.nextPoint)
        if (result.nextPoint.x === end.x && result.nextPoint.y === end.y) {
            return true
        }
       
        let addCompleted = addNextPoint(points, result.nextPoint, end, defaultLength, obstacles, directionSolution, ignorePoints)
        if (!addCompleted) {
            const point = points.pop()
            if (!!point) {
                ignorePoints.push(point)
                addCompleted = addNextPoint(points, points[points.length - 1], end, defaultLength, obstacles, directionSolution, ignorePoints)
            }
        }
        return addCompleted
    }

    return false
}

const findingRoutes = (start: Point, end: Point, defaultLength: number, obstacles: ObstacleInterface[], directionSolution: direction[]) => {
    const positions:[Point] = [start]
    addNextPoint(positions, start, end, defaultLength, obstacles, directionSolution)
    return positions
}

const randomNumber= (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const createObstacle = (maxX: number, maxY: number):ObstacleInterface => {
    const x = randomNumber(0, maxX - 50)
    const y = randomNumber(0, maxY - 50)
    const obstacleIndex = randomNumber(0, obstacleObjects.length - 1)
    const obstacle = obstacleObjects[obstacleIndex]
    return {
        x: x,
        y: y,
        src: obstacle?.image,
        height: obstacle?.height,
        width: obstacle?.width
    }
}

const randomObstacles = (total:number = 0, x:number = 0, y:number = 0) => {
    const obstacles: ObstacleInterface[] = []
    for (let i = 0; i < total; i++) {
        obstacles.push(createObstacle(x, y))
    }

    return obstacles
}

const createSystemLines = (pointStart: Point, pointEnd : Point, diameter: number = defaultLength) => {
    const lines: Point[][] = []
    const x = pointEnd.x - pointStart.x
    const y = pointEnd.y - pointStart.y

    let length = diameter
    for (let i = length; i < x; i += diameter) {
        lines.push([
            {
                x: pointStart.x + i,
                y: pointStart.y,
            },
            {
                x: pointStart.x + i,
                y: pointEnd.y,
            }
        ])
    }

    length = diameter
    for (let i = length; i < y; i += diameter) {
        lines.push([
            {
                x: pointStart.x,
                y: pointStart.y + i,
            },
            {
                x: pointEnd.x,
                y: pointStart.y + i,
            }
        ])
    }

    return lines
}

const validateIsOutScreen = (point: Point, padding: number) => {
    if (point?.x > windowWidth - padding * 1.5 ||
        point?.x < windowMinWidth ||
        point?.y > windowHeight - padding * 1.5 ||
        point?.y < windowMinHeight) {
            return true
        }
    return false
}

const createNextPointByKeydownEvent = (event: KeyboardEvent, lastPoint: Point) => {
    if (event.key !== keydownEnum.arrowUp &&
        event.key !== keydownEnum.arrowDown &&
        event.key !== keydownEnum.arrowLeft &&
        event.key !== keydownEnum.arrowRight
    ) {
        return
    }   

    return  createNextPoint(event.key, lastPoint)
}

const createNextPoint = (key: string, lastPoint: Point) => {
    let nextPoint
    switch(key) {
        case keydownEnum.arrowUp:
            nextPoint = {
                x: lastPoint.x,
                y: lastPoint.y - defaultLength
            }
            break
        case keydownEnum.arrowRight:
            nextPoint = {
                x: lastPoint.x + defaultLength,
                y: lastPoint.y
            }
            break
        case keydownEnum.arrowDown:
            nextPoint = {
                x: lastPoint.x,
                y: lastPoint.y + defaultLength
            }
            break
        case keydownEnum.arrowLeft:
            nextPoint = {
                x: lastPoint.x - defaultLength,
                y: lastPoint.y
            }
            break
    }
    return nextPoint
}

const changePositionAnimals = (obstacles: ObstacleInterface[]) => {
    if (!obstacles?.length) return

    const keys = _.keys(keydownEnum)
    const keyDownValues: string[] = _.map(keys, (key) => keydownEnum[key as keyof typeof keydownEnum])
    _.each(obstacles, (obstacle) => {
        const indexRandom = randomNumber(0, keys.length - 1)
        if (keyDownValues[indexRandom]) {
            const nextPoint = createNextPoint(keyDownValues[indexRandom], obstacle,)
            if (!!nextPoint && !validateIsOutScreen(nextPoint, obstacleLength)) {
                obstacle.x = nextPoint.x
                obstacle.y = nextPoint.y
            }
        }
    })
}

const createEndPoint = () : Point => {
    const halfWidth = windowWidth / 2,
        halfHeight = windowHeight / 2,
        countRowWidth = Math.floor(halfWidth / defaultLength),
        countRowHeight = Math.floor(halfHeight / defaultLength),
        randomWidth = randomNumber(endpointMarginRow, countRowWidth - endpointMarginRow),
        randomHeight = randomNumber(endpointMarginRow, countRowHeight - endpointMarginRow)

    return {
        x: (countRowWidth + randomWidth) * defaultLength,
        y: (countRowHeight + randomHeight) * defaultLength
    }
}

const convertKeyDownToDirect = (key: string) => {
    switch(key) {
        case keydownEnum.arrowUp:
            return direction.top
        case keydownEnum.arrowRight:
            return direction.right
        case keydownEnum.arrowDown:
            return direction.bottom
        case keydownEnum.arrowLeft:
            return direction.left
    }
    return direction.left
}

export {
    randomObstacles,
    randomNumber,
    findingRoutes,
    createSystemLines,
    createNextPointByKeydownEvent,
    validateIsOutScreen,
    changePositionAnimals,
    createEndPoint,
    validateLine1,
    convertKeyDownToDirect,
    getIntersectPoint
}