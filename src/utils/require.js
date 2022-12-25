exports.allReq = (app) => {
 
  app.use("/News", require("../components/admin/admin..api"));
  app.use("/user", require("../components/user/user.Api"));
  app.use("/userNews", require("../components/UserNews/userNews..api"));


 
};

