import React, {useEffect, useState} from "react";
import './App.css';

export const Counter = () => {
    const startNumber: number = 0
    const endNumber: number = 5

    const [value, setValue] = useState<number>(1)
    const [count,setCount] = useState<number>(1)

    useEffect(() => {

        const myInterval = setInterval(() => {

            setCount((prevcount: number) => {
                return prevcount + 1})}, value * 1000)

        return () => {clearInterval(myInterval)}
    },[value])



    const plus = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(startNumber)
    }

    return (

        <div className={'CounterWrapper'}>
            <div className={'display'}> {count} </div>
            <input type ={'number'} value = {value} onChange = {(e) => {setValue(e.currentTarget.valueAsNumber)}}
                   autoFocus min={0} max={5} step={1}
            />

            <div className={'controls'}>
                <button disabled = {count === endNumber} className={'incButton'} onClick={plus}>inc</button>
                <button className={'resetButton'} onClick={reset}>reset</button>
            </div>

        </div>
    )
}