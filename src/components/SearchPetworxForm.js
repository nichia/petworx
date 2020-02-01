import React, { Component } from 'react';
import {Button, Container, Form} from 'reactstrap';

class SearchPetworxForm extends Component {

  state = {
    zipcode: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchYelpApi(this.state.zipcode)
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <Container><h1>Find a pet service near you.</h1></Container>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search by zipcode" name="zipcode" onChange={this.onChange} required />        
            <Button type="submit" value="Search">Search</Button>             
          </Form>
        </Container>
      </>
    )
  }
}
export default SearchPetworxForm