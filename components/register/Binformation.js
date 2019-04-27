import React from "react"
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
} from "reactstrap"
// import CameraGG from './CameraGG';
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const columns1 = [
  {
    dataField: "id",
    text: "สังกัด",
    sort: true,
  },
  {
    dataField: "symptom",
    text: "ส่วนงาน",
    sort: true,
  },
  {
    dataField: "authority",
    text: "รหัสพนักงาน",
    sort: true,
  },
  {
    dataField: "subsection",
    text: "ส่วนงานย่อย",
    sort: true,
  },
  {
    dataField: "comment",
    text: "Comment",
    sort: true,
  },
]

const rows1 = [
  {
    id: "0",
    symptom: "symptom",
    authority: "authority",
    subsection: "subsection",
    comment: "comment",
  },
]

const { SearchBar } = Search

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

class Binformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Relate: "", //ความสัมพันธ์
      Member: "", //สังกัด
      Part: "", //ส่วนงาน
      Student: "", //นักศึกษา
      Employee: "", //บุคคากร
      Subsection: "", //ส่วนงานย่อย
      empid: "", //รหัสพนักงาน
      Comment: "", //Comment
      cardstart: "", //วันที่ออกบัตร
      cardexpire: "", //วันที่บัตรหมดอายุ
    }
  }

  render() {
    return (
      <div style={{ fontSize: "12px" }}>
        <CardBody>
          {/* สังกัดหน่วยงานและสวัสดิการ */}
          <Card>
            <CardHeader>
              <h5> สังกัดหน่วยงานและสวัสดิการ </h5>
            </CardHeader>
            <CardBody>
              {/* ข้อมูลบุคลากร/นักศึกษา */}
              <Card>
                <CardHeader>
                  <h6> ข้อมูลบุคลากร/นักศึกษา </h6>
                </CardHeader>
                <CardBody>
                  <Row form>
                    <Col md="4">
                      <Label for="exampleSelect">สำนัก/สังกัด</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    <Col md="4">
                      <Label for="exampleSelect">ส่วนงาน/สาขาวิชา</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    <Col md="4">
                      <Label for="exampleSelect">ส่วนงานย่อย</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="4">
                      <Label for="exampleSelect">รหัส นศ./รหัส พนง.</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    <Col md="2">
                      <br />
                      <FormGroup check>
                        <Label check>
                          <br />
                          <Input type="checkbox" /> นักศึกษา
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <br />
                      <FormGroup check>
                        <Label check>
                          <br />
                          <Input type="checkbox" /> พนักงาน
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <br />
              {/* สวัสดิการครอบครัวพนักงาน */}
              <Card>
                <CardHeader>
                  <h6> สวัสดิการครอบครัวพนักงาน </h6>
                </CardHeader>
                <CardBody>
                  <Row form>
                    <Col md="4">
                      <Label for="exampleSelect">สังกัด</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    <Col md="4">
                      <Label for="exampleSelect">ส่วนงาน</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    <Col md="4">
                      <Label for="exampleSelect">ส่วนงานย่อย</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="4">
                      <FormGroup>
                        <Label>รหัส พนง.</Label>
                        <Input type="number" name="Age" bsSize="sm" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Comment</Label>
                        <Input type="number" name="Age" bsSize="sm" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <Label for="exampleSelect">คนเป็นไข้</Label>
                      <Input type="select" name="select" bsSize="sm">
                        <option>select..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="3">
                      <FormGroup>
                        <Label>วันที่ออกบัตร</Label>
                        <Input type="date" name="date" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <Label>วันที่บัตรหมดอายุ</Label>
                        <Input type="date" name="date" />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <br />
                      <FormGroup check>
                        <Label check>
                          <br />
                          <Input type="checkbox" /> Active
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <ToolkitProvider
                    keyField="id"
                    data={rows1}
                    columns={columns1}
                    search
                  >
                    {props => (
                      <div>
                        <SearchBar {...props.searchProps} tableId="tableId" />
                        <hr />
                        <BootstrapTable
                          hover={true}
                          pagination={paginationFactory(options1)}
                          {...props.baseProps}
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                  <FormGroup className=" text-right">
                    <Button color="success" size="sm">
                      <i className="fas fa-plus" /> เพิ่ม
                    </Button>{" "}
                    <Button outline color="danger" size="sm">
                      <i className="fas fa-edit" /> แก้ไข
                    </Button>{" "}
                    <Button color="danger" size="sm">
                      <i className="fas fa-trash-alt" /> ลบ
                    </Button>{" "}
                  </FormGroup>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </CardBody>
      </div>
    )
  }
}

export default Binformation
