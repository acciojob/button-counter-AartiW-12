import  React from 'react'
import {useState} from 'react'

export default function Counter(){
    let [count , setCount] = useState(0);
    return(
        <div>
            <p id="counter">Button clicked {count} Times</p>
            <button id="click" onClick={()=>setCount(prev => prev+1)}>Click Me</button>
        </div>
    )
}