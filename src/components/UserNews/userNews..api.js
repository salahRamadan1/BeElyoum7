const { Upload } = require("../../utils/upload.Img");
const {
  addNewsUser,
  getNewsUser,
  getNewsSpicilyUser,
  getNewsNewsTypeUser,
  deleteNewsUser,
  updateNewsUser,
} = require("./userNews.service");
const { auth } = require("../../utils/auth");
const app = require("express").Router();
app.post("/getNewsSpicilyUserNotToken", getNewsSpicilyUser);
app.use(auth);
app
  .route("/")
  .post(Upload("Image", "userNews"), addNewsUser)
  .get(getNewsUser)

  .put(updateNewsUser);
 
app
 
  .post("/deleteNews", deleteNewsUser)
  .post("/getNewsSpicilyUser", getNewsSpicilyUser);

module.exports = app;
