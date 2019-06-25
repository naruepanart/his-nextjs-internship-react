# Pattern code

การ setState
```
this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
------------------------------------------
toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
```

การส่งข้อมูล es6
```
import React, { Component } from "react"
export default class HelloWorld extends Component {
  state = {
    message: 'Hi'
  };

  logMessage = () => {
    // This works because arrow funcs adopt the this binding of the enclosing scope.
    console.log(this.state.message);
  };

  render() {
    return (
      <input type="button" value="Log" onClick={this.logMessage} />
    );
  }
}
```

การส่งข้อมูลข้าม components
```
import React, { Component } from "react";
import About from "./getstate";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      shop: [
        { id: 35, name: "jumper", color: "red", price: 200 },
        { id: 42, name: "shirt", color: "blue", price: 15 },
        { id: 56, name: "pants", color: "green", price: 25 },
        { id: 71, name: "socks", color: "black", price: 5 },
        { id: 72, name: "socks", color: "white", price: 5 }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.shop.map(item => (
          <About item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

```

```
import React from "react";

const About = props => {
  return (
    <div>
      <p>ID : {props.item.id}</p>
      <p>Name : {props.item.name}</p>
      <p>Price : {props.item.price}</p>
    </div>
  );
};

export default About;
```

การ post data ไปยัง API
```
import React from "react"
import axios from "axios"

export default class PersonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const user = {
      name: this.state.name,
    }

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

```

การดึง data โดยใช้ axios 
```
async componentDidMount() {
    const uri = 'https://backend-jsonserver-test.herokuapp.com/users'
    const { data } = await axios.get(uri)
    this.setState({ accountusers: data })
  }
```

ค้นหาข้อมูลใน table โดยใช้ react-bootstrap-table
```

import React, { Component } from "react"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
const { SearchBar } = Search

const products = [
  {
    id: 0,
    text: "Hello:0",
    name: "Name:0",
    price: 1000,
  },
  {
    id: 1,
    text: "Hello:1",
    name: "Name:1",
    price: 1000,
  },
  {
    id: 2,
    text: "Hello:2",
    name: "Name:2",
    price: 1000,
  },
]

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
]

export default class tabletest extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <center>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {props => (
              <div>
                <SearchBar {...props.searchProps} tableId="tableId" />
                <hr />
                <BootstrapTable {...props.baseProps}/>
              </div>
            )}
          </ToolkitProvider>
        </center>
      </div>
    )
  }
}
```

## React Hooks

### State

```
import React, { useState } from "react"

const ReactHooks = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("no setName")

    const plusSetCount = () => setCount(count + 1)
    const minusSetCount = () => setCount(count - 1)
    const ResetCount = () => setCount(0)

    const handleclicksetName = () => setName("Helloooooooooooo")


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

```

### Send Data with Form
```
import React, { useState } from "react"

const ReactHooks = () => {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        password: "",
    })

    const { firstname, lastname, password } = state

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

```

### Fetch API

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReactHooks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => setData(result.data));
    }, []);

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ReactHooks

```