const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Hello from API");
});
mongoose
  .connect(
    "mongodb+srv://ahmetaggoz1388:B71ikRobBMfSOyqL@backenddb.j0dqifk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connect success");
    app.listen(3000, () => {
      console.log("listening on 3000 port");
    });
  })
  .catch(() => {
    console.log("connect error");
  });
