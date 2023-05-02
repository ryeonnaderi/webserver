const router = require("express").Router();
const usercontroller = require("../../contollers/usercontroller");

router.route("/")
  .post(userController.create)
  .get(userController.findById);


router.route("/:email")
  .get(userController.findByEmail);

  router.route("/signin")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  module.exports = router