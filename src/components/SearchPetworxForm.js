import React, { useState } from 'react';
import {Button, Container, Form} from 'reactstrap';

const SearchPetworxForm = (props) => {
 
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    props.fetchYelpApi(zipcode)
  }

  const onChange = event => {
    setZipcode({
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <Container><h1>Find a pet service near you.</h1></Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search by zipcode" name="zipcode" onChange={onChange} required />        
          <Button type="submit" value="Search">Search</Button>             
        </Form>
      </Container>
    </>
  )
}
export default SearchPetworxForm