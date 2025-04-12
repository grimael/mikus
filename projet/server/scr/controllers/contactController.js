const { validationResult } = require('express-validator');
const { sendEmail } = require('../utils/sendEmail');

exports.sendContactEmail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: `De : ${email}\nMessage : ${message}`,
    });
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi" });
  }
};