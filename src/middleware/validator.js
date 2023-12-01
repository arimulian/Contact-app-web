const { body } = require('express-validator');
const Contact = require('../model/Contact.js');
const validation = [body('nama', 'nama tidak boleh kosong').notEmpty().custom(async (value) => {
     const existingName = await Contact.findOne({ nama: value });
     if (existingName) {
          throw new Error('Nama Sudah Digunakan');
     }
     return true;
}), body('noHP', 'No handphone tidak valid').isMobilePhone('id-ID'), body('email', 'Email tidak valid').isEmail()];

module.exports = validation;