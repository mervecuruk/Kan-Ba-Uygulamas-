import React, { useContext } from 'react'
import Card from '../components/Card'
import "../assets/styles/card-list.scss"
import DataContext from '../context/DataContext'

const CardList = () => {

  const { state } = useContext(DataContext);
  console.log(state.persons);

  return (
    <div className='card-list'>
      {
        state.persons.map(person =>
          !person.isDeleted &&
          (state.selectedBloodGroup === person.bloodGroup || state.selectedBloodGroup === "All Persons") &&
            <Card person={person} key={person.id} />
        )
      }
    </div>

  )
}

export default CardList