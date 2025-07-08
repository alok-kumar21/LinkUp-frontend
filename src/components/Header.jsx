import "./Header.css";



import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <Link className="text-decoration-none" to="/">
                <h1 className="logo  text-danger mt-3">LinkUp</h1>
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
