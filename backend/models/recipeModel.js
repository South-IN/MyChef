const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const recipeSchema = new Schema(
  {
    idMeal: {
      type: String,
      required: true,
    },
    strMeal: {
      type: String,
      required: true,
    },
    strMealThumb: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
