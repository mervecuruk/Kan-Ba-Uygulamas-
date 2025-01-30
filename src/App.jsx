import React from 'react'
import Questions from './components/Questions'
import './assets/styles/app.css'
import 'sweetalert2/src/sweetalert2.scss'
import PersonDetailPage from './pages/PersonDetailPage'
import Login from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import DonorsPage from './pages/DonorsPage'
import AddDonorPAge from './pages/AddDonorPAge'
import HomePage from './pages/HomePage'
import { AuthProvider } from './context/AuthContext'
// import Login from './components/Login'

const App = () => {

  return (
    <AuthProvider>
   <BrowserRouter >
      <Routes>
        <Route path='/*' element={<LoadingPage />} />
        <Route path='/' element={<HomePage />}>
          <Route path='/add-donor' element={<AddDonorPAge/>}/>
          <Route path='/donors' element={<DonorsPage />} />

          <Route path='/sss' element={<Questions />} />
          <Route path='person/:personId' element={<PersonDetailPage />} />
          <Route path='/login' element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </AuthProvider>
     
  )
}

export default App

