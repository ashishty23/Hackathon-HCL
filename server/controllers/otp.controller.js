const Otp = require("../models/otp.model");
const generateOtp = require("../utils/generateOtp");
const { sendOtpMail } = require("../utils/sendMail");
const User = require("../models/user.model");
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
 const userExists = await User.findOne({ email });

//  console.log("Brevo API Key:",process.env.BREVO_API_KEY); 

 if(userExists){
    res.json({ message: "User already exists. Please login." });
    return;
 }
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await Otp.deleteMany({ email });

    await Otp.create({
      email,
      otp,
      expiresAt
    });


    await sendOtpMail(email, otp).catch(err =>
      console.error("OTP MAIL FAILED (NON-BLOCKING):", err.message)
    );
    console.log("OTP sent to email:", email ,"...otp:-",otp);

    res.json({ message: "OTP sent successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

