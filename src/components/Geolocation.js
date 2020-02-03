import React from "react";
import { geolocated } from "react-geolocated";
import pointerImage from '../assets/pointer.jpg';
import { Button } from 'reactstrap';

class Geolocation extends React.Component {

  handleClick = (event) => {
    console.log(this.props.coords.latitude)
    event.preventDefault()
    this.props.fetchGeolocationYelpApi(this.props.searchTerm, this.props.coords.latitude, this.props.coords.longitude)
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <Button className="btn-arrow" outline color="white" size="lg"><img src={pointerImage} alt="Geoloaction pointer" onClick={this.handleClick} /></Button> 
    ) : (
      <div>Getting the location data&hellip;</div>
    );
  }
}
 
export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geolocation);