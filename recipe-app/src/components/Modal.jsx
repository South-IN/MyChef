import React, { useEffect, useState } from "react";
import { getMealDetails } from "../utils/getData";
import Carousel from "./Carousel";
import { useRecipesContext } from "../hooks/useRecipesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Snackbar, Alert } from "@mui/material";

const Modal = ({ setShowModal, idMeal }) => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { dispatch } = useRecipesContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await getMealDetails(idMeal);
      setRecipeDetails(data);
    };
    getRecipeDetails();
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You Must be logged in");
      return;
    }
    setOpen(true);

    const [idMeal, strMeal, strMealThumb] = [
      recipeDetails.idMeal,
      recipeDetails.strMeal,
      recipeDetails.strMealThumb,
    ];
    const recipe = { idMeal, strMeal, strMealThumb };
    const response = await fetch(
      "https://mychef-backend.onrender.com/api/recipes/",
      {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log(json);
      dispatch({ type: "CREATE_RECIPE", payload: json });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    if (error) {
      setError(null);
    }
    setOpen(false);
  };

  return (
    <div className="border bg-light text-dark rounded-4" data-aos="fade-up">
      <div className="container px-2 px-lg-2 my-5">
        <div className="d-flex justify-content-end">
          <button
            className="rounded-circle p-2 btn btn-close btn-light"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
        <div className="modal-container d-flex flex-column row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-5">
            <Carousel
              image={recipeDetails.strMealThumb}
              video={recipeDetails.strYoutube}
            />
          </div>
          <div
            className="modal-content col-md-10 col-sm-12 py-3"
            style={{ borderBlock: "1px solid grey" }}
          >
            <h1 className="display-5 fw-bolder">{recipeDetails.strMeal}</h1>
            <div className="fs-5 mb-5">
              <span className="d-flex gap-1 justify-content-center">
                <button className="btn btn-sm btn-outline-dark rounded-pill">
                  {recipeDetails.strCategory}
                </button>
                <button className="btn btn-sm btn-outline-dark rounded-pill">
                  {recipeDetails.strArea}
                </button>
                <button
                  className="btn btn-outline-danger rounded-pill"
                  type="button"
                  onClick={handleClick}
                >
                  <i className="bx bx-heart-circle bx-tada"></i>
                </button>
              </span>
            </div>
            <p className="lead">{recipeDetails.strInstructions}</p>

            {!error && (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Recipe added to favourites!
                </Alert>
              </Snackbar>
            )}
            {error && (
              <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  {error}
                </Alert>
              </Snackbar>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
