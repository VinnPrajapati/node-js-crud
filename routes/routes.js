const express = require("express");
const getData = require("../controllers/controller");
const { verifyToken } = require("../helpers/jwtAuth"); // Import verifyToken function

const router = express.Router(); // Use express.Router() to create a router instance

router.get("/login", getData.login);

router.get("/", verifyToken, getData.getAllData);
router.post("/postdata", getData.postData);
router.put("/putdata", getData.putData);
router.delete("/deletedata", getData.delData);

module.exports = router;
