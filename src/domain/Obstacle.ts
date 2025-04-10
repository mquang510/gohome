import { direction } from "../utils/enums"

export default interface ObstacleInterface {
  x: number,
  y: number,
  src: string,
  width: number,
  height: number,
  direction?: direction
}
