
export const defaultLength = 50
export const obstacleLength = 20
export enum direction {
    top = 0,
    right = 1,
    bottom = 2,
    left = 3
}

export const systemDirectRight = [direction.right, direction.bottom]
export const systemDirectBottom = [direction.bottom, direction.right, direction.left]
export const systemDirectTop = [direction.top, direction.right, direction.left]