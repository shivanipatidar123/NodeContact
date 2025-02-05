const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override'); // Import method-override

const sequelize = require('./config/database');
const contactsRoute = require('./routes/contactsRoute');
const path=require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT ||5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride('_method'));

// EJS ko view engine ke roop me set karna
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// Static files serve karne ke liye (CSS, images, etc.)
app.use(express.static(path.join(__dirname,'public')));

// Serve the uploads directory as static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the contact routes
app.use('/api', contactsRoute);

// Sync the database
sequelize.sync({force:true})
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((error) => {
        console.error('Unable to synchronize the database:', error);
    });

// Start the server
//const PORT = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
