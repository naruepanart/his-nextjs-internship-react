import React, { PureComponent } from "react"
import Head from "next/head"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import dynamic from "next/dynamic"
import cellEditFactory from "react-bootstrap-table2-editor"
import "react-splitter-layout/lib/index.css"

import { Progress } from "reactstrap"

const fontSize12px = {
    fontSize: "12px",
}

const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
    ssr: false,
})

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
    {
        dataField: "status",
        text: "status",
    },
]

const { SearchBar, ClearSearchButton } = Search

const rows2 = [
    {
        id: 0,
        authority: "Benz",
        tutelage: "10",
        contact: "088xxx",
        status: "11",
    },
]

const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    selected: [],
}

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        &nbsp; Showing {from} to {to} of {size} Results
    </span>
)

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

class Examination extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showing: true,
            hidden: true,
            dropdownOpen: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }))
    }

    render() {
        return (
            <div style={fontSize12px}>
                <Head>
                    <title>HIS - Examination</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"
                    />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
                    <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js" />
                </Head>

                <div data-role="splitter" class="h-100">
                    <div class="d-flex flex-justify-center flex-align-center">
                        This is panel 1
                    </div>
                    <div class="d-flex flex-justify-center flex-align-center">
                        This is panel 2
                    </div>
                    <div class="d-flex flex-justify-center flex-align-center">
                        This is panel 3
                    </div>
                </div>
            </div>
        )
    }
}

export default Examination
