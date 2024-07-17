import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Favourites from "../components/Favourites";
import Footer from "../components/Footer";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="main-container">
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>

      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Hero showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main id="main">
        <Search />
        <Favourites />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
