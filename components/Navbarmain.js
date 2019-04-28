import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Navbarmain = () => {
  return (
    <React.Fragment>
      <Navbar color="primary" dark className="py-md-0">
        <NavbarBrand href="/" style={{ fontSize: "18px" }} > HIS </NavbarBrand>
      </Navbar>
    </React.Fragment>
  )
}

export default Navbarmain