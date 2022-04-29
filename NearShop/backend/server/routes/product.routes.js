const router = require("express").Router();
const productController = require("../controllers/product.controller");



router.post("/add",productController.add) 
router.post("/addproduct", productController.addProduct);
router.get("/getProducts", productController.getProducts)
router.delete("/deleteProduct/:id",productController.deleteProduct)
router.put("/updateProduct/:id",productController.updateProduct)

/////////////////////
router.get("/:user_id", productController.getProductsByUserId)
module.exports = router;