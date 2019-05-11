import React, { PureComponent } from "react"
import { Row, Col, Card, CardBody, CardHeader, Input } from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const fontSize12px = {
    fontSize: "12px",
}

const columns1 = [
    {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
    },
    {
        dataField: "tutelage",
        text: "ความคุ้มครอง",
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
    {
        dataField: "allclaim",
        text: "สิทธิที่มีทั้งหมด",
        sort: true,
    },
    {
        dataField: "useoften",
        text: "ใช้ประจำ",
        sort: true,
    },
    {
        dataField: "hos",
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

const { SearchBar } = Search

const rows1 = [{ id: "0", tutelage: "tutelage" }]

const rows2 = [
    {
        id: "1",
        authority: "KK",
        tutelage: "ok",
        contact: "088-xxx",
        allclaim: "wait",
        hos: "allhos",
        numbercontact: "044-xxx",
        useoften: "sometimes",
        start: "start",
        end: "end",
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

export default class MedicCare extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            RightCare: "", //สิทธิรักษา
        }
    }
    render() {
        return (
            <div style={fontSize12px}>
                <Row>
                    <Col md="6">
                        {/* ประเภทสิทธิ */}
                        <Card>
                            <CardHeader body className="text-left">
                                <h5> ประเภทสิทธิ </h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <Input type="select" name="select">
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
                    </Col>
                    <Col md="6">
                        {/* สิทธิรักษาทั้งหมด */}
                        <Card>
                            <CardHeader body className="text-left">
                                <h5> สิทธิรักษาทั้งหมด </h5>
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
                                            <SearchBar {...props.searchProps} />
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
                    </Col>
                </Row>
                <hr />
                <Card>
                    <CardHeader>
                        <h5> สิทธิคนไข้ทั้งหมด </h5>
                    </CardHeader>
                    <br />
                    <ToolkitProvider
                        keyField="id"
                        data={rows2}
                        columns={columns2}
                        search
                    >
                        {props => (
                            <div>
                                <SearchBar {...props.searchProps} />
                                <hr />
                                <BootstrapTable
                                    hover={true}
                                    pagination={paginationFactory(options2)}
                                    {...props.baseProps}
                                />
                            </div>
                        )}
                    </ToolkitProvider>
                </Card>
            </div>
        )
    }
}
