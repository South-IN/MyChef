import React, { useState } from "react";

const Navbar = ({ showNavbar, setShowNavbar }) => {
  const [activeTab, setActiveTab] = useState("hero");
  return (
    <header
      id="header"
      className={`d-flex header flex-column justify-content-center ${
        showNavbar && "header-show"
      }`}
    >
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li>
            <a
              href="#hero"
              onClick={() => setActiveTab("hero")}
              className={`nav-link scrollto ${
                activeTab === "hero" && "active"
              }`}
            >
              <i className="bx bx-home"></i>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              href="#search"
              onClick={() => setActiveTab("search")}
              className={`nav-link scrollto ${
                activeTab === "search" && "active"
              }`}
            >
              <i className="bx bx-search-alt"></i>

              <span>Search</span>
            </a>
          </li>
          <li>
            <a
              href="#favourites"
              onClick={() => setActiveTab("favourites")}
              className={`nav-link scrollto ${
                activeTab === "favourites" && "active"
              }`}
            >
              <i className="bx bx-heart-circle"></i>

              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={() => setActiveTab("footer")}
              className={`nav-link scrollto ${
                activeTab === "footer" && "active"
              }`}
            >
              <i className="bx bxs-info-circle"></i>

              <span>Footer</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
