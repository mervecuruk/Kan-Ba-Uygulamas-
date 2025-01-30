import React, { useContext } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'
import DefaultPersonImage from '../assets/img/DefaultPerson1.png';


const Form = () => {


  const {handleSubmit,cities,state,dispatch} = useContext(DataContext);
  const{selectedPerson,personName,personSurname,personBirthdate,personEposta,personPhoneNumber,personCity,personBloodGroup,personDescription,donationCount,lastDonationDate,previousDonationDates,personImage}=state;

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedPerson ? "Edit Person" : "Add New Person"}</h3>

      <fieldset>
        <legend>Donör Kişisel Bilgileri</legend>
        <input value={personName} onChange={p => dispatch({type:"personName",payload:p.target.value})} type="text" placeholder='Name of Donor' />
        <input value={personSurname} onChange={p => dispatch({type:"personSurname",payload:p.target.value})}  type="text" placeholder='Surname of Donor' />
        <input value={personBirthdate} onChange={p => dispatch({type:"personBirthdate",payload:p.target.value})} type="date" placeholder='Birthdate' />
        <input value={personImage} onChange={p => dispatch({type:"personImage",payload:p.target.value})}  type="url" accept="image/*" placeholder="URL of the donor's image" />
      </fieldset>

      <fieldset>
        <legend>İletişim Bilgileri</legend>
        <input value={personEposta} onChange={p => dispatch({type:"personEposta",payload:p.target.value})} type="text" placeholder='E-Posta' />
        <input value={personPhoneNumber} onChange={p => dispatch({type:"personPhoneNumber",payload:p.target.value})} type="text" placeholder='Phone Number' />
        <select value={personCity} id="citySelect" onChange={p => dispatch({type:"personCity",payload:p.target.value})}>
          <option>City of Donor</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Kan Grubu ve Diğer Bilgiler</legend>
        <select value={personBloodGroup} onChange={p => dispatch({type:"personBloodGroup",payload:p.target.value})}>
          <option>Select a Blood Group</option>
          <option>0 RH+</option>
          <option>0 RH-</option>
          <option>A RH+</option>
          <option>A RH-</option>
          <option>B RH+</option>
          <option>B RH-</option>
          <option>AB RH+</option>
          <option>AB RH-</option>
        </select>
        <textarea value={personDescription} onChange={p => dispatch({type:"personDescription",payload:p.target.value})} placeholder='Does the donor have a disease?'></textarea>
      </fieldset>

      <fieldset>
        <legend>Kan Bağışı Bilgileri</legend>
        <input value={donationCount} onChange={p => dispatch({type:"donationCount",payload:p.target.value})} type="number" placeholder="Total Donations Count" />
        <input value={lastDonationDate} onChange={p => dispatch({type:"lastDonationDate",payload:p.target.value})} type="date" placeholder="Last Donation Date" />
        <textarea value={previousDonationDates} onChange={p => dispatch({type:"previousDonationDates",payload:p.target.value})} placeholder="Previous Donation Dates (separate by commas)"></textarea>
      </fieldset>

      <input disabled={
        personName === "" ||
        personSurname === "" ||
        personBirthdate === "" ||
        personEposta === "" ||
        personPhoneNumber === "" ||
        personCity === "City of Donor" ||
        personBloodGroup === "Select a Blood Group" ||
        personDescription === "" ||
        donationCount === "" ||
        lastDonationDate === ""
      } type="submit" value={selectedPerson ? "Edit" : "Add"} />


    </form>
  )
}

export default Form