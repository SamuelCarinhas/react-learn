import { useState} from 'react';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Counter />
        </div>
    )
}

function Counter() {
    const [counter, setCounter] = useState(0);

    function addCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <div>Counter: {counter}</div>
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

export default Home