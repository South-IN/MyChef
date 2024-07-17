import React, { useState, useEffect, useRef } from "react";
import { searchMealsByIngredient } from "../utils/getData";
import ChatBot from "./ChatBot";
import RecipeCard from "./RecipeCard";
import { Stack, Pagination } from "@mui/material";
function Search() {
  const searchElement = useRef();
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const getDefault = async () => {
      const data = await searchMealsByIngredient("");
      setRecipes(data);
    };
    getDefault();
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setRecipePerPage(6);
    }
  }, [window.innerWidth]);

  const handleSumbit = async (ev) => {
    ev.preventDefault();
    const ingredient = searchElement.current.value.toLowerCase().trim();
    if (ingredient) {
      await getRecipes(ingredient);
    }
    searchElement.current.value = "";
    await getRecipes(ingredient);
  };
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async (ingredient) => {
    const data = await searchMealsByIngredient(ingredient);
    await getSample();
    if (data) {
      setRecipes(data);
    } else {
      setRecipes([]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage, setRecipePerPage] = useState(12);
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexoFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = recipes.slice(indexoFirstRecipe, indexOfLastRecipe);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1000", behavior: "smooth" });
  };

  return (
    <section id="search" className="search">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Search Recipes</h2>
        </div>
        <form
          className="d-flex justify-content-center gap-3 input-group input-group-lg mb-5"
          onSubmit={handleSumbit}
        >
          <input
            type="text"
            id="search-field"
            className="rounded"
            ref={searchElement}
          />
          <button type="submit" className="btn btn-success rounded-circle">
            <i className="bx bx-search-alt"></i>
          </button>
          <ChatBot />
        </form>

        <div className="d-flex justify-content-center row popular-container gap-4">
          {currentRecipes.map((recipe) => (
            <RecipeCard
              recipe={recipe}
              key={recipe.idMeal}
              isFav={isFav}
              setIsFav={setIsFav}
            />
          ))}
        </div>
        <Stack mt="100px" alignItems="center">
          {recipes.length > recipePerPage && (
            <Pagination
              color="error"
              count={Math.ceil(recipes.length / recipePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </div>
    </section>
  );
}

export default Search;
