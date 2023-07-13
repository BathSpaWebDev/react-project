import {useState} from 'react';
import './counter.css';

// counter component
function Counter() {
    // initialize the state variable called counter
    const [counter, setCounter] = useState(0);

    function increaseCount() {
        setCounter(counter + 1);
    }

    function decreaseCount() {
        setCounter(counter - 1);
    }

    return (
        <div className="counter">
            <button onClick={decreaseCount}>Decrease</button>
            {counter}
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default Counter;