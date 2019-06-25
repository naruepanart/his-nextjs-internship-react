import React, { useState } from "react"

const ReactHooks = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("no setName")

    const plusSetCount = () => setCount(count + 1)
    const minusSetCount = () => setCount(count - 1)
    const ResetCount = () => setCount(0)

    const handleclicksetName = () => setName("Hellooooooooooooooo")


    return (
        <div>
            <p>Count : {count} </p>
            <button onClick={plusSetCount}>plusSetCount</button> &nbsp;
            <button onClick={minusSetCount}>minusSetCount</button> &nbsp;
            <button onClick={ResetCount}>Reset</button>

            <p>Name : {name} </p>
            <button onClick={handleclicksetName}>setName</button>
        </div>
    )
}

export default ReactHooks