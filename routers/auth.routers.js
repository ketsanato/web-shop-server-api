const {register,login} = require('../contorllers/auth.contorllers');
const { checkUser,checkToken } = require('../middlewares/auth.middlewares');
const router = require('express').Router();


router.post("/authen", checkUser);
router.post("/token", checkToken);

router.post("/register",register);

router.post("/login",login);


module.exports=router;