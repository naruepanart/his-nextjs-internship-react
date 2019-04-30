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
  Form
} from "reactstrap"
// import CameraGG from './CameraGG';
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const fontSize12px = {
  fontSize: "12px",
};

const columns1 = [
  {
    dataField: "id",
    text: "คำนำหน้า",
    sort: true,
  },
  {
    dataField: "name",
    text: "ชื่อ",
    sort: true,
  },
  {
    dataField: "authority",
    text: "สกุล",
    sort: true,
  },
  {
    dataField: "doctor",
    text: "ที่อยู่",
    sort: true,
  },
  {
    dataField: "relationship",
    text: "ความสัมพันธ์",
    sort: true,
  },
  {
    dataField: "telnumber",
    text: "เบอร์โทร",
    sort: true,
  },
  {
    dataField: "telnumberhome",
    text: "เบอร์บ้าน",
    sort: true,
  },
  {
    dataField: "telnumberwork",
    text: "เบอร์ที่ทำงาน",
    sort: true,
  },
  {
    dataField: "priority",
    text: "Priority",
    sort: true,
  },
]

const { SearchBar } = Search

const rows1 = [
  {
    id: "0",
    name: "name",
    authority: "1",
    doctor: "doctor",
    location: "thailand",
  },
]

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
  selected: [],
}

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    &nbsp; &nbsp; Showing {from} to {to} of {size} Results
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

class Ainformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Addr: "", //บ้านเลขที่
      Moo: "", //หมู่
      tmbuid: "", //ตำบล
      ampuid: "", //อำเภอ
      chwuid: "", //จังหวัด
      RoadLane: "", //ซอย ถนน
      zipcode: "", //รหัสไปรษณีย์
      InformAddr: "", //บ้านเลขที่ที่แจ้ง
      InformMoo: "", //หมู่ที่แจ้ง
      InformTMBUID: "", //ตำบลที่แจ้ง
      InformAMPUID: "", //อำเภอที่แจ้ง
      InformCHWUID: "", //จังหวัดที่แจ้ง
      InformZipcode: "", //ไปรษณีย์ที่แจ้ง
      InformRoadLane: "", //ซอย ถนนที่แจ้ง
      TYPEAREAUID: "", //สถานะบุคคล
      TITLEUIDkin: "", //คำนำหน้า
      Forenamekin: "", //ชื่อ
      Surnamekin: "", //สกุล
      Relate: "", //ความสัมพันธ์
      PhoneNumberkin: "", //เบอร์โทร
      HomePhonekin: "", //เบอร์บ้าน
      WorkPhonekin: "", //เบอร์ที่ทำงาน
      Imp: "", //ลำดับความสำคัญ
      kinAddr: "", //บ้านเลขที่
      kinMoo: "", //หมู่
      kintmbuid: "", //ตำบล
      kinampuid: "", //อำเภอ
      kinchwuid: "", //จังหวัด
      kinRoadLane: "", //ซอย ถนน
      kinzipcode: "", //รหัสไปรษณีย์
    }
  }

  render() {
    return (
      <div style={fontSize12px}>
        <CardBody>
          <Form>
            <Card>
              <CardHeader>
                <h5> ที่อยู่ตามทะเบียนบ้าน </h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <Label>บ้านเลขที่</Label>
                      <Input type="number" name="Addr" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label>หมู่ที่</Label>
                      <Input type="number" name="Moo" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>ถนน/ซอย/หมู่บ้าน</Label>
                      <Input type="text" name="RoadLane" bsSize="sm" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">จังหวัด</Label>
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
                    <Label for="exampleSelect">อำเภอ</Label>
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

                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">ตำบล/เขต</Label>
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
                    <Label for="exampleSelect">รหัสไปรษณีย์</Label>
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
              </CardBody>
            </Card>
            <br />
            {/* ที่อยู่ที่สามารถติดต่อได้ */}
            <Card>
              <CardHeader>
                <FormGroup check inline>
                  <h5> ที่อยู่ที่สามารถติดต่อได้ </h5> &nbsp;&nbsp;
                  <Label check>
                    <Input type="checkbox" /> Some input
                  </Label>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <Label>บ้านเลขที่</Label>
                      <Input type="number" name="InformAddr" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label>หมู่ที่</Label>
                      <Input type="number" name="InformMoo" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>ถนน/ซอย/หมู่บ้าน</Label>
                      <Input type="text" name="InformRoadLane" bsSize="sm" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">จังหวัด</Label>
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
                    <Label for="exampleSelect">อำเภอ</Label>
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
                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">ตำบล/เขต</Label>
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
                    <Label for="exampleSelect">รหัสไปรษณีย์</Label>
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
              </CardBody>
            </Card>
            {/* สถานะบุคคล */}
            <Card>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Label for="exampleSelect">สถานะบุคคล</Label>
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
              </CardBody>
            </Card>
            <br />
            {/* ญาติที่ติดต่อ */}
            <Card>
              <CardHeader>
                <h5> ญาติที่ติดต่อ </h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <Label for="exampleSelect">คำนำหน้า</Label>
                    <Input type="select" name="select" bsSize="sm">
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
                      <Label>ชื่อ</Label>
                      <Input
                        type="text"
                        name="Forenamekin"
                        bsSize="sm"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>นามสกุล</Label>
                      <Input
                        type="text"
                        name="Surnamekin"
                        bsSize="sm"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <Label for="exampleSelect">เกี่ยวข้องกับผู้ป่วย</Label>
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

                <Row>
                  <Col md="3">
                    <FormGroup>
                      <Label>เบอร์มือถือ</Label>
                      <Input
                        type="number"
                        name="PhoneNumberkin"
                        bsSize="sm"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>เบอร์บ้าน</Label>
                      <Input type="number" name="HomePhonekin" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>เบอร์ที่ทำงาน</Label>
                      <Input type="number" name="WorkPhonekin" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <Label for="exampleSelect">ลำดับความสำคัญ</Label>
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
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <Label>บ้านเลขที่</Label>
                      <Input type="number" name="kinAddr" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label>หมู่ที่</Label>
                      <Input type="number" name="kinMoo" bsSize="sm" />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>ถนน/ซอย/หมู่บ้าน</Label>
                      <Input type="text" name="kinRoadLane" bsSize="sm" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">จังหวัด</Label>
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
                    <Label for="exampleSelect">อำเภอ</Label>
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
                <Row>
                  <Col md="4">
                    <Label for="exampleSelect">ตำบล/เขต</Label>
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
                    <Label for="exampleSelect">รหัสไปรษณีย์</Label>
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
                <Row>
                  <Col />
                  <Button color="success" size="sm">
                    <i className="fas fa-plus" /> เพิ่ม
                  </Button>
                  &nbsp;
                  <Button outline color="danger" size="sm">
                    <i className="fas fa-edit" /> แก้ไข
                  </Button>
                  &nbsp;
                  <Button outline color="danger" size="sm">
                    <i className="fas fa-times" /> ปิดใช้งาน
                  </Button>
                  &nbsp;
                  <Button color="danger" size="sm">
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
                      <SearchBar {...props.searchProps} tableId="tableId" />
                      <hr />
                      <BootstrapTable
                        selectRow={selectRow}
                        hover={true}
                        pagination={paginationFactory(options1)}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </CardBody>
            </Card>
          </Form>
        </CardBody>
      </div>
    )
  }
}

export default Ainformation
