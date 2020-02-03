import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md" style={{ height: '6rem' }}>
        <NavbarBrand href="/">PetWorx</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;