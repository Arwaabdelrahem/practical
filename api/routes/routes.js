module.exports = function (app) {
  var controllers = require("../controllers/controller");

  app
    .route("/posts") //link
    .post(controllers.createNewPost)
    .get(controllers.fetchAllPosts);

  app
    .route("/users")
    .post(controllers.createNewUser)
    .get(controllers.fetchAlluser);

  app
    .route("/Agencys")
    .post(controllers.createNewAgency)
    .get(controllers.fetchAlluser); // sawi get

  app.route("/transports").post(controllers.createNewTrans);
};
