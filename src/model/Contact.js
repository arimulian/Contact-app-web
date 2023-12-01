const mongoose = require('mongoose');
const { Schema } = mongoose;
const contactSchema = new Schema({
     nama: {
          type: String,
          required: true

     },
     noHP: {
          required: true,
          type: String
     },
     email: String
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;