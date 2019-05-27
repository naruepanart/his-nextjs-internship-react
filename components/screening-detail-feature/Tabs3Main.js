import React, { Component } from "react"
import {
  Row,
  Col,
  Label,
  Input,
  Table,
  Button,
  Card,
  CardBody,
} from "reactstrap"

export default class Tabs3Main extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      items1: [],

      vaReTypeSelect: "",
      vaReText: "",
      vaPhRightText: "",
      iopReText: "",
      iopReCheckbox: false,

      vaLeTypeSelect: "",
      vaLeText: "",
      vaPhLeftText: "",
      iopLeft: "",
      iopLeftCheckbox: false,

      varChecked: "N",
    }
  }

  vaReTypeSelect = e => {
    this.setState({
      vaReTypeSelect: e.target.value,
    })
  }
  vaReText = e => {
    this.setState({
      vaReText: e.target.value,
    })
  }
  vaPhRightText = e => {
    this.setState({
      vaPhRightText: e.target.value,
    })
  }
  iopReText = e => {
    this.setState({
      iopReText: e.target.value,
    })
  }
  handleCheckright = e => {
    this.setState({
      iopReCheckbox: e.target.value,
    })
  }

  vaLeTypeSelect = e => {
    this.setState({
      vaLeTypeSelect: e.target.value,
    })
  }
  vaLeText = e => {
    this.setState({
      vaLeText: e.target.value,
    })
  }
  vaPhLeftText = e => {
    this.setState({
      vaPhLeftText: e.target.value,
    })
  }
  iopLeftText = e => {
    this.setState({
      iopLeftText: e.target.value,
    })
  }

  handleCheckleft = e => {
    this.setState({
      iopLeftCheckbox: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const nextItems = this.state.items.concat([
      {
        vaReTypeSelect: this.state.vaReTypeSelect,
        vaReText: this.state.vaReText,
        vaPhRightText: this.state.vaPhRightText,
        iopReText: this.state.iopReText,
        iopReCheckbox: this.state.iopReCheckbox,
        id: Date.now(),
      },
    ])
    const nextItems1 = this.state.items1.concat([
      {
        vaLeTypeSelect: this.state.vaLeTypeSelect,
        vaLeText: this.state.vaLeText,
        vaPhLeftText: this.state.vaPhLeftText,
        iopLeftText: this.state.iopLeftText,
        iopLeftCheckbox: this.state.iopLeftCheckbox,
        id: Date.now(),
      },
    ])

    this.setState({
      items: nextItems,
      items1: nextItems1,

      // clear input
      vaReTypeSelect: "",
      vaReText: "",
      vaPhRightText: "",
      iopReText: "",
      iopReCheckbox: "",

      vaLeTypeSelect: "",
      vaLeText: "",
      vaPhLeftText: "",
      iopLeftText: "",
      iopLeftCheckbox: "",
    })
  }

  deleteTableRE = i => {
    const items = this.state.items
    this.state.items.splice(i, 1)
    this.setState(prevState => ({
      items: prevState.items,
    }))
  }
  deleteTableLE = i => {
    const items1 = this.state.items1
    this.state.items1.splice(i, 1)
    this.setState(prevState => ({
      items1: prevState.items1,
    }))
  }

  render() {
    return (
      <div style={{ fontSize: "12px" }}>
        <CardBody>
          <Row>
            <Col md="8">
              <Card>
                <CardBody>
                  <form>
                    <Row>
                      <Col xs="12" sm="1">
                        <br />
                        <Label>
                          <b>V.A.</b>
                        </Label>
                      </Col>

                      <Col xs="12" sm="3">
                        <Label>RE</Label>
                        <Input
                          type="select"
                          onChange={this.vaReTypeSelect}
                          value={this.state.vaReTypeSelect}
                          bsSize="sm"
                        >
                          <option />
                          <option>ดีที</option>
                          <option>ดีทีพีตับอักเสบบี 1</option>
                          <option>ดีทีพีตับอักเสบบี 2</option>
                          <option>ดีทีพีตับอักเสบบี 3</option>
                          <option>วัคซีนพิษสุนัขบ้า 1</option>
                          <option>วัคซีนพิษสุนัขบ้า 2</option>
                          <option>วัคซีนพิษสุนัขบ้า 3</option>
                        </Input>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>
                          <br />
                        </Label>
                        <Input
                          type="text"
                          onChange={this.vaReText}
                          value={this.state.vaReText}
                          bsSize="sm"
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>PH</Label>
                        <Input
                          type="text"
                          onChange={this.vaPhRightText}
                          value={this.state.vaPhRightText}
                          bsSize="sm"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="1" />
                      <Col xs="12" sm="3">
                        <Label>LE</Label>
                        <Input
                          type="select"
                          onChange={this.vaLeTypeSelect}
                          value={this.state.vaLeTypeSelect}
                          bsSize="sm"
                        >
                          <option />
                          <option>ดีที</option>
                          <option>ดีทีพีตับอักเสบบี 1</option>
                          <option>ดีทีพีตับอักเสบบี 2</option>
                          <option>ดีทีพีตับอักเสบบี 3</option>
                          <option>วัคซีนพิษสุนัขบ้า 1</option>
                          <option>วัคซีนพิษสุนัขบ้า 2</option>
                          <option>วัคซีนพิษสุนัขบ้า 3</option>
                        </Input>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>
                          <br />
                        </Label>
                        <Input
                          type="text"
                          onChange={this.vaLeText}
                          value={this.state.vaLeText}
                          bsSize="sm"
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>PH</Label>
                        <Input
                          type="text"
                          onChange={this.vaPhLeftText}
                          value={this.state.vaPhLeftText}
                          bsSize="sm"
                        />
                      </Col>
                    </Row>
                    <br />

                    <Row>
                      <Col xs="12" sm="1">
                        <br />
                        <Label>
                          <b>IOP</b>
                        </Label>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>RE</Label>
                        <Input
                          type="text"
                          onChange={this.iopReText}
                          value={this.state.iopReText}
                          bsSize="sm"
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <br />
                        <br />
                        <Label />
                        <Input
                          type="checkbox"
                          checked={this.state.iopReCheckbox}
                          onChange={this.handleCheckright}
                          value={this.state.varChecked}
                        />
                        วัดไม่ได้
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="1" />
                      <Col xs="12" sm="2">
                        <Label>LE</Label>
                        <Input
                          type="text"
                          onChange={this.iopLeftText}
                          value={this.state.iopLeftText}
                          bsSize="sm"
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <br />
                        <br />
                        <Label />
                        <Input
                          type="checkbox"
                          checked={this.state.iopLeftCheckbox}
                          onChange={this.handleCheckleft}
                          value={this.state.varChecked}
                        />
                        วัดไม่ได้
                      </Col>

                      <CardBody>
                        <br />
                        <br />

                        <Row>
                          <Col />
                          <Button
                            color="primary"
                            size="sm"
                            onClick={this.handleSubmit}
                          >
                            Add
                          </Button>
                          &nbsp;
                          <Button color="success" size="sm">
                            Edit
                          </Button>
                          &nbsp;
                         
                         
                          &nbsp;
                          
                        </Row>
                      </CardBody>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />

          <Col>
            <h6>RE</h6>
          </Col>

          <Row>
            <Col md="8">
              <Card>
                <CardBody>
                  <div style={{ overflowY: "auto", height: "160px" }}>
                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th>V.A. RE Type</th>
                          <th>V.A. RE</th>
                          <th>V.A. PH</th>
                          <th>IOP RE</th>
                          <th>วัดไม่ได้</th>
                        </tr>
                      </thead>
                      {this.state.items.map((item, i) => (
                        <tbody key={i}>
                          <tr>
                            <td>{item.vaReTypeSelect}</td>
                            <td>{item.vaReText}</td>
                            <td>{item.vaPhRightText}</td>
                            <td>{item.iopReText}</td>
                            <td>{item.iopReCheckbox}</td>
                            <td>
                              {" "}
                              <Button
                                outline
                                color="danger"
                                size="sm"
                                onClick={this.deleteTableRE}
                              >
                                X
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />

          <Col>
            <h6>LE</h6>
          </Col>

          <Row>
            <Col md="8">
              <Card>
                <CardBody>
                  <div style={{ overflowY: "auto", height: "160px" }}>
                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th>V.A. LE Type</th>
                          <th>V.A. LE</th>
                          <th>V.A. PH</th>
                          <th>IOP LE</th>
                          <th>วัดไม่ได้</th>
                        </tr>
                      </thead>
                      {this.state.items1.map((item, i) => (
                        <tbody key={i}>
                          <tr>
                            <td>{item.vaLeTypeSelect}</td>
                            <td>{item.vaLeText}</td>
                            <td>{item.vaPhLeftText}</td>
                            <td>{item.iopLeftText}</td>
                            <td>{item.iopLeftCheckbox}</td>
                            <td>
                              {" "}
                              <Button
                                outline
                                color="danger"
                                size="sm"
                                onClick={this.deleteTableLE}
                              >
                                X
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="8">
              <CardBody>
                <Row>
                  <Col />
                  <Col />
                  <Button color="primary" size="sm">
                    บันทึก
                  </Button>
                </Row>
              </CardBody>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col />
            <Col />
            <Button color="secondary" size="sm">
              ส่งพยาบาลหน้าห้องตรวจ
            </Button>
            &nbsp;
            <Button color="secondary" size="sm">
              ส่งพบแพทย์
            </Button>
            &nbsp;
          </Row>
        </CardBody>
      </div>
    )
  }
}
