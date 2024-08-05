const ControllerCustomer = require("../controller/customer.controller");

const customer = (app) =>{
    app.get('/api/customers', ControllerCustomer.get_all_customer);
    app.get('/api/customers/:id', ControllerCustomer.get_customer);
    app.post('/api/customers', ControllerCustomer.create_customer);
    app.put('/api/customers/:id', ControllerCustomer.update_customer)
    app.delete('/api/customers/:id', ControllerCustomer.remove_customer)
}

module.exports = customer;