import React, { useState } from "react";
import Modal from "./Modal";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRecipesContext } from "../hooks/useRecipesContext";

const RecipeCard = ({ recipe, isFav, setIsFav }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useRecipesContext();
  const { user } = useAuthContext();
  const handleClick = (event) => {
    event.preventDefault();

    setShowModal(true);
    setTimeout(() => {
      window.scrollBy({ top: event.screenY + 100, behavior: "smooth" });
    }, 500);
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    const response = await fetch(
      "https://mychef-backend.onrender.com/api/recipes/" + recipe._id,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_RECIPE", payload: json });
    }
  };
  return (
    <>
      <div
        className="card"
        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
        data-aos="fade-up"
      >
        <div className="card-content">
          <div className="card-title">{recipe.strMeal}</div>

          <a className="button" onClick={handleClick}>
            Learn More
          </a>
          {isFav && (
            <button className="btn btn-danger mx-2" onClick={handleDelete}>
              <i class="bx bx-trash"></i>
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} idMeal={recipe.idMeal} />
      )}
    </>
  );
};

export default RecipeCard;
