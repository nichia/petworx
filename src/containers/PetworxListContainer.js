import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SearchPetworxForm from '../components/SearchPetworxForm';
import ListPetworx from '../components/ListPetworx';

class PetworxListContainer extends Component {
  state = {
    petworxList: [],
    loading: true
  }

  componentDidMount() {
    console.log("%ccomponentDidMount()", "color:purple;");
    this.fetchYelpApi('dog parks');
  }

  fetchApi = (url) => {
    this.setState({loading: true}, () => {
      console.log("%cFETCHyelpAPI()", "color:purple;", url, this.state);

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.get(proxyurl + url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
      })
      .then((res) => {
        console.log("res:", res, this.state);
        let petworx = [];
        res.data.businesses.map((business) => (
          petworx.push(business)
        ));
        this.setState({
          petworxList: petworx,
          loading: false
        });
      })
      .catch((err) => {
        console.log( 'error:', err );
      })
    });
  }

  fetchYelpApi = (searchTerm, zipcode) => {
    console.log("%cZIPCODE()", "color:purple;", searchTerm, zipcode);

    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${zipcode}&limit=50`;

    this.fetchApi(url);
  }

  fetchByGeolocation = (searchTerm, latitude, longitude) => {
    console.log("%cGEOLOCATION()", "color:purple;", searchTerm, latitude, longitude);

    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`;

    this.fetchApi(url);
  }

  render() {
    console.log("%crender()", "color:green;", this.state.loading);

    return (
      <div>
        <NavBar />
        <SearchPetworxForm fetchYelpApi={this.fetchYelpApi} fetchGeolocationYelpApi={this.fetchByGeolocation} />
        <ListPetworx petworxList={this.state.petworxList} isLoading={this.state.loading}/>
      </div>
    )
  }
}

export default PetworxListContainer;