import React, { Component } from 'react'
import axios from 'axios';

export default class PetworxListContainer extends Component {
  state = {
    petworxList: []
  }

  componentDidMount() {
    this.fetchYelpApi()
  }

  fetchYelpApi() {
    const url = `https://api.yelp.com/v3/businesses/search?term=pet_services&location=${33611}&limit=20`
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    axios.get(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then((res) => {
      console.log("res:", res);
      let petworx = []
      res.data.businesses.map((pet) => (
        petworx.push(pet)
      ))
      this.setState({
        petworxList: petworx
      })
    })
    .catch((err) => {
      console.log( 'error:', err )
    })
  }

  render() {
    return (
      <div>
        To Do - NavBar
        <br />
        To Do - SearchPetworx
        <br />
        To Do - ListPetworx
      </div>
    )
  }
}
