import React, { Component } from "react"
import {
    Row,
    Col,
    Button,
    Card,
    NavbarBrand,
    Navbar,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form,
} from "reactstrap"
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"
import picture from "./static/picture.jpg"
import TabInRegister from "./TabInRegister"
import CameraGG from "./CameraGG"

const fontSize18px = {
    fontSize: "18px",
}

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            disabled: false,
        }

        this.state = {
            Search: "",
            PatientFullName: "", //ชื่อภาษาไทย
            PatientFullNameEN: "", //ชื่อภาษาอังกฤษ
            Birthdate: "", //วันเกิด
            Age: "", //อายุ
            PhoneNumber: "", //เบอร์โทร
            Address: "", //ที่อยู่
            RaceUID: "", //เชื่อชาติ
            NALTYUID: "", //สัญชาติ
            RELGNUID: "", //ศาสนา
            NationalID: "", //เลขบัตรประชาชน
            Symptom: "", //อาการ
            SendTo: "", //ส่งไปที่
            SendToO: "", //ส่งไปที่2
            Doctor: "", //แพทย์
            Service: "", //บริการ
            Amount: "", //จำนวน
            Amount2: "", //จำนวน2
            SB: "", //เบิกค่ารักษา
            NoteOfLeave: "", //ใบลา
            SBNL: "", //เบิกค่ารักษาเเละใบลา
            COMA: "", //ใบรับรองยานอกบัญชี
            ClaimSlip: "", //ใบเคลม
            Other: "", //อื่นๆ
            Specify: "", //ระบุ
            Mark: "", //หมายเหตุ
            PrintVisitSlip: "", //พิมพ์ใบvisit
            Thai: "", //ภาษาไทย
            Eng: "", //ภาษาอังกฤษ
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <Row>
                        <Col md="12">
                            <Card>
                                <Navbar
                                    color="primary"
                                    dark
                                    className="py-md-0"
                                >
                                    <NavbarBrand href="#" style={fontSize18px}>
                                        ทะเบียนผู้ป่วย
                                    </NavbarBrand>
                                </Navbar>
                                <CardBody>
                                    {/* ค้นหา */}
                                    <Card>
                                        <CardBody>
                                            <Form>
                                                <Row>
                                                    <Col md="12">
                                                        <Row>
                                                            <Col md="2">
                                                                <p>
                                                                    {" "}
                                                                    Hospital
                                                                    Number :{" "}
                                                                </p>
                                                            </Col>
                                                            <Col md="8">
                                                                <Row>
                                                                    <Col md="5">
                                                                        <Input
                                                                            type="text"
                                                                            name="Search"
                                                                            bsSize="sm"
                                                                            placeholder="00000000"
                                                                        />
                                                                    </Col>
                                                                    <Col />
                                                                    <Col md="5">
                                                                        <Input
                                                                            type="text"
                                                                            name="Search"
                                                                            placeholder="ใส่ข้อความเพื่อค้นหา"
                                                                            bsSize="sm"
                                                                        />
                                                                        <Row>
                                                                            <Col />
                                                                            <Col md="5">
                                                                                <br />
                                                                                <br />
                                                                                <Button
                                                                                    outline
                                                                                    color="primary"
                                                                                    size="sm"
                                                                                    onClick={
                                                                                        this
                                                                                            .toggle
                                                                                    }
                                                                                >
                                                                                    เปิดกล้อง
                                                                                </Button>
                                                                                <Modal
                                                                                    isOpen={
                                                                                        this
                                                                                            .state
                                                                                            .modal
                                                                                    }
                                                                                    toggle={
                                                                                        this
                                                                                            .toggle
                                                                                    }
                                                                                    className={
                                                                                        this
                                                                                            .props
                                                                                            .className
                                                                                    }
                                                                                    size="lg"
                                                                                >
                                                                                    <ModalHeader>
                                                                                        Picture
                                                                                        Capture
                                                                                    </ModalHeader>
                                                                                    <ModalBody>
                                                                                        <CameraGG />
                                                                                    </ModalBody>
                                                                                    <ModalFooter>
                                                                                        <Button
                                                                                            color="success"
                                                                                            size="sm"
                                                                                            onClick={
                                                                                                this
                                                                                                    .toggle
                                                                                            }
                                                                                        >
                                                                                            OK
                                                                                        </Button>
                                                                                    </ModalFooter>
                                                                                </Modal>
                                                                                <Col md="2">
                                                                                    <div className="imgPreview" />
                                                                                </Col>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md="2">
                                                                <img
                                                                    width="195"
                                                                    src={
                                                                        picture
                                                                    }
                                                                    alt="logo"
                                                                    className="img-thumbnail"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="2" />
                                                            <Col md="7" />
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <br />

                                    <TabInRegister />

                                    <br />
                                    <Row>
                                        <Col />
                                        <Col />
                                        <Button size="sm" color="success">
                                            <i className="fas fa-save" /> บันทึก
                                        </Button>
                                        &nbsp;
                                        <Button size="sm" color="danger">
                                            <i className="fas fa-trash-alt" />{" "}
                                            ลบรายการ
                                        </Button>
                                        &nbsp;
                                        <Button
                                            size="sm"
                                            outline
                                            color="danger"
                                        >
                                            <i className="fas fa-times" />{" "}
                                            ยกเลิก
                                        </Button>
                                        &nbsp;
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <ScrollUpButton
                    StopPosition={0}
                    howAtPosition={150}
                    EasingType="easeOutCubic"
                    AnimationDuration={500}
                    ContainerClassName="ScrollUpButton__Container"
                    TransitionClassName="ScrollUpButton__Toggled"
                    style={{}}
                    ToggledStyle={{}}
                />
            </div>
        )
    }
}
