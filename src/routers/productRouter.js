import checkAuthentication from "../middlewares/checkAuth";
import checkRole from "../middlewares/checkRole";

import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post(
  "/",
  [checkAuthentication, checkRole],
  controller.createProductController
);
router.get("/", controller.getAllProductController);
router.get("/:id", controller.getOneProductController);
router.put(
  "/:id",
  [checkAuthentication, checkRole],
  controller.updateProductController
);
router.delete(
  "/:id",
  [checkAuthentication, checkRole],
  controller.deleteProductController
);

module.exports = router;
