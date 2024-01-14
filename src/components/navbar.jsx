import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import dropdown from '../assets/dropdown.svg'
import searchIcon from '../assets/searchIcon.svg'
import profileIcon from '../assets/profileIcon.svg'

function Navbar() {
  const Nav = styled.div`
  width: 100%;
  .bg-dark{
    background-color: transparent !important;
  }
  .navbar-toggler{
    border: none;
  }
  .centerIcon{
    gap: 20px;
      display: flex;
    a{
      text-decoration: none;
      color: white; 
      
    }
  }
  div.navIcon{
    div{
      div.cart{
        border: 1px solid white;
        padding: 5px 15px;
        border-radius: 20px;
        span{
          background-color: white;
          color: black;
          border-radius: 100%;
          padding: 0px 10px;
          
        }
      }
    }
  }
   
  }
  `
  return (
    <Nav>
      <nav className="navbar navbar-dark bg-dark fixed-top mt-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <div className="centerIcon">
            <a href="">SHOP</a>
            <a href="">SHOWROOM</a>
            <a href="">BRANDS</a>
          </div>
          <div className='navIcon d-flex gap-3'>
            <div className='d-flex gap-3 mt-1'>
              <div className="name d-flex gap-1">
                <p>JP</p>
                <img src={dropdown} alt="" className='mb-2' />
              </div>
              <div className="search">
                <img src={searchIcon} alt="" />
              </div>
              <div className="profile">
                <img src={profileIcon} alt="" />
              </div>
              <div className="cart d-flex gap-2">
                Cart <span>0</span>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </Nav>
  )
}

export default Navbar