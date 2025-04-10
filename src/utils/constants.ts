import { direction, imageEnum } from "./enums.ts"

export const defaultLength = 50
export const obstacleLength = 40
export const diameterStartPoint = 20
export const diameterEndPoint = 20
export const windowWidth = window.innerWidth
export const windowHeight = window.innerHeight
export const windowMinWidth = 0
export const windowMinHeight = 0
export const windowMargin = 2
export const endpointMarginRow = 2
export const windowKeyDownEvent = 'keydown'
export const px = 'px'
export const firstTimeKey = 'isFirstTime'
export const settingsKey = 'settings'
export const f1 = 'F1'

export const startPoint = {
    x: 50,
    y: 50
}
export const obstacleLevel = {
    easy: 20,
    normal: 50,
    hard: 100,
    superHard: 200,
    extremely: 300
}
export const animalRunningTime = {
    easy: 5000,
    normal: 3000,
    hard: 2000,
    superHard: 1000,
    extremely: 500
}

export const obstacleObjects = [
    {
        index: 0,
        width: 50,
        height: 30,
        image: imageEnum.wolf
    },
    {
        index: 1,
        width: 50,
        height: 30,
        image: imageEnum.dinosaur
    },
    {
        index: 2,
        width: 50,
        height: 30,
        image: imageEnum.tiger
    },
    {
        index: 3,
        width: 50,
        height: 40,
        image: imageEnum.tyrannosaurus
    }
]

export const systemDirectRight = [direction.right, direction.bottom, direction.left]
export const systemDirectBottom = [direction.bottom, direction.right]
export const systemDirectTop = [direction.top, direction.right, direction.left]
