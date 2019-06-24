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
    Modal,
    ModalHeader,
    ModalBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Card,
    Col,
} from "reactstrap"

import dynamic from "next/dynamic"

import classnames from "classnames"

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

export default class Examdoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
            modal: false,
            activeTab: "1",
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

    toggletab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }

    render() {
        return (
            <div style={fontSize12px}>
                <Head>
                    <title>HIS - Examdoctor</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"
                    />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
                    <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js" />
                </Head>

                <Navbar color="primary" dark className="py-md-0">
                    <NavbarBrand href="/" style={fontSize16px}>
                        <i className="fas fa-map-marker-alt" /> &nbsp;
                        ห้องตรวจแพทย์ อายุรกรรม
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

                        <Navbar color="primary" dark className="py-md-0">
                            <NavbarBrand href="" style={fontSize16px}>
                                ผู้ป่วยรอรับบริการ
                            </NavbarBrand>
                        </Navbar>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "1",
                                    })}
                                    onClick={() => {
                                        this.toggletab("1")
                                    }}
                                >
                                    Doctor worklist
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "2",
                                    })}
                                    onClick={() => {
                                        this.toggletab("2")
                                    }}
                                >
                                    Appointment
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "3",
                                    })}
                                    onClick={() => {
                                        this.toggletab("3")
                                    }}
                                >
                                    All Patient
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col md="12">
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
                                                            isOpen={
                                                                this.state
                                                                    .dropdownOpen
                                                            }
                                                            toggle={this.toggle}
                                                        >
                                                            <DropdownToggle
                                                                caret
                                                            >
                                                                <i className="far fa-edit" />
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <p
                                                                        color="danger"
                                                                        onClick={
                                                                            this
                                                                                .toggle3
                                                                        }
                                                                    >
                                                                        Edit
                                                                    </p>
                                                                    <Modal
                                                                        size="xl"
                                                                        isOpen={
                                                                            this
                                                                                .state
                                                                                .modal
                                                                        }
                                                                        toggle={
                                                                            this
                                                                                .toggle3
                                                                        }
                                                                        className={
                                                                            this
                                                                                .props
                                                                                .className
                                                                        }
                                                                    >
                                                                        <ModalHeader
                                                                            toggle={
                                                                                this
                                                                                    .toggle3
                                                                            }
                                                                            charCode="X"
                                                                        >
                                                                            Screening
                                                                            Detail
                                                                        </ModalHeader>
                                                                        <ModalBody>
                                                                            <Tabs />
                                                                        </ModalBody>
                                                                    </Modal>
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <p>
                                                                        Delete
                                                                    </p>
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="6">
                                        <Card body>Appointment</Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col md="6">
                                        <Card body>All Patient</Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>

                    <div>
                        <div
                            data-role="progress"
                            data-value="100"
                            data-small="true"
                            data-cls-bar="bg-green"
                        />
                        <Navbar color="primary" dark className="py-md-0">
                            <NavbarBrand href="" style={fontSize16px}>
                                ผู้ป่วยอยู่ในการรักษา อายุรกรรม
                            </NavbarBrand>
                        </Navbar>

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
                        <Navbar color="primary" dark className="py-md-0">
                            <NavbarBrand href="" style={fontSize16px}>
                                ผู้ป่วยได้รับบริการแล้ว
                            </NavbarBrand>
                        </Navbar>

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
