const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductDetails
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);



// create product
router
  .route("/admin/product/new")
  .post(createProduct);

// get product by id
router.route("/product/:id").get(getProductDetails);


module.exports = router;
