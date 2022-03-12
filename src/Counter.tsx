import React, {ChangeEvent, useEffect, useState} from "react";
import './App.css';
import {unstable_renderSubtreeIntoContainer} from "react-dom";

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

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.valueAsNumber)
    }

    return (

        <div className={'CounterWrapper'}>
            <div className={'display'}> {count} </div>
            <input type ={'number'} value = {value} onChange = {onInputHandler}
                   autoFocus min={0} max={5} step={1}
            />

            <div className={'controls'}>
                <button disabled = {count === endNumber} className={'incButton'} onClick={plus}>inc</button>
                <button className={'resetButton'} onClick={reset}>reset</button>
            </div>

        </div>
    )
}