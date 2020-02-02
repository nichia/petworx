import React from 'react';
import PetworxCard from './PetworxCard';

function ListPetworx(props) {
  console.log("%c ListPetworx", "color:green;", props)

  const renderPetworxList = () => {
    const petworxCards = props.petworxList.length > 0 ? props.petworxList.map(pet => <PetworxCard petworx={pet} key={pet.id} />) : null
    return petworxCards
  }

  return (
    <div className='row'>
      {renderPetworxList()}
    </div>
  )
}

export default ListPetworx
