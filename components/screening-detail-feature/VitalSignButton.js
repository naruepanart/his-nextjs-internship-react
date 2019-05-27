import React, { Component } from "react"
import InputMask from 'react-input-mask';
import {
  CardBody,
  Row,
  Col,
  Label,
  Input,
  Button,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap"

export default class VitalSignButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      items: [],
      datee: "",
      timee: "",
      temperatureText: "",
      pulseText: "",
      rrText: "",
      sbpText: "",
      dbpText: "",
      o2SatText: "",
      painScoreText: "",
      esiText: "",
    }
  }

  toggle = e => {
    this.setState(
      prevStat({
        modal: !prevState.modal,
      })
    )
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
  temperatureText = e => {
    this.setState({
      temperatureText: e.target.value,
    })
  }
  pulseText = e => {
    this.setState({
      pulseText: e.target.value,
    })
  }
  rrText = e => {
    this.setState({
      rrText: e.target.value,
    })
  }
  sbpText = e => {
    this.setState({
      sbpText: e.target.value,
    })
  }
  dbpText = e => {
    this.setState({
      dbpText: e.target.value,
    })
  }
  o2SatText = e => {
    this.setState({
      o2SatText: e.target.value,
    })
  }
  painScoreText = e => {
    this.setState({
      painScoreText: e.target.value,
    })
  }
  esiText = e => {
    this.setState({
      esiText: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const nextItems = this.state.items.concat([
      {
        datee: this.state.datee,
        timee: this.state.timee,
        temperatureText: this.state.temperatureText,
        pulseText: this.state.pulseText,
        rrText: this.state.rrText,
        sbpText: this.state.sbpText,
        dbpText: this.state.dbpText,
        o2SatText: this.state.o2SatText,
        painScoreText: this.state.painScoreText,
        esiText: this.state.esiText,

        id: Date.now(),
      },
    ])

    this.setState({
      items: nextItems,

      // clear input
      datee: "",
      timee: "",
      temperatureText: "",
      pulseText: "",
      rrText: "",
      sbpText: "",
      dbpText: "",
      o2SatText: "",
      painScoreText: "",
      esiText: "",
    })
  }

  deleteitem = i => {
    const items = this.state.items
    this.state.items.splice(i, 1)
    this.setState(prevState => ({
      items: prevState.items,
    }))
  }

  render() {
    return (
      <div>
        <ModalBody>
          <form>
            <Row>
              <Col xs="12" sm="4">
                <Label>Date</Label>
                <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy"
                         onChange={this.datee}
                         value={this.state.datee}
                        // bsSize="sm" 
                         />
               
              </Col>
              <Col xs="12" sm="4">
                <Label>Time</Label>
                <Input
                  type="time"
                  name="time"
                  id="VitalSignAddTime"
                  placeholder="time placeholder"
                  onChange={this.timee}
                  value={this.state.timee}
                  bsSize="sm"
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12" sm="2">
                <Label>T</Label>
                <Input
                  type="text"
                  onChange={this.temperatureText}
                  value={this.state.temperatureText}
                  bsSize="sm"
                />
              </Col>
              <Col xs="12" sm="2">
                <Label>P</Label>
                <Input
                  type="text"
                  onChange={this.pulseText}
                  value={this.state.pulseText}
                  bsSize="sm"
                />
              </Col>
              <Col xs="12" sm="2">
                <Label>RR</Label>
                <Input
                  type="text"
                  onChange={this.rrText}
                  value={this.state.rrText}
                  bsSize="sm"
                />
              </Col>
              <Col xs="12" sm="2">
                <Label>BP </Label>
                <Input
                  type="text"
                  onChange={this.sbpText}
                  value={this.state.sbpText}
                  bsSize="sm"
                />
              </Col>

              <Col xs="12" sm="2">
                <Label>O2Sat</Label>
                <Input
                  type="text"
                  onChange={this.o2SatText}
                  value={this.state.o2SatText}
                  bsSize="sm"
                />
              </Col>

              <Col xs="12" sm="2">
                <Label>Pain Score</Label>
                <Input
                  type="text"
                  onChange={this.painScoreText}
                  value={this.state.painScoreText}
                  bsSize="sm"
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="2">
                <Label>ESI</Label>
                <Input
                  type="text"
                  onChange={this.esiText}
                  value={this.state.esiText}
                  bsSize="sm"
                />
              </Col>
              <Col xs="12" sm="2" />
              <Col xs="12" sm="2" />
              <Col xs="12" sm="2">
                <Label>/</Label>
                <Input
                  type="text"
                  onChange={this.dbpText}
                  value={this.state.dbpText}
                  bsSize="sm"
                />
              </Col>
            </Row>
            <CardBody>
              <Row>
                <Col />
                <Button color="primary" size="sm" onClick={this.handleSubmit}>
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
                <Table bordered size="sm">
                  <thead>
                    <tr>
                      <th>Date Time</th>
                      <th>Temperature</th>
                      <th>Pulse</th>
                      <th>RR</th>
                      <th>SBP</th>
                      <th>DBP</th>
                      <th>O2Sat</th>
                      <th>Pain Score</th>
                      <th>ESI</th>
                    </tr>
                  </thead>
                  {this.state.items.map((item, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          {item.datee} {item.timee}
                        </td>
                        <td>{item.temperatureText}</td>
                        <td>{item.pulseText}</td>
                        <td>{item.rrText}</td>
                        <td>{item.sbpText}</td>
                        <td>{item.dbpText}</td>
                        <td>{item.o2SatText}</td>
                        <td>{item.painScoreText}</td>
                        <td>{item.esiText}</td>
                        <td>
                          <Button
                            outline
                            color="danger"
                            size="sm"
                            onClick={this.deleteitem}
                          >
                            X
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </Row>
            </CardBody>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            บันทึก
          </Button>
        </ModalFooter>
      </div>
    )
  }
}
