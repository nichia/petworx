import React from 'react';
import noImage from '../no-image.jpg';
import { Button, Card, CardBody, CardDeck, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const PetworxCard = (props) => {
  console.log("%c PetworxCard", "color:orange;", props)

  const image_url = props.petworx.image_url ? props.petworx.image_url : noImage
  
  return (
    <CardDeck className="col-md-5 col-lg-4" >
      <Card className="card">
        <CardImg top width="100%" className="card-img-top" src={image_url} alt={`Petworx ${props.petworx.name}`} />
        <CardBody>
          <CardTitle>{props.petworx.name}</CardTitle>
          <CardSubtitle>{props.petworx.location.address1}</CardSubtitle>
          <CardText>{props.petworx.location.city}, {props.petworx.location.state}</CardText>
          <CardText>{props.petworx.display_phone}</CardText>
          <Button>
            <CardLink target="_blank" href={props.petworx.url} style={{ color: '#000' }}> Learn More </CardLink>
          </Button>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default PetworxCard
