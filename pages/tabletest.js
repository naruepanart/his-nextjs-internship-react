/* 
import React, { Component } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter"
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios" 

export default class tabletest extends Component {
  state = {
    users: [],
    columns: [
      {
        dataField: "id",
        text: "ID",
        sort: true,
        filter: textFilter()
        
      },
      {
        dataField: "title",
        text: "title",
        sort: true,
        filter: textFilter()
      },
      {
        dataField: "body",
        text: "body",
        sort: true,
        filter: textFilter()
      },
    ],
  }
  
  componentDidMount() {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      this.setState({
        users: response.data,
      })
    })
  }
  
  render() {
    return (
      <div>
      <BootstrapTable
      striped
      hover
      keyField="id"
      data={this.state.users}
      columns={this.state.columns} 
      filter={filterFactory()}
      pagination={paginationFactory()}
      />
      </div>
      )
    }
  }  */

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

/* 
 export default class HelloWorld extends Component {
  import React, { Component } from "react"
  // Note that state is a property,
  // so no constructor is needed in this case.
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

 export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hi' };
    this.logMessage = this.logMessage.bind(this);
  }

  logMessage() {
    // This works because of the bind in the constructor above.
    console.log(this.state.message);
  }

  render() {
    return (
      <input type="button" value="Log" onClick={this.logMessage} />
    );
  }
} 
 */
