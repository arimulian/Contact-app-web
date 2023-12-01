const Contact = require('../model/Contact.js');
const { validationResult } = require('express-validator');


const getContactsHandler = async (req, res) => {
     const contact = await Contact.find();
     res.render('contact', { title: 'Contact Page', layout: 'layouts/main-layout.ejs', contacts: contact, message: req.flash('success') });
};

const getContactByNamaHandler = async (req, res) => {
     const contact = await Contact.findOne({ nama: req.params.nama }).exec();
     res.render('detail', { title: 'Detail Contact', layout: 'layouts/main-layout.ejs', contact });
};

const addContactHandler = async (req, res) => {
     const result = validationResult(req);
     if (!result.isEmpty()) {
          res.render('add-contact', { title: 'Add Contact', layout: 'layouts/main-layout.ejs', errors: result.array() });
     } else {
          const contact = await Contact.create(req.body);
          await contact.save();
          req.flash('success', 'Data berhasil ditambahakan!');
          res.redirect('/contact');
     }
};

const deleteContactHandler = async (req, res) => {
     await Contact.deleteOne({ nama: req.params.nama });
     req.flash('success', 'Data berhasil dihapus');
     res.redirect('/contact');
};
const getAddContactHandler = (req, res) => {
     res.render('add-contact', { title: 'Add Contact', layout: 'layouts/main-layout.ejs' });
};

const getUpdateContactHandler = async (req, res) => {
     const contact = await Contact.findOne({ nama: req.params.nama });
     res.render('update-contact', { title: 'Update Contact', layout: 'layouts/main-layout.ejs', contact });
};

const updateContactHandler = async (req, res) => {

};



module.exports = { getContactsHandler, getAddContactHandler, addContactHandler, getContactByNamaHandler, deleteContactHandler, getUpdateContactHandler, updateContactHandler };