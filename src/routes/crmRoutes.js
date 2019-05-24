//Customer-relationship management
const crmController = require('../controllers/crmController'); 

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },  crmController.getContacts)

    .post(crmController.addNewContact);

    app.route('/contact/:contactId')//parameter
    .get(crmController.getContactWithID)

    .put((req,res)=>
    res.send('PUT request success'))

    .delete((req,res)=>
    res.send('DELETE request success'))
    
}

module.exports = routes;