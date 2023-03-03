const User = require('../contorllers/users.contorllers');
const router = require('express').Router();


router.get("/users/read",User.readUsers);
router.post("/users/create",User.createUsers);
router.post("/users/update",User.updateUsers);
router.get("/users/read1",User.readUsers1);
router.post("/users/login",User.userLogin);
router.post("/users/checktoken",User.checkToken);



module.exports=router;