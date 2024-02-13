require("dotenv").config()
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());


app.use("/api/user", userRouter);
const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
