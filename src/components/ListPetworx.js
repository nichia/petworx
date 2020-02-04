import React from 'react';
import PetworxCard from './PetworxCard';
import { Spinner } from 'reactstrap';

const ListPetworx = (props) => {
  console.log("%c ListPetworx", "color:green;", props);

  const renderPetworxList = () => {
    const petworxCards = props.petworxList.length > 0 ? props.petworxList.map(pet => <PetworxCard petworx={pet} key={pet.id} />) : null
    return petworxCards;
  }

  if (props.isLoading) {
    return <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
  }

  return (
    <div className='petworx-container'>
      <div className='row'>
        {renderPetworxList()}
      </div>
    </div>

  )
}

export default ListPetworx;
