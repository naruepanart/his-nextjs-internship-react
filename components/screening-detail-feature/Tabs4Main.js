import React, { Component } from "react";
import InputMask from 'react-input-mask';
import {
  Row,
  Col,
  Label,
  Input,
  Table,
  Button,
  Card,
  CardBody
} from "reactstrap";

export default class Tabs4Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      nameVaccineSelect: "",
      dateVaccineText: "",
      yearVaccineText: "",
      monthVaccineText: ""
    };
  }

  nameVaccineSelect = e => {
    this.setState({
      nameVaccineSelect: e.target.value
    });
  };
  dateVaccineText = e => {
    this.setState({
      dateVaccineText: e.target.value
    });
  };
  yearVaccineText = e => {
    this.setState({
      yearVaccineText: e.target.value
    });
  };
  monthVaccineText = e => {
    this.setState({
      monthVaccineText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const nextItems = this.state.items.concat([
      {
        nameVaccineSelect: this.state.nameVaccineSelect,
        dateVaccineText: this.state.dateVaccineText,
        yearVaccineText: this.state.yearVaccineText,
        monthVaccineText: this.state.monthVaccineText,
        id: Date.now()
      }
    ]);

    this.setState({
      items: nextItems,
      nameVaccineSelect: "",
      dateVaccineText: "",
      yearVaccineText: "",
      monthVaccineText: ""
    });
  };

  deleteitem = i => {
    const items = this.state.items;
    this.state.items.splice(i, 1);
    this.setState(prevState => ({
      items: prevState.items
    }));
  };

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
                      <Col xs="12" sm="5">
                        <Label>วัคซีน</Label>
                        <Input
                          type="select"
                          onChange={this.nameVaccineSelect}
                          value={this.state.nameVaccineSelect}
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
                    </Row>
                    <Row>
                      <Col xs="12" sm="3">
                        <Label>วันฉีด</Label>
                        <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy"
                         onChange={this.dateVaccineText}
                         value={this.state.dateVaccineText}
                        // bsSize="sm" 
                         />
                       
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>อายุ</Label>
                        <Input
                          type="text"
                          placeholder="ปี"
                          onChange={this.yearVaccineText}
                          value={this.state.yearVaccineText}
                          bsSize="sm"
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>
                          <br />
                        </Label>
                        <Input
                          type="text"
                          placeholder="เดือน"
                          onChange={this.monthVaccineText}
                          value={this.state.monthVaccineText}
                          bsSize="sm"
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col />
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
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />

          <Row>
            <Col md="8">
              <Card>
                <CardBody>
                  <div style={{ overflowY: "auto", height: "160px" }}>
                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th>ลำดับ</th>
                          <th>วัคซีน</th>
                          <th>วันที่ฉีดวัคซีน</th>
                          <th>อายุ (ปี)</th>
                          <th>อายุ (เดือน)</th>
                          <th style={{ width: "1px" }} />
                        </tr>
                      </thead>

                      {this.state.items.map((item, i) => (
                        <tbody key={i}>
                          <tr>
                            <td>{i}</td>
                            <td>{item.nameVaccineSelect}</td>
                            <td>{item.dateVaccineText}</td>
                            <td>{item.yearVaccineText}</td>
                            <td>{item.monthVaccineText}</td>
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
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <CardBody>
                <Row>
                  <Col sm="10" />
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
    );
  }
}
