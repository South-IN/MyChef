import React, { useEffect, useState } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import RecipeCard from "./RecipeCard";

const Favourites = () => {
  const { recipes, dispatch } = useRecipesContext();
  const { user } = useAuthContext();
  const [isFav, setIsFav] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        "https://mychef-backend.onrender.com/api/recipes",
        {
          headers: {
            method: "GET",
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_RECIPES", payload: json });
      }
    };
    if (user) {
      fetchRecipes();
    }
  }, [dispatch, user]);
  return (
    <section id="favourites" className="favourites">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Favourite Recipes</h2>
          <div className="d-flex justify-content-center row popular-container gap-4 ">
            {recipes &&
              recipes.map((recipe) => (
                <RecipeCard
                  recipe={recipe}
                  key={recipe._id}
                  isFav={isFav}
                  setIsFav={setIsFav}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
