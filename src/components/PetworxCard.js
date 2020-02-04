import React from 'react';
import StarRatings from 'react-star-ratings';
import noImage from '../assets/no-image.jpg';

import { Button, Card, CardBody, CardDeck, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const PetworxCard = (props) => {
  console.log("%c PetworxCard", "color:orange;", props);

  const image_url = props.petworx.image_url ? props.petworx.image_url : noImage;
  
  return (
    <CardDeck className="col-md-5 col-lg-4" style={{margin: "0.5em auto"}}>
      <Card className="card">
        <CardImg top width="100%" className="card-img-top" src={image_url} alt={`Petworx ${props.petworx.name}`} />
        <CardBody>
          <CardTitle>{props.petworx.name}</CardTitle>
          <CardText>
            <StarRatings 
              rating={props.petworx.rating}
              starRatedColor="red"
              starDimension="25px"
              starSpacing="5px"
              name="hello"
            /> <br></br>
            {props.petworx.review_count} Reviews
          </CardText>
          <CardSubtitle>{props.petworx.location.address1}</CardSubtitle>
          <CardText>{props.petworx.location.city}, {props.petworx.location.state}</CardText>
          <CardText>{props.petworx.display_phone}</CardText>
          <Button className="btn-block">
            <CardLink target="_blank" href={props.petworx.url} style={{ color: '#000' }}> Learn More </CardLink>
          </Button>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default PetworxCard;
