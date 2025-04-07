require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/callback', async (req, res) => {
  const { token } = req.body;

  try {
    // Validate token with Auth0
    const userInfo = await axios.get("https://dev-ophg5trpgph7nm2k.us.auth0.com/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const email = userInfo.data.email;

    // Send email with token
    let transporter = nodemailer.createTransport({
      service: "gmail", // or SMTP settings
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Auth0 Demo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Auth Token",
      text: `Here is your token:\n\n${token}`
    });

    res.status(200).send("Email sent!");
  } 
  catch (error) {
    console.error(error);
    res.status(500).send("Failed to verify token or send email.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
