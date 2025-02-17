import React from "react";
import Line from '../item/Line.tsx';
import { findingRoutes } from '../../common/functions.tsx'
import { defaultLength, systemDirectRight } from '../../common/constants.tsx';
import Point from "../../interfaces/Point.tsx"

export default function MainLine({ obstacles }) {
    const start = {
        x: 50,
        y: 50
      }
      const end = {
        x: 800,
        y: 500
      }
    const positions = findingRoutes(start, end, defaultLength, obstacles, systemDirectRight)
  
    function renderLine (a: Point, b: Point) {
      return <Line start={a} end={b} />
    }
    const lines: any[] = []
    for (var i = 0; i < positions.length - 1; i++) {
      lines.push(renderLine(positions[i], positions[i + 1]))
    }
    return (
        <div class="main-line">
            {lines}
        </div>
    )
}