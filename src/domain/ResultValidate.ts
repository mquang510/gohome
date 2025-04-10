import ObstacleInterface from "./Obstacle"
import Point from "./Point"

export default interface ResultValidate {
  valid: boolean,
  nextPoint?: Point,
  obstaclePoint?: ObstacleInterface,
  step?: number
}
    