const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const { cloudinaryConnect } = require("./config/cloudinary");

cloudinaryConnect();
app.use(express.json());
app.use(cookieParser());

const fileUpload = require("express-fileupload");
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp"
}));

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/otp", require("./routes/otp.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/products", require("./routes/product.routes"));
app.use("/api/v1/cart", require("./routes/cart.routes"));
app.use("/api/v1/orders", require("./routes/order.routes"));
app.use("/api/v1/feedback", require("./routes/feedback.routes"));

const cors = require("cors");



app.use(cors({
  origin: "*", // or your frontend URL
  credentials: true
}));

connectDB();

// const { checkApiKey } = require("./middlewares/apiKey.middlewares");
// app.use(checkApiKey);


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
  console.log(`Server running on porttt ${PORT}`);
});

module.exports = app;