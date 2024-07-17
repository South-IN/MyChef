const express = require("express");

const {
  getRecipes,
  createRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.use(requireAuth);

//Get all recipes
router.get("/", getRecipes);

//Add a new recipe
router.post("/", createRecipe);

//Delete a recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
