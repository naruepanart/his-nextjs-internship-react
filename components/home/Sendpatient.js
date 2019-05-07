import React, { Component } from "react"
import {
    Row,
    Col,
    Button,
    Card,
    NavbarBrand,
    Navbar,
    CardBody,
    Input,
    Form,
    FormGroup,
    Label,
    CardHeader,
} from "reactstrap"
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const fontSize18px = {
    fontSize: "18px",
}
const fontSize12px = {
    fontSize: "12px",
}

const columns1 = [
    {
        dataField: "id",
        text: "วันที่รับบริการ",
        sort: true,
    },
    {
        dataField: "symptom",
        text: "อาการสำคัญ",
        sort: true,
    },
    {
        dataField: "authority",
        text: "สิทธิรักษา",
        sort: true,
    },
    {
        dataField: "doctor",
        text: "Doctor",
        sort: true,
    },
    {
        dataField: "location",
        text: "Location",
        sort: true,
    },
]

const columns2 = [
    {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
    },
    {
        dataField: "authority",
        text: "สิทธิ",
        sort: true,
    },
    {
        dataField: "tutelage",
        text: "ความคุ้มครอง",
        sort: true,
    },
    {
        dataField: "contact",
        text: "Contact",
        sort: true,
    },
]

const columns3 = [
    {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
    },
    {
        dataField: "schedule1",
        text: "นัดหมาย1",
        sort: true,
    },
    {
        dataField: "schedule2",
        text: "นัดหมาย2",
        sort: true,
    },
    {
        dataField: "schedule3",
        text: "นัดหมาย3",
        sort: true,
    },
]

const { SearchBar } = Search

const rows1 = [
    {
        id: "01/01/2562 16:00",
        symptom: "ปวดตับ",
        authority: "ข้าราชการ ชำระเอง OPD&IPD",
        doctor: "นะโม",
        location: "อายุรกรรม",
    },
]

const rows2 = [
    { id: 1, authority: "Thai", tutelage: "111", contact: "088-xxx" },
    { id: 2, authority: "Benz", tutelage: "888", contact: "088-xxx" },
]

const rows3 = [
    { id: "1", schedule1: "Hello", schedule2: "10/01/2561", schedule3: "OK" },
]

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        {" "}
        &nbsp; Showing {from} to {to} of {size} Results
    </span>
)

const options1 = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "<<",
    prePageText: "<",
    nextPageText: ">",
    lastPageText: ">>",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [
        {
            text: "5",
            value: 5,
        },
        {
            text: "10",
            value: 10,
        },
        {
            text: "All",
            value: rows2.length,
        },
    ],
}

const options2 = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "<<",
    prePageText: "<",
    nextPageText: ">",
    lastPageText: ">>",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [
        {
            text: "5",
            value: 5,
        },
        {
            text: "10",
            value: 10,
        },
        {
            text: "All",
            value: rows2.length,
        },
    ],
}
const options3 = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "<<",
    prePageText: "<",
    nextPageText: ">",
    lastPageText: ">>",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [
        {
            text: "5",
            value: 5,
        },
        {
            text: "10",
            value: 10,
        },
        {
            text: "All",
            value: rows3.length,
        },
    ],
}

export default class Sendpatient extends Component {
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
            english: "", //ภาษาอังกฤษ
        }
    }

    handleEnableField = () => {
        this.setState({
            disabled: !this.state.disabled,
        })
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
                                        ส่งตรวจผู้ป่วย
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
                                                                <p> ค้นหา : </p>
                                                            </Col>
                                                            <Col md="3">
                                                                <Input
                                                                    type="text"
                                                                    name="Search"
                                                                    bsSize="sm"
                                                                />
                                                            </Col>
                                                            <Col md="4">
                                                                <Button
                                                                    color="primary"
                                                                    size="sm"
                                                                >
                                                                    <i className="fas fa-user-tie" />{" "}
                                                                    อ่านบัตรประชาชน
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <br />

                                    <div style={fontSize12px}>
                                        <Card>
                                            <CardBody>
                                                <FormGroup>
                                                    <Label>ชื่อ-สกุล</Label>
                                                    <Input
                                                        type="text"
                                                        name="PatientFullName"
                                                        bsSize="sm"
                                                        disabled={
                                                            this.state.disabled
                                                                ? ""
                                                                : "disabled"
                                                        }
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Name</Label>
                                                    <Input
                                                        type="text"
                                                        name="PatientFullNameEN"
                                                        bsSize="sm"
                                                        disabled={
                                                            this.state.disabled
                                                                ? ""
                                                                : "disabled"
                                                        }
                                                    />
                                                </FormGroup>
                                                <Row>
                                                    <Col md="5">
                                                        <FormGroup>
                                                            <Label>
                                                                ว /ด /ป เกิด{" "}
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="Birthdate"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="3">
                                                        <FormGroup>
                                                            <Label>อายุ</Label>
                                                            <Input
                                                                type="number"
                                                                name="Age"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="4">
                                                        <FormGroup>
                                                            <Label>
                                                                เบอร์โทร
                                                            </Label>
                                                            <Input
                                                                type="number"
                                                                name="PhoneNumber"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <Label>ที่อยู่</Label>
                                                    <Input
                                                        type="text"
                                                        name="Address"
                                                        bsSize="sm"
                                                        disabled={
                                                            this.state.disabled
                                                                ? ""
                                                                : "disabled"
                                                        }
                                                    />
                                                </FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormGroup>
                                                            <Label>
                                                                เชื้อชาติ
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="RaceUID"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="4">
                                                        <FormGroup>
                                                            <Label>
                                                                สัญชาติ
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="NALTYUID"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="4">
                                                        <FormGroup>
                                                            <Label>ศาสนา</Label>
                                                            <Input
                                                                type="text"
                                                                name="RELGNUID"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <Label>
                                                        เลขบัตรประจำตัวประชาชน
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        name="NationalID"
                                                        bsSize="sm"
                                                        disabled={
                                                            this.state.disabled
                                                                ? ""
                                                                : "disabled"
                                                        }
                                                    />
                                                </FormGroup>
                                                <FormGroup className=" text-right">
                                                    <Button
                                                        color="success"
                                                        size="sm"
                                                    >
                                                        <i className="fas fa-user-plus" />{" "}
                                                        ทะเบียนผู้ป่วยใหม่
                                                    </Button>
                                                    <Button
                                                        color="danger"
                                                        onClick={
                                                            this
                                                                .handleEnableField
                                                        }
                                                        size="sm"
                                                    >
                                                        <i className="fas fa-user-edit" />{" "}
                                                        แก้ไขรายการ{" "}
                                                    </Button>
                                                </FormGroup>
                                            </CardBody>
                                        </Card>
                                        <br />
                                        {/* ประวัติการรับบริการ */}

                                        <Card>
                                            <CardHeader className="text-left">
                                                <h5>ประวัติการรับบริการ</h5>
                                            </CardHeader>
                                            <CardBody>
                                                <ToolkitProvider
                                                    keyField="id"
                                                    data={rows1}
                                                    columns={columns1}
                                                    search
                                                >
                                                    {props => (
                                                        <div>
                                                            <SearchBar
                                                                {...props.searchProps}
                                                                tableId="tableId"
                                                            />
                                                            <hr />
                                                            <BootstrapTable
                                                                hover={true}
                                                                pagination={paginationFactory(
                                                                    options1
                                                                )}
                                                                {...props.baseProps}
                                                            />
                                                        </div>
                                                    )}
                                                </ToolkitProvider>
                                            </CardBody>
                                        </Card>

                                        {/* อาการ */}
                                        <Form>
                                            <Card>
                                                <CardBody>
                                                    <FormGroup>
                                                        <Label>
                                                            อาการสำคัญ
                                                        </Label>
                                                        <Input
                                                            name="Symptom"
                                                            bsSize="sm"
                                                            label="อาการ"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                    <Row>
                                                        <Col md="3">
                                                            <FormGroup>
                                                                <Label>
                                                                    ส่งไปตรวจที่{" "}
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="city"
                                                                    id="exampleCity"
                                                                    bsSize="sm"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="9">
                                                            <FormGroup>
                                                                <Label>
                                                                    {" "}
                                                                    <br />
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="state"
                                                                    id="exampleState"
                                                                    bsSize="sm"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <FormGroup>
                                                        <Label>แพทย์ </Label>
                                                        <Input
                                                            name="Doctor"
                                                            label="แพทย์"
                                                            type="select"
                                                            bsSize="sm"
                                                        >
                                                            <option />
                                                            <option>นาย</option>
                                                            <option>นาง</option>
                                                            <option>
                                                                นางสาว
                                                            </option>
                                                        </Input>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Button>
                                                            ระบุเเพทย์อื่น
                                                        </Button>
                                                    </FormGroup>
                                                    <Row>
                                                        <Col md="4">
                                                            <Label>
                                                                การมารับบริการ
                                                            </Label>
                                                            <FormGroup>
                                                                <Input
                                                                    name="Service"
                                                                    label="การมารับบริการ"
                                                                    type="select"
                                                                    bsSize="sm"
                                                                >
                                                                    <option />
                                                                    <option>
                                                                        มารับบริการเอง
                                                                    </option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Form>
                                        <br />
                                        {/* สิทธิรักษาพยาบาลที่ใช้ Visit นี้ */}

                                        <Card>
                                            <CardHeader className="text-left">
                                                <h5>
                                                    สิทธิรักษาพยาบาลที่ใช้ Visit
                                                    นี้
                                                </h5>
                                            </CardHeader>

                                            <CardBody>
                                                <ToolkitProvider
                                                    keyField="id"
                                                    data={rows2}
                                                    columns={columns2}
                                                    search
                                                >
                                                    {props => (
                                                        <div>
                                                            <SearchBar
                                                                {...props.searchProps}
                                                                tableId="tableId"
                                                            />
                                                            <hr />
                                                            <BootstrapTable
                                                                hover={true}
                                                                pagination={paginationFactory(
                                                                    options2
                                                                )}
                                                                {...props.baseProps}
                                                            />
                                                        </div>
                                                    )}
                                                </ToolkitProvider>
                                            </CardBody>
                                        </Card>
                                        <br />
                                        {/* ประวัติการนัดหมาย */}

                                        <Card>
                                            <CardHeader className="text-left">
                                                <h5>ประวัติการนัดหมาย</h5>
                                            </CardHeader>

                                            <CardBody>
                                                <ToolkitProvider
                                                    keyField="id"
                                                    data={rows3}
                                                    columns={columns3}
                                                    search
                                                >
                                                    {props => (
                                                        <div>
                                                            <SearchBar
                                                                {...props.searchProps}
                                                                tableId="tableId"
                                                            />
                                                            <hr />
                                                            <BootstrapTable
                                                                hover={true}
                                                                pagination={paginationFactory(
                                                                    options3
                                                                )}
                                                                {...props.baseProps}
                                                            />
                                                        </div>
                                                    )}
                                                </ToolkitProvider>
                                            </CardBody>
                                        </Card>
                                        <br />
                                        {/* เอกสาร */}
                                        <Form>
                                            <Card>
                                                <CardHeader className="text-left">
                                                    <h5>เอกสาร</h5>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row>
                                                        <Col md="5">
                                                            <Label>
                                                                <p>
                                                                    ใบรับรองเเพทย์
                                                                </p>
                                                            </Label>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="radio"
                                                                        name="radio1"
                                                                        name="SB"
                                                                        value="เบิกค่ารักษา"
                                                                    />
                                                                    เบิกค่ารักษา
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="radio"
                                                                        name="radio1"
                                                                        name="NoteOfLeave"
                                                                        value="ลา"
                                                                    />
                                                                    ลา
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="radio"
                                                                        name="radio1"
                                                                        name="SBNL"
                                                                        value="เบิกค่ารักษาเเละลา"
                                                                    />
                                                                    เบิกค่ารักษาเเละลา
                                                                </Label>
                                                            </FormGroup>
                                                            <br />
                                                            <Col md="5">
                                                                <Label>
                                                                    จำนวน
                                                                </Label>
                                                                <Input
                                                                    name="Amount"
                                                                    label="จำนวน"
                                                                    type="select"
                                                                    bsSize="sm"
                                                                >
                                                                    <option>
                                                                        0
                                                                    </option>
                                                                    <option>
                                                                        1
                                                                    </option>
                                                                    <option>
                                                                        2
                                                                    </option>
                                                                    <option>
                                                                        3
                                                                    </option>
                                                                    <option>
                                                                        4
                                                                    </option>
                                                                    <option>
                                                                        5
                                                                    </option>
                                                                    <option>
                                                                        6
                                                                    </option>
                                                                    <option>
                                                                        7
                                                                    </option>
                                                                    <option>
                                                                        8
                                                                    </option>
                                                                    <option>
                                                                        9
                                                                    </option>
                                                                    <option>
                                                                        10
                                                                    </option>
                                                                </Input>
                                                                <Row>
                                                                    <Col md="12">
                                                                        <Label>
                                                                            หมายเหตุ
                                                                        </Label>
                                                                        <Input
                                                                            type="text"
                                                                            name="Mark"
                                                                            bsSize="sm"
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Col>
                                                        <Col md="3">
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="COMA"
                                                                        value="ClaimSlip"
                                                                    />{" "}
                                                                    ใบรับรองยานอกบัญชี
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="ClaimSlip"
                                                                        value="ClaimSlip"
                                                                    />{" "}
                                                                    ใบเคลม
                                                                </Label>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="Other"
                                                                        value="Other"
                                                                        onClick={
                                                                            this
                                                                                .handleEnableField
                                                                        }
                                                                    />
                                                                    อื่นๆ ระบุ
                                                                </Label>
                                                            </FormGroup>

                                                            <Input
                                                                name="Specify"
                                                                bsSize="sm"
                                                                disabled={
                                                                    this.state
                                                                        .disabled
                                                                        ? ""
                                                                        : "disabled"
                                                                }
                                                            />
                                                            <Col md="12">
                                                                <Col md="6">
                                                                    <br />
                                                                    <Label>
                                                                        จำนวน
                                                                    </Label>
                                                                    <Input
                                                                        name="Amount2"
                                                                        label="จำนวน"
                                                                        type="select"
                                                                        bsSize="sm"
                                                                    >
                                                                        <option>
                                                                            0
                                                                        </option>
                                                                        <option>
                                                                            1
                                                                        </option>
                                                                        <option>
                                                                            2
                                                                        </option>
                                                                        <option>
                                                                            3
                                                                        </option>
                                                                        <option>
                                                                            4
                                                                        </option>
                                                                        <option>
                                                                            5
                                                                        </option>
                                                                        <option>
                                                                            6
                                                                        </option>
                                                                        <option>
                                                                            7
                                                                        </option>
                                                                        <option>
                                                                            8
                                                                        </option>
                                                                        <option>
                                                                            9
                                                                        </option>
                                                                        <option>
                                                                            10
                                                                        </option>
                                                                    </Input>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Form>
                                        <br />
                                        {/* พิมพ์ใบ visit */}
                                        <Form>
                                            <Card>
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="พิมพ์ใบ Visit Slip"
                                                                        value="PrintVisitSlip"
                                                                    />{" "}
                                                                    พิมพ์ใบ
                                                                    Visit Slip
                                                                </Label>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="5">
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="Thai"
                                                                        value="Thai"
                                                                    />{" "}
                                                                    ภาษาไทย
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input
                                                                        type="checkbox"
                                                                        name="english"
                                                                        value="english"
                                                                    />{" "}
                                                                    ภาษาอังกฤษ
                                                                </Label>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Form>
                                    </div>
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
