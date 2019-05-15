import React, { PureComponent } from "react"
import Head from "next/head"
import {
    Navbar,
    NavbarBrand,
    Table,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardHeader,
} from "reactstrap"

const fontSize16px = {
    fontSize: "16px",
}

const fontSize12px = {
    fontSize: "12px",
}
const height500px = {
    height: "500px",
}

class Examination extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }))
    }
    toggle1 = () => {
        this.setState(prevState => ({
            dropdownOpen1: !prevState.dropdownOpen1,
        }))
    }
    toggle2 = () => {
        this.setState(prevState => ({
            dropdownOpen2: !prevState.dropdownOpen2,
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
                    <NavbarBrand href="/" style={fontSize16px}>
                    <i className="fas fa-map-marker-alt"></i> &nbsp;
                        ห้องตรวจ
                    </NavbarBrand>
                </Navbar>

                <div data-role="splitter" className="h-100">
                    <div style={height500px}>
                        <div
                            data-role="progress"
                            data-value="100"
                            data-small="true"
                            data-cls-bar="bg-orange"
                        />
                        <CardHeader>Header!!!</CardHeader>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Dropdown
                                            isOpen={this.state.dropdownOpen}
                                            toggle={this.toggle}
                                        >
                                            <DropdownToggle caret>
                                                <i className="far fa-edit" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <Dropdown
                                            isOpen={this.state.dropdownOpen1}
                                            toggle={this.toggle1}
                                        >
                                            <DropdownToggle caret>
                                                <i className="far fa-edit" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <Dropdown
                                            isOpen={this.state.dropdownOpen2}
                                            toggle={this.toggle2}
                                        >
                                            <DropdownToggle caret>
                                                <i className="far fa-edit" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Waiting...
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <div
                            data-role="progress"
                            data-value="100"
                            data-small="true"
                            data-cls-bar="bg-green"
                        />
                        <CardHeader>Header</CardHeader>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <div
                            data-role="progress"
                            data-value="100"
                            data-small="true"
                            data-cls-bar="bg-pink"
                        />
                        <CardHeader>Header</CardHeader>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                    <th>Waiting..</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Examination
