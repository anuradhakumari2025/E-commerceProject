const express = require("express");
const app = express();
const connectDB = require("./src/db/db.js");
const cors = require("cors")
const productRoutes = require("./src/routes/Product.route.js")
const userRoutes = require("./src/routes/User.route.js")

require("dotenv").config()
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // all routes start with /api/users


app.listen(3000, () => {
  console.log("app is listening");
});

module.exports = app;
