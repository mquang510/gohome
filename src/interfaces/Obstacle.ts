import { direction } from "../common/constants"

interface ObstacleInterface {
    x: number,
    y: number,
    src: string,
    width: number,
    height: number,
    direction?: direction
  }
  
  export default ObstacleInterface
  