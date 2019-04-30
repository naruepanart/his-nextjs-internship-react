import React from "react";
import Head from "next/head";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import dynamic from "next/dynamic";
import {
  Row,
  Col,
  Button,
  Card,
  NavbarBrand,
  Navbar,
  CardBody,
  Label,
  Input,
  Form
} from "reactstrap";

const fontSize18px = {
  fontSize: "18px",
};

const SplitPane = dynamic(() => import("@opuscapita/react-splitpane"), {
  ssr: false
});

const columns1 = [
  {
    dataField: "id",
    text: "Billing",
    sort: true
  },
  {
    dataField: "right1",
    text: "right1",
    sort: true
  },
  {
    dataField: "right2",
    text: "right2",
    sort: true
  },
  {
    dataField: "Payment",
    text: "ชำระเงินเอง",
    sort: true
  },
  {
    dataField: "Total",
    text: "Total",
    sort: true
  }
];

const columns2 = [
  {
    dataField: "id",
    text: "ลำดับ",
    sort: true
  },
  {
    dataField: "authority",
    text: "สิทธิ",
    sort: true
  },
  {
    dataField: "tutelage",
    text: "ความคุ้มครอง",
    sort: true
  },
  {
    dataField: "contact",
    text: "Contact",
    sort: true
  }
];

const { SearchBar } = Search;

const rows1 = [
  { id: 1, right1: "BEnz", right2: "111", Payment: "KK", Total: "1000" },
];


const rows2 = [
  { id: 1, authority: "Benz", tutelage: "10", contact: "088xxx" },

];

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
  selected: []
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    {" "}
    &nbsp; Showing {from} to {to} of {size} Results
  </span>
);


const options = {
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true,
  withFirstAndLast: false,
  hidePageListOnlyOnePage: true,
  firstPageText: "<<",
  prePageText: "<",
  nextPageText: ">",
  lastPageText: ">>",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [
    {
      text: "5",
      value: 5
    },
    {
      text: "10",
      value: 10
    },
    {
      text: "All",
      value: rows1.length
    }
  ]
};

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
      value: 5
    },
    {
      text: "10",
      value: 10
    },
    {
      text: "All",
      value: rows2.length
    }
  ]
};

class Examination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true,
      hidden: true
    };
  }
  render() {
    const { showing } = this.state;
    const { hidden } = this.state;
    return (
      <div>
        <CardBody>
          <Head>
            <title>HIS - Examination</title>
          </Head>
          <Row>
            <Col sm={12}>
              <Card>
                <Navbar color="primary" dark className="py-md-0">
                  <NavbarBrand href="#" style={fontSize18px}>
                    Patient Info
                  </NavbarBrand>
                </Navbar>
                <CardBody>
                  <Row>
                    <Col sm={6}>
                      <Row form>
                        <Col sm={12}>
                          <Form>
                            <Label className=" mt-2 mr-sm-2"> ชื่อ: </Label>
                            <Col sm={4}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> HN: </Label>
                            <Col sm={4}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> DOB: </Label>
                            <Col sm={2}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> Age: </Label>
                            <Col sm={2}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> Sex: </Label>
                            <Col sm={2}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> Tel: </Label>
                            <Col sm={4}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>

                            <Label className=" mt-2 mr-sm-2">
                              {" "}
                              Nationality:{" "}
                            </Label>
                            <Col sm={2}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2"> Religion: </Label>
                            <Col sm={2}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                            <Label className=" mt-2 mr-sm-2">
                              {" "}
                              Identification Number:{" "}
                            </Label>
                            <Col sm={3}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>

                            <Label className=" mt-2 mr-sm-2"> Address: </Label>
                            <Col sm={11}>
                              <Input
                                type="text"
                                name="password"
                                readOnly={true}
                                disabled
                              />
                            </Col>
                          </Form>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={1}>
                      <Col sm={12}>
                        <div className="p-5 mb-1  bg-success text-black">
                          <big>
                            <b> A </b>
                          </big>
                        </div>

                        <Button type="button" color="secondary" block>
                          {" "}
                          View{" "}
                        </Button>
                      </Col>
                    </Col>
                    <Col sm={3}>
                      <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                        {" "}
                        วันที่ลงประวัติการเเพ้:{" "}
                      </Label>
                      <Col sm={4}>
                        <Input
                          type="text"
                          name="password"
                          readOnly={true}
                          disabled
                        />
                      </Col>
                      <Col sm={4}>
                        <Input
                          type="text"
                          name="password"
                          readOnly={true}
                          disabled
                        />
                      </Col>

                      <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                        {" "}
                        <b> ไม่มีประวัติการเเพ้ยาใดๆ </b>
                      </Label>
                    </Col>
                  </Row>
                  <hr />

                  <Row>
                    <Col sm={12}>
                      <Row form>
                        <Col sm={12}>
                          <Col sm={12}>
                            <Form>
                              <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                                {" "}
                                VN:{" "}
                              </Label>
                              <Col sm={1}>
                                <Input
                                  type="text"
                                  name="password"
                                  readOnly={true}
                                  disabled
                                />
                              </Col>
                              <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                                {" "}
                                Date:{" "}
                              </Label>
                              <Col sm={1}>
                                <Input
                                  type="text"
                                  name="password"
                                  readOnly={true}
                                  disabled
                                />
                              </Col>
                              <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                                {" "}
                                Time:{" "}
                              </Label>
                              <Col sm={1}>
                                <Input
                                  type="text"
                                  name="password"
                                  readOnly={true}
                                  disabled
                                />
                              </Col>
                              <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                                {" "}
                                Doctor:{" "}
                              </Label>
                              <Col sm={2}>
                                <Input
                                  type="text"
                                  name="password"
                                  readOnly={true}
                                  disabled
                                />
                              </Col>
                              <Label for="exampleEmail" className=" mt-2 mr-sm-2">
                                {" "}
                                Location:{" "}
                              </Label>
                              <Col sm={2}>
                                <Input
                                  type="text"
                                  name="password"
                                  readOnly={true}
                                  disabled
                                />
                              </Col>
                              <Button color="success">
                                <i className="far fa-address-book" /> Note{" "}
                              </Button>{" "}
                            </Form>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="11">
                      <div
                        className=" cardbtl"
                        style={{ display: showing ? "none" : "block" }}
                      >
                        <Row>
                          <Col sm="12">
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
                                    pagination={paginationFactory(options)}
                                    {...props.baseProps}
                                  />
                                </div>
                              )}
                            </ToolkitProvider>
                            <br />
                            <Button type="button" color="secondary">
                              {" "}
                              SUM{" "}
                            </Button>{" "}
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col sm="1">
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() =>
                          this.setState({ hidden: !hidden, showing: !showing })
                        }
                      >
                        <i className="fas fa-search-plus" /> ย่อ/ขยาย
                    </Button>
                    </Col>
                  </Row>
                  <br></br>
                  <div className="text-right">
                    <Button color="primary" size="sm">
                      <i className="fas fa-plus-circle" /> Add Order{" "}
                    </Button>{" "}
                    <Button color="danger" size="sm">
                      <i className="fas fa-edit" /> Edit Right{" "}
                    </Button>{" "}
                    <Button color="success" size="sm">
                      <i className="fas fa-pencil-alt" /> Edit Billing{" "}
                    </Button>{" "}
                    <Button color="primary" size="sm">
                      <i className="fas fa-print" /> Print{" "}
                    </Button>{" "}
                    <Button color="success" size="sm">
                      <i className="far fa-money-bill-alt" /> Payment{" "}
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>












          <br />

          <SplitPane id="myVerticalPane" defaultSize="33%">
            <div>
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
                      selectRow={selectRow}
                      hover={true}
                      pagination={paginationFactory(options2)}
                      {...props.baseProps}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </div>
            <SplitPane id="myHorizontalPane" defaultSize="50%">
              <div>
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
                        selectRow={selectRow}
                        hover={true}
                        pagination={paginationFactory(options2)}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </div>
              <div>
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
                        selectRow={selectRow}
                        hover={true}
                        pagination={paginationFactory(options2)}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </div>
            </SplitPane>
          </SplitPane>
        </CardBody>
      </div>
    );
  }
}

export default Examination;
