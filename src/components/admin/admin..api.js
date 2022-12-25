const { Upload } = require("../../utils/upload.Img");
const {
  addNews,
  getNews,
  getNewsSpicily,
  getNewsNewsType,
  deleteNews,
  updateNews,
  updateNewsUserFromAdmin,
  getUserNewsForAdmin,
} = require("./admin.service");

const app = require("express").Router();

app
  .route("/")
  .post(Upload("Image", "news"), addNews)
  .get(getNews)
  .delete(deleteNews)
  .put(updateNews)
  .patch(updateNewsUserFromAdmin)
app.post( '/getNewsSpicily', getNewsSpicily).post("/getNewsNewsType", getNewsNewsType);
app.post('/getUserNewsForAdmin' , getUserNewsForAdmin)
module.exports = app;
