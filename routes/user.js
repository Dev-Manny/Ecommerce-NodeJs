const router = require("express").Router();
const {
  postSignup,
  postLogin,
  getIsLogin,
  patchUser,
  getUser,
} = require("../controllers/user");
const checkAuth = require("../middlewares/checkAuth");

router.post("/auth/signup", postSignup);
router.post("/auth/login", postLogin);
router.get("/auth/is-login", checkAuth("user"), getIsLogin);
router.patch("/", checkAuth("user"), patchUser);
router.get("/", checkAuth("user"), getUser);

module.exports = router;
