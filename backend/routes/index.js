const express = require("express");

const userController = require("../controllers/userController");

const { validateUserCreation } = require("../middleware/validator");

const router = express.Router();

router.post("/user", validateUserCreation, userController.create);
router.get("/user/:id", userController.get);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
