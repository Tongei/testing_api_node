const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://127.0.0.1:5500' }));

const employee = require('./route/employee.route');
const customer = require('./route/customer.route');

employee(app);
customer(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});