const express = require('express');
const app = express();
app.use(express.json());
const employee = require('./route/employee.route');
const customer = require('./route/customer.route');

employee(app);
customer(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});