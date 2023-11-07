import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBarr() {
  return (
    <Navbar bg="dark" expand="lg" id="navbar" sticky="top">
      <Container>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png"
            className="logo"
            alt="logo"
          />
        </NavLink>
        <NavLink to="/cart" className="cart-nav">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
            className="cart-icon"
            alt="cart"
          />
          <span>Cart</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="hide">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link active " : "link "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "link active " : "link "
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                isActive ? "link active " : "link "
              }
            >
              Register/Login
            </NavLink>
            <NavLink
              to="/584647"
              className={({ isActive }) =>
                isActive ? "link active " : "link "
              }
            >
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;
