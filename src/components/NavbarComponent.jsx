import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import *as FaIcons from "react-icons/vsc";

const NavbarCompnent = (props) => {
  return (
    // navbar start
    <div className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#00A9F6" }}>
      <Link className="navbar-brand" href="#">
        <img src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="row mx-auto">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 text-center" style={{ fontSize: "24px", fontFamily: "poppins, sans-serif", color: "blackd" }} type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
        <div className="container-avatar  d-flex  align-items-center">
          <p className="name mb-0 mr-2" style={{ fontSize: "36px", fontFamily: "poppins, sans-serif", color: "white" }}>TioHalu</p>
          <Link className="navbar-avatar">
            <div className="avatar">
              <FaIcons.VscAccount size="60px" />
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default NavbarCompnent
