

import { useState } from 'react'
import Login from './Components/Login'
import BarcodeScanner from './pages/react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import Navbar from "./Components/Navbar";
import Shop from './Components/Shop';
import Logout from './Components/Logout';
import ContactUs from './Components/contact';
import '/styles/Navbar.css'
function App(){
    
    return(
        <Router>
           <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Home component */}
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<HomePage />} /> 
          <Route path="/Scan" element={<BarcodeScanner />} />
          <Route path='/logout' element={<Logout/>}/>
           <Route path='/contactus' element={<ContactUs/>}/>
          <Route path="/Shop" element={<Shop />} /> {/* NewPage component */}
        </Routes>
      </Router>
        
        
)
}
  
export default App