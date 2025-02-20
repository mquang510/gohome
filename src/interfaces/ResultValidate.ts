import Point from "./Point"

interface ResultValidate {
    valid: boolean,
    nextPoint?: Point,
    intersectPoint?: Point,
    step?: number
  }
  
export default ResultValidate
  