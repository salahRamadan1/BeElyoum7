const { model, Schema, SchemaTypes, Types } = require("mongoose");

const schema = new Schema(
  {
    // العنوان الرئيسي
    addressHeadline: {
      type: String,
      required: true,
    },
    // شرح الخبر
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
    userId: { type: Types.ObjectId, ref: "User" },

    ConfirmTheNews: {
      type: SchemaTypes.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
schema.post("init", (doc) => {
  doc.Image = `http://localhost:3000/userNews/` + doc.Image;
});
module.exports = model("userNews", schema);
