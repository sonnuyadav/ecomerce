var dbCategory = require('../models/categoryList')
exports.allcategory = (req, res) => {
    dbCategory.find({}, (err, data) => {
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