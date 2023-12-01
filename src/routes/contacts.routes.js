const express = require('express');
const router = express.Router();
const validation = require('../middleware/validator.js');
const { getContactsHandler, getAddContactHandler, addContactHandler, getContactByNamaHandler, deleteContactHandler, getUpdateContactHandler, updateContactHandler } = require('../handlers/contacts.handlers.js');

router.get('/', getContactsHandler);
router.post('/add-contact', validation, addContactHandler);
router.get('/add-contact', getAddContactHandler);
router.get('/delete/:nama', deleteContactHandler);
router.get('/:nama', getContactByNamaHandler);
router.get('/update/:nama', getUpdateContactHandler);
router.post('/update-contact', validation, updateContactHandler);

module.exports = router;

