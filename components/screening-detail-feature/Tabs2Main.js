import React, { Component } from "react"
import InputMask from 'react-input-mask';
import {
  Row,
  Col,
  Label,
  Input,
  Table,
  Button,
  Card,
  CardBody,
  CustomInput,
} from "reactstrap"

export default class Tabs2Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      items1: [],
      datee: "",
      timee: "",
      neuroLeft: "",
      pupilLeft: "",
      neuroRight: "",
      pupilRight: "",
      gcsE: "",
      gcsV: "",
      gcsM: "",
      gcsTotal: "",
    }
  }

  datee = e => {
    this.setState({
      datee: e.target.value,
    })
  }
  timee = e => {
    this.setState({
      timee: e.target.value,
    })
  }
  neuroLeft = e => {
    this.setState({
      neuroLeft: e.target.value,
    })
  }
  pupilLeft = e => {
    this.setState({
      pupilLeft: e.target.value,
    })
  }
  neuroRight = e => {
    this.setState({
      neuroRight: e.target.value,
    })
  }
  pupilRight = e => {
    this.setState({
      pupilRight: e.target.value,
    })
  }
  gcsE = e => {
    this.setState({
      gcsE: e.target.value,
    })
  }
  gcsV = e => {
    this.setState({
      gcsV: e.target.value,
    })
  }
  gcsM = e => {
    this.setState({
      gcsM: e.target.value,
    })
  }
  gcsTotal = e => {
    this.setState({
      gcsTotal: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const nextItems = this.state.items.concat([
      {
        datee: this.state.datee,
        timee: this.state.timee,
        neuroLeft: this.state.neuroLeft,
        pupilLeft: this.state.pupilLeft,
        neuroRight: this.state.neuroRight,
        pupilRight: this.state.pupilRight,
        gcsE: this.state.gcsE,
        gcsV: this.state.gcsV,
        gcsM: this.state.gcsM,
        gcsTotal: this.state.gcsTotal,

        id: Date.now(),
      },
    ])

    this.setState({
      items: nextItems,

      // clear input
      datee: "",
      timee: "",
      neuroLeft: "",
      pupilLeft: "",
      neuroRight: "",
      pupilRight: "",
      gcsE: "",
      gcsV: "",
      gcsM: "",
      gcsTotal: "",
    })
  }

  deleteTable = i => {
    const items = this.state.items
    this.state.items.splice(i, 1)
    this.setState(prevState => ({
      items: prevState.items,
    }))
  }

  render() {
    return (
      <div style={{ fontSize: "12px" }}>
        <CardBody>
          <Row>
            <Col md="12">
              <form>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="1" />
                      <Col xs="12" sm="3">
                        <Label>วันที่</Label>

                        <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy"
                         onChange={this.datee}
                         value={this.state.datee}
                        // bsSize="sm" 
                         />
                        
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>เวลา</Label>
                        <Input
                          type="time"
                          name="time"
                          id="exampleTime"
                          placeholder="time placeholder"
                          onChange={this.timee}
                          value={this.state.timee}
                          bsSize="sm"
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="12" sm="2">
                                <br />
                                <Label>
                                  <b>Neuro Pupil</b>
                                </Label>
                              </Col>
                              <Col xs="12" sm="3">
                                <Label>Left</Label>
                                <Input
                                  type="select"
                                  onChange={this.neuroLeft}
                                  value={this.state.neuroLeft}
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
                                  placeholder="mm"
                                  onChange={this.pupilLeft}
                                  value={this.state.pupilLeft}
                                  bsSize="sm"
                                />
                              </Col>
                              <Col xs="12" sm="3">
                                <Label>Right</Label>
                                <Input
                                  type="select"
                                  onChange={this.neuroRight}
                                  value={this.state.neuroRight}
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
                                  placeholder="mm"
                                  onChange={this.pupilRight}
                                  value={this.state.pupilRight}
                                  bsSize="sm"
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="4">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="12" sm="2">
                                <br />
                                <Label>
                                  <b>GCS</b>
                                </Label>
                              </Col>
                              <Col xs="12" sm="2">
                                <Label>E</Label>
                                <Input
                                  type="text"
                                  onChange={this.gcsE}
                                  value={this.state.gcsE}
                                  bsSize="sm"
                                />
                              </Col>
                              <Col xs="12" sm="2">
                                <Label>V</Label>
                                <Input
                                  type="text"
                                  onChange={this.gcsV}
                                  value={this.state.gcsV}
                                  bsSize="sm"
                                />
                              </Col>
                              <Col xs="12" sm="2">
                                <Label>M</Label>
                                <Input
                                  type="text"
                                  onChange={this.gcsM}
                                  value={this.state.gcsM}
                                  bsSize="sm"
                                />
                              </Col>
                              <Col xs="12" sm="3">
                                <Label>Total</Label>
                                <Input
                                  type="text"
                                  onChange={this.gcsTotal}
                                  value={this.state.gcsTotal}
                                  bsSize="sm"
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
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

                    <br />

                    <Row>
                      <Col md="12">
                        <div style={{ height: "200px" }}>
                          <Table bordered size="sm">
                            <thead>
                              <tr>
                                <th>Date Time</th>
                                <th>Neuro Left</th>
                                <th>Pupil Left</th>
                                <th>Neuro Right</th>
                                <th>Pupil Right</th>
                                <th>E</th>
                                <th>V</th>
                                <th>M</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            {this.state.items.map((item, i) => (
                              <tbody key={i}>
                                <tr>
                                  <td>
                                    {item.datee} {item.timee}
                                  </td>
                                  <td>{item.neuroLeft}</td>
                                  <td>{item.pupilLeft}</td>
                                  <td>{item.neuroRight}</td>
                                  <td>{item.pupilRight}</td>
                                  <td>{item.gcsE}</td>
                                  <td>{item.gcsV}</td>
                                  <td>{item.gcsM}</td>
                                  <td>{item.gcsTotal}</td>
                                  <td>
                                    <Button
                                      outline
                                      color="danger"
                                      size="sm"
                                      onClick={this.deleteTable}
                                    >
                                      X
                                    </Button>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </Table>
                        </div>
                      </Col>
                    </Row>
                    <br />

                    <Row>
                      <Col md="12">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="12" sm="1">
                                <br />
                                <Label>
                                  <b>OBGYN</b>
                                </Label>
                              </Col>
                              <Col xs="12" sm="2">
                                <Label>LMP</Label>
                                <Input type="select" bsSize="sm">
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
                                <Label>Preg / Lac</Label>
                                <Input type="select" bsSize="sm">
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
                                <Label>EDC</Label>
                                <CustomInput
                                  type="select"
                                  id="exampleCustomSelectDisabled"
                                  name="customSelect"
                                  disabled
                                  bsSize="sm"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="1" />
                              <Col xs="12" sm="1">
                                <Label>G</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>P</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>A</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <br />

                    <Row>
                      <Col md="12">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="12" sm="1">
                                <br />
                                <Label>
                                  <b>Circumference</b>
                                </Label>
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>Neck</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>Waist</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>Hip</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              &emsp;&emsp;&emsp;
                              <Col xs="12" sm="2">
                                <Label>Waist/Hip radio</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="2">
                                <Label>Waist/height radio</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              &emsp;&emsp;&emsp;
                              <Col xs="12" sm="1">
                                <Label>Head</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                              <Col xs="12" sm="1">
                                <Label>Chest</Label>
                                <Input type="text" bsSize="sm" />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </form>
            </Col>
          </Row>
          <br />

          <Row>
            <Col md="12">
              <Card style={{ borderStyle: "none" }}>
                <CardBody>
                  <Row>
                    <Col sm="10" />
                    <Col />
                    <Button color="primary" size="sm">
                      บันทึก
                    </Button>
                  </Row>
                </CardBody>
              </Card>
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
