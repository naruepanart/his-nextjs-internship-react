import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const fontSize18px = {
    fontSize: "18px",
}

const Navbarmain = () => {
    return (
        <div>
            <Navbar color="primary" dark className="py-md-0">
                <NavbarBrand href="/" style={fontSize18px}>
                    {" "}
                    HIS{" "}
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navbarmain
