import React, { PureComponent } from 'react'
import { Navbar, NavbarBrand } from "reactstrap"

const fontSize18px = {
    fontSize: "18px",
}

export default class Navbarmain extends PureComponent {
    render() {
        return (
            <div>
                <Navbar color="primary" dark className="py-md-0">
                    <NavbarBrand href="/" style={fontSize18px}>
                        HIS
                </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}
