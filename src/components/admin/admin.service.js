const AppError = require("../../utils/AppError");
const { createTryAndCatch } = require("../../utils/catchError");
const NewsModel = require("./admin.model");
const NewsUserModel = require("../UserNews/userNews.model");
// addNews
exports.addNews = createTryAndCatch(async (req, res, next) => {
  req.body.Image = req.file?.filename;
  const News = new NewsModel(req.body);
  await News.save();
  res.status(200).json({ message: "success" });
});
// getNews
exports.getNews = createTryAndCatch(async (req, res, next) => {
  const news = await NewsModel.find({});
  if (news.length == 0)
    return next(new AppError("not found news until now", 201));
  res.status(200).json({ message: "success", news });
});
// get spicily news
exports.getNewsSpicily = createTryAndCatch(async (req, res, next) => {
  const news = await NewsModel.findById(req.body._id);
  if (!news) return next(new AppError("not found news until now", 201));
  res.status(200).json({ message: "success", news });
});
 
 
// get newsType
exports.getNewsNewsType = createTryAndCatch(async (req, res, next) => {
  const news = await NewsModel.find({ newsType: req.body.newsType });
  if (news.length == 0)
    return next(new AppError("not found news until now", 201));
  res.status(200).json({ message: "success", news });
});
// delete News
exports.deleteNews = createTryAndCatch(async (req, res, next) => {
  const news = await NewsModel.findOneAndDelete(req.body._id);
  if (!news) return next(new AppError("not found news until now", 201));
  res.status(200).json({ message: "success", news });
});
// updateNews
exports.updateNews = createTryAndCatch(async (req, res, next) => {
  const news = await NewsModel.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  if (!news) return next(new AppError("not found news", 201));
  res.status(200).json({ message: "success", news });
});
/**********   news users***************/
exports.getUserNewsForAdmin = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.find({
    ConfirmTheNews: req.body.ConfirmTheNews,
  }).populate("userId", "firstName lastName profile_pic");
  if (news.length ==0) return next(new AppError("لا يوجد اخبار حتي الان ", 201));
  res.status(200).json({ message: "success", news });
});

// updateNewsUser
exports.updateNewsUserFromAdmin = createTryAndCatch(async (req, res, next) => {
  const news = await NewsUserModel.findByIdAndUpdate(
    req.body._id,
    { ConfirmTheNews:req.body.ConfirmTheNews },
    {
      new: true,
    }
  );
  if (!news) return next(new AppError("not found news", 201));
  res.status(200).json({ message: "success", news });
});
