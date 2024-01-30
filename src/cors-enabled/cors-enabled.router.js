const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

// const corsDelete = cors({methods: "DELETE"});

// Add cors into router
// router.use(cors());

router
  .route("/:corsId")
  // .all(cors()) // Add cors into single route
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  // .delete(cors(), controller.delete)
  // .options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  // .get(controller.list)  // Add cors into single method of single route
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
