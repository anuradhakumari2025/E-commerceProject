const Product = require("../models/product.model");

const addProducts = async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      image,
    });
    res.send({ message: "Product added successfully", newProduct });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
}


const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page 1
    const limit = parseInt(req.query.limit) || 8; // default 8 items
    const skip = (page - 1) * limit;
    const products = await Product.find().skip(skip).limit(limit);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
}

const updateProduct =  async (req, res) => {
  const id = req.params.id;
  const { title, price, description, category, image } = req.body;
  const updateProduct = await Product.findByIdAndUpdate(
    id,
    { title, price, description, category, image },
    { new: true } // <-- returns the updated document
  );
  res.json({ message: "Product updated", updateProduct });
}
module.exports = { getAllProducts,addProducts,deleteProduct ,updateProduct};
