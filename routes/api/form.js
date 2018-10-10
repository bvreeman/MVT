const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/")
  .get(formController.findAll)
  .post(formController.create);

router
  .route("/:id")
  .get(formController.findById)
  .put(formController.update)
  .delete(formController.remove);

module.exports = router;