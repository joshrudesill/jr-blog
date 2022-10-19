import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="card my-5">
            <div className="card-content">
                <span className="tag is-info has-text-weight-bold is-size-5 mb-5">Count: {count}</span>
                <div className="columns">
                    <div className="column is-narrow">
                        <button className="button is-small is-primary" onClick={() => setCount(count + 1)}>Add 1!</button>
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-small is-primary" onClick={() => setCount(count + 5)}>Add 5!</button>
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-small is-danger" onClick={() => setCount(count - 1)}>Subtract 1!</button>
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-small is-danger" onClick={() => setCount(count - 5)}>Subtract 5!</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Counter;