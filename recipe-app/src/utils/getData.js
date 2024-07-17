import axios from "axios";

export const searchMealsByIngredient = async (ingredient) => {
  try {
    const responseIngredient = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const responseName = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?s=${ingredient}`
    );
    const responseArea = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${ingredient}`
    );
    const responseCategory = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${ingredient}`
    );
    const dataIngredients = await responseIngredient.json();
    const dataName = await responseName.json();
    const dataArea = await responseArea.json();
    const dataCategory = await responseCategory.json();

    let result = [];
    if (dataIngredients.meals) {
      result = [...result, dataIngredients.meals];
    }
    if (dataArea.meals) {
      result = [...result, dataArea.meals];
    }
    if (dataCategory.meals) {
      result = [...result, dataCategory.meals];
    }
    if (dataName.meals) {
      result = [...result, dataName.meals];
    }

    return result[0];
  } catch (error) {
    // Show error in console
    console.error("Error fetching data:", error);
  }
};

export const getMealDetails = async (mealId) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error("Error fetching meal details:", error);
  }
};

export const generateRecipe = async (ingredients) => {
  const prompt = `generate a recipe with ingredients ${ingredients} and also give nutritional info for the recipe`;

  try {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
        import.meta.env.VITE_API_KEY
      }`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: prompt }] }],
      },
    });

    let data = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    data = data.split("\n");
    return data.join("<br>");
  } catch (error) {
    console.log(error);
  }
};
