const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    // العنوان الرئيسي
    addressHeadline: {
      type: String,
      required: true,
    },
    // مقال الخبر
    ExplanationOfTheNews: {
      type: String,
      require: true,
    },
    Image: {
      type: String,
    },
    newsType: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
schema.post("init", (doc) => {
    doc.Image = `http://localhost:3000/news/` + doc.Image;
  });
module.exports = model('News' ,schema )
