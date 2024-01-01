const express = require('express');
const {
  checkout,
  paymentVerification,
} = require('../controller/paymentController.js');

const router = express.Router();

router.route('/checkout').post(checkout);

router.route('/paymentverifaction').post(paymentVerification);

router.get('/getkey', (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

module.exports = router;
