import React from "react"
import Line from '../common/Line'
import PointInterface from "../../domain/Point"

export default function MainLine({ points }: any) {
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
