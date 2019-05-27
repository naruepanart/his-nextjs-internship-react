import React, { Component } from "react";
import classnames from "classnames";
import InputMask from 'react-input-mask';
import {
  Row,
  Col,
  Label,
  Input,
  Table,
  Button,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Modal,
  TabContent,
  TabPane,
  ModalFooter,
  ModalHeader,
  ModalBody
} from "reactstrap";

import dynamic from "next/dynamic";

const VitalSignButton = dynamic(() => import("./VitalSignButton"), {
  ssr: false
});

const tableCongenitaldiseasesStyle = {
  overflowX: "scroll",
  overflowY: "auto",
  height: "140px"
};
const tableSurgeryhistoryStyle = {
  overflowX: "scroll",
  overflowY: "auto",
  height: "100px"
};
const tableAllImportantSymptomsStyle = {
  overflowX: "scroll",
  overflowY: "auto",
  height: "200px"
};
const tableFamilyHistoryStyle = {
  overflowX: "scroll",
  overflowY: "auto",
  height: "230px"
};
const selectAllergiesStyle = {
  height: "180px"
};

export default class Tabs1Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
  
      items: [],
      items0: [],
      items1: [],
      items2: [],
      items3: [],

      //Tab1 ช่องที่ 1
      baseData:"",
      baseTime:"",
      esi:"",
      t:"",
      p:"",
      rr:"",
      bp:"",
      o2sat:"",
      pain:"",
      height:"",
      weight:"",
      bsa:"",
      bmi:"",

      //Tab 1 ช่องที่ 2
      smoking : "",
      envelope:"",
      timesmoke :"",
      drink:"",
      bottle:"",
      timedrink:"",


      //ตารางที่ 1
      //chang1: "ความดันโลหิตสูง (HT)",
      bloodpressureAdd1: "ความดันโลหิตสูง (HT)",
      diabetesAdd1: "เบาหวาน (DM)",
      asthmaAdd1: "โรคหอบหืด",
      IschemicheartAdd1: "หัวใจขาดเลือด",
      cancerAdd1: "โรคมะเร็ง",
      anemiaAdd1: "โลหิตจาง",
      depressAdd1: "โรคซึมเศร้า",
      strokeAdd1: "โรคหลอดเลือดในสมอง",
      amphatAdd1: "อัมพฤกษ์ อัมพาต",
      renalfailureAdd1: "ไตวายเรื้อรัง",
      bronchitisAdd1: "หลอดลมอักเสบเรื้อรัง",
      aneurysmAdd1: "ถุงลมปอดโป่งพอง",
      heartdiseaseAdd1: "โรคหัวใจ",
      alcoholismAdd1: "พิษสุราเรื้อรัง",
      copdAdd1: "โรคทางเดินหายใจอุดกั้นเรื้อรัง",
      tuberculosisAdd1: "วัณโรค",

      //input ปีตารางที่ 1
      //leo1: "",
      year01Add1: "",
      year02Add1: "",
      year03Add1: "",
      year04Add1: "",
      year05Add1: "",
      year06Add1: "",
      year07Add1: "",
      year08Add1: "",
      year09Add1: "",
      year10Add1: "",
      year11Add1: "",
      year12Add1: "",
      year13Add1: "",
      year14Add1: "",
      year15Add1: "",
      year16Add1: "",

      //input เดือนตารางที่ 1
      //singha1: "",
      month01Add1: "",
      month02Add1: "",
      month03Add1: "",
      month04Add1: "",
      month05Add1: "",
      month06Add1: "",
      month07Add1: "",
      month08Add1: "",
      month09Add1: "",
      month10Add1: "",
      month11Add1: "",
      month12Add1: "",
      month13Add1: "",
      month14Add1: "",
      month15Add1: "",
      month16Add1: "",

      //ตารางที่ 2
      Operation: "",
      Remark: "",
      Year: "",
      Month: "",
      Day: "",
      lYear: "",
      lMonth: "",
      lDay: "0",

      //ตารางที่ 3
      //team1: "ความดันโลหิตสูง (HT)",
      bloodpressureAdd3: "ความดันโลหิตสูง (HT)",
      diabetesAdd3: "เบาหวาน (DM)",
      asthmaAdd3: "โรคหอบหืด",
      IschemicheartAdd3: "หัวใจขาดเลือด",
      cancerAdd3: "โรคมะเร็ง",
      anemiaAdd3: "โลหิตจาง",
      depressAdd3: "โรคซึมเศร้า",
      strokeAdd3: "โรคหลอดเลือดในสมอง",
      amphatAdd3: "อัมพฤกษ์ อัมพาต",
      renalfailureAdd3: "ไตวายเรื้อรัง",
      bronchitisAdd3: "หลอดลมอักเสบเรื้อรัง",
      aneurysmAdd3: "ถุงลมปอดโป่งพอง",
      heartdiseaseAdd3: "โรคหัวใจ",
      alcoholismAdd3: "พิษสุราเรื้อรัง",
      copdAdd3: "โรคทางเดินหายใจอุดกั้นเรื้อรัง",
      tuberculosisAdd3: "วัณโรค",

      //input ปีตารางที่ 3
      //leo1: "",
      year01Add3: "",
      year02Add3: "",
      year03Add3: "",
      year04Add3: "",
      year05Add3: "",
      year06Add3: "",
      year07Add3: "",
      year08Add3: "",
      year09Add3: "",
      year10Add3: "",
      year11Add3: "",
      year12Add3: "",
      year13Add3: "",
      year14Add3: "",
      year15Add3: "",
      year16Add3: "",

      //input เดือนตารางที่ 3
      //singha1: "",
      month01Add3: "",
      month02Add3: "",
      month03Add3: "",
      month04Add3: "",
      month05Add3: "",
      month06Add3: "",
      month07Add3: "",
      month08Add3: "",
      month09Add3: "",
      month10Add3: "",
      month11Add3: "",
      month12Add3: "",
      month13Add3: "",
      month14Add3: "",
      month15Add3: "",
      month16Add3: "",

      modal: false,
      modal1: false,
      modal2: false,
      modal3: false,

      importantSymptoms : '',
      LocationClinic:'บุญศรัทธา มหามงคล',
      LocationClinic1:'อายุรกรรม',
      baseTime : new Date().getFullYear(),


    };
  }
 //Tab 1 ช่องที่ 1
      baseData = e => {
        this.setState({
          baseData: e.target.value
        });
      };
      baseTime = e => {
        this.setState({
          baseTime: e.target.value
        });
      };
      esi = e => {
        this.setState({
          esi: e.target.value
        });
      };
      t = e => {
        this.setState({
          t: e.target.value
        });
      };
      p = e => {
        this.setState({
          p: e.target.value
        });
      };
      rr = e => {
        this.setState({
          rr: e.target.value
        });
      };
      bp = e => {
        this.setState({
          bp: e.target.value
        });
      };
      o2sat = e => {
        this.setState({
          o2sat: e.target.value
        });
      };
      pain = e => {
        this.setState({
          pain: e.target.value
        });
      };
      height = e => {
        this.setState({
          height: e.target.value
        });
      };
      weight = e => {
        this.setState({
          weight: e.target.value
        });
      };
      bsa = e => {
        this.setState({
          bsa: e.target.value
        });
      };
      bmi = e => {
        this.setState({
          bmi: e.target.value
        });
      };

  //Tab 1 ช่องที่ 2
  smoking = e => {
    this.setState({
      smoking: e.target.value
    });
  };
  envelope = e => {
    this.setState({
      envelope: e.target.value
    });
  };
  timesmoke = e => {
    this.setState({
      timesmoke: e.target.value
    });
  };
  drink = e => {
    this.setState({
      drink: e.target.value
    });
  };
  bottle = e => {
    this.setState({
      bottle: e.target.value
    });
  };
  timedrink = e => {
    this.setState({
      timedrink: e.target.value
    });
  };




  //ตารางที่ 1
  bloodpressureAdd1 = e => {
    this.setState({
      bloodpressureAdd1: e.target.value
    });
  };
  diabetesAdd1 = e => {
    this.setState({
      diabetesAdd1: e.target.value
    });
  };
  asthmaAdd1 = e => {
    this.setState({
      asthmaAdd1: e.target.value
    });
  };
  IschemicheartAdd1 = e => {
    this.setState({
      IschemicheartAdd1: e.target.value
    });
  };
  cancerAdd1 = e => {
    this.setState({
      cancerAdd1: e.target.value
    });
  };
  anemiaAdd1 = e => {
    this.setState({
      anemiaAdd1: e.target.value
    });
  };
  depressAdd1 = e => {
    this.setState({
      depressAdd1: e.target.value
    });
  };
  strokeAdd1 = e => {
    this.setState({
      strokeAdd1: e.target.value
    });
  };
  amphatAdd1 = e => {
    this.setState({
      amphatAdd1: e.target.value
    });
  };
  renalfailureAdd1 = e => {
    this.setState({
      renalfailureAdd1: e.target.value
    });
  };
  bronchitisAdd1 = e => {
    this.setState({
      bronchitisAdd1: e.target.value
    });
  };
  aneurysmAdd1 = e => {
    this.setState({
      aneurysmAdd1: e.target.value
    });
  };
  heartdiseaseAdd1 = e => {
    this.setState({
      heartdiseaseAdd1: e.target.value
    });
  };
  alcoholismAdd1 = e => {
    this.setState({
      alcoholismAdd1: e.target.value
    });
  };
  copdAdd1 = e => {
    this.setState({
      copdAdd1: e.target.value
    });
  };
  tuberculosisAdd1 = e => {
    this.setState({
      tuberculosisAdd1: e.target.value
    });
  };

  year01Add1 = e => {
    this.setState({
      year01Add1: e.target.value
    });
  };
  year02Add1 = e => {
    this.setState({
      year02Add1: e.target.value
    });
  };
  year03Add1 = e => {
    this.setState({
      year03Add1: e.target.value
    });
  };
  year04Add1 = e => {
    this.setState({
      year04Add1: e.target.value
    });
  };
  year05Add1 = e => {
    this.setState({
      year05Add1: e.target.value
    });
  };
  year06Add1 = e => {
    this.setState({
      year06Add1: e.target.value
    });
  };
  year07Add1 = e => {
    this.setState({
      year07Add1: e.target.value
    });
  };
  year08Add1 = e => {
    this.setState({
      year08Add1: e.target.value
    });
  };
  year09Add1 = e => {
    this.setState({
      year09Add1: e.target.value
    });
  };
  year10Add1 = e => {
    this.setState({
      year10Add1: e.target.value
    });
  };
  year11Add1 = e => {
    this.setState({
      year11Add1: e.target.value
    });
  };
  year12Add1 = e => {
    this.setState({
      year12Add1: e.target.value
    });
  };
  year13Add1 = e => {
    this.setState({
      year13Add1: e.target.value
    });
  };
  year14Add1 = e => {
    this.setState({
      year14Add1: e.target.value
    });
  };
  year15Add1 = e => {
    this.setState({
      year15Add1: e.target.value
    });
  };
  year16Add1 = e => {
    this.setState({
      year16Add1: e.target.value
    });
  };

  month01Add1 = e => {
    this.setState({
      month01Add1: e.target.value
    });
  };
  month02Add1 = e => {
    this.setState({
      month02Add1: e.target.value
    });
  };
  month03Add1 = e => {
    this.setState({
      month03Add1: e.target.value
    });
  };
  month04Add1 = e => {
    this.setState({
      month04Add1: e.target.value
    });
  };
  month05Add1 = e => {
    this.setState({
      month05Add1: e.target.value
    });
  };
  month06Add1 = e => {
    this.setState({
      month06Add1: e.target.value
    });
  };
  month07Add1 = e => {
    this.setState({
      month07Add1: e.target.value
    });
  };
  month08Add1 = e => {
    this.setState({
      month08Add1: e.target.value
    });
  };
  month09Add1 = e => {
    this.setState({
      month09Add1: e.target.value
    });
  };
  month10Add1 = e => {
    this.setState({
      month10Add1: e.target.value
    });
  };
  month11Add1 = e => {
    this.setState({
      month11Add1: e.target.value
    });
  };
  month12Add1 = e => {
    this.setState({
      month12Add1: e.target.value
    });
  };
  month13Add1 = e => {
    this.setState({
      month13Add1: e.target.value
    });
  };
  month14Add1 = e => {
    this.setState({
      month14Add1: e.target.value
    });
  };
  month15Add1 = e => {
    this.setState({
      month15Add1: e.target.value
    });
  };
  month16Add1 = e => {
    this.setState({
      month16Add1: e.target.value
    });
  };

  //ตารางที่ 3
  bloodpressureAdd3 = e => {
    this.setState({
      bloodpressureAdd3: e.target.value
    });
  };
  diabetesAdd3 = e => {
    this.setState({
      diabetesAdd3: e.target.value
    });
  };
  asthmaAdd3 = e => {
    this.setState({
      asthmaAdd3: e.target.value
    });
  };
  IschemicheartAdd3 = e => {
    this.setState({
      IschemicheartAdd3: e.target.value
    });
  };
  cancerAdd3 = e => {
    this.setState({
      cancerAdd3: e.target.value
    });
  };
  anemiaAdd3 = e => {
    this.setState({
      anemiaAdd3: e.target.value
    });
  };
  depressAdd3 = e => {
    this.setState({
      depressAdd3: e.target.value
    });
  };
  strokeAdd3 = e => {
    this.setState({
      strokeAdd3: e.target.value
    });
  };
  amphatAdd3 = e => {
    this.setState({
      amphatAdd3: e.target.value
    });
  };
  renalfailureAdd3 = e => {
    this.setState({
      renalfailureAdd3: e.target.value
    });
  };
  bronchitisAdd3 = e => {
    this.setState({
      bronchitisAdd3: e.target.value
    });
  };
  aneurysmAdd3 = e => {
    this.setState({
      aneurysmAdd3: e.target.value
    });
  };
  heartdiseaseAdd3 = e => {
    this.setState({
      heartdiseaseAdd3: e.target.value
    });
  };
  alcoholismAdd3 = e => {
    this.setState({
      alcoholismAdd3: e.target.value
    });
  };
  copdAdd3 = e => {
    this.setState({
      copdAdd3: e.target.value
    });
  };
  tuberculosisAdd3 = e => {
    this.setState({
      tuberculosisAdd3: e.target.value
    });
  };

  year01Add3 = e => {
    this.setState({
      year01Add3: e.target.value
    });
  };
  year02Add3 = e => {
    this.setState({
      year02Add3: e.target.value
    });
  };
  year03Add3 = e => {
    this.setState({
      year03Add3: e.target.value
    });
  };
  year04Add3 = e => {
    this.setState({
      year04Add3: e.target.value
    });
  };
  year05Add3 = e => {
    this.setState({
      year05Add3: e.target.value
    });
  };
  year06Add3 = e => {
    this.setState({
      year06Add3: e.target.value
    });
  };
  year07Add3 = e => {
    this.setState({
      year07Add3: e.target.value
    });
  };
  year08Add3 = e => {
    this.setState({
      year08Add3: e.target.value
    });
  };
  year09Add3 = e => {
    this.setState({
      year09Add3: e.target.value
    });
  };
  year10Add3 = e => {
    this.setState({
      year10Add3: e.target.value
    });
  };
  year11Add3 = e => {
    this.setState({
      year11Add3: e.target.value
    });
  };
  year12Add3 = e => {
    this.setState({
      year12Add3: e.target.value
    });
  };
  year13Add3 = e => {
    this.setState({
      year13Add3: e.target.value
    });
  };
  year14Add3 = e => {
    this.setState({
      year14Add3: e.target.value
    });
  };
  year15Add3 = e => {
    this.setState({
      year15Add3: e.target.value
    });
  };
  year16Add3 = e => {
    this.setState({
      year16Add3: e.target.value
    });
  };

  month01Add3 = e => {
    this.setState({
      month01Add3: e.target.value
    });
  };
  month02Add3 = e => {
    this.setState({
      month02Add3: e.target.value
    });
  };
  month03Add3 = e => {
    this.setState({
      month03Add3: e.target.value
    });
  };
  month04Add3 = e => {
    this.setState({
      month04Add3: e.target.value
    });
  };
  month05Add3 = e => {
    this.setState({
      month05Add3: e.target.value
    });
  };
  month06Add3 = e => {
    this.setState({
      month06Add3: e.target.value
    });
  };
  month07Add3 = e => {
    this.setState({
      month07Add3: e.target.value
    });
  };
  month08Add3 = e => {
    this.setState({
      month08Add3: e.target.value
    });
  };
  month09Add3 = e => {
    this.setState({
      month09Add3: e.target.value
    });
  };
  month10Add3 = e => {
    this.setState({
      month10Add3: e.target.value
    });
  };
  month11Add3 = e => {
    this.setState({
      month11Add3: e.target.value
    });
  };
  month12Add3 = e => {
    this.setState({
      month12Add3: e.target.value
    });
  };
  month13Add3 = e => {
    this.setState({
      month13Add3: e.target.value
    });
  };
  month14Add3 = e => {
    this.setState({
      month14Add3: e.target.value
    });
  };
  month15Add3 = e => {
    this.setState({
      month15Add3: e.target.value
    });
  };
  month16Add3 = e => {
    this.setState({
      month16Add3: e.target.value
    });
  };

  importantSymptoms = e => {
    this.setState({
      importantSymptoms: e.target.value
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  toggle1 = () => {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  };
  toggle2 = () => {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
  };
  toggle3 = () => {
    this.setState(prevState => ({
      modal3: !prevState.modal3
    }));
  };
  Operation = e => {
    this.setState({
      Operation: e.target.value
    });
  };
  Remark = e => {
    this.setState({
      Remark: e.target.value
    });
  };

  Year = e => {
    this.setState({
      Year: e.target.value
    });
  };
  lYear = e => {
    this.setState({
      lYear: e.target.value
    });
  };
  Month = e => {
    this.setState({
      Month: e.target.value
    });
  };
  lMonth = e => {
    this.setState({
      lMonth: e.target.value
    });
  };
  Day = e => {
    this.setState({
      Day: e.target.value
    });
  };
  lDay = e => {
    this.setState({
      lDay: e.target.value
    });
  };
  team1 = e => {
    this.setState({
      team1: e.target.value
    });
  };

  exp1 = e => {
    this.setState({
      exp1: e.target.value
    });
  };

  excep1 = e => {
    this.setState({
      excep1: e.target.value
    });
  };

  relationship = e => {
    this.setState({
      relationship: e.target.value
    });
  };

  handleSubmit0 = e => {
    e.preventDefault();

    const nextItems = this.state.items0.concat([
      {
        importantSymptoms: this.state.importantSymptoms,


        baseData : this.state.baseData,
        baseTime : this.state.baseTime,
        esi : this.state.esi,
        t : this.state.t,
        p : this.state.p,
        rr : this.state.rr,
        bp : this.state.bp,
        o2sat : this.state.o2sat,
        pain : this.state.pain,
        height : this.state.height,
        weight : this.state.weight,
        bsa : this.state.bsa,
        bmi : this.state.bmi,


        smokeing : this.state.smoking,
        envelope : this.state.envelope,
        timesmoke : this.state.timesmoke,
        drink : this.state.drink,
        bottle : this.state.bottle,
        timedrink : this.state.timedrink,


        //ช่องที่ 1

        id: Date.now()
      }
    ]);
    console.log(nextItems);

    this.setState({
      items0: nextItems,

      // clear input
      importantSymptoms: "",


    });
  };

  handleSubmit1 = e => {
    e.preventDefault();

    const nextItems = this.state.items1.concat([
      {
        //ช่องที่ 1
        bloodpressureAdd1: this.state.bloodpressureAdd1,
        diabetesAdd1: this.state.diabetesAdd1,
        asthmaAdd1: this.state.asthmaAdd1,
        IschemicheartAdd1: this.state.IschemicheartAdd1,
        cancerAdd1: this.state.cancerAdd1,
        anemiaAdd1: this.state.anemiaAdd1,
        depressAdd1: this.state.depressAdd1,
        strokeAdd1: this.state.strokeAdd1,
        amphatAdd1: this.state.amphatAdd1,
        renalfailureAdd1: this.state.renalfailureAdd1,
        bronchitisAdd1: this.state.bronchitisAdd1,
        aneurysmAdd1: this.state.aneurysmAdd1,
        heartdiseaseAdd1: this.state.heartdiseaseAdd1,
        alcoholismAdd1: this.state.alcoholismAdd1,
        copdAdd1: this.state.copdAdd1,
        tuberculosisAdd1: this.state.tuberculosisAdd1,

        year01Add1: this.state.year01Add1,
        year02Add1: this.state.year02Add1,
        year03Add1: this.state.year03Add1,
        year04Add1: this.state.year04Add1,
        year05Add1: this.state.year05Add1,
        year06Add1: this.state.year06Add1,
        year07Add1: this.state.year07Add1,
        year08Add1: this.state.year08Add1,
        year09Add1: this.state.year09Add1,
        year10Add1: this.state.year10Add1,
        year11Add1: this.state.year11Add1,
        year12Add1: this.state.year12Add1,
        year13Add1: this.state.year13Add1,
        year14Add1: this.state.year14Add1,
        year15Add1: this.state.year15Add1,
        year16Add1: this.state.year16Add1,

        month01Add1: this.state.month01Add1,
        month02Add1: this.state.month02Add1,
        month03Add1: this.state.month03Add1,
        month04Add1: this.state.month04Add1,
        month05Add1: this.state.month05Add1,
        month06Add1: this.state.month06Add1,
        month07Add1: this.state.month07Add1,
        month08Add1: this.state.month08Add1,
        month09Add1: this.state.month09Add1,
        month10Add1: this.state.month10Add1,
        month11Add1: this.state.month11Add1,
        month12Add1: this.state.month12Add1,
        month13Add1: this.state.month13Add1,
        month14Add1: this.state.month14Add1,
        month15Add1: this.state.month15Add1,
        month16Add1: this.state.month16Add1,

        id: Date.now()
      }
    ]);

    this.setState({
      items1: nextItems,
      // bloodpressureAdd1: "",
      year01Add1: "",
      year02Add1: "",
      year03Add1: "",
      year04Add1: "",
      year05Add1: "",
      year06Add1: "",
      year07Add1: "",
      year08Add1: "",
      year09Add1: "",
      year10Add1: "",
      year11Add1: "",
      year12Add1: "",
      year13Add1: "",
      year14Add1: "",
      year15Add1: "",
      year16Add1: "",

      month01Add1: "",
      month02Add1: "",
      month03Add1: "",
      month04Add1: "",
      month05Add1: "",
      month06Add1: "",
      month07Add1: "",
      month08Add1: "",
      month09Add1: "",
      month10Add1: "",
      month11Add1: "",
      month12Add1: "",
      month13Add1: "",
      month14Add1: "",
      month15Add1: "",
      month16Add1: ""
    });
  };

  handleSubmit2 = e => {
    e.preventDefault();

    const nextItems = this.state.items2.concat([
      {
        //ช่องที่ 2
        Operation: this.state.Operation,
        Remark: this.state.Remark,
        Year: this.state.Year,
        lYear: this.state.lYear,
        Month: this.state.Month,
        lMonth: this.state.lMonth,
        Day: this.state.Day,
        lDay: this.state.lDay,

        id: Date.now()
      }
    ]);
    console.log(nextItems);

    this.setState({
      items2: nextItems,

      // clear input

      Operation: "",
      Remark: "",

      Year: "",
      lYear: "",
      Month: "",
      lMonth: "",
      Day: ""
      //lDay: "",
    });
  };
  handleSubmit3 = e => {
    e.preventDefault();

    const nextItems = this.state.items3.concat([
      {
        //ช่องที่ 3
        // team1: this.state.team1,
        // exp1: this.state.exp1,
        // excep1: this.state.excep1,

        bloodpressureAdd3: this.state.bloodpressureAdd3,
        diabetesAdd3: this.state.diabetesAdd3,
        asthmaAdd3: this.state.asthmaAdd3,
        IschemicheartAdd3: this.state.IschemicheartAdd3,
        cancerAdd3: this.state.cancerAdd3,
        anemiaAdd3: this.state.anemiaAdd3,
        depressAdd3: this.state.depressAdd3,
        strokeAdd3: this.state.strokeAdd3,
        amphatAdd3: this.state.amphatAdd3,
        renalfailureAdd3: this.state.renalfailureAdd3,
        bronchitisAdd3: this.state.bronchitisAdd3,
        aneurysmAdd3: this.state.aneurysmAdd3,
        heartdiseaseAdd3: this.state.heartdiseaseAdd3,
        alcoholismAdd3: this.state.alcoholismAdd3,
        copdAdd3: this.state.copdAdd3,
        tuberculosisAdd3: this.state.tuberculosisAdd3,

        year01Add3: this.state.year01Add3,
        year02Add3: this.state.year02Add3,
        year03Add3: this.state.year03Add3,
        year04Add3: this.state.year04Add3,
        year05Add3: this.state.year05Add3,
        year06Add3: this.state.year06Add3,
        year07Add3: this.state.year07Add3,
        year08Add3: this.state.year08Add3,
        year09Add3: this.state.year09Add3,
        year10Add3: this.state.year10Add3,
        year11Add3: this.state.year11Add3,
        year12Add3: this.state.year12Add3,
        year13Add3: this.state.year13Add3,
        year14Add3: this.state.year14Add3,
        year15Add3: this.state.year15Add3,
        year16Add3: this.state.year16Add3,

        month01Add3: this.state.month01Add3,
        month02Add3: this.state.month02Add3,
        month03Add3: this.state.month03Add3,
        month04Add3: this.state.month04Add3,
        month05Add3: this.state.month05Add3,
        month06Add3: this.state.month06Add3,
        month07Add3: this.state.month07Add3,
        month08Add3: this.state.month08Add3,
        month09Add3: this.state.month09Add3,
        month10Add3: this.state.month10Add3,
        month11Add3: this.state.month11Add3,
        month12Add3: this.state.month12Add3,
        month13Add3: this.state.month13Add3,
        month14Add3: this.state.month14Add3,
        month15Add3: this.state.month15Add3,
        month16Add3: this.state.month16Add3,

        relationship: this.state.relationship,

        id: Date.now()
      }
    ]);
    console.log(nextItems);

    this.setState({
      items3: nextItems,
      //ตารางที่ 3
      exp1: "",
      excep1: "",
      relationship: "",

      year01Add3: "",
      year02Add3: "",
      year03Add3: "",
      year04Add3: "",
      year05Add3: "",
      year06Add3: "",
      year07Add3: "",
      year08Add3: "",
      year09Add3: "",
      year10Add3: "",
      year11Add3: "",
      year12Add3: "",
      year13Add3: "",
      year14Add3: "",
      year15Add3: "",
      year16Add3: "",

      month01Add3: "",
      month02Add3: "",
      month03Add3: "",
      month04Add3: "",
      month05Add3: "",
      month06Add3: "",
      month07Add3: "",
      month08Add3: "",
      month09Add3: "",
      month10Add3: "",
      month11Add3: "",
      month12Add3: "",
      month13Add3: "",
      month14Add3: "",
      month15Add3: "",
      month16Add3: ""
    });
  };

  deleteitem = i => {
    const items1 = this.state.items1;
    this.state.items1.splice(i, 1);
    this.setState(prevState => ({
      items1: prevState.items1
    }));
  };
  deleteitem2 = i => {
    const items2 = this.state.items2;
    this.state.items2.splice(i, 1);
    this.setState(prevState => ({
      items2: prevState.items2
    }));
  };

  deleteitem3 = i => {
    const items3 = this.state.items3;
    this.state.items3.splice(i, 1);
    this.setState(prevState => ({
      items3: prevState.items3
    }));
  };

  render() {
    return (
      <div style={{ fontSize: "12px" }}>
        <form>
          <CardBody>
            <Row>
              <Col md="7">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="3">
                      
                        <Label>วันที่</Label>
                        <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy"
                         onChange={this.baseData}
                         value={this.state.baseData}
                         bsSize="sm" />
                       
                      </Col>
                      <Col xs="12" sm="3">
                        <Label>เวลา</Label>
                        <Input
                          type="time"
                          name="time"
                          id="exampleTime"
                          placeholder="time placeholder"
                          bsSize="sm"
                          onChange={this.baseTime}
                          value={this.state.baseTime}
                        />
                      </Col>
                      <Col xs="12" sm="3">
                        <Label>ESI</Label>
                        <Input
                          type="text"
                          placeholder="Resuscitation"
                          bsSize="sm"
                          onChange={this.esi}
                          value={this.state.esi}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="2">
                        <Label>T</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.t}
                         value={this.state.t}
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>P</Label>
                        <Input type="text" bsSize="sm" 
                        onChange={this.p}
                        value={this.state.p}
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>RR</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.rr}
                         value={this.state.rr}
                        />
                      </Col>
                      <Col xs="12" sm="1">
                        <Label>BP </Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.bp}
                         value={this.state.bp}
                         />
                      </Col>
                      <Col xs="12" sm="1">
                        <Label>/</Label>
                        <Input type="text" bsSize="sm" 
                       //  onChange={this.p}
                        // value={this.state.p}
                        />
                      </Col>
                      <Col xs="12" sm="1">
                        <Label>O2Sat</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.o2sat}
                         value={this.state.o2sat}
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>Pain Score</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.pain}
                         value={this.state.pain}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="12" sm="3">
                        <Label>ส่วนสูง</Label>
                        <Input
                          type="text"
                          placeholder="เซนติเมตร (cm)"
                          bsSize="sm"
                          onChange={this.height}
                          value={this.state.height}
                        />
                      </Col>
                      <Col xs="12" sm="3">
                        <Label>น้ำหนัก</Label>
                        <Input
                          type="text"
                          placeholder="กิโลกรัม (kg)"
                          bsSize="sm"
                          onChange={this.weight}
                          value={this.state.weight}
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>BSA</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.bsa}
                         value={this.state.bsa}
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>BMI</Label>
                        <Input type="text" bsSize="sm" 
                         onChange={this.bml}
                         value={this.state.bml}
                        />
                      </Col>
                      <Col>
                        <Col>
                          <Label>
                            <br />
                          </Label>
                        </Col>
                        <Button
                          outline
                          color="primary"
                          size="sm"
                          onClick={this.toggle}
                        >
                          เพิ่ม / แก้ไข Vitalsign
                        </Button>
                        <Modal
                          size="lg"
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle} charCode="X">
                            Vitalsign
                          </ModalHeader>
                          <ModalBody>
                            <VitalSignButton />
                          </ModalBody>
                        </Modal>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col md="5">
                <Card>
                  <CardBody>
                    <Col>
                      <Row>
                        <Label>ประวัติโรคประจำตัว</Label>
                        <Col />
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.toggle1}
                        >
                          Add
                        </Button>
                        <Modal
                          size="lg"
                          isOpen={this.state.modal1}
                          toggle={this.toggle1}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle1} charCode="X">
                            บันทึกข้อมูล
                          </ModalHeader>
                          <ModalBody>
                            <form>
                              <Nav tabs>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: this.state.activeTab === "1"
                                    })}
                                  >
                                    โรคประจำตัว
                                  </NavLink>
                                </NavItem>
                              </Nav>
                              <br />
                              <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                  <Row>
                                    <Col sm="12">
                                      <Table bordered>
                                        <thead>
                                          <tr>
                                            <th>Name</th>
                                            <th>Begin Year</th>
                                            <th>Begin Month</th>
                                            <th>Remark</th>
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={
                                                  this.bloodpressureAdd1
                                                }
                                                value={
                                                  this.state.bloodpressureAdd1
                                                }
                                              >
                                                ความดันโลหิตสูง (HT)
                                              </Label>
                                            </th>

                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year01Add1}
                                                value={this.state.year01Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month01Add1}
                                                value={this.state.month01Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.diabetesAdd1}
                                                value={this.state.diabetesAdd1}
                                              >
                                                เบาหวาน (DM)
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year02Add1}
                                                value={this.state.year02Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month02Add1}
                                                value={this.state.month02Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>
                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.asthmaAdd1}
                                                value={this.state.asthmaAdd1}
                                              >
                                                โรคหอบหืด
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year03Add1}
                                                value={this.state.year03Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month03Add1}
                                                value={this.state.month03Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>
                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={
                                                  this.IschemicheartAdd1
                                                }
                                                value={
                                                  this.state.IschemicheartAdd1
                                                }
                                              >
                                                หัวใจขาดเลือด
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year04Add1}
                                                value={this.state.year04Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month04Add1}
                                                value={this.state.month04Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>
                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.cancerAdd1}
                                                value={this.state.cancerAdd1}
                                              >
                                                โรคมะเร็ง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year05Add1}
                                                value={this.state.year05Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month05Add1}
                                                value={this.state.month05Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>
                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.anemiaAdd1}
                                                value={this.state.anemiaAdd1}
                                              >
                                                โลหิตจาง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year06Add1}
                                                value={this.state.year06Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month06Add1}
                                                value={this.state.month06Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.depressAdd1}
                                                value={this.state.depressAdd1}
                                              >
                                                โรคซึมเศร้า
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year07Add1}
                                                value={this.state.year07Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month07Add1}
                                                value={this.state.month07Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.strokeAdd1}
                                                value={this.state.strokeAdd1}
                                              >
                                                โรคหลอดเลือดในสมอง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year08Add1}
                                                value={this.state.year08Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month08Add1}
                                                value={this.state.month08Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.amphatAdd1}
                                                value={this.state.amphatAdd1}
                                              >
                                                อัมพฤกษ์ อัมพาต
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year09Add1}
                                                value={this.state.year09Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month09Add1}
                                                value={this.state.month09Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.renalfailureAdd1}
                                                value={
                                                  this.state.renalfailureAdd1
                                                }
                                              >
                                                ไตวายเรื้อรัง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year10Add1}
                                                value={this.state.year10Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month10Add1}
                                                value={this.state.month10Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.bronchitisAdd1}
                                                value={
                                                  this.state.bronchitisAdd1
                                                }
                                              >
                                                หลอดลมอักเสบเรื้อรัง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year11Add1}
                                                value={this.state.year11Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month11Add1}
                                                value={this.state.month11Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.aneurysmAdd1}
                                                value={this.state.aneurysmAdd1}
                                              >
                                                ถุงลมปอดโป่งพอง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year12Add1}
                                                value={this.state.year12Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month12Add1}
                                                value={this.state.month12Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.heartdiseaseAdd1}
                                                value={
                                                  this.state.heartdiseaseAdd1
                                                }
                                              >
                                                โรคหัวใจ
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year13Add1}
                                                value={this.state.year13Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month13Add1}
                                                value={this.state.month13Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.alcoholismAdd1}
                                                value={
                                                  this.state.alcoholismAdd1
                                                }
                                              >
                                                พิษสุราเรื้อรัง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year14Add1}
                                                value={this.state.year14Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month14Add1}
                                                value={this.state.month14Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.copdAdd1}
                                                value={this.state.copdAdd1}
                                              >
                                                โรคทางเดินหายใจอุดกั้นเรื้อรัง
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year15Add1}
                                                value={this.state.year15Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month15Add1}
                                                value={this.state.month15Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>

                                          <tr>
                                            <th>
                                              <Label
                                                type="text"
                                                onChange={this.tuberculosisAdd1}
                                                value={
                                                  this.state.tuberculosisAdd1
                                                }
                                              >
                                                วัณโรค
                                              </Label>
                                            </th>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.year16Add1}
                                                value={this.state.year16Add1}
                                              />
                                            </td>
                                            <td>
                                              <Input
                                                type="text"
                                                onChange={this.month16Add1}
                                                value={this.state.month16Add1}
                                              />
                                            </td>
                                            <td>Remark</td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </Col>
                                  </Row>
                                  <ModalFooter>
                                    <Button
                                      color="primary"
                                      onClick={this.handleSubmit1}
                                    >
                                      บันทึก
                                    </Button>
                                  </ModalFooter>
                                </TabPane>
                              </TabContent>
                            </form>
                          </ModalBody>
                        </Modal>
                        &nbsp;
                        <Button color="success" size="sm">
                          Edit
                        </Button>
                        &nbsp;
                        
                        &nbsp;
                       
                      </Row>
                      <br />

                      <Row>
                        <Col>
                          <div style={tableCongenitaldiseasesStyle}>
                            <Table bordered size="sm">
                              <thead>
                                <tr>
                                  <th>ชื่อโรค</th>
                                  <th>เป็นมาแล้ว</th>
                                  <th>Remark</th>
                                </tr>
                              </thead>
                              {this.state.items1.map((item, i) => (
                                <tbody key={i}>
                                  <tr>
                                    <td>{item.bloodpressureAdd1}</td>
                                    <td>
                                      {item.year01Add1} Y {item.month01Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.diabetesAdd1}</td>
                                    <td>
                                      {item.year02Add1} Y {item.month02Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.asthmaAdd1}</td>
                                    <td>
                                      {item.year03Add1} Y {item.month03Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.IschemicheartAdd1}</td>
                                    <td>
                                      {item.year04Add1} Y {item.month04Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.cancerAdd1}</td>
                                    <td>
                                      {item.year05Add1} Y {item.month05Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.anemiaAdd1}</td>
                                    <td>
                                      {item.year06Add1} Y {item.month06Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.depressAdd1}</td>
                                    <td>
                                      {item.year07Add1} Y {item.month07Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.strokeAdd1}</td>
                                    <td>
                                      {item.year08Add1} Y {item.month08Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.renalfailureAdd1}</td>
                                    <td>
                                      {item.year09Add1} Y {item.month09Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.bronchitisAdd1}</td>
                                    <td>
                                      {item.year10Add1} Y {item.month10Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.aneurysmAdd1}</td>
                                    <td>
                                      {item.year11Add1} Y {item.month11Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.heartdiseaseAdd1}</td>
                                    <td>
                                      {item.year12Add1} Y {item.month12Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.alcoholismAdd1}</td>
                                    <td>
                                      {item.year13Add1} Y {item.month13Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.copdAdd1}</td>
                                    <td>
                                      {item.year14Add1} Y {item.month14Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.tuberculosisAdd1}</td>
                                    <td>
                                      {item.year15Add1} Y {item.month15Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.diabetesAdd1}</td>
                                    <td>
                                      {item.year16Add1} Y {item.month16Add1} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />

            <Row>
              <Col md="7">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="3">
                        <Label>การสูบบุหรี่</Label>
                        <Input type="select" bsSize="sm"  
                          onChange={this.smoking}
                          value={this.state.smoking}>
                          <option />
                          <option>ไม่สูบ</option>
                          <option>สูบนานๆครั้ง</option>
                          <option>สูบเป็นครั้งคราว</option>
                          <option>สูบเป็นประจำ</option>
                          <option>ไม่ทราบ</option>
                          <option>เคยสูบแต่เลิกแล้ว</option>
                        </Input>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>จำนวน</Label>
                        <Input type="text" placeholder="ซอง" bsSize="sm" 
                        onChange={this.envelope}
                        value={this.state.envelope}/>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>เวลา</Label>
                        <Input type="text" placeholder="ปี" bsSize="sm" 
                         onChange={this.timesmoke }
                         value={this.state.timesmoke }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="3">
                        <Label>การดื่มแอลกอฮอลล์</Label>
                        <Input type="select" bsSize="sm" 
                           onChange={this.drink }
                           value={this.state.drink }>
                          <option />
                          <option>ไม่ดื่ม</option>
                          <option>ดื่มนานๆครั้ง</option>
                          <option>ดื่มเป็นครั้งคราว</option>
                          <option>ดื่มเป็นประจำ</option>
                          <option>ไม่ทราบ</option>
                          <option>เคยดื่มแต่เลิกแล้ว</option>
                        </Input>
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>จำนวน</Label>
                        <Input type="text" placeholder="ขวด" bsSize="sm" 
                        onChange={this.bottle }
                        value={this.state.bottle }
                        />
                      </Col>
                      <Col xs="12" sm="2">
                        <Label>เวลา</Label>
                        <Input type="text" placeholder="ปี" bsSize="sm" 
                         onChange={this.timedrink }
                         value={this.state.timedrink }
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                  </CardBody>
                </Card>
              </Col>

              <Col md="5">
                <Card>
                  <CardBody>
                    <Col>
                      <Row>
                        <Label>ประวัติการผ่าตัด</Label>
                        <Col />
                        <Col />
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.toggle2}
                        >
                          Add
                        </Button>
                        <Modal
                          size="lg"
                          isOpen={this.state.modal2}
                          toggle={this.toggle2}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle2} charCode="X">
                            บันทึกข้อมูล
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              <form>
                                <Nav tabs>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "1"
                                      })}
                                    >
                                      การผ่าตัด
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                  <TabPane tabId="1">
                                    <Row>
                                      <Col sm="12">
                                        <Label>Operation</Label>
                                        <Input
                                          type="text"
                                          bsSize="sm"
                                          onChange={this.Operation}
                                          value={this.state.Operation}
                                        />
                                      </Col>
                                      <Col sm="12">
                                        <Label>Remark</Label>
                                        <Input
                                          type="text"
                                          bsSize="sm"
                                          onChange={this.Remark}
                                          value={this.state.Remark}
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs="12" sm="2">
                                        <Label>ว/ด/ป ที่ผ่าตัด</Label>

                                        <Input
                                          type="text"
                                          placeholder="วัน (Day)"
                                          onChange={this.Day}
                                          value={this.state.Day}
                                          bsSize="sm"
                                        />
                                      </Col>
                                      <Col xs="12" sm="2">
                                        <Label>
                                          <br />
                                        </Label>
                                        <Input
                                          type="text"
                                          placeholder="เดือน (Month)"
                                          onChange={this.Month}
                                          value={this.state.Month}
                                          bsSize="sm"
                                        />
                                      </Col>
                                      <Col xs="12" sm="2">
                                        <Label>
                                          <br />
                                        </Label>
                                        <Input
                                          type="text"
                                          placeholder="ปี (Year)"
                                          onChange={this.Year}
                                          value={this.state.Year}
                                          bsSize="sm"
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs="12" sm="2">
                                        <Label>ผ่าตัดมาแล้ว</Label>

                                        <Input
                                          type="text"
                                          placeholder="ปี (Year)"
                                          onChange={this.lYear}
                                          value={this.state.lYear}
                                          bsSize="sm"
                                        />
                                      </Col>
                                      <Col xs="12" sm="2">
                                        <Label>
                                          <br />
                                        </Label>
                                        <Input
                                          type="text"
                                          placeholder="เดือน (Month)"
                                          onChange={this.lMonth}
                                          value={this.state.lMonth}
                                          bsSize="sm"
                                        />
                                      </Col>
                                      <Col xs="12" sm="2">
                                        <Label>
                                          <br />
                                        </Label>
                                        <Input
                                          plaintext
                                          readOnly
                                          defaultValue="0 วัน"
                                          bsSize="sm"
                                        />
                                      </Col>
                                    </Row>
                                    <br />
                                    <CardBody>
                                      <Row>
                                        <Table bordered size="sm">
                                          <thead>
                                            <tr>
                                              <th>Operatio</th>
                                              <th>Remark</th>
                                              <th>วันที่ผ่าตัด</th>
                                              <th>ผ่าตัดมาแล้ว</th>
                                            </tr>
                                          </thead>
                                          {this.state.items2.map((item, i) => (
                                            <tbody key={i}>
                                              <tr>
                                                <td>{item.Operation} </td>
                                                <td>{item.Remark} </td>
                                                <td>
                                                  {" "}
                                                  {item.Day}
                                                  {"/"} {item.Month}
                                                  {"/"} {item.Year}
                                                  {""}
                                                </td>
                                                <td>
                                                  {" "}
                                                  {item.lYear}
                                                  {" ปี"} {item.lMonth}
                                                  {" เดือน"} {item.lDay}
                                                  {" วัน"}
                                                </td>
                                              </tr>
                                            </tbody>
                                          ))}
                                        </Table>
                                      </Row>
                                    </CardBody>
                                    <ModalFooter>
                                      <Button
                                        color="primary"
                                        size="sm"
                                        onClick={this.handleSubmit2}
                                      >
                                        บันทึก
                                      </Button>
                                    </ModalFooter>
                                  </TabPane>
                                </TabContent>
                              </form>
                            </div>
                          </ModalBody>
                        </Modal>
                        &nbsp;
                        <Button color="success" size="sm">
                          Edit
                        </Button>
                        &nbsp;
                       
                        &nbsp;
                       
                      </Row>
                      <br />

                      <Row>
                        <Col>
                          <div style={tableSurgeryhistoryStyle}>
                            <Table bordered size="sm">
                              <thead>
                                <tr>
                                  <th>การผ่าตัด</th>
                                  <th>วันที่ผ่าตัด</th>
                                  <th>ผ่าตัดมาแล้ว</th>
                                  <th>Remark</th>
                                </tr>
                              </thead>
                              {this.state.items2.map((item, i) => (
                                <tbody key={i}>
                                  <tr>
                                    <td>{item.Operation} </td>

                                    <td>
                                      {" "}
                                      {item.Day}
                                      {"/"} {item.Month}
                                      {"/"} {item.Year}
                                      {""}
                                    </td>
                                    <td>
                                      {" "}
                                      {item.lYear}
                                      {" ปี"} {item.lMonth}
                                      {" เดือน"} {item.lDay}
                                      {" วัน"}
                                    </td>
                                    <td> {"Remark"}</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem2}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />

            <Row>
              <Col md="7">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="6">
                        <Label>อาการสำคัญทั้งหมด</Label>

                        <div style={tableAllImportantSymptomsStyle}>
                          <Table bordered size="sm">
                            <thead>
                              <tr>
                                <th>Detail</th>
                                <th>CareProvider</th>
                                <th>Time</th>
                                <th>LocationClinic</th>
                              </tr>
                            </thead>
                            {this.state.items0.map((item, i) => (
                              <tbody key={i}>
                                <tr>
                                  <td>
                                    {item.importantSymptoms} 
                                  </td>
                                  <td> {this.state.LocationClinic} </td>
                                  <td>{item.baseTime}  </td>
                                  <td> {this.state.LocationClinic1}</td>
                                </tr>
                              </tbody>
                            ))}
                          </Table>
                        </div>
                      </Col>

                      <Col xs="12" sm="3">
                        <Label>อาการสำคัญ</Label>
                        <Input
                          type="text"
                          onChange={this.importantSymptoms}
                          value={this.state.importantSymptoms}
                          bsSize="sm"
                        />
                        <br />
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.handleSubmit0}
                        >
                          Add
                        </Button>
                        <br />
                      </Col>

                      <Col md="3">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col>
                                <div style={selectAllergiesStyle}>
                                  <Label>การแพ้</Label>
                                  <Input type="select" bsSize="sm">
                                    <option />
                                    <option>ยังไม่ระบุ/ไม่ทราบ</option>
                                    <option>ไม่มีประวัติการแพ้ใดๆ</option>
                                    <option>
                                      มีประวัติการแพ้ใหม่/เปลี่ยนแปลง
                                    </option>
                                    <option>มีประวัติแพ้เช่นเดิม</option>
                                  </Input>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs="12" sm="1">
                        <br />
                        <Label>
                          <b>แพทย์</b>
                        </Label>
                      </Col>
                      <Col xs="12" sm="3">
                        <Label />
                        <Input type="select" bsSize="sm">
                          <option />
                          <option>พญ.กนกกาญจน์ สว่างศรีสุทธิกุล</option>
                          
                        </Input>
                      </Col>
                      <Col>
                        <br />
                        <Button outline color="primary">
                          ระบุแพทย์อื่น
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col md="5">
                <Card>
                  <CardBody>
                    <Col>
                      <Row>
                        <Label>Family History</Label>
                        <Col />
                        <Col />
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.toggle3}
                        >
                          Add
                        </Button>
                        <Modal
                          size="lg"
                          isOpen={this.state.modal3}
                          toggle={this.toggle3}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle3} charCode="X">
                            บันทึกข้อมูล
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              <form>
                                <Nav tabs>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "1"
                                      })}
                                    >
                                      Family History
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                                <br />
                                <TabContent activeTab={this.state.activeTab}>
                                  <TabPane tabId="1">
                                    <Row>
                                      <Col md="12">
                                        <Row>
                                          <Col>
                                            <Label>Relationship</Label>
                                            <Input
                                              type="select"
                                              bsSize="sm"
                                              onChange={this.relationship}
                                              value={this.state.relationship}
                                            >
                                              <option />
                                              <option>บิดา</option>
                                              <option>มารดา</option>
                                              <option>พี่/น้องชาย</option>
                                              <option>พี่/น้องสาว</option>
                                              <option>ลุง/อา</option>
                                              <option>ป้า/น้า</option>
                                              <option>ปู่</option>
                                              <option>ย่า</option>
                                              <option>ตา</option>
                                              <option>ยาย</option>
                                            </Input>
                                          </Col>
                                        </Row>
                                        <br />
                                        <Table bordered>
                                          <thead>
                                            <tr>
                                              <th>Name</th>
                                              <th>BeginYear</th>
                                              <th>BeginMonth</th>
                                              <th>Remark</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={
                                                    this.bloodpressureAdd3
                                                  }
                                                  value={
                                                    this.state.bloodpressureAdd3
                                                  }
                                                >
                                                  ความดันโลหิตสูง (HT)
                                                </Label>
                                              </th>

                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year01Add3}
                                                  value={this.state.year01Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month01Add3}
                                                  value={this.state.month01Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.diabetesAdd3}
                                                  value={
                                                    this.state.diabetesAdd3
                                                  }
                                                >
                                                  เบาหวาน (DM)
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year02Add3}
                                                  value={this.state.year02Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month02Add3}
                                                  value={this.state.month02Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>
                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.asthmaAdd3}
                                                  value={this.state.asthmaAdd3}
                                                >
                                                  โรคหอบหืด
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year03Add3}
                                                  value={this.state.year03Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month03Add3}
                                                  value={this.state.month03Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>
                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={
                                                    this.IschemicheartAdd3
                                                  }
                                                  value={
                                                    this.state.IschemicheartAdd3
                                                  }
                                                >
                                                  หัวใจขาดเลือด
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year04Add3}
                                                  value={this.state.year04Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month04Add3}
                                                  value={this.state.month04Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>
                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.cancerAdd3}
                                                  value={this.state.cancerAdd3}
                                                >
                                                  โรคมะเร็ง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year05Add3}
                                                  value={this.state.year05Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month05Add3}
                                                  value={this.state.month05Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>
                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.anemiaAdd3}
                                                  value={this.state.anemiaAdd3}
                                                >
                                                  โลหิตจาง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year06Add3}
                                                  value={this.state.year06Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month06Add3}
                                                  value={this.state.month06Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.depressAdd3}
                                                  value={this.state.depressAdd3}
                                                >
                                                  โรคซึมเศร้า
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year07Add3}
                                                  value={this.state.year07Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month07Add3}
                                                  value={this.state.month07Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.strokeAdd3}
                                                  value={this.state.strokeAdd3}
                                                >
                                                  โรคหลอดเลือดในสมอง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year08Add3}
                                                  value={this.state.year08Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month08Add3}
                                                  value={this.state.month08Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.amphatAdd3}
                                                  value={this.state.amphatAdd3}
                                                >
                                                  อัมพฤกษ์ อัมพาต
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year09Add3}
                                                  value={this.state.year09Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month09Add3}
                                                  value={this.state.month09Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={
                                                    this.renalfailureAdd3
                                                  }
                                                  value={
                                                    this.state.renalfailureAdd3
                                                  }
                                                >
                                                  ไตวายเรื้อรัง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year10Add3}
                                                  value={this.state.year10Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month10Add3}
                                                  value={this.state.month10Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.bronchitisAdd3}
                                                  value={
                                                    this.state.bronchitisAdd3
                                                  }
                                                >
                                                  หลอดลมอักเสบเรื้อรัง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year11Add3}
                                                  value={this.state.year11Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month11Add3}
                                                  value={this.state.month11Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.aneurysmAdd3}
                                                  value={
                                                    this.state.aneurysmAdd3
                                                  }
                                                >
                                                  ถุงลมปอดโป่งพอง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year12Add3}
                                                  value={this.state.year12Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month12Add3}
                                                  value={this.state.month12Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={
                                                    this.heartdiseaseAdd3
                                                  }
                                                  value={
                                                    this.state.heartdiseaseAdd3
                                                  }
                                                >
                                                  โรคหัวใจ
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year13Add3}
                                                  value={this.state.year13Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month13Add3}
                                                  value={this.state.month13Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.alcoholismAdd3}
                                                  value={
                                                    this.state.alcoholismAdd3
                                                  }
                                                >
                                                  พิษสุราเรื้อรัง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year14Add3}
                                                  value={this.state.year14Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month14Add3}
                                                  value={this.state.month14Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={this.copdAdd3}
                                                  value={this.state.copdAdd3}
                                                >
                                                  โรคทางเดินหายใจอุดกั้นเรื้อรัง
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year15Add3}
                                                  value={this.state.year15Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month15Add3}
                                                  value={this.state.month15Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>

                                            <tr>
                                              <th>
                                                <Label
                                                  type="text"
                                                  onChange={
                                                    this.tuberculosisAdd3
                                                  }
                                                  value={
                                                    this.state.tuberculosisAdd3
                                                  }
                                                >
                                                  วัณโรค
                                                </Label>
                                              </th>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.year16Add3}
                                                  value={this.state.year16Add3}
                                                />
                                              </td>
                                              <td>
                                                <Input
                                                  type="text"
                                                  onChange={this.month16Add3}
                                                  value={this.state.month16Add3}
                                                />
                                              </td>
                                              <td>Remark</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </Col>
                                    </Row>
                                    <ModalFooter>
                                      <Button
                                        color="primary"
                                        onClick={this.handleSubmit3}
                                      >
                                        บันทึก
                                      </Button>
                                    </ModalFooter>
                                  </TabPane>
                                </TabContent>
                              </form>
                            </div>
                          </ModalBody>
                        </Modal>
                        &nbsp;
                        <Button color="success" size="sm">
                          Edit
                        </Button>
                        &nbsp;
                        
                        &nbsp;
                       
                      </Row>
                      <br />

                      <Row>
                        <Col>
                          <div style={tableFamilyHistoryStyle}>
                            <Table bordered size="sm">
                              <thead>
                                <tr>
                                  <th>ความสัมพันธ์</th>
                                  <th>โรคประจำตัว</th>
                                  <th>เป็นมาแล้ว</th>
                                  <th>Remark</th>
                                </tr>
                              </thead>
                              {this.state.items3.map((item, i) => (
                                <tbody key={i}>
                                  <tr>
                                    <td>{item.relationship}</td>
                                    <td>{item.bloodpressureAdd3}</td>
                                    <td>
                                      {item.year01Add3} Y {item.month01Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  {/* <tr>
                                    <td>{item.diabetesAdd3}</td>
                                    <td>
                                      {item.year02Add3} Y {item.month02Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.asthmaAdd3}</td>
                                    <td>
                                      {item.year03Add3} Y {item.month03Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.IschemicheartAdd3}</td>
                                    <td>
                                      {item.year04Add3} Y {item.month04Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.cancerAdd3}</td>
                                    <td>
                                      {item.year05Add3} Y {item.month05Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.anemiaAdd3}</td>
                                    <td>
                                      {item.year06Add3} Y {item.month06Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.depressAdd3}</td>
                                    <td>
                                      {item.year07Add3} Y {item.month07Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.strokeAdd3}</td>
                                    <td>
                                      {item.year08Add3} Y {item.month08Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.amphatAdd3}</td>
                                    <td>
                                      {item.year09Add3} Y {item.month09Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.renalfailureAdd3}</td>
                                    <td>
                                      {item.year10Add3} Y {item.month10Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.bronchitisAdd3}</td>
                                    <td>
                                      {item.year11Add3} Y {item.month11Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.aneurysmAdd3}</td>
                                    <td>
                                      {item.year12Add3} Y {item.month12Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.heartdiseaseAdd3}</td>
                                    <td>
                                      {item.year13Add3} Y {item.month13Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.alcoholismAdd3}</td>
                                    <td>
                                      {item.year14Add3} Y {item.month14Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.copdAdd3}</td>
                                    <td>
                                      {item.year15Add3} Y {item.month15Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{item.tuberculosisAdd3}</td>
                                    <td>
                                      {item.year16Add3} Y {item.month16Add3} M
                                    </td>
                                    <td>Remark</td>
                                    <td>
                                      <Button
                                        outline
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteitem3}
                                      >
                                        X
                                      </Button>
                                    </td>
                                  </tr> */}
                                </tbody>
                              ))}
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <Card style={{ borderStyle: "none" }}>
                  <CardBody>
                    <Row>
                      <Col sm="10" />
                      <Col />
                      <Button color="primary" size="sm">
                        บันทึก
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col />
              <Col />
              <Button color="secondary" size="sm">
                ส่งพยาบาลหน้าห้องตรวจ
              </Button>
              &nbsp;
              <Button color="secondary" size="sm">
                ส่งพบแพทย์
              </Button>
              &nbsp;
            </Row>
          </CardBody>
        </form>
      </div>
    );
  }
}
