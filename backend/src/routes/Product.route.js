const express = require("express");
const { getAllProducts, addProducts, deleteProduct, updateProduct } = require("../controllers/Product");
const router = express.Router();

router.post("/",addProducts)
router.get("/", getAllProducts);
router.delete("/:id",deleteProduct)
router.patch("/:id",updateProduct)

module.exports = router;
