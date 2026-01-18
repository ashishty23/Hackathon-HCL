const SibApiV3Sdk = require("sib-api-v3-sdk");


const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendOtpMail = async (email, otp) => {
  try {
    const response = await emailApi.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Retail Portal",
      },
      to: [{ email }],
      subject: "Your OTP Verification Code",
      htmlContent: `<h2>Your OTP is ${otp}</h2><p>Valid for 5 minutes</p>`,
    });

    console.log("OTP MAIL RESPONSE:", response);

    return response;
  } catch (error) {
    console.error("OTP MAIL ERROR:", error.message);
    throw error;
  }
};

const sendOrderMail = async ({ to, subject, html }) => {
  try {
    const response = await emailApi.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Pizza Store 🍕",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    });

    return response;
  } catch (error) {
    console.error("ORDER MAIL ERROR:", error.message);
    throw error;
  }
};

module.exports = {
  sendOtpMail,
  sendOrderMail,
};




