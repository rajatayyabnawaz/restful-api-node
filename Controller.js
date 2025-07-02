const { Product } = require('./Userschema');
const { data } = require('./Data');

const insertAllProducts = async (req, res) => {
  try {
    const savedata = await Product.insertMany(data);
    console.log("Inserted products:", savedata.length);
    res.status(201).json({ message: 'Products saved successfully', savedata });
  } catch (err) {
    console.log("Error inserting products:", err);
    res.status(500).json({ message: 'Error saving products', error: err.message });
  }
};
const fetchAllProducts = async (req, res) => {
  try {
    const filters = req.query; // e.g., { category: 'Electronics' }
    const allProducts = await Product.find(filters); // ✅ uses filters if any
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};


module.exports = {
  insertAllProducts,
  fetchAllProducts
};
