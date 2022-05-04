const router = require('express').Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.selectAll);
router.post("/add",userController.add) 
router.post("/signup",userController.signup) 
router.post("/login",userController.login) 
router.get("/user", userController.logOut)
router.get("/getUser/:id",userController.getUserById)
router.put("/updateUser/:id",userController.updateUser)

module.exports = router;
