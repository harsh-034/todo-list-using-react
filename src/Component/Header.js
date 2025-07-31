import React from "react";
import PropTypes from 'prop-types';
export const Header = (props) => { //props ka matalab parent ka child ki tarafe change hoga 
  //const use karte hai to {} isme likhte hai Appjs me const nahi likhenge to bhi chal jaye ga
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title} 
            {/* ye props me oo sab likhega jo Appjs me tital par likhega  */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  about
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};


Header.propTypes ={
title: PropTypes.string  //iska matalb hai ki props jo hai oo string hai nahi to error dikhega inspert me eweb ke 
//ther are write propstype without import page ther are get error 
}
