const app = require("express").Router();
const { Upload } = require("../../utils/upload.Img");
const { signUp, signIn, confirmEmail } = require("./user.service");

app
  .post("/signUp", Upload("profile_pic", "profile"), signUp)
  .post("/signIn", signIn)
  .get("/verify/:token", confirmEmail);

module.exports = app;
