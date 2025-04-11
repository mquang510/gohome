import { direction } from "../utils/enums"

export default interface ObstacleInterface {
  x: number,
  y: number,
  src: any,
  width: number,
  height: number,
  direction?: direction
}
