// const employee = require("../route/employee.route");
const db = require("../utill/db");

const get_all_emps = (req, res) =>{
    var sql = "SELECT * FROM tbl_employee";
    //       sql statements                // handlers
    db.query(sql, (error, rows) =>{
        if(!error){
            res.json({
                employee_list : rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
    // Your code here to fetch an employee record
}

const get_emp_by_id = (req, res) =>{
    	const {id} = req.params
        sql = "SELECT * FROM tbl_employee WHERE emp_id = ?";
        param = [id];
        db.query(sql, param, (error, rows) =>{
            if(!error){
                res.json({
                    employee_data : rows
                })
            }else{
                res.json({
                    error: true,
                    message: error
                })
            }
        })
}
const create_emp = (req, res) =>{
    // Your code here to create an employee record
    const {
        first_name,
        last_name,
        dob,
        address,
        role,
        salary,
        email,
        phone_number
    } = req.body;
    var sql = "INSERT INTO tbl_employee (first_name, last_name, dob, address, role,salary, email, phone_number) VALUES (?,?,?,?,?,?,?,?)";
    param = [first_name,last_name,dob,address,role,salary, email, phone_number];
    db.query(sql, param, (error, rows) =>{
        if(!error){
            res.json({
                success: true,
                message: 'Employee added successfully',
                customer_data : rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}
const remove_emp = (req, res) =>{
    // Your code here to remove an employee record
    const {id} = req.params;
    var sql = "DELETE FROM tbl_employee WHERE emp_id = ?";
    var param = [id];

    db.query(sql, param, (error, rows) =>{
        if(!error){
            res.json({
                success: true,
                // message: rows.affectedRows != 0 ? "deleted" : "employee not found",
                customer_data : rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
    // Your code here to fetch an employee record
}

const update_emp = (req, res) =>{
    // Your code here to update an employee record
    const {
        id
    } = req.params;
    const{
        first_name,
        last_name,
        dob,
        address,
        role,
        salary,
        email,
        phone_number
    } = req.body;
    var sql = "UPDATE tbl_employee SET first_name=?, last_name=?, dob=?, address=?, role=?, salary=?, email=?, phone_number=? WHERE emp_id=?";
    var param = [
        first_name,
        last_name,
        dob,
        address,
        role,
        salary,
        email,
        phone_number,
        id];
    db.query(sql, param, (error, rows) =>{
        if(!error){
            res.json({
                success: true,
                message: 'Employee updated successfully',
                employee_data : rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

module.exports = {
    create_emp,
    get_emp_by_id,
    remove_emp,
    update_emp,
    get_all_emps,
}