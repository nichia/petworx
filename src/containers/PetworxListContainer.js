import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SearchPetworxForm from '../components/SearchPetworxForm';
import ListPetworx from '../components/ListPetworx';

class PetworxListContainer extends Component {
  state = {
    petworxList: []
  }

  componentDidMount() {
    console.log("%ccomponentDidMount()", "color:purple;");
    this.fetchYelpApi('dog parks');
  }

  fetchYelpApi = (searchTerm, zipcode) => {
    console.log("%cFETCHyelpAPI()", "color:purple;", searchTerm, zipcode);

    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${zipcode}&limit=20`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then((res) => {
      console.log("res:", res);
      let petworx = [];
      res.data.businesses.map((business) => (
        petworx.push(business)
      ));
      this.setState({
        petworxList: petworx
      });
    })
    .catch((err) => {
      console.log( 'error:', err );
    })
  }

  fetchGeolocationYelpApi = (searchTerm, latitude, longitude) => {
    console.log("%cGEOLOCATION()", "color:purple;", searchTerm, latitude, longitude);

    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then((res) => {
      console.log("res:", res);
      let petworx = [];
      res.data.businesses.map((business) => (
        petworx.push(business)
      ));
      this.setState({
        petworxList: petworx
      });
    })
    .catch((err) => {
      console.log( 'error:', err );
    })
  }

  render() {
    console.log("%crender()", "color:green;");

    return (
      <div>
        <NavBar />
        <SearchPetworxForm fetchYelpApi={this.fetchYelpApi} fetchGeolocationYelpApi={this.fetchGeolocationYelpApi} />
        <ListPetworx petworxList={this.state.petworxList} />
      </div>
    )
  }
}

export default PetworxListContainer;