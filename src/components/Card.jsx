import React, { useContext } from 'react'
import '../assets/styles/card.scss'
import DefaultPersonImage from '../assets/img/DefaultPerson1.png';
import DataContext from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import AuthContext from '../context/AuthContext';

const Card = ({ person }) => {

  const { DeletePerson, state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);

  // const handleEditClick = () => {
  //   setSelectedPerson(person);  // Seçilen kişiyi setle
  //   console.log("Navigating to edit page...");
  //   navigate('/add-donor');     // AddDonorPage'e yönlendir
  // };



  return (
    (person.name.toLowerCase().startsWith(state.search.toLowerCase()) ||
      person.bloodGroup.toLowerCase().startsWith(state.search.toLowerCase())) &&

    <div className="card-container">
      <div className="card" key={person.id}>
        <img src={person.image ? person.image : DefaultPersonImage} alt="" />
        <div className="card-content">
          <label><b style={{ color: "#541818" }}>Name:</b> {person.name}</label>
          <label><b style={{ color: "#541818" }}>Surname:</b> {person.surname}</label>
          <label><b style={{ color: "#541818" }}>Blood Group:</b> {person.bloodGroup}</label>
        </div>
        <div className="buttons"> {/* Butonları kapsayan div */}
          {
            isAuthenticated &&
            <>
              <button onClick={() => {
                dispatch({ type: "selectedPerson", person });
                navigate('/add-donor'); // Form sayfasına yönlendirme 
                // onClick={handleEditClick} 
              }} className="edit"><BsPencilSquare className="editIcon" /></button>

              <button onClick={() => DeletePerson(person.id)} className="delete"><MdOutlineCancel className='deleteIcon' /></button>
            </>

          }
          <Link to={`/person/${person.id}`} key={person.id}>
            <div className="detail"><TbListDetails className='detailIcon' /></div>
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Card