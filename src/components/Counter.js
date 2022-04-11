import { useState } from 'react';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);



    return (
        <>

            <h1> Name: {props.name}</h1>
            <h2> Purpose: {props.purpose}</h2>

            <button onClick={() => { setCounter((prevCount) => prevCount - 1) }}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter((prevCount) => prevCount + 1) }}>+</button>


        </>
    )
}

export default Counter;