const AppError = require("../../utils/AppError");
const { createTryAndCatch } = require("../../utils/catchError");
const NewsUserModel = require("./userNews.model");

// addNews
exports.addNewsUser = createTryAndCatch(async (req, res, next) => {
  req.body.Image = req.file?.filename;
  req.body.userId = req.id;
  const News = new NewsUserModel(req.body);
  await News.save();
  res.status(200).json({ message: "success" });
});
// getNews
exports.getNewsUser = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.find({ userId: req.id }).populate(
    "userId",
    "firstName lastName profile_pic"
  );
  if (news.length == 0)
    return next(new AppError("لا يوجد اخبار تمت اضافتها حتي الان", 201));
  res.status(200).json({ message: "success", news });
});
// get spicily news
exports.getNewsSpicilyUser = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.findById(req.body._id);
  if (!news) return next(new AppError(" لم تضيف اخبار حتي الان", 201));
  res.status(200).json({ message: "success", news });
});

// delete News
exports.deleteNewsUser = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.findByIdAndDelete({ _id: req.body._id });
  if (!news) return next(new AppError("not found news until now", 201));
  res.status(200).json({ message: "success", news });
});
// updateNews
exports.updateNewsUser = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  if (!news) return next(new AppError("not found news", 201));
  res.status(200).json({ message: "success", news });
});
