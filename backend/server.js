require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/recipes", recipeRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("connected to database and listening to:", 4000);
    });
  })
  .catch((err) => {
    console.log(err);
  });
