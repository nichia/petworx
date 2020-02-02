import React, { useState } from 'react';
import {Button, Container, Form} from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchPetworxForm = (props) => {
 
  const [zipcode, setZipcode] = useState('');

  const [searchTerm, setSearchTerm] = useState('dog parks');

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const handleSubmit = event => {
    event.preventDefault();
    props.fetchYelpApi(zipcode, searchTerm);
  }
 
  const onDropdownClick = event => {
    const newSearchTerm = event.currentTarget.getAttribute("dropdownvalue");

    setSearchTerm(newSearchTerm);
    props.fetchYelpApi(zipcode, newSearchTerm);
  }
  
  return (
    <>
      <Container><h1>Find a pet service near you.</h1></Container>
      <Container>
        <Form onSubmit={handleSubmit}>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {searchTerm}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="dog parks"
              >dog parks</DropdownItem>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="pet stores"
              >pet stores</DropdownItem>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="pet groomers"
              >pet groomers</DropdownItem>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="pet services"
              >pet services</DropdownItem>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="animal shelters"
              >animal shelters</DropdownItem>
              <DropdownItem
                onClick={onDropdownClick} dropDownValue="animal hospital"
              >animal hospital</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <input 
            type="text" 
            placeholder="Search by zipcode" 
            name="zipcode" 
            onChange={event => {
              setZipcode(event.target.value); 
            }} 
            required 
          />

          <Button type="submit" value="Search">Search</Button>          

        </Form>
      </Container>
    </>
  )
}

export default SearchPetworxForm;