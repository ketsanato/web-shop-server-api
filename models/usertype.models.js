
const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
    user_type_name:String,
    created_date:{type:Date,
    default:Date.now()},
    updated_date:{type:Date,
        default:Date.now()}
});
 
module.exports = mongoose.model('user_types',userTypeSchema)