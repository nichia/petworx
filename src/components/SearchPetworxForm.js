import React, { useState } from 'react';
import Geolocation from './Geolocation';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchPetworxForm = (props) => {
 
  const [zipcode, setZipcode] = useState('');

  const [searchTerm, setSearchTerm] = useState('dog parks');

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const handleSubmit = event => {
    event.preventDefault();
    props.fetchYelpApi(searchTerm, zipcode);
  }
 
  const onDropdownClick = event => {
    const newSearchTerm = event.currentTarget.getAttribute("dropdownvalue");

    setSearchTerm(newSearchTerm);
    props.fetchYelpApi(newSearchTerm, zipcode);
  }
  
  return (
    <>
      <Container><h1>Find a pet service near you.</h1></Container>
      <Container>
        <Form inline onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret outline color="secondary">
                {searchTerm}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="dog parks"
                >dog parks</DropdownItem>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="pet stores"
                >pet stores</DropdownItem>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="pet groomers"
                >pet groomers</DropdownItem>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="pet services"
                >pet services</DropdownItem>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="animal shelters"
                >animal shelters</DropdownItem>
                <DropdownItem
                  onClick={onDropdownClick} dropdownvalue="animal hospital"
                >animal hospital</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text" 
              placeholder="Search by zipcode" 
              name="zipcode" 
              onChange={event => {
                setZipcode(event.target.value); 
              }} 
              required 
            />
          </FormGroup>
          <Geolocation searchTerm={searchTerm} fetchGeolocationYelpApi={props.fetchGeolocationYelpApi}/>
          <Button type="submit" value="Search">Search</Button>    
        </Form>
      </Container>
    </>
  )
}

export default SearchPetworxForm;