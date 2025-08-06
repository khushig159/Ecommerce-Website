import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "./logout";
import {
  faCaretDown,
  faCaretUp,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../store/CartContest";
import logo from "../assets/vardhamanlogo.jpg";
import { useNavigate } from "react-router-dom";

export default function MainNavigation() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showhamburger, setshowhamburger] = useState(false);

  function handleScrollToSection(sectionId) {
    setActiveButton(sectionId);
    navigate("/"); // Navigate to home first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation is completed
  }
  const cartCtx = useContext(CartContext);
  const quantity = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function showHamburger() {
    setshowhamburger((prevState) => !prevState);
  }
  function handleHover() {
    setShowDetails(true);
  }
  function handleLeave() {
    setShowDetails(false);
  }
  function onFocusRemoveHamburger() {
    setshowhamburger(false);
  }

  return (
    <div className="mainNavigation">
      <header className="header">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ul className="list">
          <li>
            <NavLink
              onClick={() => setActiveButton(null)}
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="dropdown"
          >
            <button className="dropdown-button">
              Products
              <FontAwesomeIcon
                icon={showDetails ? faCaretUp : faCaretDown}
                className={`dropdown-icon ${showDetails ? "rotate" : ""}`}
              ></FontAwesomeIcon>
            </button>
            {showDetails && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    onClick={() => setActiveButton(null)}
                    to="/all-products"
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setActiveButton(null)} to="/laptop">
                    Laptops
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setActiveButton(null)} to="/storage">
                    Storage Devices
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setActiveButton(null)} to="/cctv">
                    CCTV
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setActiveButton(null)} to="/printer">
                    Printer
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="info">
            <li>
              <button
                onClick={() => handleScrollToSection("Aboutus")}
                className={activeButton === "Aboutus" ? "active" : ""}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("contact")}
                className={activeButton === "contact" ? "active" : ""}
              >
                Contact
              </button>
            </li>
          </li>
            <li>
              <NavLink
                onClick={() => setActiveButton(null)}
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Admin
              </NavLink>
            </li>
          <li>
            {Cookies.get("refreshtoken") ? (
              <Logout />
            ) : (
              <NavLink
                onClick={() => setActiveButton(null)}
                to="/signin"
                className="nav-signin"
              >
                Sign In
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              onClick={() => setActiveButton(null)}
              to="/signup"
              className="nav-signup"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart">
          <button className="cartButton">
            <FontAwesomeIcon
              style={{ marginRight: "10px" }}
              icon={faShoppingCart}
            />
            ({quantity})
          </button>
        </NavLink>
      </header>

      <div className="hamburger">
        <header className="header2">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="hamburgerpart2">
            <NavLink to="/cart">
              <button className="cartButton">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faShoppingCart}
                />
                ({quantity})
              </button>
            </NavLink>
            <div
              tabIndex={0}
              onBlur={onFocusRemoveHamburger}
              onClick={showHamburger}
              style={{ display: "inline-block" }}
            >
              <FontAwesomeIcon
                className={showhamburger ? "active" : ""}
                icon={faBars}
                size="lg"
                color="black"
              />
            </div>{" "}
            {showhamburger && (
              <ul className={`hamburgerList ${showhamburger ? "active" : ""}`}>
                <li>
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    onClick={() => setActiveButton(null)}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  className="dropdown"
                >
                  <button className="dropdown-button">
                    Products
                    <FontAwesomeIcon
                      icon={showDetails ? faCaretUp : faCaretDown}
                      className={`dropdown-icon ${showDetails ? "rotate" : ""}`}
                    ></FontAwesomeIcon>
                  </button>
                  {showDetails && (
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          onClick={() => setActiveButton(null)}
                          to="/all-products"
                        >
                          All Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setActiveButton(null)}
                          to="/laptop"
                        >
                          Laptops
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setActiveButton(null)}
                          to="/storage"
                        >
                          Storage Devices
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setActiveButton(null)}
                          to="/cctv"
                        >
                          CCTV
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setActiveButton(null)}
                          to="/printer"
                        >
                          Printer
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="info">
                  <li>
                    <button
                      onClick={() => handleScrollToSection("Aboutus")}
                      className={activeButton === "Aboutus" ? "active" : ""}
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection("contact")}
                      className={activeButton === "contact" ? "active" : ""}
                    >
                      Contact
                    </button>
                  </li>
                </li>
                {/* {isAdmin && ( */}
                  <li>
                    <NavLink
                      onClick={() => setActiveButton(null)}
                      to="/admin"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      Admin
                    </NavLink>
                  </li>
                {/* )} */}
                <li>
                  {Cookies.get("refreshtoken") ? (
                    <Logout />
                  ) : (
                    <NavLink
                      onClick={() => setActiveButton(null)}
                      to="/signin"
                      className="nav-signin2"
                    >
                      Sign In
                    </NavLink>
                  )}
                </li>
                
                <li>
                  <NavLink
                    onClick={() => setActiveButton(null)}
                    to="/signup"
                    className="nav-signup2"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}