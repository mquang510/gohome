import React from "react"
import { diameterEndPoint } from "../../common/constants"

export default function Circle({ position }: any) {
    const style = {
        width: diameterEndPoint,
        height: diameterEndPoint,
        top: position.y - diameterEndPoint/2 + 1,
        left: position.x - diameterEndPoint/2 + 1
    }

    return <div className="circle" style={style}></div>
}