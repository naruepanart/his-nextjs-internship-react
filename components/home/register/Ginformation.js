import React, { Component } from "react"
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody,
    Input,
    FormGroup,
    Label,
    Form,
} from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const { SearchBar } = Search

const fontSize12px = {
    fontSize: "12px",
}

const columns1 = [
    {
        dataField: "id",
        text: "ID",
        sort: true,
    },
    {
        dataField: "typecard",
        text: "ประเภทบัตร",
        sort: true,
    },
    {
        dataField: "cardid",
        text: "เลขที่บัตร",
        sort: true,
    },
    {
        dataField: "cardstart",
        text: "วันที่เริ่ม",
        sort: true,
    },
    {
        dataField: "cardexpire",
        text: "วันที่สิ้นสุด",
        sort: true,
    },
]

const rows1 = [
    {
        id: "0",
        typecard: "typecard",
        cardid: "Benz",
        cardstart: "01",
        cardexpire: "cardexpired",
    },
]

const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    selected: [],
}

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
            value: rows1.length,
        },
    ],
}

class Ginformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkboxVIP: false,
            checkboxSpecialcare: false,
        }

        this.state = {
            TITLEUID: "", //คำนำหน้า
            Forename: "", //ชื่อ
            Surname: "", //สกุล
            Middlename: "", //ชื่อกลาง
            Nickname: "", //ชื่อเล่น
            TitleEN: "", //คำนำหน้าภาษาอังกฤษ
            ForenameEN: "", //ชื่อภาษาอังกฤษ
            SurnameEN: "", //สกุลภาษาอังกฤษ
            MiddlenameEN: "", //ชื่อกลางภาษาอังกฤษ
            NicknameEN: "", //ชื่อเล่นภาษาอังกฤษ
            NationalID: "", //เลขบัตรประชาชน
            NIDStartDttm: "", //วันที่ทำบัตร
            NIDEndDttm: "", //วันที่หมดอายุ
            Institution: "", //หน่วยงาน
            Birthdate: "", //วันเกิด
            Age: "", //อายุ
            SEXXXUID: "", //เพศ
            MARRYUID: "", //สถานะสมรส
            OccupUID: "", //อาชีพ
            RaceUID: "", //เชื้อชาติ
            NALTYUID: "", //สัญชาติ
            RELGNUID: "", //ศาสนา
            Bloodgrp: "", //หมู่เลือด
            BloodgrpRH: "", //หมู่เลือดRG
            PhoneNumber: "", //เบอร์โทร1
            PhoneNumber2: "", //เบอร์โทร2
            PhoneNumber3: "", //เบอร์โทร3
            HomePhone: "", //เบอร์บ้าน
            WorkPhone: "", //เบอร์ที่ทำงาน
            Email: "", //email
            Line: "", //line
            IsVIP: "", ///ผู้ป่วย VIP
            InCups: "", //** */
            IsAnonymous: "", //ไม่ระบุตัวตน
            Cardselect: "", //ประเภทบัตร
            cardid: "", //เลขบัตร
            cardstart: "", //วันที่เริ่ม
            cardexpire: "", //วันที่สิ้นสุด
        }
    }

    checkboxVIP = () => {
        this.setState({
            checkboxVIP: !this.state.checkboxVIP,
        })
    }

    checkboxSpecialcare = () => {
        this.setState({
            checkboxSpecialcare: !this.state.checkboxSpecialcare,
        })
    }

    render() {
        return (
            <div style={fontSize12px}>
                <CardBody>
                    <Form>
                        {/* กรอกชื่อภาษาไทย */}
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="2">
                                        <Label for="exampleSelect">
                                            คำนำหน้า
                                        </Label>
                                        <Input
                                            type="select"
                                            name="select"
                                            required
                                            bsSize="sm"
                                        >
                                            <option>select..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                    <Col md="3">
                                        <Label>ชื่อ</Label>
                                        <Input
                                            name="Forename"
                                            type="text"
                                            bsSize="sm"
                                            required
                                        />
                                    </Col>
                                    <Col md="3">
                                        <Label>นามสกุล</Label>
                                        <Input
                                            type="text"
                                            name="Nickname"
                                            bsSize="sm"
                                            required
                                        />
                                    </Col>
                                    <Col md="2">
                                        <Label>ชื่อกลาง</Label>
                                        <Input
                                            type="text"
                                            name="Middlename"
                                            bsSize="sm"
                                        />
                                    </Col>
                                    <Col md="2">
                                        <Label>ชื่อเล่น</Label>
                                        <Input
                                            type="text"
                                            name="Nickname"
                                            bsSize="sm"
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Form>

                    {/* กรอกชื่อภาษาอังกฤษ */}
                    <form>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="2">
                                        <Label for="exampleSelect">Title</Label>
                                        <Input
                                            type="select"
                                            name="select"
                                            bsSize="sm"
                                        >
                                            <option>select..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                    <Col md="3">
                                        <FormGroup>
                                            <Label>Name</Label>
                                            <Input
                                                name="ForenameEN"
                                                type="text"
                                                required
                                                bsSize="sm"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="3">
                                        <FormGroup>
                                            <Label>Lastname</Label>
                                            <Input
                                                name="SurnameEN"
                                                type="text"
                                                required
                                                bsSize="sm"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="2">
                                        <FormGroup>
                                            <Label>Middlename</Label>
                                            <Input
                                                type="text"
                                                name="MiddlenameEN"
                                                bsSize="sm"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="2">
                                        <FormGroup>
                                            <Label>Nickname</Label>
                                            <Input
                                                type="text"
                                                name="NicknameEN"
                                                bsSize="sm"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </form>

                    {/* กรอกข้อมูลทั่วไป */}
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label>เลขบัตรประชาชน</Label>
                                        <Input
                                            type="number"
                                            name="NationalID"
                                            bsSize="sm"
                                            max="13"
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="3">
                                    <Label>วันที่เริ่ม</Label>
                                    <Input
                                        type="date"
                                        name="NIDStartDttm"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="3">
                                    <Label>วันที่สิ้นสุด</Label>
                                    <Input
                                        type="date"
                                        name="NIDEndDttm"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="2">
                                    <br />
                                    <FormGroup check>
                                        <Label check>
                                            {" "}
                                            <br />
                                            <Input
                                                type="checkbox"
                                                name="Institution"
                                            />
                                            หน่วยงาน
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    <FormGroup>
                                        <Label>วัน/เดือน/ปี เกิด</Label>
                                        <Input
                                            type="date"
                                            name="Birthdate"
                                            bsSize="sm"
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="2">
                                    <Label>อายุ</Label>
                                    <Input
                                        type="number"
                                        name="Age"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="2">
                                    <Label for="exampleSelect">เพศ</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                                <Col md="4">
                                    <Label for="exampleSelect">สภาพสมรส</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                        required
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="exampleSelect">อาชีพ</Label>
                                        <Input
                                            type="select"
                                            name="select"
                                            bsSize="sm"
                                            required
                                        >
                                            <option>select..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label for="exampleSelect">
                                            สัญชาติ
                                        </Label>
                                        <Input
                                            type="select"
                                            name="select"
                                            bsSize="sm"
                                            required
                                        >
                                            <option>select..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <Label for="exampleSelect">เชื้อชาติ</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                        required
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                                <Col md="4">
                                    <Label for="exampleSelect">ศาสนา</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                        required
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="3">
                                    <FormGroup>
                                        <Label for="exampleSelect">
                                            หมู่เลือด
                                        </Label>
                                        <Input
                                            type="select"
                                            name="select"
                                            bsSize="sm"
                                            required
                                        >
                                            <option>select..</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="2">
                                    <Label for="exampleSelect">RH</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="2">
                                    <FormGroup>
                                        <Label>เบอร์โทร 1</Label>
                                        <Input
                                            type="number"
                                            name="PhoneNumber"
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="2">
                                    <Label>เบอร์โทร 2</Label>
                                    <Input
                                        type="number"
                                        name="PhoneNumber2"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="2">
                                    <Label>เบอร์โทร 2</Label>
                                    <Input
                                        type="number"
                                        name="PhoneNumber3"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="2">
                                    <Label>เบอร์บ้าน</Label>
                                    <Input
                                        type="number"
                                        name="HomePhone"
                                        bsSize="sm"
                                    />
                                </Col>
                                <Col md="2">
                                    <Label>เบอร์ที่ทำงาน</Label>
                                    <Input
                                        type="number"
                                        name="WorkPhone"
                                        bsSize="sm"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label> E-mail</Label>
                                        <Input
                                            type="email"
                                            name="Email"
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <Label>ID Line</Label>
                                    <Input
                                        type="text"
                                        name="Line"
                                        bsSize="sm"
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    {/* ประเภทผู้ป่วย */}
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <Label> ประเภทผู้ป่วย </Label>
                                    <Col md="10">
                                        <FormGroup check>
                                            <Input
                                                type="checkbox"
                                                name="checkboxVIP"
                                                value="checkboxVIP"
                                                onClick={this.checkboxVIP}
                                            />

                                            <Input
                                                name="checkboxVIP"
                                                bsSize="sm"
                                                placeholder="VIP"
                                                disabled={
                                                    this.state.checkboxVIP
                                                        ? ""
                                                        : "disabled"
                                                }
                                            />
                                        </FormGroup>
                                        <br />
                                        <FormGroup check>
                                            <Input
                                                type="checkbox"
                                                name="checkboxSpecialcare"
                                                value="checkboxSpecialcare"
                                                onClick={
                                                    this.checkboxSpecialcare
                                                }
                                            />

                                            <Input
                                                name="checkboxSpecialcare"
                                                bsSize="sm"
                                                placeholder="Special Care"
                                                disabled={
                                                    this.state
                                                        .checkboxSpecialcare
                                                        ? ""
                                                        : "disabled"
                                                }
                                            />
                                        </FormGroup>
                                        <br />
                                        <FormGroup check>
                                            <Label>
                                                <Input type="checkbox" />{" "}
                                                Anonymous
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <br />
                    {/* ข้อมูลบัตรอื่นๆ */}
                    <Card>
                        <CardHeader body="true" className="text-left">
                            <h5> ข้อมูลบัตรอื่นๆ </h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <Label for="exampleSelect">
                                        ประเภทบัตร
                                    </Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        bsSize="sm"
                                    >
                                        <option>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label>เลขที่บัตร</Label>
                                        <Input
                                            type="text"
                                            name="cardid"
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label> วันที่เริ่ม</Label>
                                        <Input
                                            type="date"
                                            name="cardstart"
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label>วันที่สิ้นสุด</Label>
                                        <Input
                                            type="date"
                                            name="cardexpire"
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col />
                                <Col />
                                <Button size="sm" color="success">
                                    <i className="fas fa-plus" /> เพิ่ม
                                </Button>
                                &nbsp;
                                <Button size="sm" outline color="danger">
                                    <i className="fas fa-edit" /> แก้ไข
                                </Button>
                                &nbsp;
                                <Button size="sm" outline color="danger">
                                    <i className="fas fa-times" /> ปิดใช้งาน
                                </Button>
                                &nbsp;
                                <Button size="sm" color="danger">
                                    <i className="fas fa-trash-alt" /> ลบ
                                </Button>
                                &nbsp;
                            </Row>
                            <br />
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
                                            selectRow={selectRow}
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
                </CardBody>
            </div>
        )
    }
}

export default Ginformation
