import React from "react"
import Line from '../item/Line.tsx'
import PointInterface from "../../interfaces/Point.ts"

export default function MainLine({ points }) {
    // const start = {
    //     x: 50,
    //     y: 50
    //   }
    //   const end = {
    //     x: 800,
    //     y: 500
    //   }
    // const positions = findingRoutes(start, end, defaultLength, obstacles, systemDirectRight)
    // // console.log(positions)
    // // const positionBottoms = findingRoutes(start, end, defaultLength, obstacles, systemDirectBottom)
    // // const positions = positionRights.length < positionBottoms.length ? positionRights : positionBottoms
    function renderLine (a: PointInterface, b: PointInterface) {
      return <Line start={a} end={b} attr={points.length - 1} />
    }
    const lines: any[] = []
    for (var i = 0; i < points.length - 1; i++) {
      lines.push(renderLine(points[i], points[i + 1]))
    }
    return (
      <div className="main-line">
        {lines}
    </div>
    )
}