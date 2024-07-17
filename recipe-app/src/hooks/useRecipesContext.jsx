import { useContext } from "react";
import { RecipesContext } from "../context/RecipeContext";
export const useRecipesContext = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw Error("useRecipesContext must be used under RecipesContextProvider");
  }
  return context;
};
