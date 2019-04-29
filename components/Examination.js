import React from "react";
import Head from "next/head";
import Banner from "./examination/Patientinfo";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import dynamic from "next/dynamic";
const SplitPane = dynamic(() => import("@opuscapita/react-splitpane"), {
  ssr: false
});

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

const rows2 = [
  { id: 1, authority: "Benz", tutelage: "12", contact: "088xxx" },
  { id: 2, authority: "Benz", tutelage: "11", contact: "088xxx" },
 
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
  render() {
    return (
      <div>
        <Head>
          <title>HIS - Examination</title>
        </Head>
        <Banner />
        <hr />
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
                  <SearchBar {...props.searchProps} tableId="tableId"/>
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
                    <SearchBar {...props.searchProps} tableId="tableId"/>
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
      </div>
    );
  }
}

export default Examination;
