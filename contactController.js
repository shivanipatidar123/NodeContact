const { Contact } = require('../models');
//Create a new contact
exports.createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        //const image = req.file ? req.file.path : null;
        const image = req.file ? `http://localhost:5000/${req.file.path}` : null;
        const contact = await Contact.create({ name, email, phone, image });
        res.status(201).redirect('/api/getAllContact'); // Redirect to contact list after creation
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.render('index', { contacts });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'phone', 'image', 'updatedAt', 'createdAt']
        });
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Render the update form with contact details
exports.renderUpdateForm = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }

       res.render('editContact', { contact }); // Render update-contact.ejs with contact data 'updateContact'
      
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle any errors
    }
};


exports.updateContact = async (req, res) => {
    try {
        console.log("hello");
        const { id } = req.params;
        const { name, email, phone } = req.body;
        //const image = req.file ?req.file.path : null;
        const image = req.file ? `http://localhost:5000/${req.file.path}` : null;


        // Find the contact by ID
        const contact = await Contact.findByPk(id);

        if (!contact) {
            console.log("hi");
            return res.status(404).json({ error: 'Contact not found' });
        }

        // Update the contact details
        contact.name = name ||contact.name;
        contact.email = email || contact.email;
        contact.phone = phone || contact.phone;
        if (image) {
            contact.image = image;
        }

        await contact.save();

        // Redirect to the index page after updating
        res.redirect('/api/getAllContact'); // Assuming '/' is the route for your index page
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
        

// Delete a contact

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (contact) {
            await contact.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};