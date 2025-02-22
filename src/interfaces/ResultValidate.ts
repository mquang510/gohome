import ObstacleInterface from "./Obstacle"
import Point from "./Point"

interface ResultValidate {
    valid: boolean,
    nextPoint?: Point,
    obstaclePoint?: ObstacleInterface,
    step?: number
  }
  
export default ResultValidate
  