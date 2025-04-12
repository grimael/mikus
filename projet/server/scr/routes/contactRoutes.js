const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { check } = require('express-validator');

router.post(
  '/',
  [
    check('name').notEmpty().withMessage('Le nom est requis'),
    check('email').isEmail().withMessage('Email invalide'),
    check('message').notEmpty().withMessage('Le message est requis'),
  ],
  sendContactEmail
);

module.exports = router;