import React, { useState } from "react"

const ReactHooks = () => {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        password: "",
    })

    const { firstname, lastname, password } = state

console.log(state)

    const updateStateData = e =>
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })

    return (
        <div>
            <form>
                Firstname : {firstname} <br />
                Lastname : {lastname} <br />
                Password : {password} <br />
                <br />
                <input
                    value={firstname}
                    onChange={e => updateStateData(e)}
                    placeholder="Firstname"
                    type="text"
                    name="firstname"
                    required
                />
                <input
                    value={lastname}
                    onChange={e => updateStateData(e)}
                    placeholder="Lastname"
                    type="text"
                    name="lastname"
                    required
                />
                <input
                    value={password}
                    onChange={e => updateStateData(e)}
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHooks
