import React from "react"
import isEqual from 'lodash/isEqual'
import Line from '../item/Line.tsx'
import { findingRoutes } from '../../common/functions.tsx'
import { defaultLength, systemDirectBottom, systemDirectRight, keydownEnum, defaultDiameterStartPoint } from '../../common/constants.tsx'
import PointInterface from "../../interfaces/Point.tsx"
import { useState, useEffect } from 'react'
import Image from '../item/Image.tsx'
import Point from '../item/Point.tsx'

export default function MainLine({ start }:any) {
  const [points, setPoints] = useState([start]);
  useEffect(() => {
    window.addEventListener("keydown", keydown, false);
  }, []);  
  function keydown(event : any) {
    if (event.keyCode !== keydownEnum.arrowUp &&
        event.keyCode !== keydownEnum.arrowDown &&
        event.keyCode !== keydownEnum.arrowLeft &&
        event.keyCode !== keydownEnum.arrowRight
    ) {
        return
    }
    if (points.length === 0) {
        points.push(start)
    }
    const lastPoint = points[points.length - 1]
    switch(event.keyCode) {
        case keydownEnum.arrowUp:
            points.push({
                x: lastPoint.x,
                y: lastPoint.y - defaultLength
            })
            break
        case keydownEnum.arrowRight:
            points.push({
                x: lastPoint.x + defaultLength,
                y: lastPoint.y
            })
            break
        case keydownEnum.arrowDown:
            points.push({
                x: lastPoint.x,
                y: lastPoint.y + defaultLength
            })
            break
        case keydownEnum.arrowLeft:
            points.push({
                x: lastPoint.x - defaultLength,
                y: lastPoint.y
            })
            break
      }
    setPoints([...points])
  }
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
    const lastestPoint = points[points.length - 1]
    return (
      <div>
        <div className="main-line">
            {lines}
        </div>
        <Image 
          position={lastestPoint}
          diameter={defaultDiameterStartPoint}
          src={"/image/people.png"}
        />
        {!isEqual(start, lastestPoint) ? <Point position={start} diameter={defaultDiameterStartPoint}/> : '' }
      </div>
    )
}