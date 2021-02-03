const router = require("express").Router();
const { getAllProduct } = require("../controllers/product");

router.get("/", getAllProduct);

module.exports = router;
