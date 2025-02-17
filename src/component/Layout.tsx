import React from "react"
import Circle from './item/Circle.tsx';
import Obstacle from './item/Obstacle.tsx';
import { randomMounts } from '../common/functions.tsx';
import Point from './item/Point.tsx';
import MainLine from "./Line/mainLine.tsx";
import SystemLine from "./Line/systemLine.tsx";
import { amountPoints } from "../common/constants.tsx";

export default function Layout() {
    const start = {
        x: 50,
        y: 50
    }
    const end = {
        x: 800,
        y: 500
    }
    // const amountPositions = randomMounts(100, window.innerWidth, window.innerHeight)
    // console.log(amountPositions)
    const amountPositions = amountPoints
    function renderAmount (a: any) {
        return <Obstacle position={a} />
    }
    
    const amounts: any[] = []
    for (var i = 0; i < amountPositions.length; i++) {
        amounts.push(renderAmount(amountPositions[i]))
    }
    return (
        <div className="layout">
            <Point position={start} diameter={20}/>
            <Circle position={end} diameter={20}/>
            <div className="obstacle-swapper">
            {amounts}
            </div>
           
            <MainLine obstacles={amountPositions}/>
            <SystemLine />
        </div>
    )
}