const Product = require("../models/product.model");

exports.getMenu = async (req, res) => {
  try {
    const products = await Product.find({ isAvailable: true });

    res.json({
      message: "Menu fetched successfully",
      data: products
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu" });
  }
};

exports.getall = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      message: "Menu fetched successfully",
      data: products
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu" });
  }
};

// exports.addProduct = async (req, res) => {
//   try {
//     let { name, category, price, inventory } = req.body;

//     if (category) {
//       category = category.trim().toLowerCase();
//     }

//     category = category.toUpperCase();

//     const product = await Product.create({
//       name,
//       category,
//       price,
//       inventory
//     });

//     res.status(201).json({
//       message: "Product added successfully",
//       data: product
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message || "Failed to add product" });
//   }
// };


const { uploadImageToCloudinary } = require("../utils/imageUploader");

/**
 * ADD PRODUCT
 */
exports.addProduct = async (req, res) => {
  try {
     const body = req.body || {};
    let { name, category, price, inventory } = body;

    console.log("REQ BODY ----> ", body);
    if (!name || !category || !price || !inventory) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "Product image is required" });
    }

    // Normalize category
    category = category.trim().toUpperCase();

    // Upload image to Cloudinary
    const image = req.files.image;
    const uploadResponse = await uploadImageToCloudinary(
      image,
      "products"
    );
    console.log("CLOUDINARY UPLOAD RESPONSE ----> ", uploadResponse);

    const product = await Product.create({
      name,
      category,
      price: Number(price),
      inventory: Number(inventory),
      imageUrl: uploadResponse.secure_url
    });

    res.status(201).json({
      message: "Product added successfully",
      data: product
    });
  } catch (error) {
    console.error("ADD PRODUCT ERROR 👉", error.message);
    res.status(500).json({
      message: error.message || "Failed to add product"
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const allowedUpdates = [
      "name",
      "category",
      "price",
      "inventory",
      "isAvailable"
    ];

    const updates = {};

    for (let key of allowedUpdates) {
      if (req.body[key] !== undefined) {
        if (key === "category") {
          updates[key] = req.body[key].trim().toUpperCase();
        } 
        else if (key === "price" || key === "inventory") {
          updates[key] = Number(req.body[key]);
        } 
        else {
          updates[key] = req.body[key];
        }
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update"
      });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      data: product
    });

  } catch (error) {
    console.error("UPDATE PRODUCT ERROR 👉", error.message);
    res.status(500).json({
      message: error.message || "Failed to update product"
    });
  }
};
