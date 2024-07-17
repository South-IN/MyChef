import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import Typewriter from "typewriter-effect";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import ChefAvatar from "../assets/avatar 4.png";
import AiAvatar from "../assets/avatar 5.png";
import Heart from "../assets/Avatar 6.png";

const Hero = ({ showNavbar, setShowNavbar }) => {
  const [navbarbtn, setNavbarbtn] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <div
        className="d-flex flex-row-reverse gap-2 justify-content-between"
        style={{
          marginTop: "2em",
          marginInline: "2em 2em",
        }}
      >
        {user && (
          <div className="hstack gap-3">
            <span className="btn bg-dark p-2 rounded-2 text-light">
              {user.email}
            </span>
            <div className="vr"></div>
            <button onClick={handleClick} className="btn btn-danger">
              Logout
              <i className="bx bx-log-out-circle"></i>
            </button>
          </div>
        )}

        {!user && (
          <div className="hstack gap-3">
            <Link className="btn btn-dark" to="/login">
              Login
            </Link>
            <div className="vr"></div>
            <Link className="btn btn-success" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
        <button
          className="btn rounded-circle text-white show-navbar-btn"
          onClick={() => {
            setShowNavbar(!showNavbar);
            setNavbarbtn(!navbarbtn);
          }}
        >
          {navbarbtn ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </button>
      </div>

      <section
        id="hero"
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ marginTop: "2em" }}
      >
        <div className="container" data-aos="zoom-out">
          <h1>Welcome to My Chef,</h1>

          <p>
            your go-to site for discovering delicious recipes! Whether you're a
            beginner or an experienced cook, explore a wide range of dishes to
            suit every taste. With easy navigation and detailed instructions, My
            Chef makes cooking enjoyable and simple. Start your culinary
            adventure today!
          </p>
        </div>

        <Splide
          options={{
            type: "loop",
            autoplay: true,
            width: "800px",
            gap: "1rem",
          }}
          hasTrack={false}
        >
          <SplideTrack>
            <SplideSlide className="bg-light rounded-3 info-slide">
              <div className="d-flex gap-3">
                <img
                  className="border rounded-3"
                  src={ChefAvatar}
                  width={"50%"}
                />

                <p>
                  Search Recipes: Easily find your favorite dishes by searching
                  for recipes by name, ingredient, cuisine area, or category.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="bg-light rounded-3 info-slide">
              <div className="d-flex gap-3">
                <img
                  className="border rounded-3"
                  src={AiAvatar}
                  width={"50%"}
                />

                <p>
                  Ask A.I. for Recipes: Get personalized recipe suggestions by
                  simply providing a list of comma-separated ingredients, and
                  let our A.I. do the rest.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="bg-light rounded-3 info-slide">
              <div className="d-flex gap-3">
                <img className="border rounded-3" src={Heart} width={"50%"} />

                <p>
                  Save to Favorites: Keep track of your top recipes by saving
                  them to your favorites for easy access anytime.
                </p>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </section>
    </>
  );
};

export default Hero;
