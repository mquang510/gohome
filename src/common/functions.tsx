import MountInterface from "../interfaces/Mount"
import Point from "../interfaces/Point"
import { defaultLength, direction, obstacleLength } from "./constants.tsx"

function validateLine (start: Point, end: Point, defaultLength: number, obstacles: any) {
    const a = obstacles.find((item) => {
        // if (start.x === end.x && start.y !== end.y) {
        //     return item.y >= start.y && item.y <= end.y
        // }
        // else if (start.x !== end.x && start.y === end.y) {
        //     return item.x >= start.x && item.x <= end.x
        // }
        return (item.x >= start.x && item.x <= end.x &&
            item.y >= start.y && item.y <= end.y
        ) ||
        (item.x <= start.x && item.x + obstacleLength >= end.x &&
            item.y >= start.y && item.y + obstacleLength <= end.y
        )
    })
    if (!!a) {
        console.log('-------')
        console.log(start)
        console.log(end)
        console.log(a)
        console.log('-------')
        return false
    }
    return true
}

function getPointByDiretion (points:[Point], start: Point, end: Point, obstacles: any, directionSolution: direction[]) {
    let nextPoint:Point = {
        x: 0,
        y: 0
    }
    let result = false
    let currentDirection = directionSolution[0]
    for (let i = 0; i < directionSolution.length - 1; i++) {
        switch(directionSolution[i]) {
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
                    y: start.y + defaultLength
                }
                break
            }
            case direction.left: {
                nextPoint = {
                    x: start.x - defaultLength,
                    y: start.y
                }
                break
            }
        }
        if (nextPoint.x === start.x && nextPoint.y === start.y) continue
        if (points.find((x) => nextPoint.x === x.x && nextPoint.y === x.y)) continue
        result = validateLine(start, nextPoint, defaultLength, obstacles)
        if (result) {
            break
        }
    }

    return { nextPoint, result }
}

function addNextPoint (points:[Point], start: Point, end: Point, defaultLength: number, obstacles: any, directionSolution: direction[]) {
    const currentDirection = directionSolution
    let result = getPointByDiretion(points, start, end, obstacles, directionSolution)
    if (result.result) {
        if (result.nextPoint.x !== end.x || result.nextPoint.y !== end.y) {
            points.push(result.nextPoint)
            let addCompleted = addNextPoint(points, result.nextPoint, end, defaultLength, obstacles, directionSolution)
            if (!addCompleted) {
                points.pop()
            }
            return addCompleted
        }
    }

    return false
}

function findingRoutes(start: Point, end: Point, defaultLength: number, obstacles: any, directionSolution: any)  {
    const positions:[Point] = [start]
    addNextPoint(positions, start, end, defaultLength, obstacles, directionSolution)
    return positions
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createAmount (maxX, maxY) {
    const x = randomNumber(50, maxX - 50)
    const y = randomNumber(50, maxY - 50)
    return {
        x: x,
        y: y
    }
}

function randomMounts(number = 10, x = 0, y = 0) {
    const mounts: Point[] = []
    for (let i = 1; i < number; i++) {
        mounts.push(createAmount(x, y))
    }

    return mounts
}

function createSystemLines(pointStart: Point, pointEnd : Point, diameter: number = defaultLength) {
    const lines: any[] = []
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

export {
    randomMounts,
    randomNumber,
    findingRoutes,
    createSystemLines
}