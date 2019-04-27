import React, { Component } from "react";
import Link from 'next/link';
import { Col, Row, Button } from "reactstrap";
import Regis from "./static/iconSetMainForm64_addPatient.png";
import SendP from "./static/iconSetMainForm64_sendPatient.png";
import Nurse from "./static/iconSetMainForm64_nurse-04.png";
import Doc from "./static/iconSetMainForm64_doctor.png";
import Drug from "./static/iconSetMainForm64_drug.png";
import Xray from "./static/iconSetMainForm64_xray-15.png";
import Coin from "./static/iconSetMainForm64_coin.png";
import Manage from "./static/iconSetMainForm64_calendar.png";



export default class Navbarmain extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="12">
            <Link href="/register">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Regis} width="30" alt="logo"/>
                  <br />
                </span>
                ทะเบียนผู้ป่วย
              </Button>
            </Link>
            <Link href="/sendpatient">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={SendP} width="30" alt="logo" />
                  <br />
                </span>
                ส่งตรวจผู้ป่วย
              </Button>
            </Link>

            <Link href="/examination">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Nurse} width="30" alt="logo"/>
                  <br />
                </span>
                งานหน้าห้องตรวจ
              </Button>
            </Link>
            <Link href="/examdoctor">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Doc} width="30" alt="logo"/>
                  <br />
                </span>
                งานห้องตรวจแพทย์
              </Button>
            </Link>
            <Link href="/dispensing">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Drug} width="30" alt="logo" />
                  <br />
                </span>
                งานห้องจ่ายยา
              </Button>
            </Link>

            <Link href="/">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Xray} width="30" alt="logo" />
                  <br />
                </span>
                งานหน้าห้อง X-ray
              </Button>
            </Link>
            <Link href="/">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Coin} width="30" alt="logo" />
                  <br />
                </span>
                งานห้องการเงิน
              </Button>
            </Link>
            <Link href="/">
              <Button color="link" size="sm" style={{fontSize:"12px"}}>
                <span className="icon">
                  <img src={Manage} width="30" alt="logo" />
                  <br />
                </span>
                Manage Session
              </Button>
            </Link>
          </Col>
        </Row>
        <hr></hr>
      </div>
    );
  }
}
