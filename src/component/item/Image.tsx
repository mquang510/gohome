import React from "react"
import { useState, useEffect } from 'react'

export default function Image({ position, diameter, src }) {
    const [text, setText] = useState(randomText())
    const [style, setStyle] = useState({ 
        top: 0,
        left: 0
    })

    useEffect(() => {
        setText(randomText())
        setStyle({
            top: position.y - diameter/2 + 1,
            left: position.x - diameter/2 + 1
        })
    }, [position, setText, setStyle])
    
    function randomText() {
        return Math.random() + ''
    }
    return (<div className="image-swapper">
        <img key={text} src={src} className="image" style={style}></img>
    </div>)
}