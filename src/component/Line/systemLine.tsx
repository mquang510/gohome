import React from "react";
import { createSystemLines } from "../../common/functions.tsx";
import Point from "../../interfaces/Point.tsx";
import Line from "../item/Line.tsx";

export default function SystemLine() {
    const widonWidth = window.innerWidth, windowHeight = window.innerHeight
    const startPoint: Point = {
        x: 0,
        y: 0
    }
    const endPoint: Point = {
        x: widonWidth - 2,
        y: windowHeight - 2
    }
    const systemLines = createSystemLines(startPoint, endPoint)
    function renderLine (line: any) {
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