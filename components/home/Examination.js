import React, { Component } from "react"
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
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap"

import dynamic from "next/dynamic"

const Tabs = dynamic(() => import("../screening-detail-feature/Tabs"), {
    ssr: false,
})

const fontSize16px = {
    fontSize: "16px",
}

const fontSize12px = {
    fontSize: "12px",
}
const height500px = {
    height: "500px",
}

export default class Examination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
            modal: false,
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
    toggle3 = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
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
                        <i className="fas fa-map-marker-alt" /> &nbsp; ห้องตรวจ
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
                                                    <p
                                                        color="danger"
                                                        onClick={this.toggle3}
                                                    >
                                                        Edit
                                                    </p>
                                                    <Modal  
                                                        size="lg"
                                                        isOpen={
                                                            this.state.modal
                                                        }
                                                        toggle={this.toggle3}
                                                        className={
                                                            this.props.className
                                                        }
                                                    >
                                                        <ModalHeader 
                                                            toggle={
                                                                this.toggle3
                                                            }
                                                            charCode="X"
                                                        >
                                                            Modal title
                                                        </ModalHeader>
                                                        <ModalBody
                                                           
                                                        >
                                                            <Tabs />
                                                        </ModalBody>
                                                    </Modal>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <p>Delete</p>
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
