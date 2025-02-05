const express = require('express');
const multer = require('multer');
const router = express.Router();
const contactController = require('../controllers/contactController');
const upload=require('../config/multer-config');
//const upload = multer({ dest: 'uploads/' });  // Image uploads ko handle karne ke liye multer middleware ka setup


 // Serve static files from the uploads directory

 

// Route to display the form for adding a new contact
router.get('/addContact', (req, res) => {
   res.render('addContact', { title: 'Add Contact' }); // addContact.ejs render karta hai jo form display karta hai
});
 
// Route for the update successful page
//router.get('/editContact/', (req, res) => {
   //res.render('editContact', { title: 'edit Contact' }); // updateSuccess.ejs render karta hai jo update ke baad success message display karta hai
//});

// Route to render update-contact.ejs with contact details
router.get('/editContact/:id', contactController.renderUpdateForm); // Specific contact details ko fetch karta hai aur update form ko render karta hai


// Route to add a new contact
router.post('/createContact', upload.single('image'), contactController.createContact); // Naya contact create karta hai aur file upload handle karta hai

// Route to update a contact0(PUT method for API style)
router.post('/updateContact/:id', upload.single('image'), contactController.updateContact); // Contact update karta hai API style me

// Route to handle form submission
//router.post('/createContact', contactController.createContact); // Duplicate route, remove kar sakte hain

// Route to list all contacts
router.get('/getAllContact', contactController.getAllContacts); // Sabhi contacts ko list karta hai aur index.ejs render karta hai

// Route to get a single contact by ID
router.get('/getContactById/:id', contactController.getContactById); // Specific contact ko ID se fetch karta hai


//Route to delete a contact
router.delete('/deleteContact/:id', contactController.deleteContact);


module.exports = router; // Router ko module ke roop me export karta h



