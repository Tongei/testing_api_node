const db = require("../utill/db")

const get_all_customer = (req, res) => {
    var sql = "SELECT * FROM tbl_customer"
    db.query(sql, (error, rows) => {
        if(!error) {
            res.json({
                customer_list: rows
            })
        }else{
            res.json({
                error : true,
                error : error
            })
        }
    })
}
const get_customer = (req, res) => {
    const {
        id
    } = req.params;
    var sql = "SELECT * FROM tbl_customer WHERE cus_id =?"
    var param = [id];
    db.query(sql, param, (error, rows) => {
        if(!error) {
            res.json({
                customer: rows
            })
        }else{
            res.json({
                error : true,
                error : error
            })
        }
    })
}

const create_customer = (req, res) => {
    const {
        first_name, last_name, dob, address, emp_id	
    } = req.body;
    
    var sql = "INSERT INTO tbl_customer (first_name, last_name, dob, address, emp_id) VALUES (?,?,?,?,?)";
    var param = [first_name, last_name, dob, address, emp_id];

    db.query(sql, param, (error, rows) =>{
        if(!error){
            res.json({
                customer_data : rows
            })
        }else{
            res.json({
                error: true,
                error : error
            })
        }
    })
}

const remove_customer = (req, res) =>{
    const {
        id
    } = req.params;
    
    var sql = "DELETE FROM tbl_customer WHERE cus_id =?"
    var param = [id];

    db.query(sql, param, (error, rows) =>{
        if(!error){
            res.json({
                success: true,
                message: rows
            })
        }else{
            res.json({
                error: true,
                error : error
            })
        }
    })

}

const update_customer = (req, res) => {
    const{
        id
    } = req.params;
    const {
        first_name, last_name, dob, address, emp_id    
    } = req.body;

    var sql = "UPDATE tbl_customer SET first_name =?, last_name =?, dob =?, address =?, emp_id =? WHERE cus_id =?"
    var param = [first_name, last_name, dob, address, emp_id, id];

    db.query(sql, param, (error, rows) => {
        if(!error){
            res.json({
                success: true,
                message: rows
            })
        }else{
            res.json({
                error: true,
                error : error
            })
        }
    })
}


module.exports = {
    get_all_customer,
    get_customer,
    create_customer,
    remove_customer,
    update_customer
}