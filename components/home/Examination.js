import React, { PureComponent } from "react"
import Head from "next/head"
import { Navbar, NavbarBrand, Table, Alert } from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const fontSize14px = {
    fontSize: "14px",
}

const fontSize12px = {
    fontSize: "12px",
}

const columns2 = [
    {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
    },
    {
        dataField: "authority",
        text: "สิทธิ",
        sort: true,
    },
    {
        dataField: "tutelage",
        text: "ความคุ้มครอง",
        sort: true,
    },
    {
        dataField: "contact",
        text: "Contact",
        sort: true,
    },
    {
        dataField: "status",
        text: "status",
    },
]

const { SearchBar, ClearSearchButton } = Search

const rows2 = [
    {
        id: 0,
        authority: "Benz",
        tutelage: "10",
        contact: "088xxx",
        status: "status",
    }, 
]

class Examination extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showing: true,
            hidden: true,
            dropdownOpen: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }))
    }

    render() {
        return (
            <div style={fontSize12px}>
                <Head>
                    <title>HIS - Examination</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"
                    />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
                    <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js" />
                </Head>

                <Navbar color="primary" dark className="py-md-0">
                    <NavbarBrand href="/" style={fontSize14px}>
                        งานหน้าห้องตรวจ
                    </NavbarBrand>
                </Navbar>

                <div data-role="splitter" className="h-100">
                    <Table  bordered>
                        <thead>
                            <div
                                data-role="progress"
                                data-value="100"
                                data-small="true"
                                data-cls-bar="bg-orange"
                            />
                            <tr>
                                <th>No</th>
                                <th>Status</th>
                                <th>Status</th>
                                <th>Status</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div>
                        <ToolkitProvider
                            keyField="id"
                            data={rows2}
                            columns={columns2}
                            search
                        >
                            {props => (
                                <div>
                                    <div
                                        data-role="progress"
                                        data-value="100"
                                        data-small="true"
                                        data-cls-bar="bg-green"
                                    />
                                    <Navbar
                                        color="primary"
                                        dark
                                        className="py-md-0"
                                    >
                                        <NavbarBrand
                                            href="/"
                                            style={fontSize14px}
                                        >
                                            <i className="fas fa-first-aid" />
                                            &nbsp; รอ...
                                        </NavbarBrand>
                                    </Navbar>
                                    <br />

                                    <SearchBar
                                        {...props.searchProps}
                                        tableId="tableId"
                                    />
                                    <ClearSearchButton {...props.searchProps} />

                                    <BootstrapTable
                                        hover={true}
                                        {...props.baseProps}
                                       
                                    />
                                </div>
                            )}
                        </ToolkitProvider>
                    </div>
                    <div>
                        <ToolkitProvider
                            keyField="id"
                            data={rows2}
                            columns={columns2}
                            search
                        >
                            {props => (
                                <div>
                                    <div
                                        data-role="progress"
                                        data-value="100"
                                        data-small="true"
                                        data-cls-bar="bg-pink"
                                    />
                                    <Navbar
                                        color="primary"
                                        dark
                                        className="py-md-0"
                                    >
                                        <NavbarBrand
                                            href="/"
                                            style={fontSize14px}
                                        >
                                            <i className="fas fa-first-aid" />
                                            &nbsp; รอ...
                                        </NavbarBrand>
                                    </Navbar>
                                    <br />

                                    <SearchBar
                                        {...props.searchProps}
                                        tableId="tableId"
                                    />
                                    <ClearSearchButton {...props.searchProps} />

                                    <BootstrapTable
                                        hover={true}
                                        {...props.baseProps}
                                      
                                    />
                                </div>
                            )}
                        </ToolkitProvider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Examination
