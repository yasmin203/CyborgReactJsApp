import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { NavItem, NavItemDropDown } from "../../components/index"
// import { FaSearch } from 'react-icons/fa'
import './Header.css'

const Header = () => {

  return (
    <div className="navbar navbar-expand-md mt-2 navbar-dark text-light">
        <div className="container">
              <Link to="/" className="navbar-brand"><img className='logo-img' src={logo} alt="logo" /></Link> 
              {/* <!-- Search form --> */}
              <div className="input-group w-25 ms-5 beforMargin">
                <input className="form-control text-light py-2 rounded-pill" type="search" value="search" id="example-search-input"/>
                {/* <span className="input-group-append">
                    <button className="bg-transparent ms-n5 flip border-0 text-light mt-2 " type="button">
                        <FaSearch/> 
                    </button>
                </span> */}
            </div>
        
          {/* end earch  */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                    <NavItem><Link to="#features" className="nav-link">Browse</Link></NavItem>
                    <NavItemDropDown>
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="#learn" className="dropdown-item">Learn Bootstrap</Link></li>
                            <li><Link to="#next" className="dropdown-item">Where to go next</Link></li>
                        </ul>
                    </NavItemDropDown>
                    <NavItem><Link to="#faq" className="nav-link">Streams</Link></NavItem>
                    <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
                    <NavItem><Link to="./index-ar.html" className="nav-link">عربي</Link></NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header