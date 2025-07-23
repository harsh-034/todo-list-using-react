import React from "react";
import PropTypes from 'prop-types';
export const Header = (props) => { //props ka matalab parent ka child ki tarafe change hoga 
  //const use karte hai to {} isme likhte hai Appjs me const nahi likhenge to bhi chal jaye ga
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {props.tital} 
            {/* ye props me oo sab likhega jo Appjs me tital par likhega  */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home 
                </a>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
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
tital: PropTypes.string  //iska matalb hai ki props jo hai oo string hai nahi to error dikhega inspert me eweb ke 
//ther are write propstype without import page ther are get error 
}
