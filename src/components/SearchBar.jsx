import React, { useContext } from 'react'
import '../assets/styles/search.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaSearch } from "react-icons/fa";
import DataContext from '../context/DataContext';
import AuthContext from '../context/AuthContext';
// import { bloodGroup } from '../assets/data/dataset'


const SearchBar = () => {

  const { state, dispatch } = useContext(DataContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {
        isAuthenticated &&
        <div className='search-bar'>

          <ul className="blood-group">
            {
              state.categories.map(blood =>
                <li onClick={e => dispatch({ type: "selectedPersonBloodGroup", payload: e.target.innerText })} key={blood.id}>{blood.name}</li>
              )
            }
          </ul>


          <div className="input">
            <input onChange={e => dispatch({ type: "search", payload: e.target.value })} type="search" placeholder='Person Name / Blood Group' />
            <FaSearch className='scope' />

          </div>


        </div>
      }

    </>

  )
}

export default SearchBar