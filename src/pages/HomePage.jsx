import React from 'react'
import Navi from '../components/Navi'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Navi/>
        <SearchBar/>
        <Outlet />

    </div>
  )
}

export default HomePage