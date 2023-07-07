import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './Components/Registration'
import EmailVerification from './Components/EmailVerification'
import Login from './Components/Login'
// import freeExam from './Components/freeExam'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/email' element={<EmailVerification/>}></Route>
      {/* <Route path='/freeExam' element={<freeExam/>}></Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
