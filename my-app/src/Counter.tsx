import React, {useEffect, useState} from "react";
import './App.css';

export const Counter =()=> {
    const startNumber = 0
    const endNumber = 5
    const [count1, setCount1] = useState(startNumber)

    const [value, setValue] = useState(1)
    const [count,setCount] = useState<number>(1)

    useEffect(()=>{

        const myInterval = setInterval(()=>{

            setCount((prevcount) => {
                return prevcount+1})}, value * 1000)

        return ()=>{clearInterval(myInterval)}
    },[value])
    return (
        <div className="App">
            <div>{count}</div>
            <input type ="number" value = {value} onChange ={(e)=>{setValue(e.currentTarget.valueAsNumber)}}/>

            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );

    function plus() {
        setCount(count + 1)
    }

    function reset() {
        setCount(startNumber)
    }

    return (

        <div className={'CounterWrapper'}>
            <div className={'display'}> {count} </div>

            <div className={'controls'}>
                <button disabled = {count === endNumber} className={ 'incButton' } onClick={plus}>inc</button>
                <button className={'resetButton'} onClick={reset}>reset</button>
            </div>

        </div>
    )
}