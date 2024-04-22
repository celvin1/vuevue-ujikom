const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/v1/Login", authController.login);

module.exports = router;