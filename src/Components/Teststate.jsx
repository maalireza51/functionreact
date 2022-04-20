import React from 'react'
import { useState, useEffect } from 'react';

export default function Teststate() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        document.title = `count: ${count}`;
    })

    return (
        <>
            <p>you click {count} times</p>
            <input value={step} type="number" onChange={(event)=>{setStep(parseInt(event.target.value))}} />
            <button onClick={() => { setCount(count + step) }}>click me!</button>
        </>
    )
}