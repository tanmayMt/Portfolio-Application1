const nodemailer = require("nodemailer");

/**
 * POST /contact
 * Body: { name, email, phone, message }
 * Sends email via Nodemailer (no database).
 */
const sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "name, email, phone, and message are required",
    });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("EMAIL_USER / EMAIL_PASS are not set");
    return res.status(503).json({
      success: false,
      message: "Email service is not configured",
    });
  }

  // Gmail App Passwords are often copied with spaces — remove them
  const emailUser = String(process.env.EMAIL_USER).trim();
  const emailPass = String(process.env.EMAIL_PASS).replace(/\s+/g, "");
  const toAddress = (
    process.env.EMAIL_TO ||
    process.env.EMAIL_USER_MY ||
    emailUser
  ).trim();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Contact Request from ${name} via Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
          <h2 style="color: #4CAF50; text-align: center;">New Contact Submission</h2>
          <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 18px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="font-size: 18px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="font-size: 18px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p style="font-size: 18px;"><strong>Message:</strong> ${escapeHtml(message)}</p>
          </div>
          <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #888;">
            Submitted via Portfolio Application
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    const isAuth = error && (error.code === "EAUTH" || error.responseCode === 535);
    res.status(500).json({
      success: false,
      message: isAuth
        ? "Gmail login failed. Use a Google App Password (16 chars, no spaces) in EMAIL_PASS."
        : "Error sending message",
    });
  }
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

module.exports = { sendEmail };
