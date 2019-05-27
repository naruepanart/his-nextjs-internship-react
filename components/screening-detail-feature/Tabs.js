import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  CardBody
} from "reactstrap";
import classnames from "classnames";
import dynamic from "next/dynamic";

const Tabs1Main = dynamic(() => import("./Tabs1Main"), {
  ssr: false
});
const Tabs2Main = dynamic(() => import("./Tabs2Main"), {
  ssr: false
});
const Tabs3Main = dynamic(() => import("./Tabs3Main"), {
  ssr: false
});
const Tabs4Main = dynamic(() => import("./Tabs4Main"), {
  ssr: false
});

const LayoutScreening = dynamic(() => import("../screening-detail-feature/LayoutScreening"), {
  ssr: false,
})

const fontSize14px = {
  fontSize: "14px",
}

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div style={fontSize14px}>
      <LayoutScreening></LayoutScreening>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                ข้อมูลทั่วไป
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Special Record
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                การตรวจตา
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Vaccination History
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Tabs1Main />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Tabs2Main />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <Tabs3Main />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <Tabs4Main />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </CardBody>
      </div>
    );
  }
}
