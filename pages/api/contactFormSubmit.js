import nodemailer from "nodemailer";

export default (req, res) => {
  const { fullName, email, organisationName, enterpriseType, adLocation } =
    req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,      
    },
  });

  try {
    const emailRes = transporter.sendMail({
      from: email,
      to: process.env.MAIL_RECEIVER,
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a new contact submission</p><br>
            <p><strong>Name:</strong>${fullName}</p><br>
            <p><strong>Name of Organisation:</strong>${organisationName}</p><br>
            <p><strong>Type of Enterprise:</strong>${enterpriseType}</p><br>
            <p><strong>Wants to advertise:</strong>${adLocation}</p><br>`,
    });
    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(req.body);
};