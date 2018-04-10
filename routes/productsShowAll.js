var dbTodo = require('../models/productsList')
exports.allproduct = (req, res) => {
    dbTodo.find({}, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Database error"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
}