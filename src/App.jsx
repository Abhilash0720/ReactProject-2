import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Mainpage from './Components/MainPage'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Notescontext from './Components/Notescontext'
import UserContext from './Context/UserContext'
function App() {
  

  return <>
  <BrowserRouter>
   <Sidebar/>
   <Routes>
     <Route path='/Notescontext' element={
     <UserContext>
     <Notescontext />
     </UserContext>
     }/>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
