const Recipe = require("../models/recipeModel");
const mongoose = require("mongoose");

const getRecipes = async (req, res) => {
  const user_id = req.user._id;
  const recipes = await Recipe.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(recipes);
};

const createRecipe = async (req, res) => {
  const { idMeal, strMealThumb, strMeal } = req.body;
  const user_id = req.user._id;
  const exists = await Recipe.findOne({ idMeal: idMeal });

  if (exists) {
    if (exists.user_id == user_id) {
      return res.status(400).json({ error: "Recipe already added" });
    }
  }
  try {
    const user_id = req.user._id;
    const recipe = await Recipe.create({
      idMeal,
      strMeal,
      strMealThumb,
      user_id,
    });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Recipe" });
  }
  const recipe = await Recipe.findOneAndDelete({ _id: id });

  if (!recipe) {
    return res.status(400).json({ error: "No such Recipe" });
  }

  res.status(200).json(recipe);
};

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
};
