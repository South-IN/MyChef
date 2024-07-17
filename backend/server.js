require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");
const cors = require("cors");
const app = express();

port = process.env.PORT || 4000;

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
    app.listen(port, () => {
      console.log("connected to database and listening to:", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
