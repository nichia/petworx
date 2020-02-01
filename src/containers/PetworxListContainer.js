import React, { Component } from 'react';
import axios from 'axios';
import SearchPetworxForm from '../components/SearchPetworxForm';

class PetworxListContainer extends Component {
  state = {
    petworxList: []
  }

  componentDidMount() {
    console.log("%ccomponentDidMount()", "color:purple;")
    this.fetchYelpApi()
  }

  fetchYelpApi = (zipcode) => {
    const url = `https://api.yelp.com/v3/businesses/search?term=pet_services&location=${zipcode}&limit=20`
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    axios.get(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then((res) => {
      console.log("res:", res);
      let petworx = []
      res.data.businesses.map((business) => (
        petworx.push(business)
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
    console.log("%crender()", "color:green;")

    return (
      <div>
        To Do - NavBar
        <br />
        To Do - SearchPetworx
        <SearchPetworxForm fetchYelpApi={this.fetchYelpApi} />
        <br />
        To Do - ListPetworx
      </div>
    )
  }
}

export default PetworxListContainer