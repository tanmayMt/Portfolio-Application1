const Contact = require("../models/contactModel");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

const sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save data to MongoDB
    const newContact = await Contact.create({ name, email, phone, message });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_USER_MY,
    //   subject: `New Contact Request from ${name} via Portfolio1 Application`,
    //   html: `
    //     <h3>Contact Details</h3>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // };
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER_MY,
  subject: `🎉 New Contact Request from ${name} via Portfolio1 Application!`,
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
      <h2 style="color: #4CAF50; text-align: center;">🚀 New Contact Submission</h2>
      <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-size: 18px;"><strong style="color: #333;">Name:</strong> <span style="color: #007BFF;">${name}</span></p>
        <p style="font-size: 18px;"><strong style="color: #333;">Email:</strong> <span style="color: #007BFF;">${email}</span></p>
        <p style="font-size: 18px;"><strong style="color: #333;">Phone:</strong> <span style="color: #007BFF;">${phone}</span></p>
        <p style="font-size: 18px;"><strong style="color: #333;">Message:</strong> <span style="color: #333;">${message}</span></p>
      </div>
      <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #888;">
        💡 <em>Submitted via <a href="https://portfolio1-three-silk.vercel.app" style="color: #4CAF50; text-decoration: none; font-weight: bold;">Portfolio1 Application</a></em>
      </footer>
    </div>
  `,
};

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message" });
  }
};

module.exports = { sendEmail };
