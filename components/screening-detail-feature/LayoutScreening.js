import React, { Component } from "react"
import { Col, Row, CardBody, Table } from "reactstrap"
import picture from "../static/picture.jpg"
import Head from "next/head"

const fontSize14px = {
    fontSize: "14px",
}
export default class LayoutScreening extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                        crossOrigin="anonymous"
                    />
                </Head>

                <CardBody style={fontSize14px}>
                    <Row>
                        <Col md="12">
                            <Row>
                                <Col md="2">
                                    <img
                                        width="195"
                                        src={picture}
                                        alt="logo"
                                        className="img-thumbnail"
                                    />
                                </Col>
                                <Col md="6">
                                    <Row>
                                        <Col>
                                            <h5>
                                                <b>บุญศรัทธา มหามงคล</b>
                                            </h5>
                                        </Col>
                                        <Col>
                                            <h5>
                                                NH : &nbsp; <b>123456</b>
                                            </h5>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <p>
                                                DOB : <b>01/01/2561</b>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Age : <b>20 Y 5 M 11 D</b>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Sex : <b>ชาย</b>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Tel : <b>088xxxxxxx</b>
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p>
                                                Nationality : <b>ไทย</b>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Religion : <b>พุทธ</b>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Identification Number :{" "}
                                                <b>12345xxxxxxxxxx</b>
                                            </p>
                                        </Col>
                                        <Col />
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>
                                                Address :
                                                <b>
                                                    111 ถ.มหาวิทยาลัย ต.สุรนารี
                                                    อ.เมือง จ.นครราชสีมา
                                                </b>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md="4">
                                    <Row>
                                        <Col>
                                            <p>
                                                วันที่ลงประวัติการแพ้ &nbsp;
                                                20/01/2561 &nbsp;
                                                <b>บุญศรัทธา มหามงคล</b>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <b>มีประวัติการแพ้เช่นเดิม</b>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <div
                                                style={{
                                                    overflowY: "auto",
                                                    height: "85px",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                <Table size="sm" bordered>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                Allergy History
                                                            </th>
                                                            <th>Severity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Random...</td>
                                                            <td>Not Severe</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </div>
        )
    }
}
