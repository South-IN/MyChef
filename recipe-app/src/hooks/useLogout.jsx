import { useAuthContext } from "./useAuthContext";
import { useRecipesContext } from "./useRecipesContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: disptachRecipe } = useRecipesContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    disptachRecipe({ type: "SET_RECIPES", payload: null });
  };
  return { logout };
};

export default useLogout;
