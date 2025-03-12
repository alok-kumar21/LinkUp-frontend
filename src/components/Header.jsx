import "./Header.css";
import { useState } from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <Link to="/">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/meetup-1-logo.png"
                  alt="meetup image"
                  className="img-fluid logo "
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="container" />
      </nav>
    </header>
  );
};

export default Header;
