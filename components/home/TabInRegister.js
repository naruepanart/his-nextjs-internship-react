import React, { Component } from "react"
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
} from "reactstrap"
import classnames from "classnames"
import dynamic from "next/dynamic"
const Ginformation = dynamic(() => import("./register/Ginformation"), {
    ssr: false,
})
const Ainformation = dynamic(() => import("./register/Ainformation"), {
    ssr: false,
})
const Pinformation = dynamic(() => import("./register/Pinformation"), {
    ssr: false,
})
const Cinformation = dynamic(() => import("./register/Cinformation"), {
    ssr: false,
})
const Binformation = dynamic(() => import("./register/Binformation"), {
    ssr: false,
})

const fontSize14px = {
    fontSize: "14px",
}

export default class TabInRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: "1",
        }
    }

    toggletab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }
    render() {
        return (
            <div style={fontSize14px}>
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
                            ข้อมูลทั่วไป
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
                            ข้อมูลที่อยู่
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
                            ข้อมูลสิทธิรักษา
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "4",
                            })}
                            onClick={() => {
                                this.toggletab("4")
                            }}
                        >
                            ข้อมูลการเปลี่ยนชื่อ-สกุล
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "5",
                            })}
                            onClick={() => {
                                this.toggletab("5")
                            }}
                        >
                            สังกัดหน่วยงานและสวัสดิการ
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Ginformation />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Ainformation />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Pinformation />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <Cinformation />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">
                                <Binformation />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
