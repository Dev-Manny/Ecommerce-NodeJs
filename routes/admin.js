const router = require("express").Router();
const {
  postLogin,
  getIsLogin,
  getProducts,
  getProduct,
  getOrder,
  getOrders,
} = require("../controllers/admin");
const checkAuth = require("../middlewares/checkAuth");

router.post("/auth/login", postLogin);
router.get("/auth/is-login", checkAuth(), getIsLogin);
router.get("/products", checkAuth(), getProducts);
router.get("/products/:id", checkAuth(), getProduct);
router.get("/orders", checkAuth(), getOrders);
router.get("/orders/:id", checkAuth(), getOrder);

module.exports = router;
