import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";

function App() {
    return(
     <div className={'app'}>
         <div className={'CounterWrapper'}>
             <Counter />
         </div>

     </div>
    )
}

export default App;
