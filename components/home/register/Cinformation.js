import React, { Component } from "react"
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Input,
    Form,
    FormGroup,
} from "reactstrap"
// import CameraGG from './CameraGG';
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

const fontSize12px = {
    fontSize: "12px",
}

const columns1 = [
    {
        dataField: "id",
        text: "id",
        sort: true,
    },
    {
        dataField: "datetimee",
        text: "วันที่/เวลาที่แก้ไข",
        sort: true,
    },
    {
        dataField: "oldname",
        text: "ชื่อ-สกุลเดิม",
        sort: true,
    },
    {
        dataField: "newname",
        text: "ชื่อ-สกุลใหม่",
        sort: true,
    },
    {
        dataField: "informant",
        text: "ผู้รับเเจ้ง",
        sort: true,
    },
]

const { SearchBar } = Search

const rows1 = [
    {
        id: "0",
        datetimee: "01/01/2562 16:00",
        oldname: "oldname",
        newname: "newname",
        informant: "informant",
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

class Cinformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Forename: "", //ชื่อ
            Surname: "", //สกุล
        }
    }
    render() {
        return (
            <div style={fontSize12px}>
                {/* เปลี่ยนชื่อ-สกุล */}
                <CardBody>
                    <Card>
                        <CardHeader>
                            <h5> ข้อมูลการเปลี่ยนชื่อ-สกุล </h5>
                        </CardHeader>
                        <CardBody>
                            {/* เปลี่ยนชื่อ-สกุล */}
                            <Card>
                                <CardHeader>
                                    <h6> เปลี่ยนชื่อ-สกุล </h6>
                                </CardHeader>
                                <CardBody>
                                    <Form inline>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input
                                                type="text"
                                                name="Forename"
                                                bsSize="sm"
                                            />{" "}
                                            &nbsp;
                                            <Input
                                                type="text"
                                                name="Surname"
                                                bsSize="sm"
                                            />
                                        </FormGroup>
                                        <Button color="success">
                                            {" "}
                                            ยืนยันการเปลี่ยนชื่อ-สกุล
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                            <br />
                            {/* ประวัติการเปลี่ยนชื่อ-สกุล */}
                            <Card>
                                <CardHeader>
                                    <h6> ประวัติการเปลี่ยนชื่อ-สกุล </h6>
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
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </CardBody>
            </div>
        )
    }
}

export default Cinformation
