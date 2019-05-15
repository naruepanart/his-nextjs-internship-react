import React, { PureComponent } from "react"
import Link from "next/link"
import Head from "next/head"
import { Navbar, NavbarBrand } from "reactstrap"
import Regis from "../static/iconSetMainForm64_addPatient.png"
import SendP from "../static/iconSetMainForm64_sendPatient.png"
import Nurse from "../static/iconSetMainForm64_nurse-04.png"
import Doc from "../static/iconSetMainForm64_doctor.png"
import Drug from "../static/iconSetMainForm64_drug.png"
import Xray from "../static/iconSetMainForm64_xray-15.png"
import Coin from "../static/iconSetMainForm64_coin.png"
import Manage from "../static/iconSetMainForm64_calendar.png"

const fontSize12px = {
    fontSize: "12px",
}

export default class MenuTopMain extends PureComponent {
    render() {
        return (
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"
                    />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
                    <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js" />
                </Head>

                <Navbar color="primary" dark className="py-md-0">
                    <NavbarBrand href="/" style={fontSize12px}>
                        HIS
                    </NavbarBrand>
                </Navbar>

                <nav className="rib" data-role="ribbonmenu">
                    <ul className="tabs-holder">
                        <li>
                            <a href="#section-1-1">Home</a>
                        </li>
                        {/* <li>
                            <a href="#section-1-2">Master</a>
                        </li>
                        <li>
                            <a href="#section-1-3">Setting</a>
                        </li>
                        <li>
                            <a href="#section-1-4">Reports</a>
                        </li> */}

                        {/*   <li>
                            <a
                                href="/"
                                className="d-menu put-right bg-red fg-white"
                            >
                                <big>Sign out</big>
                            </a>
                        </li> */}
                    </ul>

                    <div className="content-holder">
                        <div className="section" id="section-1-1">
                            <div className="group">
                                <Link href="/register">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img
                                                src={Regis}
                                                width="30"
                                                alt="logo"
                                            />
                                        </span>
                                        <span className="caption">
                                            ทะเบียนผู้ป่วย
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/sendpatient">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img
                                                src={SendP}
                                                width="30"
                                                alt="logo"
                                            />
                                        </span>
                                        <span className="caption">
                                            ส่งตรวจผู้ป่วย
                                        </span>
                                    </button>
                                </Link>
                                <span className="title">เวชระเบียน</span>
                            </div>

                            <div className="group">
                                <Link href="/examination">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img
                                                src={Nurse}
                                                width="30"
                                                alt="logo"
                                            />
                                        </span>
                                        <span className="caption">
                                            งานหน้าห้องตรวจ
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/examdoctor">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img
                                                src={Doc}
                                                width="30"
                                                alt="logo"
                                            />
                                        </span>
                                        <span className="caption">
                                            งานห้องตรวจแพทย์
                                        </span>
                                    </button>
                                </Link>

                                <Link href="/dispensing">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img
                                                src={Drug}
                                                width="30"
                                                alt="logo"
                                            />
                                        </span>
                                        <span className="caption">
                                            งานห้องจ่ายยา
                                        </span>
                                    </button>
                                </Link>

                                <span className="title">OPD</span>
                            </div>

                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Xray} width="30" alt="logo" />
                                    </span>
                                    <span className="caption">
                                        งานหน้าห้อง X-ray
                                    </span>
                                </button>

                                <span className="title">X-ray</span>
                            </div>

                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Coin} width="30" alt="logo" />
                                    </span>
                                    <span className="caption">
                                        งานห้องการเงิน
                                    </span>
                                </button>

                                <span className="title">Finance</span>
                            </div>

                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img
                                            src={Manage}
                                            width="30"
                                            alt="logo"
                                        />
                                    </span>
                                    <span className="caption">
                                        Manage Session
                                    </span>
                                </button>
                                <span className="title">Appointment</span>
                            </div>
                            <div className="group" />
                        </div>
                    </div>
                    <div className="content-holder">
                        <div className="section" id="section-1-2" />
                    </div>

                    <div className="content-holder">
                        <div className="section" id="section-1-3" />
                    </div>
                    <div className="content-holder">
                        <div className="section" id="section-1-4" />
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
