import React from 'react';
import PetworxCard from './PetworxCard';

const ListPetworx = (props) => {
  console.log("%c ListPetworx", "color:green;", props);

  const renderPetworxList = () => {
    const petworxCards = props.petworxList.length > 0 ? props.petworxList.map(pet => <PetworxCard petworx={pet} key={pet.id} />) : null
    return petworxCards;
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
