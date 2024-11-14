import React,{useState,useEffect} from "react";
import '../../styles/Navbar.css'
import { useNavigate, Navigate } from "react-router-dom";
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
function Navbar(){
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);

        const toggleSidebar = () => {
            setIsOpen(!isOpen);
        };
      
        const closeSidebar = () => {
            setIsOpen(false);
        }
        const gotoShop=() =>{
            navigate("/Shop")
        }
        function handleLogout(){
            return(
                navigate("/logout")
            )
        }
        
        return (
          <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="/public/seld.png" alt="logo" />
                </div>
                <div className="hamburger" onClick={toggleSidebar}>
                    ☰
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <span className="close-btn"onClick={closeSidebar} >✕</span>
                    <li><a  onClick={gotoShop} >Shop</a></li>
                    <li><a  >Notifications</a></li>
                    <li><a  >Contact</a></li>
                    <li><a  >Suppliers</a></li>
                    <li><a onClick={handleLogout} >Logout</a></li>
                    <li><a className="profile-icon" >👤</a></li>
                </ul>
            </nav>
            </div>
    )
}
export default Navbar