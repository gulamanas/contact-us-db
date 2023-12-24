const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Create Contact
//@route POST /api/contacts
//@acess public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message, checkBoxes } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    message,
    checkBoxes,
  });

  res.status(201).json(contact);
});

module.exports = { createContact };
