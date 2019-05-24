//Customer-relationship management
const mongoose = require('mongoose');
const ContactSchema = require('../models/crmModel'); //import and export part of ES6, how do I make it available for express and node?? 

const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);
    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

const getContacts = (req,res) =>{
    Contact.find({}, (err,contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

const getContactWithID = (req,res) =>{
    Contact.findById(req.params.contactId, (err, contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

const updateContact = (req,res) =>{
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, (err, contact)  =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

// module.exports = addNewContact; //if i try to combine it, the functions will be mixed up
// module.exports = getContacts;
module.exports = {
    addNewContact,
    getContacts,
    getContactWithID
};