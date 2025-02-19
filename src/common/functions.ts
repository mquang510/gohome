import ObstacleInterface from "../interfaces/Obstacle.ts"
import Point from "../interfaces/Point.ts"
import { defaultLength, direction, images, keydownEnum, obstacleLength } from "./constants.ts"

function onSegment(p, q, r) 
{ 
    if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && 
        q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) 
    return true; 
    
    return false; 
} 
  
// To find orientation of ordered triplet (p, q, r). 
// The function returns following values 
// 0 --> p, q and r are collinear 
// 1 --> Clockwise 
// 2 --> Counterclockwise 
function orientation(p, q, r) 
{ 
  
    // See https://www.geeksforgeeks.org/orientation-3-ordered-points/ 
    // for details of below formula. 
    let val = (q.y - p.y) * (r.x - q.x) - 
            (q.x - p.x) * (r.y - q.y); 
    
    if (val == 0) return 0; // collinear 
    
    return (val > 0)? 1: 2; // clock or counterclock wise 
} 
  
// The main function that returns true if line segment 'p1q1' 
// and 'p2q2' intersect. 
function doIntersect(p1, q1, p2, q2) 
{ 
  
    // Find the four orientations needed for general and 
    // special cases 
    let o1 = orientation(p1, q1, p2); 
    let o2 = orientation(p1, q1, q2); 
    let o3 = orientation(p2, q2, p1); 
    let o4 = orientation(p2, q2, q1); 
    
    // General case 
    if (o1 != o2 && o3 != o4) 
        return true; 
    
    // Special Cases 
    // p1, q1 and p2 are collinear and p2 lies on segment p1q1 
    if (o1 == 0 && onSegment(p1, p2, q1)) return true; 
    
    // p1, q1 and q2 are collinear and q2 lies on segment p1q1 
    if (o2 == 0 && onSegment(p1, q2, q1)) return true; 
    
    // p2, q2 and p1 are collinear and p1 lies on segment p2q2 
    if (o3 == 0 && onSegment(p2, p1, q2)) return true; 
    
    // p2, q2 and q1 are collinear and q1 lies on segment p2q2 
    if (o4 == 0 && onSegment(p2, q1, q2)) return true; 
    
    return false; // Doesn't fall in any of the above cases 
} 

function validateLine (start: Point, end: Point, obstacles: any) {
    const a = obstacles.find((item) => {
        const b = doIntersect(start, end, item, {
            x: item.x + obstacleLength,
            y: item.y
        })

        const c = doIntersect(start, end,  {
            x: item.x + obstacleLength,
            y: item.y
        }, {
            x: item.x + obstacleLength,
            y: item.y + obstacleLength
        })

        const d = doIntersect(start, end, item, {
            x: item.x,
            y: item.y + obstacleLength
        })

        const e = doIntersect(start, end, {
            x: item.x,
            y: item.y + obstacleLength
        }, {
            x: item.x + obstacleLength,
            y: item.y + obstacleLength
        })

        return b || c || d || e
    })
    if (!!a) {
        return false
    }
    return true
}

function getPointByDiretion (points:[Point], start: Point, end: Point, obstacles: any, directionSolution: direction[], ignorePoints: Point[] = []) {
    let nextPoint:Point = {
        x: 0,
        y: 0
    }
    let result = false
    for (let i = 0; i < directionSolution.length; i++) {
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
        if (points.find((x) => nextPoint.x === x.x && nextPoint.y === x.y)) continue
        if (ignorePoints.find((x) => nextPoint.x === x.x && nextPoint.y === x.y)) continue
        result = validateLine(start, nextPoint, obstacles)
        if (result) {
            break
        }
    }

    return { nextPoint, result }
}

function addNextPoint (points:[Point], start: Point, end: Point, defaultLength: number, obstacles: any, directionSolution: direction[], ignorePoints: Point[] = []) {
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

function findingRoutes(start: Point, end: Point, defaultLength: number, obstacles: any, directionSolution: any)  {
    const positions:[Point] = [start]
    addNextPoint(positions, start, end, defaultLength, obstacles, directionSolution)
    return positions
}

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createObstacle (maxX: number, maxY: number):ObstacleInterface {
    const x = randomNumber(0, maxX - 50)
    const y = randomNumber(0, maxY - 50)
    const imageIndex = randomNumber(0, images.length - 1)
    return {
        x: x,
        y: y,
        src: images[imageIndex]
    }
}

function randomObstacles(number = 0, x = 0, y = 0) {
    const obstacles: ObstacleInterface[] = []
    for (let i = 0; i < number; i++) {
        obstacles.push(createObstacle(x, y))
    }

    return obstacles
}

function createSystemLines(pointStart: Point, pointEnd : Point, diameter: number = defaultLength) {
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

function createNextPointByKeydownEvent(event: KeyboardEvent, lastPoint: Point) {
    let nextPoint
    if (event.key !== keydownEnum.arrowUp &&
        event.key !== keydownEnum.arrowDown &&
        event.key !== keydownEnum.arrowLeft &&
        event.key !== keydownEnum.arrowRight
    ) {
        return nextPoint
    }
    
    switch(event.key) {
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

export {
    randomObstacles,
    randomNumber,
    findingRoutes,
    createSystemLines,
    createNextPointByKeydownEvent
}