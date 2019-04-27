import React from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form
} from "reactstrap"
// import CameraGG from './CameraGG';
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import dynamic from 'next/dynamic';
const MedicCare = dynamic(() => import('./MedicCare'), { ssr: false });


const columns1 = [
  {
    dataField: "id",
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
    text: "ติดต่อ",
    sort: true,
  },
  {
    dataField: "hosuseclaim",
    text: "รพ. ที่ใช้สิทธิ",
    sort: true,
  },
  {
    dataField: "numbercontact",
    text: "เลขที่บัตร",
    sort: true,
  },
  {
    dataField: "start",
    text: "วันที่เริ่ม",
    sort: true,
  },
  {
    dataField: "end",
    text: "วันที่สิ้นสุด",
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
    text: "ติดต่อ",
    sort: true,
  },
]

const { SearchBar } = Search

const rows1 = [
  {
    id: 0,
    authority: "authority",
    tutelage: "tutelage",
    contact: "contact",
  },
]
const rows2 = [
  {
    id: 1,
    authority: "authority",
    tutelage: "tutelage",
    contact: "contact",
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

class Pinformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <div style={{ fontSize: "12px" }}>
        <CardBody>
          <Form>
            {/* ข้อมูลสิทธิรักษา */}
            <Card>
              <CardHeader>
                <h5> ข้อมูลสิทธิรักษา </h5>
              </CardHeader>
              <CardBody>
                {/* สิทธิรักษาพยาบาลทั้งหมด */}
                <Card>
                  <CardHeader>
                    <h6> สิทธิรักษาพยาบาลทั้งหมด </h6>
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
                    <FormGroup className=" text-right">
                      <Button color="success" onClick={this.toggle} size="sm">
                        <i className="fas fa-plus" /> เพิ่ม
                      </Button>{" "}
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                        bsSize="lg"
                      >
                        <ModalHeader> สิทธิรักษาพยาบาล </ModalHeader>
                        <ModalBody>
                          <MedicCare />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="success"
                            onClick={this.toggle}
                            size="sm"
                          >
                            {" "}
                            เพิ่ม{" "}
                          </Button>{" "}
                        </ModalFooter>
                      </Modal>
                      <Button color="danger" size="sm">
                        <i className="fas fa-trash-alt" /> ลบ
                      </Button>{" "}
                    </FormGroup>
                  </CardBody>
                </Card>
                <br />

                {/* สิทธิรักษาพยาบาลหลัก */}
                <Card>
                  <CardHeader>
                    <h6> สิทธิรักษาพยาบาลหลัก </h6>
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
                          <SearchBar {...props.searchProps} tableId="tableId" />
                          <hr />
                          <BootstrapTable
                            hover={true}
                            pagination={paginationFactory(options2)}
                            {...props.baseProps}
                          />
                        </div>
                      )}
                    </ToolkitProvider>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Form>
        </CardBody>
      </div>
    )
  }
}

export default Pinformation
