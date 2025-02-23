import React from "react";
import { createSystemLines } from "../../common/functions.ts";
import Point from "../../interfaces/Point.ts";
import Line from "../item/Line.tsx";
import {
    windowWidth,
    windowHeight,
    windowMargin
} from "../../common/constants.ts"

export default function SystemLine() {
    const startPoint : Point = {
        x: 0,
        y: 0
    }
    const endPoint: Point = {
        x: windowWidth - windowMargin,
        y: windowHeight - windowMargin
    }
    const systemLines = createSystemLines(startPoint, endPoint)
    function renderLine (line: Point[]) {
        return <Line start={line[0]} end={line[1]} attr={''} />
    }
    const lines: any[] = []
    for (var i = 0; i < systemLines.length; i++) {
        lines.push(renderLine(systemLines[i]))
    }
    return (
        <div className="system-line">
            {lines}
        </div>
    )
}