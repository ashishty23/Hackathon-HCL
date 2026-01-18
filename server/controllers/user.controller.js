const User = require("../models/user.model");


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, address } = req.body;

  
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      {
        $set: {
          ...(name && { name }),
          ...(phone && { phone }),
          ...(address && { address })
        }
      },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    // Duplicate phone error handling
    if (error.code === 11000) {
      return res.status(400).json({ message: "Phone number already in use" });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Account deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
