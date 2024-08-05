const ControllerEmployee = require("../controller/employee.controller");
const employee = (app)=>{
    app.get('/api/employee', ControllerEmployee.get_all_emps);
    app.get('/api/employee/:id', ControllerEmployee.get_emp_by_id);
    app.put("/api/employee/:id", ControllerEmployee.update_emp);
    app.post("/api/employee", ControllerEmployee.create_emp);
    app.delete("/api/employee/:id", ControllerEmployee.remove_emp);
}

module.exports = employee;